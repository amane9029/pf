'use client';

import React, { useState } from 'react';
import { usePondFish } from '@/lib/context';
import { Icon } from '@/lib/icons';

export const RazorpayModal: React.FC = () => {
  const { razorpayModal, closeRazorpay } = usePondFish();
  const [processing, setProcessing] = useState(false);
  const [success, setSuccess] = useState(false);

  if (!razorpayModal || !razorpayModal.open) return null;

  const handlePay = () => {
    setProcessing(true);
    setTimeout(() => {
      setProcessing(false);
      setSuccess(true);
      setTimeout(() => {
        if (razorpayModal.onSuccess) {
          razorpayModal.onSuccess();
        }
        setSuccess(false);
        closeRazorpay();
      }, 950);
    }, 1200);
  };

  const amountStr = `₹${razorpayModal.amount.toLocaleString('en-IN')}`;

  return (
    <div className="ov">
      <div className="ovcard" style={{ padding: 26 }}>
        <div
          style={{
            background: '#0B2B5B',
            color: '#fff',
            borderRadius: '12px 12px 0 0',
            padding: '18px 20px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            margin: '-26px -26px 20px',
          }}
        >
          <div>
            <b style={{ fontSize: 16 }}>PondFish</b>
            <small style={{ display: 'block', opacity: 0.7, fontSize: 11.5 }}>Fresh fish retail · Hyderabad</small>
          </div>
          <b className="mono" style={{ fontSize: 18 }}>
            {amountStr}
          </b>
        </div>

        <div style={{ display: 'grid', gap: 9, marginBottom: 18 }}>
          <div
            style={{
              display: 'flex',
              gap: 12,
              alignItems: 'center',
              border: '1.5px solid var(--teal)',
              borderRadius: 10,
              padding: '13px 15px',
              background: 'var(--teal-x)',
            }}
          >
            <Icon name="phone" />
            <div style={{ flex: 1 }}>
              <b style={{ fontSize: 13.5 }}>UPI</b>
              <small style={{ display: 'block', color: 'var(--mut)', fontSize: 12 }}>stevan@okhdfcbank</small>
            </div>
            <span style={{ width: 16, height: 16, borderRadius: '50%', border: '5px solid var(--teal)' }} />
          </div>

          <div
            style={{
              display: 'flex',
              gap: 12,
              alignItems: 'center',
              border: '1px solid var(--line)',
              borderRadius: 10,
              padding: '13px 15px',
              opacity: 0.75,
            }}
          >
            <Icon name="wallet" />
            <div>
              <b style={{ fontSize: 13.5 }}>Netbanking</b>
              <small style={{ display: 'block', color: 'var(--mut)', fontSize: 12 }}>All major banks</small>
            </div>
          </div>

          <div
            style={{
              display: 'flex',
              gap: 12,
              alignItems: 'center',
              border: '1px solid var(--line)',
              borderRadius: 10,
              padding: '13px 15px',
              opacity: 0.75,
            }}
          >
            <Icon name="doc" />
            <div>
              <b style={{ fontSize: 13.5 }}>Credit / Debit card</b>
              <small style={{ display: 'block', color: 'var(--mut)', fontSize: 12 }}>Visa · Mastercard · RuPay</small>
            </div>
          </div>
        </div>

        <button
          className={`btn block ${success ? 'okbtn' : ''}`}
          onClick={handlePay}
          disabled={processing || success}
        >
          {processing ? (
            <>
              <span className="spin"></span>&nbsp;Processing…
            </>
          ) : success ? (
            <>
              <Icon name="check" /> Payment successful
            </>
          ) : (
            `Pay ${amountStr}`
          )}
        </button>

        <p style={{ textAlign: 'center', fontSize: 11, color: 'var(--mut)', marginTop: 12 }}>
          🔒 Secured by Razorpay · demo payment — no real money moves
        </p>

        {!processing && !success && (
          <button
            className="btn ghost block sm"
            style={{ marginTop: 10 }}
            onClick={closeRazorpay}
          >
            Cancel
          </button>
        )}
      </div>
    </div>
  );
};
