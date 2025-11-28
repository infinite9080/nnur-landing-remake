"use client";

import { useEffect, useState, useRef, memo } from "react";
import { motion, HTMLMotionProps } from "motion/react";

const styles = {
  wrapper: {
    display: "block",
    whiteSpace: "pre-wrap" as "pre-wrap",
    width: "100%",
    position: "relative" as "relative",
    minHeight: "1em",
  },
  srOnly: {
    position: "absolute" as "absolute",
    width: "1px",
    height: "1px",
    padding: 0,
    margin: "-1px",
    overflow: "hidden",
    clip: "rect(0,0,0,0)",
    border: 0,
  },
  textContainer: {
    position: "absolute" as "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
  },
  hiddenMeasure: {
    visibility: "hidden" as "hidden",
    whiteSpace: "pre-wrap" as "pre-wrap",
    width: "100%",
    pointerEvents: "none" as "none",
  },
};

interface DecryptedTextProps extends HTMLMotionProps<"div"> {
  text: string;
  speed?: number;
  maxIterations?: number;
  sequential?: boolean;
  revealDirection?: "start" | "end" | "center";
  useOriginalCharsOnly?: boolean;
  characters?: string;
  className?: string;
  parentClassName?: string;
  encryptedClassName?: string;
  animateOn?: "view" | "hover" | "both";
}

const DecryptedText = memo(function DecryptedText({
  text,
  speed = 50,
  maxIterations = 10,
  sequential = false,
  revealDirection = "start",
  useOriginalCharsOnly = false,
  characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()_+",
  className = "",
  parentClassName = "",
  encryptedClassName = "",
  animateOn = "hover",
  ...props
}: DecryptedTextProps) {
  const [displayText, setDisplayText] = useState<string>(text);
  const [isHovering, setIsHovering] = useState<boolean>(false);
  const [isScrambling, setIsScrambling] = useState<boolean>(false);
  const [revealedIndices, setRevealedIndices] = useState<Set<number>>(
    new Set()
  );
  const [hasAnimated, setHasAnimated] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Get actual text length without extra characters
  const actualTextLength = text.length;

  useEffect(() => {
    let interval: NodeJS.Timeout;
    let currentIteration = 0;

    const getNextIndex = (revealedSet: Set<number>): number => {
      switch (revealDirection) {
        case "start":
          return revealedSet.size;
        case "end":
          return actualTextLength - 1 - revealedSet.size;
        case "center": {
          const middle = Math.floor(actualTextLength / 2);
          const offset = Math.floor(revealedSet.size / 2);
          const nextIndex =
            revealedSet.size % 2 === 0 ? middle + offset : middle - offset - 1;

          if (
            nextIndex >= 0 &&
            nextIndex < actualTextLength &&
            !revealedSet.has(nextIndex)
          ) {
            return nextIndex;
          }

          for (let i = 0; i < actualTextLength; i++) {
            if (!revealedSet.has(i)) return i;
          }
          return 0;
        }
        default:
          return revealedSet.size;
      }
    };

    const availableChars = useOriginalCharsOnly
      ? Array.from(new Set(text.split(""))).filter((char) => char !== " ")
      : characters.split("");

    const shuffleText = (
      originalText: string,
      currentRevealed: Set<number>
    ): string => {
      // Work with exact original text - no slicing needed
      const textChars = originalText.split("");

      if (useOriginalCharsOnly) {
        const positions = textChars.map((char, i) => ({
          char,
          isSpace: char === " ",
          index: i,
          isRevealed: currentRevealed.has(i),
        }));

        const nonSpaceChars = positions
          .filter((p) => !p.isSpace && !p.isRevealed)
          .map((p) => p.char);

        for (let i = nonSpaceChars.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [nonSpaceChars[i], nonSpaceChars[j]] = [
            nonSpaceChars[j],
            nonSpaceChars[i],
          ];
        }

        let charIndex = 0;
        const result = positions
          .map((p) => {
            if (p.isSpace) return " ";
            if (p.isRevealed) return textChars[p.index];
            return nonSpaceChars[charIndex++] || p.char;
          })
          .join("");

        // Ensure exact length match
        return result.substring(0, actualTextLength);
      } else {
        const result = textChars
          .map((char, i) => {
            if (char === " ") return " ";
            if (currentRevealed.has(i)) return textChars[i];
            return availableChars[
              Math.floor(Math.random() * availableChars.length)
            ];
          })
          .join("");

        // Ensure exact length match
        return result.substring(0, actualTextLength);
      }
    };

    if (isHovering) {
      setIsScrambling(true);
      interval = setInterval(() => {
        setRevealedIndices((prevRevealed) => {
          if (sequential) {
            if (prevRevealed.size < actualTextLength) {
              const nextIndex = getNextIndex(prevRevealed);
              if (nextIndex < actualTextLength) {
                const newRevealed = new Set(prevRevealed);
                newRevealed.add(nextIndex);
                const shuffledText = shuffleText(text, newRevealed);
                setDisplayText(shuffledText);
                return newRevealed;
              }
            }
            clearInterval(interval);
            setIsScrambling(false);
            setDisplayText(text);
            return prevRevealed;
          } else {
            const shuffledText = shuffleText(text, prevRevealed);
            setDisplayText(shuffledText);
            currentIteration++;
            if (currentIteration >= maxIterations) {
              clearInterval(interval);
              setIsScrambling(false);
              setDisplayText(text);
            }
            return prevRevealed;
          }
        });
      }, speed);
    } else {
      setDisplayText(text);
      setRevealedIndices(new Set());
      setIsScrambling(false);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [
    isHovering,
    text,
    speed,
    maxIterations,
    sequential,
    revealDirection,
    characters,
    useOriginalCharsOnly,
  ]);

  useEffect(() => {
    if (animateOn !== "view" && animateOn !== "both") return;

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !hasAnimated) {
          setIsHovering(true);
          setHasAnimated(true);
        }
      });
    };

    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );
    const currentRef = containerRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [animateOn, hasAnimated]);

  const hoverProps =
    animateOn === "hover" || animateOn === "both"
      ? {
          onMouseEnter: () => setIsHovering(true),
          onMouseLeave: () => setIsHovering(false),
        }
      : {};

  return (
    <motion.div
      className={parentClassName}
      ref={containerRef}
      style={styles.wrapper}
      {...hoverProps}
      {...props}
    >
      <span style={styles.srOnly}>{text}</span>

      {/* Hidden reference text to maintain stable dimensions */}
      <div
        style={styles.hiddenMeasure}
        className={className}
        aria-hidden="true"
      >
        {text}
      </div>

      <div aria-hidden="true" style={styles.textContainer}>
        <span className={className}>
          {text.split("").map((char, index) => {
            const isRevealed =
              revealedIndices.has(index) || !isScrambling || !isHovering;
            // Ensure we never go beyond the original text length
            const displayChar = isRevealed
              ? char
              : displayText[index] !== undefined
              ? displayText[index]
              : char;

            return (
              <span
                key={index}
                className={isRevealed ? "" : encryptedClassName}
                style={{ display: "inline" }}
              >
                {displayChar}
              </span>
            );
          })}
        </span>
      </div>
    </motion.div>
  );
});

DecryptedText.displayName = "DecryptedText";

export default DecryptedText;
