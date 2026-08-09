'use client';

import React, { useState } from 'react';
import { usePondFish, Booking } from '@/lib/context';
import { QRTicket } from '@/components/QRTicket';
import { Icon } from '@/lib/icons';

export default function CustomerQRTicketPage() {
  const { bookings } = usePondFish();
  const [selectedBooking, setSelectedBooking] = useState<Booking | null>(
    bookings.find((b) => b.status === 'Active') || bookings[0] || null
  );

  return (
    <div>
      <div className="sec-head" style={{ marginBottom: 20 }}>
        <h2>My Bookings & Pickup Passes</h2>
        <p>Show active QR passes at store counter for instant weight packing.</p>
      </div>

      {selectedBooking ? (
        <div className="qrt-layout">
          <div>
            <QRTicket booking={selectedBooking} />
          </div>

          <div className="card" style={{ padding: 20 }}>
            <h4 style={{ fontFamily: 'var(--disp)', fontSize: 18, marginBottom: 14 }}>
              All Reservation History ({bookings.length})
            </h4>

            <div style={{ display: 'grid', gap: 10 }}>
              {bookings.map((b) => (
                <div
                  key={b.id}
                  className={`hist-row ${selectedBooking.id === b.id ? 'open' : ''}`}
                  style={{ border: selectedBooking.id === b.id ? '1.5px solid var(--teal)' : '1px solid var(--line)' }}
                >
                  <button
                    className="hist-top"
                    onClick={() => setSelectedBooking(b)}
                  >
                    <div style={{ minWidth: 0 }}>
                      <span className="mono">{b.id}</span>
                      <b style={{ display: 'block', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                        {b.fish} · {b.qty} Kg
                      </b>
                    </div>
                    <div className="rt">
                      <div>
                        <small style={{ color: 'var(--mut)', fontSize: 11, display: 'block', whiteSpace: 'nowrap' }}>
                          {b.date}
                        </small>
                        <span className={`tag ${b.status === 'Active' ? 'warn' : 'ok'}`}>
                          {b.status.toUpperCase()}
                        </span>
                      </div>
                      <Icon name="chevron" />
                    </div>
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className="empty card">
          <Icon name="qr" />
          <p>
            <b>No bookings created yet.</b>
            <br />
            Browse today's catch catalog to make your first reservation.
          </p>
        </div>
      )}
    </div>
  );
}
