'use client';

import React from 'react';
import { Icon } from '@/lib/icons';

export default function AdminSubscriptionsPage() {
  return (
    <div>
      <div className="sec-head" style={{ marginBottom: 20 }}>
        <h2>Subscription Engine & Pricing Tiers</h2>
        <p>Configure subscription fee structures, weekly weight caps, and rollover rules.</p>
      </div>

      <div className="plans" style={{ maxWidth: '100%', marginBottom: 24 }}>
        <div className="card plan">
          <h3>Type 1 Plan Configuration</h3>
          <div className="plan-price">
            ₹2,000 <small>/ month</small>
          </div>
          <div className="kv2">
            <span>Weekly Allowance</span>
            <b>2.0 Kg</b>
          </div>
          <div className="kv2">
            <span>Active Subscribers</span>
            <b>87 Active Users</b>
          </div>
          <div className="kv2">
            <span>Monthly Revenue</span>
            <b className="mono">₹1,74,000</b>
          </div>
          <button className="btn sm ghost block" style={{ marginTop: 16 }}>
            <Icon name="edit" /> Edit Plan Rules
          </button>
        </div>

        <div className="card plan hot">
          <h3>Type 2 Plan Configuration</h3>
          <div className="plan-price">
            ₹6,000 <small>/ month</small>
          </div>
          <div className="kv2">
            <span>Weekly Allowance</span>
            <b>3.0 Kg</b>
          </div>
          <div className="kv2">
            <span>Active Subscribers</span>
            <b>34 Active Users</b>
          </div>
          <div className="kv2">
            <span>Monthly Revenue</span>
            <b className="mono">₹2,04,000</b>
          </div>
          <button className="btn sm coral block" style={{ marginTop: 16 }}>
            <Icon name="edit" /> Edit Plan Rules
          </button>
        </div>
      </div>
    </div>
  );
}
