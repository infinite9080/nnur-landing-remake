"use client";

import React from "react";
import { Linkedin, Mail, MapPin } from "lucide-react";

interface ModernProfileCardProps {
  avatarUrl: string;
  name: string;
  title: string;
  status?: string;
  linkedinUrl?: string;
  email?: string;
  location?: string;
  className?: string;
  onContactClick?: () => void;
}

const ModernProfileCard: React.FC<ModernProfileCardProps> = ({
  avatarUrl,
  name,
  title,
  status,
  linkedinUrl,
  email,
  location,
  className = "",
  onContactClick,
}) => {
  return (
    <div
      className={`group relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 hover:border-[#7030a1]/30 overflow-hidden max-w-sm mx-auto ${className}`}
    >
      {/* Large Profile Image */}
      <div className="relative h-64 overflow-hidden">
        <img
          src={avatarUrl}
          alt={`${name} avatar`}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = "/placeholder-avatar.png";
          }}
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>

        {/* Name Overlay */}
        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="text-xl font-bold text-white mb-1 drop-shadow-lg">
            {name}
          </h3>
          <p className="text-white/90 text-sm font-medium drop-shadow">
            {title}
          </p>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-6">
        {/* Location */}
        {location && (
          <div className="flex items-center gap-2 text-gray-500 mb-6">
            <MapPin className="w-4 h-4" />
            <span className="text-sm font-medium">{location}</span>
          </div>
        )}

        {/* Action Buttons */}
        <div className="space-y-3">
          {linkedinUrl && (
            <button
              onClick={() => window.open(linkedinUrl, "_blank")}
              className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-[#0077b5] hover:bg-[#005885] text-white rounded-xl font-semibold text-sm transition-all duration-300 hover:scale-[1.02] shadow-md hover:shadow-lg"
            >
              <Linkedin className="w-4 h-4" />
              <span>Connect on LinkedIn</span>
            </button>
          )}
        </div>
      </div>

      {/* Hover Effect Border */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#7030a1] via-[#9d4edd] to-[#7030a1] opacity-0 group-hover:opacity-20 blur-sm transition-opacity duration-300 pointer-events-none"></div>
    </div>
  );
};

export default ModernProfileCard;
