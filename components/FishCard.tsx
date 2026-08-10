'use client';

import React, { useState } from 'react';
import { FishItem } from '@/lib/context';

interface FishCardProps {
  fish: FishItem;
  onClick?: () => void;
}

export const FishCard: React.FC<FishCardProps> = ({ fish, onClick }) => {
  const [imgError, setImgError] = useState(false);

  const getBadge = () => {
    if (fish.status === 'out') return <span className="tag coral ftag">OUT OF STOCK</span>;
    if (fish.status === 'coming') return <span className="tag warn ftag">ARRIVING TODAY</span>;
    return <span className="tag ok ftag">● FRESH ARRIVAL</span>;
  };

  const hasImage = fish.image && !imgError;

  return (
    <div className="fcard" onClick={onClick}>
      <div className="fart-wrap">
        {getBadge()}
        {hasImage ? (
          <div className="fish-img-container">
            <img
              src={fish.image}
              alt={fish.name}
              className="fish-card-img"
              onError={() => setImgError(true)}
              loading="lazy"
            />
            <div className="fish-img-overlay" />
          </div>
        ) : (
          <svg
            className="fart"
            viewBox="0 0 240 140"
            style={{
              background: `linear-gradient(135deg, ${fish.c1} 0%, ${fish.c2} 100%)`,
              borderRadius: 12,
            }}
          >
            <defs>
              <linearGradient id={`grad-${fish.id}`} x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#ffffff" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#ffffff" stopOpacity="0.1" />
              </linearGradient>
            </defs>
            <path
              d="M 30 70 C 60 25, 160 25, 195 70 C 160 115, 60 115, 30 70 Z"
              fill={`url(#grad-${fish.id})`}
            />
            <path d="M 190 70 L 228 40 C 220 60, 220 80, 228 100 Z" fill="#ffffff" fillOpacity="0.35" />
            <path d="M 110 40 C 130 25, 150 25, 160 42 Z" fill="#ffffff" fillOpacity="0.3" />
            <path d="M 120 100 C 140 115, 155 115, 165 98 Z" fill="#ffffff" fillOpacity="0.25" />
            <path d="M 95 62 C 105 70, 105 78, 95 86" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" fill="none" opacity="0.5" />
            <circle cx="65" cy="58" r="5.5" fill="#ffffff" />
            <circle cx="67" cy="56.5" r="2" fill="#1E293B" />
          </svg>
        )}
      </div>

      <div className="fbody">
        <h4>{fish.name}</h4>
        <div className="fcat">{fish.cat} · {fish.farm}</div>
        <div className="frow">
          <span className="fprice">
            ₹{fish.price} <small>/ Kg</small>
          </span>
          <span className="mono" style={{ fontSize: 12, color: 'var(--ink2)' }}>
            {fish.stock > 0 ? `${fish.stock} Kg left` : 'Sold out'}
          </span>
        </div>
      </div>
    </div>
  );
};

