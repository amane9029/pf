'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export const PrototypeBar: React.FC = () => {
  const pathname = usePathname();

  const isLanding = pathname === '/' || pathname.startsWith('/about');
  const isCustomer = pathname.startsWith('/customer');
  const isWorker = pathname.startsWith('/worker');
  const isAdmin = pathname.startsWith('/admin');

  return (
    <div id="pbar">
      <Link href="/" className="pb-logo" title="Go to main webpage">
        ◤ <b>PONDFISH</b>&nbsp;PROTOTYPE
      </Link>
      <nav>
        <Link href="/" className={isLanding ? 'on' : ''}>
          Landing
        </Link>
        <Link href="/customer/dashboard" className={isCustomer ? 'on' : ''}>
          Customer
        </Link>
        <Link href="/worker" className={isWorker ? 'on' : ''}>
          Worker
        </Link>
        <Link href="/admin/dashboard" className={isAdmin ? 'on' : ''}>
          Admin
        </Link>
      </nav>
      <span className="pb-note">v1.0 · SProjectX · demo data</span>
    </div>
  );
};
