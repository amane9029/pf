'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { usePondFish } from '@/lib/context';
import { Icon } from '@/lib/icons';

export default function CustomerLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const { user, notifs } = usePondFish();

  const unreadCount = notifs.filter((n) => n.unread).length;

  const navItems = [
    { href: '/customer/dashboard', label: 'Dashboard', icon: 'fish' },
    { href: '/customer/market', label: 'Fresh Catch', icon: 'box' },
    { href: '/customer/qr-ticket', label: 'My Bookings', icon: 'qr' },
    { href: '/customer/subscription', label: 'Subscription', icon: 'wallet' },
    { href: '/customer/notifications', label: 'Notifications', icon: 'bell', badge: unreadCount },
    { href: '/customer/settings', label: 'Settings & Profile', icon: 'user' },
  ];

  return (
    <div className="capp">
      {/* SIDEBAR */}
      <aside className="cnav">
        <Link href="/" className="cn-brand" style={{ color: 'inherit', textDecoration: 'none' }} title="Go to main webpage">
          <span className="mark">
            <Icon name="fish" />
          </span>
          PondFish
        </Link>

        <div className="cn-lab">Customer Portal</div>

        {navItems.map((item) => {
          const active = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`cn-it ${active ? 'on' : ''}`}
            >
              <Icon name={item.icon} />
              <span>{item.label}</span>
              {item.badge && item.badge > 0 ? (
                <span className="bdg">{item.badge}</span>
              ) : null}
            </Link>
          );
        })}

        <div className="cn-foot">
          Logged in as
          <br />
          <b>{user.name}</b>
        </div>
      </aside>

      {/* MAIN CONTENT AREA */}
      <div className="cmain">
        <header className="chead">
          <div>
            <div className="crumb">PONDFISH CUSTOMER PORTAL</div>
            <h3>Customer Workspace</h3>
          </div>

          <div className="right">
            <Link href="/customer/notifications" className="icon-btn" title="Notifications">
              <Icon name="bell" />
              {unreadCount > 0 && <span className="ndot" />}
            </Link>
            <Link href="/customer/settings" className="avatar" style={{ textDecoration: 'none' }} title="Profile Settings">
              SA
            </Link>
          </div>
        </header>

        <div className="cbody">{children}</div>
      </div>
    </div>
  );
}
