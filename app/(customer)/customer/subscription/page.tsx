'use client';

import React from 'react';
import { usePondFish } from '@/lib/context';
import { Icon } from '@/lib/icons';

export default function CustomerSubscriptionPage() {
  const { sub, subPlans, subHistory, rechargeSub } = usePondFish();

  const rem = Math.max(0, sub.allow - sub.used);

  return (
    <div>
      <div className="sec-head" style={{ marginBottom: 20 }}>
        <h2>Subscription & Prepaid Wallet</h2>
        <p>Manage your weekly fish allowance quota and prepaid balance.</p>
      </div>

      <div className="sub-health g">
        <span style={{ fontSize: 18 }}>🟢</span>
        <span>Subscription Healthy & Active</span>
        <span className="tag ok" style={{ marginLeft: 'auto' }}>
          ACTIVE
        </span>
      </div>

      <div className="sub-grid">
        <div className="card sg-card">
          <h5>Current Plan</h5>
          <div className="big">{sub.type}</div>
          <small style={{ color: 'var(--mut)' }}>
            ₹{sub.fee.toLocaleString('en-IN')} / month · up to {sub.allow} Kg weekly
          </small>
          <div className="meter" style={{ marginTop: 14 }}>
            <i style={{ width: `${(sub.used / sub.allow) * 100}%` }} />
          </div>
          <small style={{ color: 'var(--mut)', display: 'block', marginTop: 7 }}>
            {sub.used} Kg used this week · resets {sub.reset}
          </small>
        </div>

        <div className="card sg-card">
          <h5>Subscription Credit</h5>
          <div className="big mono">₹{sub.credit.toLocaleString('en-IN')}</div>
          <small style={{ color: 'var(--mut)' }}>
            Prepaid balance, auto-deducted on fish bookings
          </small>
          <button className="btn sm" style={{ marginTop: 14 }} onClick={() => rechargeSub(0)}>
            <Icon name="wallet" /> Recharge ₹2,000
          </button>
        </div>
      </div>

      <div className="card" style={{ padding: 20, marginBottom: 18 }}>
        <h5 style={{ font: '600 11px var(--body)', letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--mut)', marginBottom: 14 }}>
          Switch or Upgrade Subscription Plan
        </h5>

        {subPlans.map((p, idx) => {
          const isCurrent = sub.type === p.name;
          return (
            <div key={p.id} className="plan-mini">
              <div>
                <h4>{p.name}</h4>
                <small>₹{p.fee.toLocaleString('en-IN')} / month · {p.allow} Kg weekly allowance</small>
              </div>
              <button
                className={`btn sm ${isCurrent ? 'ghost' : p.popular ? 'coral' : ''}`}
                onClick={() => rechargeSub(idx)}
              >
                {isCurrent ? 'Recharge' : 'Switch Plan'}
              </button>
            </div>
          );
        })}
      </div>

      <div className="card" style={{ padding: 20 }}>
        <h5 style={{ font: '600 11px var(--body)', letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--mut)', marginBottom: 10 }}>
          Subscription Purchase History
        </h5>

        {subHistory.map((h, i) => (
          <div key={i} className="kv2">
            <span>{h.t} · {h.d}</span>
            <b className="mono">
              ₹{h.a.toLocaleString('en-IN')}{' '}
              <span className="tag ok" style={{ marginLeft: 8 }}>
                COMPLETED
              </span>
            </b>
          </div>
        ))}
      </div>
    </div>
  );
}
