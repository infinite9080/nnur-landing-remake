"use client";

import React from "react";
import Link from "next/link";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import FlexibleBackgroundMeteors from "./components/FlexibleBackgroundMeteors";
import TrueFocus from "../components/TrueFocus";
import { Home, AlertTriangle } from "lucide-react";

export default function NotFound() {
  return (
    <div className="font-sans overflow-x-hidden min-h-screen flex flex-col">
      <Navbar />
      <FlexibleBackgroundMeteors>
        <div className="flex-grow flex items-center justify-center pt-24 lg:pt-32 min-h-[calc(100vh-80px)]">
          <div className="mx-auto px-4 sm:px-6 lg:px-8 text-center" style={{ maxWidth: "1500px" }}>
            <div className="mb-8 flex justify-center">
                <div className="bg-white/80 backdrop-blur-sm p-6 rounded-full shadow-lg border border-gray-200 animate-bounce">
                    <AlertTriangle className="w-16 h-16 text-[#7030a1]" />
                </div>
            </div>
            
            <div className="mb-6">
                 <TrueFocus
                    sentence="Page Not Found"
                    borderColor="purple"
                    blurAmount={0}
                  />
            </div>

            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-10 leading-relaxed">
              Oops! The page you are looking for doesn't exist or has been moved. 
              Let's get you back to safety.
            </p>

            <Link 
              href="/" 
              className="inline-flex items-center px-8 py-4 bg-[#7030a1] text-white font-bold rounded-xl hover:bg-[#5a2581] transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
            >
              <Home className="w-5 h-5 mr-2" />
              Back to Home
            </Link>
          </div>
        </div>
      </FlexibleBackgroundMeteors>
      <Footer />
    </div>
  );
}
