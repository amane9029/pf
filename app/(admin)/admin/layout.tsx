'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Icon } from '@/lib/icons';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  const navItems = [
    { href: '/admin/dashboard', label: 'Dashboard', icon: 'fish' },
    { href: '/admin/inventory', label: 'Fish Inventory', icon: 'box' },
    { href: '/admin/delivery', label: 'Live Truck Tracking', icon: 'truck' },
    { href: '/admin/bookings', label: 'Bookings Log', icon: 'qr' },
    { href: '/admin/customers', label: 'Customers (CRM)', icon: 'users' },
    { href: '/admin/subscriptions', label: 'Subscriptions', icon: 'wallet' },
    { href: '/admin/notifications', label: 'Push Notifications', icon: 'bell' },
    { href: '/admin/audit-logs', label: 'Audit Logs', icon: 'doc' },
    { href: '/admin/settings', label: 'Store Settings', icon: 'shield' },
  ];

  return (
    <div className="alayout">
      {/* ADMIN SIDEBAR */}
      <aside className="anav">
        <Link href="/" className="an-brand" style={{ color: 'inherit', textDecoration: 'none' }} title="Go to main webpage">
          <span className="mark">
            <Icon name="fish" />
          </span>
          PondFish Admin
        </Link>

        <div className="an-lab">MANAGEMENT SUITE</div>

        {navItems.map((item) => {
          const active = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`an-it ${active ? 'on' : ''}`}
            >
              <Icon name={item.icon} />
              <span>{item.label}</span>
            </Link>
          );
        })}
      </aside>

      {/* MAIN ADMIN CONTENT */}
      <div className="amain">
        <header className="ahead">
          <h3>PondFish Operations Suite</h3>
          <div className="adate">Friday, 09 Aug 2026</div>
          <Link href="/admin/settings" className="achip" style={{ color: 'inherit', textDecoration: 'none' }}>
            <div className="avatar">AD</div>
            <span>Store Admin</span>
          </Link>
        </header>

        <div className="abody">{children}</div>
      </div>
    </div>
  );
}
