'use client';

import React from 'react';
import Link from 'next/link';
import { usePondFish } from '@/lib/context';
import { Icon } from '@/lib/icons';
import { TruckTrackerWidget } from '@/components/TruckTrackerWidget';
import { QRTicket } from '@/components/QRTicket';

export default function CustomerDashboard() {
  const { user, sub, fishCatalog, bookings, notifs } = usePondFish();

  const activeBooking = bookings.find((b) => b.status === 'Active');
  const remAllowance = Math.max(0, sub.allow - sub.used);

  return (
    <div>
      <div className="hgrid">
        <div className="card h-welcome">
          <h2 className="hw-hi">Good morning, {user.name.split(' ')[0]} 👋</h2>
          <div className="hw-sub">
            <span className="badge-m">🐟 {sub.type} Subscriber</span>
            <span>· {user.area}</span>
          </div>

          <div className="hstats">
            <div className="hs">
              <span>Weekly Allowance</span>
              <b>{remAllowance} Kg</b>
              <small>of {sub.allow} Kg remaining</small>
              <div className="meter">
                <i style={{ width: `${(sub.used / sub.allow) * 100}%` }} />
              </div>
            </div>

            <div className="hs">
              <span>Prepaid Balance</span>
              <b className="mono">₹{sub.credit.toLocaleString('en-IN')}</b>
              <small>Auto-deducted on booking</small>
            </div>

            <div className="hs">
              <span>Active Passes</span>
              <b>{activeBooking ? 1 : 0}</b>
              <small>{activeBooking ? 'Ready for pickup' : 'No active tickets'}</small>
            </div>
          </div>

          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
            <Link href="/customer/market" className="btn sm">
              <Icon name="fish" /> Reserve Fish Today
            </Link>
            <Link href="/customer/subscription" className="btn ghost sm">
              <Icon name="wallet" /> Manage Subscription
            </Link>
          </div>
        </div>

        <TruckTrackerWidget />
      </div>

      <div className="hgrid2">
        <div className="card h-fish">
          <header>
            <b>Available Fresh Catch Today</b>
            <Link href="/customer/market" className="btn linky">
              View all ({fishCatalog.length}) <Icon name="arrow" />
            </Link>
          </header>

          <div className="hf-row">
            {fishCatalog.slice(0, 4).map((fish) => (
              <Link key={fish.id} href="/customer/market" className="hf-it">
                <div className="thumb">
                  <Icon name="fish" style={{ color: 'var(--teal)' }} />
                </div>
                <div>
                  <b>{fish.name}</b>
                  <small>{fish.cat} · {fish.farm}</small>
                </div>
                <span className="pr">₹{fish.price}/Kg</span>
              </Link>
            ))}
          </div>
        </div>

        <div className="h-side">
          {activeBooking ? (
            <div className="card h-book">
              <header>
                <b>Active QR Ticket</b>
                <Link href="/customer/qr-ticket" className="btn linky">
                  View Full Pass
                </Link>
              </header>

              <div className="hb-body">
                <div className="qrmini">
                  <Icon name="qr" style={{ width: '100%', height: '100%', color: 'var(--ink)' }} />
                </div>
                <div>
                  <b className="mono" style={{ fontSize: 13, display: 'block' }}>
                    {activeBooking.id}
                  </b>
                  <small style={{ color: 'var(--mut)', display: 'block', margin: '3px 0' }}>
                    {activeBooking.fish} · {activeBooking.qty} Kg
                  </small>
                  <span className="tag warn">AWAITING PICKUP</span>
                </div>
              </div>
            </div>
          ) : (
            <div className="card h-book" style={{ textAlign: 'center', padding: 26 }}>
              <Icon name="qr" style={{ width: 36, height: 36, margin: '0 auto 10px', color: 'var(--mut)' }} />
              <b style={{ display: 'block', fontSize: 14 }}>No Active Pickup Tickets</b>
              <small style={{ color: 'var(--mut)', display: 'block', margin: '4px 0 14px' }}>
                Reserve fish from today's catch to get your instant QR pass.
              </small>
              <Link href="/customer/market" className="btn sm">
                Reserve Fish
              </Link>
            </div>
          )}

          <div className="card h-notif">
            <header>
              <b>Recent Notifications</b>
              <Link href="/customer/notifications" className="btn linky">
                View all
              </Link>
            </header>

            <div className="nt-it">
              <Icon name={notifs[0]?.icon || 'bell'} />
              <div>
                <b>{notifs[0]?.title}</b>
                <p style={{ fontSize: 12, color: 'var(--ink2)' }}>{notifs[0]?.desc}</p>
                <small>{notifs[0]?.t}</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
