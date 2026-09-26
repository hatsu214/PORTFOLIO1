import React from 'react';

export default function BackgroundOrbs() {
  return (
    <div aria-hidden="true" className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Top Indigo Glow */}
      <div className="glow-orb-indigo absolute -top-40 -left-40 w-[650px] h-[650px] rounded-full blur-3xl opacity-75"></div>
      {/* Top-Right Orange Glow */}
      <div className="glow-orb-orange absolute top-20 -right-40 w-[600px] h-[600px] rounded-full blur-3xl opacity-65"></div>
      {/* Middle Indigo Glow */}
      <div className="glow-orb-indigo absolute top-[40%] -left-60 w-[700px] h-[700px] rounded-full blur-3xl opacity-50"></div>
      {/* Bottom Orange Glow */}
      <div className="glow-orb-orange absolute bottom-20 right-0 w-[600px] h-[600px] rounded-full blur-3xl opacity-55"></div>
    </div>
  );
}
