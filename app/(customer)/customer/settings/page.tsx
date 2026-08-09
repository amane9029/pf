'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { usePondFish } from '@/lib/context';
import { Icon } from '@/lib/icons';

export default function CustomerSettingsPage() {
  const { user, sub, showToast } = usePondFish();
  const router = useRouter();

  const [toggles, setToggles] = useState({
    truck: true,
    booking: true,
    sub: true,
    offers: false,
  });

  const toggle = (key: keyof typeof toggles) => {
    setToggles((prev) => {
      const next = { ...prev, [key]: !prev[key] };
      showToast('Preference saved', 'check');
      return next;
    });
  };

  const handleLogout = () => {
    showToast('Logged out successfully', 'check');
    setTimeout(() => {
      router.push('/');
    }, 600);
  };

  return (
    <div>
      <div className="card prof-head">
        <div className="avatar">SA</div>
        <div>
          <h2>{user.name}</h2>
          <span className="pid">{user.id} · MEMBER SINCE {user.since.toUpperCase()}</span>
          <div>
            <span className="badge-m">🐟 PondFish Member · {sub.type} · Active</span>
          </div>
        </div>
      </div>

      <div className="stat-row">
        <div className="card stat">
          <b>16</b>
          <span>Total bookings</span>
        </div>
        <div className="card stat">
          <b>36.5</b>
          <span>Kg of fish purchased</span>
        </div>
        <div className="card stat">
          <b>2</b>
          <span>Subscription recharges</span>
        </div>
        <div className="card stat">
          <b>₹12,840</b>
          <span>Lifetime spending</span>
        </div>
      </div>

      <div className="p-grid">
        <div className="card pg-card">
          <h5>Personal Information</h5>
          <div className="kv">
            <span>Full name</span>
            <b>{user.name}</b>
          </div>
          <div className="kv">
            <span>Mobile</span>
            <b className="mono">{user.phone}</b>
          </div>
          <div className="kv">
            <span>Age</span>
            <b>{user.age}</b>
          </div>
          <div className="kv">
            <span>Area</span>
            <b>{user.area}</b>
          </div>
          <button className="btn sm ghost" style={{ marginTop: 14 }} onClick={() => showToast('Profile editing mode', 'user')}>
            Edit Profile
          </button>
        </div>

        <div className="card pg-card">
          <h5>Membership & Subscription</h5>
          <div className="kv">
            <span>Status</span>
            <b>
              <span className="tag ok">ACTIVE</span>
            </b>
          </div>
          <div className="kv">
            <span>Current plan</span>
            <b>{sub.type}</b>
          </div>
          <div className="kv">
            <span>Weekly allowance</span>
            <b>{sub.allow} Kg</b>
          </div>
          <div className="kv">
            <span>Prepaid balance</span>
            <b className="mono">₹{sub.credit.toLocaleString('en-IN')}</b>
          </div>
        </div>
      </div>

      <div className="set-group">
        <h5>Notification Preferences</h5>

        <div className="set-row">
          <div style={{ flex: 1 }}>
            <b style={{ fontSize: 13.5 }}>Live truck updates</b>
            <small>Push notification when the truck departs & arrives</small>
          </div>
          <button className={`sw ${toggles.truck ? 'on' : ''}`} onClick={() => toggle('truck')} />
        </div>

        <div className="set-row">
          <div style={{ flex: 1 }}>
            <b style={{ fontSize: 13.5 }}>Booking notifications</b>
            <small>Confirmations and pickup reminder alerts</small>
          </div>
          <button className={`sw ${toggles.booking ? 'on' : ''}`} onClick={() => toggle('booking')} />
        </div>

        <div className="set-row">
          <div style={{ flex: 1 }}>
            <b style={{ fontSize: 13.5 }}>Subscription alerts</b>
            <small>Weekly quota resets and recharge reminders</small>
          </div>
          <button className={`sw ${toggles.sub ? 'on' : ''}`} onClick={() => toggle('sub')} />
        </div>

        <div className="set-row">
          <div style={{ flex: 1 }}>
            <b style={{ fontSize: 13.5 }}>Store announcements</b>
            <small>New species arrivals & promotional offers</small>
          </div>
          <button className={`sw ${toggles.offers ? 'on' : ''}`} onClick={() => toggle('offers')} />
        </div>
      </div>

      <div style={{ marginTop: 24 }}>
        <button className="btn ghost block" style={{ color: 'var(--coral)', borderColor: 'var(--line2)' }} onClick={handleLogout}>
          <Icon name="logout" /> Log Out of Customer Portal
        </button>
      </div>
    </div>
  );
}
