'use client';

import React, { useState } from 'react';
import { usePondFish } from '@/lib/context';
import { Icon } from '@/lib/icons';

export default function AdminNotificationsPage() {
  const { showToast } = usePondFish();
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [sentList, setSentList] = useState([
    { title: 'Fresh fish has arrived at Kukatpally', time: 'Today · 8:15 AM', devices: 312 },
    { title: 'Live delivery started — ETA 42 min', time: 'Today · 6:13 AM', devices: 312 },
    { title: 'Weekly subscription allowance reset', time: 'Monday · 12:00 AM', devices: 87 },
  ]);

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !body) return;
    setSentList([
      { title, time: 'Just now', devices: 486 },
      ...sentList,
    ]);
    showToast('Push notification broadcasted to 486 devices!', 'send');
    setTitle('');
    setBody('');
  };

  return (
    <div className="admin-notif-layout">
      <div>
        <div className="sec-head" style={{ marginBottom: 20 }}>
          <h2>Broadcast Push Notifications</h2>
          <p>Send instant push notifications & SMS alerts to mobile devices (Capacitor/FCM).</p>
        </div>

        <form className="card" style={{ padding: 24, display: 'grid', gap: 14 }} onSubmit={handleSend}>
          <div className="field">
            <label>Notification Title</label>
            <input
              type="text"
              required
              placeholder="e.g. Fresh Murrel Has Arrived!"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          <div className="field">
            <label>Message Body</label>
            <textarea
              rows={4}
              required
              placeholder="e.g. 100 Kg fresh Murrel just unpacked. Reserve on app now before daily cutoff!"
              value={body}
              onChange={(e) => setBody(e.target.value)}
            />
          </div>

          <button className="btn block" type="submit">
            <Icon name="send" /> Broadcast to All 486 Active Devices
          </button>
        </form>
      </div>

      <div className="card" style={{ padding: 24 }}>
        <h4 style={{ fontFamily: 'var(--disp)', fontSize: 18, marginBottom: 14 }}>
          Broadcast Dispatch Log
        </h4>

        <div style={{ display: 'grid', gap: 12 }}>
          {sentList.map((item, i) => (
            <div key={i} className="feed-it coral">
              <span className="fdot" />
              <div>
                <b>{item.title}</b>
                <small>{item.time} · Broadcasted to {item.devices} devices</small>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
