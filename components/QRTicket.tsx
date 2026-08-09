'use client';

import React, { useEffect, useRef } from 'react';
import { Booking } from '@/lib/context';
import { Icon } from '@/lib/icons';

interface QRTicketProps {
  booking: Booking;
  onClose?: () => void;
}

export const QRTicket: React.FC<QRTicketProps> = ({ booking, onClose }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const sz = 160;
    canvas.width = sz;
    canvas.height = sz;
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, sz, sz);

    // Simple deterministic pseudo-QR grid based on booking ID
    const seed = booking.id.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
    const grid = 12;
    const cell = sz / grid;

    ctx.fillStyle = '#14312B';

    // Position detection corners
    const drawCorner = (x: number, y: number) => {
      ctx.fillRect(x * cell, y * cell, cell * 3, cell * 3);
      ctx.fillStyle = '#ffffff';
      ctx.fillRect((x + 0.5) * cell, (y + 0.5) * cell, cell * 2, cell * 2);
      ctx.fillStyle = '#14312B';
      ctx.fillRect((x + 1) * cell, (y + 1) * cell, cell, cell);
    };

    drawCorner(0, 0);
    drawCorner(grid - 3, 0);
    drawCorner(0, grid - 3);

    // Fill inner grid
    for (let r = 0; r < grid; r++) {
      for (let c = 0; c < grid; c++) {
        if (
          (r < 3 && c < 3) ||
          (r < 3 && c >= grid - 3) ||
          (r >= grid - 3 && c < 3)
        ) {
          continue;
        }
        const val = Math.sin(seed * (r + 1) + c * 3.7);
        if (val > 0) {
          ctx.fillRect(c * cell, r * cell, cell, cell);
        }
      }
    }
  }, [booking.id]);

  return (
    <div className="ticket-wrap">
      <div className="succ">
        <div className="okc">
          <Icon name="check" />
        </div>
        <h2>Booking Confirmed</h2>
        <p>Show this pass to the store worker for instant pickup.</p>
      </div>

      <div className="ticket">
        <div className="t-qr">
          <canvas ref={canvasRef} />
        </div>

        <div className="t-id">{booking.id}</div>
        <div className="t-live">
          <span className="live" /> Valid for pickup today before 7:00 PM
        </div>

        <div className="perf" />

        <div style={{ display: 'grid', gap: 10, fontSize: 13.5 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <span style={{ color: 'var(--mut)' }}>Reserved Item</span>
            <b>{booking.fish} · {booking.qty} Kg</b>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <span style={{ color: 'var(--mut)' }}>Payment</span>
            <b>{booking.pay || 'Verified'}</b>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <span style={{ color: 'var(--mut)' }}>Pickup Store</span>
            <b>PondFish Kukatpally</b>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <span style={{ color: 'var(--mut)' }}>Status</span>
            <span className={`tag ${booking.status === 'Active' ? 'warn' : 'ok'}`}>
              {booking.status.toUpperCase()}
            </span>
          </div>
        </div>

        <div className="t-instr">
          <Icon name="phone" />
          <div>
            <b>How pickup works:</b>
            <br />
            1. Worker scans QR code at counter.
            <br />
            2. Fresh fish is weighed & packed immediately.
            <br />
            3. No waiting in line!
          </div>
        </div>

        {onClose && (
          <button className="btn ghost block" style={{ marginTop: 18 }} onClick={onClose}>
            Back to Dashboard
          </button>
        )}
      </div>
    </div>
  );
};
