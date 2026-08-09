'use client';

import React, { useState } from 'react';
import { usePondFish, FishItem } from '@/lib/context';
import { Icon } from '@/lib/icons';
import { FishCard } from '@/components/FishCard';

export default function CustomerMarketPage() {
  const { fishCatalog, sub, addBooking, openRazorpay } = usePondFish();
  const [catFilter, setCatFilter] = useState('All');
  const [search, setSearch] = useState('');

  const [selectedFish, setSelectedFish] = useState<FishItem | null>(null);
  const [qty, setQty] = useState(1);

  const categories = ['All', 'Freshwater', 'Marine', 'Shellfish'];

  const filtered = fishCatalog.filter((f) => {
    const matchCat = catFilter === 'All' || f.cat === catFilter;
    const matchSearch = f.name.toLowerCase().includes(search.toLowerCase()) || f.farm.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  const handleOpenBook = (fish: FishItem) => {
    if (fish.status === 'out') return;
    setSelectedFish(fish);
    setQty(1);
  };

  const handleConfirmBooking = () => {
    if (!selectedFish) return;

    const availableAllowance = Math.max(0, sub.allow - sub.used);
    const coveredQty = Math.min(qty, availableAllowance);
    const payQty = qty - coveredQty;
    const totalCost = payQty * selectedFish.price;

    if (totalCost > 0) {
      openRazorpay(totalCost, () => {
        addBooking(selectedFish, qty, totalCost, coveredQty);
        setSelectedFish(null);
      });
    } else {
      addBooking(selectedFish, qty, 0, coveredQty);
      setSelectedFish(null);
    }
  };

  return (
    <div>
      <div className="sec-head" style={{ marginBottom: 20 }}>
        <h2>Today's Fresh Catch Catalog</h2>
        <p>Select weight & reserve fresh fish. Subscription allowance applies automatically!</p>
      </div>

      <div className="mkt-bar">
        <div className="search">
          <Icon name="search" />
          <input
            type="text"
            placeholder="Search fish name or farm origin..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div className="chip-row">
          {categories.map((c) => (
            <button
              key={c}
              className={`chip ${catFilter === c ? 'on' : ''}`}
              onClick={() => setCatFilter(c)}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      {filtered.length > 0 ? (
        <div className="fish-grid">
          {filtered.map((fish) => (
            <FishCard key={fish.id} fish={fish} onClick={() => handleOpenBook(fish)} />
          ))}
        </div>
      ) : (
        <div className="empty card">
          <Icon name="fish" />
          <p>
            <b>No fish found matching your search.</b>
            <br />
            Try clearing filters or search terms.
          </p>
        </div>
      )}

      {/* BOOKING DRAWER / MODAL SHEET */}
      {selectedFish && (
        <div className="ov" onClick={() => setSelectedFish(null)}>
          <div className="ovcard bk" onClick={(e) => e.stopPropagation()} style={{ padding: 24 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 14 }}>
              <h3 style={{ fontFamily: 'var(--disp)', fontSize: 22 }}>Reserve {selectedFish.name}</h3>
              <button className="btn ghost sm" onClick={() => setSelectedFish(null)}>
                <Icon name="x" />
              </button>
            </div>

            <div className="card bk-fish">
              <div className="thumb">
                <Icon name="fish" style={{ color: 'var(--teal)', width: 44, height: 44 }} />
              </div>
              <div>
                <b style={{ fontSize: 16 }}>{selectedFish.name}</b>
                <small style={{ color: 'var(--mut)', display: 'block' }}>
                  {selectedFish.cat} · {selectedFish.farm}
                </small>
                <span className="mono" style={{ fontWeight: 600, color: 'var(--teal)' }}>
                  ₹{selectedFish.price} / Kg
                </span>
              </div>
            </div>

            <div className="card qty-card">
              <span className="sec-label">SELECT QUANTITY (KG)</span>
              <div className="stepper">
                <button onClick={() => setQty((q) => Math.max(0.5, q - 0.5))}>-</button>
                <div className="qv">
                  {qty} <small>Kg</small>
                </div>
                <button onClick={() => setQty((q) => Math.min(selectedFish.stock, q + 0.5))}>+</button>
              </div>
              <p style={{ textAlign: 'center', fontSize: 12, color: 'var(--mut)' }}>
                Max available today: {selectedFish.stock} Kg
              </p>
            </div>

            <div className="card sum-card">
              {(() => {
                const availableAllowance = Math.max(0, sub.allow - sub.used);
                const coveredQty = Math.min(qty, availableAllowance);
                const payQty = qty - coveredQty;
                const totalCost = payQty * selectedFish.price;

                return (
                  <>
                    <div className="sum-row">
                      <span>Total Reserved Weight</span>
                      <b>{qty} Kg</b>
                    </div>

                    {coveredQty > 0 && (
                      <div className="sum-row" style={{ color: 'var(--ok)' }}>
                        <span>Subscription Coverage ({sub.type})</span>
                        <b>- {coveredQty} Kg (₹0)</b>
                      </div>
                    )}

                    <div className="sum-row tot pay">
                      <span>Amount Payable via Razorpay</span>
                      <b>₹{totalCost.toLocaleString('en-IN')}</b>
                    </div>
                  </>
                );
              })()}
            </div>

            <button className="btn block" onClick={handleConfirmBooking}>
              Confirm Booking & Generate QR Pass
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
