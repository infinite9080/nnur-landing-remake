"use client";

import React from "react";

const SimpleCCTV: React.FC = () => {
  return (
    <div className="w-full h-full rounded-2xl overflow-hidden relative bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
      {/* CCTV Camera SVG */}
      <svg
        width="80%"
        height="80%"
        viewBox="0 0 200 200"
        className="drop-shadow-xl"
      >
        <defs>
          <style>
            {`
              .cctv-breathe {
                animation: cctvBreathe 3s ease-in-out infinite;
                transform-origin: 100px 100px;
              }
              
              .cctv-led {
                animation: cctvLedBlink 2s ease-in-out infinite;
              }
              
              @keyframes cctvBreathe {
                0%, 100% { transform: scale(1); }
                50% { transform: scale(1.02); }
              }
              
              @keyframes cctvLedBlink {
                0%, 70% { opacity: 1; }
                85%, 100% { opacity: 0.3; }
              }
            `}
          </style>
        </defs>

        {/* Wall Mount */}
        <circle
          cx="100"
          cy="160"
          r="12"
          fill="#e5e7eb"
          stroke="#d1d5db"
          strokeWidth="2"
        />
        <rect x="97" y="148" width="6" height="12" fill="#d1d5db" rx="2" />

        {/* Camera Body Group */}
        <g className="cctv-breathe">
          {/* Main Camera Housing (White) */}
          <rect
            x="60"
            y="80"
            width="80"
            height="40"
            fill="#ffffff"
            stroke="#d1d5db"
            strokeWidth="2"
            rx="4"
          />
          <rect x="62" y="82" width="76" height="36" fill="#f9fafb" rx="3" />

          {/* Camera Lens Housing (Dark) */}
          <circle
            cx="130"
            cy="100"
            r="18"
            fill="#1f2937"
            stroke="#111827"
            strokeWidth="2"
          />
          <circle cx="130" cy="100" r="15" fill="#000000" />

          {/* Lens Glass Reflection */}
          <circle cx="126" cy="96" r="6" fill="#ffffff" opacity="0.2" />
          <circle cx="127" cy="97" r="3" fill="#ffffff" opacity="0.4" />

          {/* Status LED */}
          <circle cx="75" cy="90" r="3" fill="#ef4444" className="cctv-led" />

          {/* Camera Details */}
          <rect x="70" y="105" width="25" height="3" fill="#e5e7eb" rx="1" />
          <rect x="100" y="105" width="15" height="3" fill="#e5e7eb" rx="1" />

          {/* Mounting Screws */}
          <circle cx="70" cy="95" r="2" fill="#d1d5db" />
          <circle cx="120" cy="95" r="2" fill="#d1d5db" />
          <circle cx="70" cy="105" r="2" fill="#d1d5db" />
          <circle cx="120" cy="105" r="2" fill="#d1d5db" />
        </g>

        {/* Scanning Indicator */}
        <g opacity="0.8">
          <line
            x1="130"
            y1="100"
            x2="170"
            y2="60"
            stroke="#10b981"
            strokeWidth="2"
            strokeDasharray="4,2"
          />
          <circle cx="170" cy="60" r="2" fill="#10b981" />
          <circle
            cx="170"
            cy="60"
            r="6"
            fill="none"
            stroke="#10b981"
            strokeWidth="1"
            opacity="0.5"
          />
        </g>
      </svg>

      {/* Status Text */}
      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2">
        <div className="bg-black/70 text-white text-xs px-2 py-1 rounded">
          MONITORING
        </div>
      </div>
    </div>
  );
};

export default SimpleCCTV;
