'use client';

import React from 'react';

export default function AdminAuditLogsPage() {
  const auditLogs = [
    { time: '11:42 AM', actor: 'Stevan Antony (Customer)', action: 'Booked 2 Kg Rohu', target: 'PF-20260807-00125', ip: '183.82.102.44' },
    { time: '10:41 AM', actor: 'Ramesh Kumar (Worker)', action: 'Fulfilled booking & scanned QR', target: 'PF-20260807-00124', ip: '10.0.0.12' },
    { time: '10:15 AM', actor: 'Store Admin', action: 'Modified Rohu stock (12 -> 10.5 Kg)', target: 'Inventory #f1', ip: '10.0.0.2' },
    { time: '09:40 AM', actor: 'Suresh Babu (Customer)', action: 'Recharged Type 1 Subscription ₹2,000', target: 'Razorpay rzp_live_991', ip: '157.48.90.12' },
    { time: '08:15 AM', actor: 'System Dispatcher', action: 'Triggered truck arrival alert', target: 'Fleet #TS-09-BF-4410', ip: 'System Cron' },
  ];

  return (
    <div>
      <div className="sec-head" style={{ marginBottom: 20 }}>
        <h2>System Security & Activity Audit Log</h2>
        <p>Immutable audit trail of user bookings, inventory changes, payments, and worker fulfillments.</p>
      </div>

      <div className="card" style={{ overflow: 'hidden' }}>
        <table className="tbl">
          <thead>
            <tr>
              <th>Timestamp</th>
              <th>Actor</th>
              <th>Action Description</th>
              <th>Target Reference</th>
              <th>IP / Host</th>
            </tr>
          </thead>
          <tbody>
            {auditLogs.map((log, i) => (
              <tr key={i}>
                <td className="mono">{log.time}</td>
                <td style={{ fontWeight: 600 }}>{log.actor}</td>
                <td>{log.action}</td>
                <td className="mono">{log.target}</td>
                <td className="mono" style={{ color: 'var(--mut)' }}>{log.ip}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
