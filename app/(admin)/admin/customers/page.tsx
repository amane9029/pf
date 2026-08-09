'use client';

import React from 'react';

export default function AdminCustomersPage() {
  const customers = [
    { id: 'PF-CUST-8821', name: 'Stevan Antony', phone: '+91 98480 12345', plan: 'Type 1 Subscription', area: 'Kukatpally', totalBookings: 16, spent: '₹12,840', status: 'Active' },
    { id: 'PF-CUST-8822', name: 'Rahul Verma', phone: '+91 98661 40987', plan: 'Type 2 Subscription', area: 'Miyapur', totalBookings: 24, spent: '₹28,400', status: 'Active' },
    { id: 'PF-CUST-8823', name: 'Kiran Kumar', phone: '+91 90104 55621', plan: 'Pay Per Purchase', area: 'Kondapur', totalBookings: 5, spent: '₹3,200', status: 'Active' },
    { id: 'PF-CUST-8824', name: 'Meena Iyer', phone: '+91 98499 78120', plan: 'Type 1 Subscription', area: 'Gachibowli', totalBookings: 12, spent: '₹18,100', status: 'Active' },
    { id: 'PF-CUST-8825', name: 'Arjun Rao', phone: '+91 96525 34098', plan: 'Pay Per Purchase', area: 'Kukatpally', totalBookings: 8, spent: '₹5,600', status: 'Active' },
  ];

  return (
    <div>
      <div className="sec-head" style={{ marginBottom: 20 }}>
        <h2>Customer CRM & Subscription Roster</h2>
        <p>Registered customer directory, membership plans, total spending, and location telemetry.</p>
      </div>

      <div className="card tbl-wrap">
        <table className="tbl">
          <thead>
            <tr>
              <th>Customer ID</th>
              <th>Name</th>
              <th>Phone</th>
              <th>Subscription Plan</th>
              <th>Area</th>
              <th>Bookings</th>
              <th>Lifetime Spend</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {customers.map((c) => (
              <tr key={c.id}>
                <td className="mono" style={{ fontWeight: 600 }}>{c.id}</td>
                <td style={{ fontWeight: 600 }}>{c.name}</td>
                <td className="mono">{c.phone}</td>
                <td><span className="tag teal">{c.plan}</span></td>
                <td>{c.area}</td>
                <td>{c.totalBookings}</td>
                <td className="mono" style={{ fontWeight: 600 }}>{c.spent}</td>
                <td><span className="tag ok">{c.status.toUpperCase()}</span></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
