'use client';

import React from 'react';

export default function BackgroundVideo() {
  return (
    <video
      autoPlay
      loop
      muted
      playsInline
      className="fixed inset-0 w-full h-full object-cover z-0"
      style={{ pointerEvents: 'none' }}
    >
      <source src="/videos/background.mp4" type="video/mp4" />
    </video>
  );
} 