'use client';

import React, { useState } from 'react';
import { usePondFish } from '@/lib/context';
import { Icon } from '@/lib/icons';

export default function CustomerNotificationsPage() {
  const { notifs, markAllNotifsRead } = usePondFish();
  const [filter, setFilter] = useState('All');

  const categories = ['All', 'Bookings', 'Subscriptions', 'Delivery'];

  const filtered = notifs.filter((n) => {
    if (filter === 'All') return true;
    if (filter === 'Bookings') return n.cat === 'Booking';
    if (filter === 'Subscriptions') return n.cat === 'Subscription';
    return n.cat === 'Delivery';
  });

  return (
    <div>
      <div className="sec-head" style={{ marginBottom: 20, display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
        <div>
          <h2>Notifications Center</h2>
          <p>Real-time delivery alerts, booking confirmations & subscription updates.</p>
        </div>

        <button className="btn ghost sm" onClick={markAllNotifsRead}>
          <Icon name="check" /> Mark all read
        </button>
      </div>

      <div className="mkt-bar">
        <div className="chip-row">
          {categories.map((c) => (
            <button
              key={c}
              className={`chip ${filter === c ? 'on' : ''}`}
              onClick={() => setFilter(c)}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      {filtered.length > 0 ? (
        <div className="notif-list">
          {filtered.map((n, i) => (
            <div key={i} className={`nf-it ${n.cls}`}>
              <span className="nf-ic">
                <Icon name={n.icon} />
              </span>
              <div style={{ flex: 1 }}>
                <b>{n.title}</b>
                <p>{n.desc}</p>
                <small>{n.t} · {n.cat}</small>
              </div>
              {n.unread && <span className="udot" />}
            </div>
          ))}
        </div>
      ) : (
        <div className="empty card">
          <Icon name="bell" />
          <p>
            <b>You're all caught up.</b>
            <br />
            No notifications in this category.
          </p>
        </div>
      )}
    </div>
  );
}
