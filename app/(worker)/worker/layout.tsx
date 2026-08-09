'use client';

import React from 'react';
import Link from 'next/link';
import { Icon } from '@/lib/icons';

export default function WorkerLayout({ children }: { children: React.ReactNode }) {
  return (
    <div id="pt-worker">
      {/* WORKER TOPBAR */}
      <header className="wtop">
        <div className="wtop-in">
          <Link href="/" className="wbrand" style={{ color: 'inherit', textDecoration: 'none' }} title="Go to main webpage">
            <span className="mark">
              <Icon name="fish" />
            </span>
            PondFish Worker Terminal
          </Link>
          <span className="wstore">STORE COUNTER · KUKATPALLY</span>

          <nav className="wtabs">
            <Link href="/worker" className="on">
              Pending Pickups
            </Link>
            <Link href="/" style={{ color: '#8FACA4', textDecoration: 'none', padding: '20px 14px 16px', fontSize: 13, fontWeight: 600 }}>
              Exit Terminal
            </Link>
          </nav>
        </div>
      </header>

      {/* BODY */}
      {children}
    </div>
  );
}
