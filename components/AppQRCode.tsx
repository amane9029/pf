'use client';

import React from 'react';

interface AppQRCodeProps {
  size?: number;
}

export const AppQRCode: React.FC<AppQRCodeProps> = ({ size = 150 }) => {
  // Realistic 21x21 QR matrix pattern
  const matrix = [
    [1,1,1,1,1,1,1, 0, 1,0,1,1,0, 0, 1,1,1,1,1,1,1],
    [1,0,0,0,0,0,1, 0, 0,1,0,0,1, 0, 1,0,0,0,0,0,1],
    [1,0,1,1,1,0,1, 0, 1,0,1,1,0, 0, 1,0,1,1,1,0,1],
    [1,0,1,1,1,0,1, 0, 0,1,1,0,1, 0, 1,0,1,1,1,0,1],
    [1,0,1,1,1,0,1, 0, 1,1,0,1,0, 0, 1,0,1,1,1,0,1],
    [1,0,0,0,0,0,1, 0, 0,0,1,1,1, 0, 1,0,0,0,0,0,1],
    [1,1,1,1,1,1,1, 0, 1,0,1,0,1, 0, 1,1,1,1,1,1,1],
    [0,0,0,0,0,0,0, 0, 1,1,0,1,0, 0, 0,0,0,0,0,0,0],
    [1,0,1,1,0,1,1, 1, 0,0,1,0,1, 1, 1,0,1,1,0,1,0],
    [0,1,0,1,1,0,0, 1, 1,1,0,1,0, 0, 0,1,1,0,1,0,1],
    [1,1,1,0,0,1,1, 0, 1,0,0,0,1, 1, 1,0,0,1,1,1,0],
    [0,0,1,1,1,0,0, 1, 0,1,1,1,0, 0, 1,1,1,0,0,1,1],
    [1,0,0,1,0,1,1, 0, 1,0,1,0,1, 1, 0,0,1,0,1,0,0],
    [0,0,0,0,0,0,0, 0, 1,1,0,1,1, 0, 0,0,0,0,0,0,0],
    [1,1,1,1,1,1,1, 0, 0,1,1,0,0, 1, 1,1,1,1,1,1,1],
    [1,0,0,0,0,0,1, 0, 1,0,0,1,1, 0, 1,0,0,0,0,0,1],
    [1,0,1,1,1,0,1, 0, 0,1,1,0,1, 1, 1,0,1,1,1,0,1],
    [1,0,1,1,1,0,1, 0, 1,1,0,1,0, 0, 1,0,1,1,1,0,1],
    [1,0,1,1,1,0,1, 0, 0,0,1,1,1, 1, 1,0,1,1,1,0,1],
    [1,0,0,0,0,0,1, 0, 1,1,0,0,0, 0, 1,0,0,0,0,0,1],
    [1,1,1,1,1,1,1, 0, 0,1,1,1,1, 1, 1,1,1,1,1,1,1],
  ];

  const cols = matrix.length;
  const cellSize = size / cols;

  return (
    <div
      style={{
        display: 'inline-block',
        position: 'relative',
        padding: 10,
        background: '#ffffff',
        borderRadius: 12,
        boxShadow: '0 8px 24px rgba(0,51,153,0.12)',
        border: '1px solid var(--line)',
      }}
    >
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
        <rect width={size} height={size} fill="#ffffff" rx={4} />
        {matrix.map((row, r) =>
          row.map((cell, c) => {
            if (cell === 1) {
              return (
                <rect
                  key={`${r}-${c}`}
                  x={c * cellSize}
                  y={r * cellSize}
                  width={cellSize + 0.25}
                  height={cellSize + 0.25}
                  fill="#0B2B5B"
                  rx={0.8}
                />
              );
            }
            return null;
          })
        )}
      </svg>
      {/* Branded fish icon overlay in the exact center */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: size * 0.26,
          height: size * 0.26,
          background: '#0B2B5B',
          borderRadius: 8,
          border: '2.5px solid #ffffff',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 2px 10px rgba(0,0,0,0.2)',
        }}
      >
        <svg
          viewBox="0 0 24 24"
          width={size * 0.16}
          height={size * 0.16}
          fill="none"
          stroke="#ffffff"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M2 12C5.5 6.5 13 5.5 18 9.5L22 6.5V17.5L18 14.5C13 18.5 5.5 17.5 2 12Z" />
          <circle cx="6.5" cy="10.5" r="1" fill="#ffffff" />
        </svg>
      </div>
    </div>
  );
};
