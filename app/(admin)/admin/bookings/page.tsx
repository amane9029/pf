'use client';

import React, { useState } from 'react';
import { usePondFish } from '@/lib/context';

export default function AdminBookingsPage() {
  const { bookings } = usePondFish();
  const [filter, setFilter] = useState('All');

  const filtered = bookings.filter((b) => filter === 'All' || b.status === filter);

  return (
    <div>
      <div className="sec-head" style={{ marginBottom: 20 }}>
        <h2>Customer Reservations & Payment Verification Log</h2>
        <p>Complete log of customer pre-bookings, payment methods, and counter pickup status.</p>
      </div>

      <div className="mkt-bar">
        <div className="chip-row">
          {['All', 'Active', 'Completed'].map((c) => (
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

      <div className="card tbl-wrap">
        <table className="tbl">
          <thead>
            <tr>
              <th>Booking ID</th>
              <th>Customer</th>
              <th>Fish Reserved</th>
              <th>Weight</th>
              <th>Payment Info</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((b) => (
              <tr key={b.id}>
                <td className="mono" style={{ fontWeight: 600 }}>{b.id}</td>
                <td>{b.cust || 'Stevan Antony'}</td>
                <td>{b.fish}</td>
                <td>{b.qty} Kg</td>
                <td>
                  {b.amt > 0 ? (
                    <span className="tag teal">RAZORPAY ₹{b.amt}</span>
                  ) : (
                    <span className="tag ok">COVERED BY PLAN</span>
                  )}
                </td>
                <td>
                  <span className={`tag ${b.status === 'Active' ? 'warn' : 'ok'}`}>
                    {b.status.toUpperCase()}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
