'use client';

import React, { useState } from 'react';
import { usePondFish, FishItem } from '@/lib/context';
import { Icon } from '@/lib/icons';

export default function AdminInventoryPage() {
  const { fishCatalog, updateFishInventory, addFishItem } = usePondFish();
  const [search, setSearch] = useState('');
  const [editingFish, setEditingFish] = useState<FishItem | null>(null);
  const [showAddModal, setShowAddModal] = useState(false);

  // New Fish Form state
  const [newFishName, setNewFishName] = useState('');
  const [newFishCat, setNewFishCat] = useState('Freshwater');
  const [newFishPrice, setNewFishPrice] = useState(300);
  const [newFishStock, setNewFishStock] = useState(10);

  const filtered = fishCatalog.filter((f) => f.name.toLowerCase().includes(search.toLowerCase()));
  const totalStock = fishCatalog.reduce((acc, f) => acc + f.stock, 0);

  const handleSaveInventory = () => {
    if (!editingFish) return;
    updateFishInventory(editingFish.id, editingFish);
    setEditingFish(null);
  };

  const handleCreateFish = (e: React.FormEvent) => {
    e.preventDefault();
    addFishItem({
      name: newFishName,
      cat: newFishCat,
      price: newFishPrice,
      stock: newFishStock,
      status: 'available',
      farm: 'Sri Lakshmi Organic Ponds, Warangal',
      desc: 'Freshly added to catalog.',
    });
    setShowAddModal(false);
    setNewFishName('');
  };

  return (
    <div>
      <div className="sec-head" style={{ marginBottom: 20, display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
        <div>
          <h2>Fish Inventory & Stock Control</h2>
          <p>Real-time weight stock modifiers, price controls, and species catalog management.</p>
        </div>

        <button className="btn sm" onClick={() => setShowAddModal(true)}>
          <Icon name="plus" /> Add New Species
        </button>
      </div>

      <div className="a-cards" style={{ marginBottom: 20 }}>
        <div className="ac">
          <span>SPECIES TYPES</span>
          <b>{fishCatalog.length}</b>
        </div>
        <div className="ac">
          <span>TOTAL WEIGHT STOCK</span>
          <b>{Math.round(totalStock)} Kg</b>
        </div>
        <div className="ac">
          <span>AVAILABLE TODAY</span>
          <b>{fishCatalog.filter((f) => f.status === 'available').length}</b>
        </div>
        <div className="ac">
          <span>OUT OF STOCK</span>
          <b>{fishCatalog.filter((f) => f.status !== 'available').length}</b>
        </div>
      </div>

      <div className="mkt-bar">
        <div className="search">
          <Icon name="search" />
          <input
            type="text"
            placeholder="Filter fish species by name..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      <div style={{ display: 'grid', gap: 10 }}>
        {filtered.map((f) => (
          <button key={f.id} className="inv-row" onClick={() => setEditingFish({ ...f })}>
            <div className="thumb">
              <Icon name="fish" style={{ color: 'var(--teal)', width: 42, height: 42 }} />
            </div>
            <div className="nm">
              <b>{f.name}</b>
              <small>
                {f.cat} · ₹{f.price}/Kg · {f.farm}
              </small>
            </div>
            <div className="stk">
              <small>{f.stock} Kg</small>
              <div className={`meter ${f.stock <= 2 ? 'coral' : ''}`} style={{ width: 100 }}>
                <i style={{ width: `${Math.min(100, (f.stock / 20) * 100)}%` }} />
              </div>
            </div>
            <div className="rt">
              <span className={`tag ${f.status === 'available' ? 'ok' : f.status === 'coming' ? 'warn' : 'coral'}`}>
                {f.status.toUpperCase()}
              </span>
              <Icon name="chevron" />
            </div>
          </button>
        ))}
      </div>

      {/* EDIT INVENTORY SIDE SHEET */}
      {editingFish && (
        <div className="ov" onClick={() => setEditingFish(null)}>
          <div className="ovcard" onClick={(e) => e.stopPropagation()} style={{ padding: 26, width: 440 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 14 }}>
              <h3 style={{ fontFamily: 'var(--disp)', fontSize: 20 }}>Edit — {editingFish.name}</h3>
              <button className="btn ghost sm" onClick={() => setEditingFish(null)}>
                <Icon name="x" />
              </button>
            </div>

            <div style={{ display: 'grid', gap: 14 }}>
              <div className="field">
                <label>Category</label>
                <select
                  value={editingFish.cat}
                  onChange={(e) => setEditingFish({ ...editingFish, cat: e.target.value })}
                >
                  <option>Freshwater</option>
                  <option>Marine</option>
                  <option>Shellfish</option>
                </select>
              </div>

              <div className="form-grid-2">
                <div className="field">
                  <label>Stock (Kg)</label>
                  <input
                    type="number"
                    step="0.5"
                    value={editingFish.stock}
                    onChange={(e) => setEditingFish({ ...editingFish, stock: parseFloat(e.target.value) || 0 })}
                  />
                </div>
                <div className="field">
                  <label>Price / Kg (₹)</label>
                  <input
                    type="number"
                    value={editingFish.price}
                    onChange={(e) => setEditingFish({ ...editingFish, price: parseInt(e.target.value) || 0 })}
                  />
                </div>
              </div>

              <div className="field">
                <label>Availability Status</label>
                <select
                  value={editingFish.status}
                  onChange={(e) => setEditingFish({ ...editingFish, status: e.target.value as any })}
                >
                  <option value="available">Available today</option>
                  <option value="coming">Arriving today</option>
                  <option value="out">Out of stock</option>
                </select>
              </div>

              <div className="field">
                <label>Origin Farm</label>
                <input
                  type="text"
                  value={editingFish.farm}
                  onChange={(e) => setEditingFish({ ...editingFish, farm: e.target.value })}
                />
              </div>

              <button className="btn block" onClick={handleSaveInventory}>
                Save Changes
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ADD NEW SPECIES MODAL */}
      {showAddModal && (
        <div className="ov" onClick={() => setShowAddModal(false)}>
          <div className="ovcard" onClick={(e) => e.stopPropagation()} style={{ padding: 26 }}>
            <h3 style={{ fontFamily: 'var(--disp)', fontSize: 20, marginBottom: 16 }}>Add New Fish to Catalog</h3>
            <form style={{ display: 'grid', gap: 13 }} onSubmit={handleCreateFish}>
              <div className="field">
                <label>Species Name</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Wallago / Catla"
                  value={newFishName}
                  onChange={(e) => setNewFishName(e.target.value)}
                />
              </div>

              <div className="form-grid-2">
                <div className="field">
                  <label>Category</label>
                  <select value={newFishCat} onChange={(e) => setNewFishCat(e.target.value)}>
                    <option>Freshwater</option>
                    <option>Marine</option>
                    <option>Shellfish</option>
                  </select>
                </div>
                <div className="field">
                  <label>Price / Kg (₹)</label>
                  <input
                    type="number"
                    required
                    value={newFishPrice}
                    onChange={(e) => setNewFishPrice(parseInt(e.target.value) || 0)}
                  />
                </div>
              </div>

              <div className="field">
                <label>Initial Stock (Kg)</label>
                <input
                  type="number"
                  step="0.5"
                  value={newFishStock}
                  onChange={(e) => setNewFishStock(parseFloat(e.target.value) || 0)}
                />
              </div>

              <button className="btn block" type="submit">
                Add to Catalog
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
