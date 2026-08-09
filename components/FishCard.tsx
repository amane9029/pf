'use client';

import React from 'react';
import { FishItem } from '@/lib/context';

interface FishCardProps {
  fish: FishItem;
  onClick?: () => void;
}

export const FishCard: React.FC<FishCardProps> = ({ fish, onClick }) => {
  const getBadge = () => {
    if (fish.status === 'out') return <span className="tag coral ftag">OUT OF STOCK</span>;
    if (fish.status === 'coming') return <span className="tag warn ftag">ARRIVING TODAY</span>;
    return <span className="tag ok ftag">● FRESH ARRIVAL</span>;
  };

  return (
    <div className="fcard" onClick={onClick}>
      <div className="fart-wrap">
        {getBadge()}
        <svg
          className="fart"
          viewBox="0 0 240 140"
          style={{
            background: `linear-gradient(135deg, ${fish.c1} 0%, ${fish.c2} 100%)`,
            borderRadius: 10,
          }}
        >
          <path
            d="M 40 70 C 70 30, 150 30, 190 70 C 150 110, 70 110, 40 70 Z"
            fill="#ffffff"
            fillOpacity="0.25"
          />
          <path d="M 190 70 L 225 45 L 225 95 Z" fill="#ffffff" fillOpacity="0.3" />
          <circle cx="70" cy="60" r="5" fill="#ffffff" />
        </svg>
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
