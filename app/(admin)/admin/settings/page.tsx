'use client';

import React from 'react';
import { usePondFish } from '@/lib/context';

export default function AdminSettingsPage() {
  const { showToast } = usePondFish();

  return (
    <div style={{ maxWidth: 720 }}>
      <div className="sec-head" style={{ marginBottom: 20 }}>
        <h2>Store & Platform Business Settings</h2>
        <p>Operational cutoff hours, payment gateway keys, and store locations.</p>
      </div>

      <div className="set-group">
        <h5>Daily Cutoff Rules</h5>
        <div className="set-row">
          <div>
            <b style={{ fontSize: 13.5 }}>Daily Booking Cutoff Hour</b>
            <small>Customers cannot reserve fish after this time each day</small>
          </div>
          <span className="val">6:30 PM</span>
        </div>
        <div className="set-row">
          <div>
            <b style={{ fontSize: 13.5 }}>Unclaimed Ticket Expiry Window</b>
            <small>Unclaimed reservations auto-cancel and release stock back</small>
          </div>
          <span className="val">7:30 PM</span>
        </div>
      </div>

      <div className="set-group">
        <h5>Payment & Infrastructure</h5>
        <div className="set-row">
          <div>
            <b style={{ fontSize: 13.5 }}>Razorpay Gateway Mode</b>
            <small>Live production API keys connected</small>
          </div>
          <span className="tag ok">LIVE</span>
        </div>
        <div className="set-row">
          <div>
            <b style={{ fontSize: 13.5 }}>Capacitor Push Notifications</b>
            <small>Firebase Cloud Messaging (FCM) integration active</small>
          </div>
          <span className="tag ok">ACTIVE</span>
        </div>
      </div>

      <button className="btn block" onClick={() => showToast('Store settings saved', 'check')}>
        Save Global Configurations
      </button>
    </div>
  );
}
