'use client';

import React from 'react';
import Link from 'next/link';
import { usePondFish } from '@/lib/context';
import { Icon } from '@/lib/icons';

export default function AdminDashboardPage() {
  const { bookings, eta } = usePondFish();

  const revData = [
    { l: 'Fri', v: '₹8.2k', h: 44 },
    { l: 'Sat', v: '₹11.4k', h: 62 },
    { l: 'Sun', v: '₹14.1k', h: 77 },
    { l: 'Mon', v: '₹9.8k', h: 53 },
    { l: 'Tue', v: '₹12.6k', h: 69 },
    { l: 'Wed', v: '₹16.9k', h: 92 },
    { l: 'Thu', v: '₹18.2k', h: 100, hot: true },
  ];

  return (
    <div>
      <div className="sec-head" style={{ marginBottom: 20 }}>
        <h2>Operations Dashboard</h2>
        <p>Real-time telemetry across revenue, bookings, truck delivery & stock alerts.</p>
      </div>

      <div className="a-cards">
        <Link href="/admin/bookings" className="ac">
          <span>
            <Icon name="qr" /> TODAY'S BOOKINGS
          </span>
          <b>{bookings.length + 46}</b>
          <small>17 pending counter pickup</small>
        </Link>

        <div className="ac">
          <span>
            <Icon name="wallet" /> TODAY'S REVENUE
          </span>
          <b>₹18,240</b>
          <small>₹5,120 via subscriptions</small>
        </div>

        <Link href="/admin/customers" className="ac">
          <span>
            <Icon name="users" /> ACTIVE CUSTOMERS
          </span>
          <b>132</b>
          <small>on platform today</small>
        </Link>

        <Link href="/admin/delivery" className="ac hl">
          <span>
            <Icon name="truck" /> LIVE DELIVERY
          </span>
          <b>Active</b>
          <small>ETA {eta} min · Kukatpally</small>
        </Link>
      </div>

      <div className="a-grid">
        <div className="a-card">
          <header>
            <b>Daily Revenue Trend (This Week)</b>
            <span className="tag ok">₹91.2k TOTAL</span>
          </header>

          <div className="bars">
            {revData.map((d, i) => (
              <div key={i} className={`bar ${d.hot ? 'hot' : ''}`} title={d.v}>
                <i style={{ height: `${d.h}%` }} />
                <span>{d.l}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="a-card">
          <header>
            <b>Operational Alerts</b>
          </header>

          <Link href="/admin/inventory" className="alert-it warn">
            <Icon name="box" />
            <div>
              <b>Rohu stock below threshold</b>
              <small>10.5 Kg remaining · min threshold is 12 Kg</small>
            </div>
          </Link>

          <Link href="/admin/bookings" className="alert-it warn">
            <Icon name="clock" />
            <div>
              <b>5 bookings expire within 2 hours</b>
              <small>Customers haven't picked up yet</small>
            </div>
          </Link>

          <Link href="/admin/delivery" className="alert-it info">
            <Icon name="truck" />
            <div>
              <b>Live delivery in progress</b>
              <small>ETA {eta} min · broadcasted to 41 customers</small>
            </div>
          </Link>
        </div>
      </div>

      <div className="a-card">
        <header>
          <b>Live Activity Audit Stream</b>
        </header>

        <div className="feed-it coral">
          <span className="fdot" />
          <div>
            <b>Customer booked 2 Kg Rohu</b> · Stevan Antony
            <small>2 minutes ago · PF-20260807-00125</small>
          </div>
        </div>

        <div className="feed-it">
          <span className="fdot" />
          <div>
            <b>Worker completed booking</b> · Ramesh (WK-1008)
            <small>18 minutes ago · PF-20260807-00124</small>
          </div>
        </div>

        <div className="feed-it">
          <span className="fdot" />
          <div>
            <b>Inventory updated</b> · Admin
            <small>34 minutes ago · Rohu stock 12 → 10.5 Kg</small>
          </div>
        </div>

        <div className="feed-it coral">
          <span className="fdot" />
          <div>
            <b>Subscription recharged</b> · Type 1 ₹2,000
            <small>1 hour ago · Meena Iyer</small>
          </div>
        </div>
      </div>
    </div>
  );
}
