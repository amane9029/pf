'use client';

import React, { useState } from 'react';
import { usePondFish, WorkerOrder } from '@/lib/context';
import { Icon } from '@/lib/icons';

export default function WorkerPage() {
  const { workerPending, workerDone, completeWorkerOrder, showToast } = usePondFish();
  const [activeTab, setActiveTab] = useState<'pending' | 'done'>('pending');
  const [search, setSearch] = useState('');

  const [selectedOrder, setSelectedOrder] = useState<WorkerOrder | null>(null);
  const [showScanModal, setShowScanModal] = useState(false);
  const [showConfirmModal, setShowConfirmModal] = useState(false);

  const filteredPending = workerPending.filter((o) => {
    const q = search.toLowerCase();
    return !q || o.id.toLowerCase().includes(q) || o.cust.toLowerCase().includes(q) || o.phone.includes(q);
  });

  const handleScanQR = () => {
    setShowScanModal(true);
    setTimeout(() => {
      setShowScanModal(false);
      const target = workerPending[0];
      if (target) {
        setSelectedOrder(target);
        showToast('QR Code Scanned Successfully!', 'qr');
      }
    }, 2000);
  };

  const handleCompleteOrder = () => {
    if (!selectedOrder) return;
    completeWorkerOrder(selectedOrder.id);
    setSelectedOrder(null);
    setShowConfirmModal(false);
  };

  return (
    <div className="wbody">
      {/* STATS */}
      <div className="wstats">
        <div className="wstat hl">
          <span>Pending Pickups</span>
          <b>{workerPending.length}</b>
        </div>
        <div className="wstat">
          <span>Completed Today</span>
          <b>{48 - workerPending.length}</b>
        </div>
        <div className="wstat">
          <span>Active Scanner</span>
          <b>Ready</b>
        </div>
      </div>

      {/* TOOLBAR */}
      <div className="wtool">
        <div className="search">
          <Icon name="search" />
          <input
            type="text"
            placeholder="Search booking ID, customer name or phone..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <button className="btn scanbtn" onClick={handleScanQR}>
          <Icon name="qr" /> Scan Booking QR Pass
        </button>
      </div>

      {/* TAB SELECTOR */}
      <div className="chip-row" style={{ marginBottom: 16 }}>
        <button
          className={`chip ${activeTab === 'pending' ? 'on' : ''}`}
          onClick={() => setActiveTab('pending')}
        >
          Awaiting Pickup ({workerPending.length})
        </button>
        <button
          className={`chip ${activeTab === 'done' ? 'on' : ''}`}
          onClick={() => setActiveTab('done')}
        >
          Completed Today ({workerDone.length})
        </button>
      </div>

      {/* ORDERS LIST */}
      {activeTab === 'pending' ? (
        filteredPending.length > 0 ? (
          filteredPending.map((o) => (
            <button
              key={o.id}
              className="wrow"
              onClick={() => setSelectedOrder(o)}
            >
              <div>
                <span className="wid">{o.id}</span>
                <b>{o.cust}</b>
              </div>
              <div className="wfish">
                <b>{o.fish}</b>
                <span>{o.qty} Kg</span>
              </div>
              <span className="wt">{o.time}</span>
              <Icon name="chevron" />
            </button>
          ))
        ) : (
          <div className="empty card">
            <Icon name="check" />
            <p>
              <b>No pending bookings found.</b>
              <br />
              All current pickup reservations are completed!
            </p>
          </div>
        )
      ) : (
        workerDone.map((o) => (
          <div key={o.id} className="wrow" style={{ cursor: 'default' }}>
            <div>
              <span className="wid">{o.id}</span>
              <b>{o.cust}</b>
            </div>
            <div className="wfish">
              <b>{o.fish}</b>
              <span>{o.qty} Kg</span>
            </div>
            <div style={{ textAlign: 'right', minWidth: 110 }}>
              <span className="tag ok">COMPLETED</span>
              <small className="mono" style={{ display: 'block', color: 'var(--mut)', fontSize: 11, marginTop: 3 }}>
                {o.done}
              </small>
            </div>
          </div>
        ))
      )}

      {/* ORDER DETAILS SIDE SHEET */}
      {selectedOrder && (
        <div className="ov" onClick={() => setSelectedOrder(null)}>
          <div className="ovcard" onClick={(e) => e.stopPropagation()} style={{ padding: 26, width: 480 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 14 }}>
              <h3 style={{ fontFamily: 'var(--disp)', fontSize: 22 }}>Booking Details</h3>
              <button className="btn ghost sm" onClick={() => setSelectedOrder(null)}>
                <Icon name="x" />
              </button>
            </div>

            <span className="tag warn" style={{ marginBottom: 14 }}>
              ● AWAITING COUNTER PICKUP
            </span>

            <div className="kv2">
              <span>Booking ID</span>
              <b className="mono">{selectedOrder.id}</b>
            </div>
            <div className="kv2">
              <span>Customer</span>
              <b>{selectedOrder.cust}</b>
            </div>
            <div className="kv2">
              <span>Mobile Phone</span>
              <b className="mono">{selectedOrder.phone}</b>
            </div>
            <div className="kv2">
              <span>Reserved Fish</span>
              <b>{selectedOrder.fish}</b>
            </div>
            <div className="kv2">
              <span>Weight Quantity</span>
              <b>{selectedOrder.qty} Kg</b>
            </div>
            <div className="kv2">
              <span>Booked Time</span>
              <b className="mono">{selectedOrder.time}</b>
            </div>

            <div className="pay-ok">
              <Icon name="check" /> {selectedOrder.pay}
            </div>

            <p style={{ fontSize: 12, color: 'var(--mut)', marginBottom: 20 }}>
              Payment is verified — weigh fish, pack in ice, and click complete to finalize.
            </p>

            <button className="btn block" onClick={() => setShowConfirmModal(true)}>
              <Icon name="check" /> Complete & Fulfill Order
            </button>
          </div>
        </div>
      )}

      {/* QR CAMERA SCANNER SIMULATION MODAL */}
      {showScanModal && (
        <div className="ov">
          <div className="ovcard" style={{ padding: 26, textAlign: 'center' }}>
            <h3 style={{ fontFamily: 'var(--disp)', fontSize: 20, marginBottom: 4 }}>Scan Booking QR Code</h3>
            <p style={{ fontSize: 13, color: 'var(--mut)', marginBottom: 14 }}>
              Point camera at customer's phone pass.
            </p>

            <div className="scan-vp">
              <div className="scan-corner sc-tl" />
              <div className="scan-corner sc-tr" />
              <div className="scan-corner sc-bl" />
              <div className="scan-corner sc-br" />
              <div className="scan-line" />
            </div>

            <p style={{ fontSize: 12, color: 'var(--mut)' }}>
              Detecting ticket <b className="mono">PF-20260807-00125</b>…
            </p>
          </div>
        </div>
      )}

      {/* ORDER FULFILLMENT CONFIRMATION MODAL */}
      {showConfirmModal && selectedOrder && (
        <div className="ov" onClick={() => setShowConfirmModal(false)}>
          <div className="ovcard" onClick={(e) => e.stopPropagation()} style={{ padding: 26, textAlign: 'center' }}>
            <div style={{ width: 52, height: 52, borderRadius: '50%', background: 'var(--amber-x)', color: 'var(--amber)', display: 'grid', placeItems: 'center', margin: '0 auto 14px' }}>
              <Icon name="check" style={{ width: 26, height: 26 }} />
            </div>

            <h3 style={{ fontFamily: 'var(--disp)', fontSize: 20, marginBottom: 6 }}>
              Complete Order {selectedOrder.id}?
            </h3>
            <p style={{ color: 'var(--ink2)', fontSize: 13.5, marginBottom: 20 }}>
              This invalidates customer's QR ticket, updates inventory, and sends SMS pickup receipt.
            </p>

            <div style={{ display: 'flex', gap: 10 }}>
              <button className="btn ghost block" onClick={() => setShowConfirmModal(false)}>
                Cancel
              </button>
              <button className="btn block" onClick={handleCompleteOrder}>
                Confirm Fulfillment
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
