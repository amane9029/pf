'use client';

import React from 'react';
import { usePondFish } from '@/lib/context';
import { Icon } from '@/lib/icons';

export const TruckTrackerWidget: React.FC = () => {
  const { eta, published } = usePondFish();

  const pct = Math.max(10, Math.min(100, 100 - ((eta - 2) / 45) * 90));

  return (
    <div className="card h-truck">
      <div className="ht-top">
        <Icon name="truck" style={{ color: 'var(--teal)', width: 22, height: 22 }} />
        <b>Live Truck Delivery</b>
        <span className="eta">{eta > 0 ? `ETA ${eta} min` : 'Arrived'}</span>
      </div>

      <div className="route">
        <div className="route-line">
          <i style={{ width: `${pct}%` }} />
          <div className="route-truck" style={{ left: `${pct}%` }}>
            <Icon name="truck" style={{ width: 18, height: 18 }} />
          </div>
        </div>

        <div className="route-stops">
          <span>Warangal Farm</span>
          <span className="now">Kukatpally</span>
          <span>Warehouse</span>
        </div>
      </div>

      <div className="ht-loc">
        📍 <b>Current location:</b> Outer Ring Road Junction ·{' '}
        <span style={{ color: published ? 'var(--ok)' : 'var(--amber)' }}>
          {published ? 'Live updates broadcasted' : 'Paused by store'}
        </span>
      </div>
    </div>
  );
};
