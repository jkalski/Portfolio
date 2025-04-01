import React from 'react';

export default function VideoBackground() {
  return (
    <div className="fixed inset-0 w-full h-full overflow-hidden -z-10">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full object-cover"
      >
        <source src="/videos/background.mp4" type="video/mp4" />
      </video>
    </div>
  );
} 