'use client';

import React, { useState } from 'react';
import { usePondFish, SubPlan } from '@/lib/context';
import { Icon } from '@/lib/icons';

export default function AdminSubscriptionsPage() {
  const { subPlans, updateSubPlan, addSubPlan } = usePondFish();
  const [editingPlan, setEditingPlan] = useState<SubPlan | null>(null);
  const [editingFeaturesText, setEditingFeaturesText] = useState('');
  const [showAddModal, setShowAddModal] = useState(false);

  // New Plan form state
  const [newName, setNewName] = useState('');
  const [newFee, setNewFee] = useState(3500);
  const [newAllow, setNewAllow] = useState(2.5);
  const [newDesc, setNewDesc] = useState('Ideal for regular households & seafood lovers');
  const [newFeaturesText, setNewFeaturesText] = useState('Up to 2.5 Kg weekly allowance\nPriority express counter pickup\nFree home delivery within 5 km');
  const [newPopular, setNewPopular] = useState(false);

  const handleOpenEdit = (plan: SubPlan) => {
    setEditingPlan({ ...plan });
    setEditingFeaturesText(plan.features.join('\n'));
  };

  const handleSaveEdit = () => {
    if (!editingPlan) return;
    const updatedFeatures = editingFeaturesText
      .split('\n')
      .map((f) => f.trim())
      .filter(Boolean);

    updateSubPlan(editingPlan.id, {
      ...editingPlan,
      features: updatedFeatures,
    });
    setEditingPlan(null);
  };

  const handleCreatePlan = (e: React.FormEvent) => {
    e.preventDefault();
    const features = newFeaturesText
      .split('\n')
      .map((f) => f.trim())
      .filter(Boolean);

    addSubPlan({
      name: newName,
      fee: newFee,
      allow: newAllow,
      desc: newDesc,
      popular: newPopular,
      features,
    });

    setShowAddModal(false);
    setNewName('');
  };

  const totalRevenue = subPlans.reduce((acc, p) => acc + p.fee * p.subscribers, 0);
  const totalSubscribers = subPlans.reduce((acc, p) => acc + p.subscribers, 0);

  return (
    <div>
      {/* HEADER WITH INTEGRATED ACTION BUTTON */}
      <div
        style={{
          marginBottom: 24,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: 16,
        }}
      >
        <div>
          <h2 style={{ font: "800 clamp(22px,2.8vw,36px)/1.15 'Inter', sans-serif", letterSpacing: '-.02em', margin: '0 0 6px 0' }}>
            Subscription Engine & Pricing Tiers
          </h2>
          <p style={{ color: 'var(--ink2)', margin: 0, fontSize: 14 }}>
            Configure subscription fee structures, weekly weight caps, features, and active tier offerings.
          </p>
        </div>

        <button className="btn sm" onClick={() => setShowAddModal(true)}>
          <Icon name="plus" /> Create New Tier
        </button>
      </div>

      {/* METRICS ROW */}
      <div className="a-cards" style={{ marginBottom: 24 }}>
        <div className="ac">
          <span>ACTIVE TIERS</span>
          <b>{subPlans.length} Offered</b>
        </div>
        <div className="ac">
          <span>TOTAL SUBSCRIBERS</span>
          <b>{totalSubscribers} Users</b>
        </div>
        <div className="ac hl">
          <span>RUN-RATE REVENUE</span>
          <b className="mono">₹{totalRevenue.toLocaleString('en-IN')} / mo</b>
        </div>
      </div>

      {/* TIERS GRID */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(310px, 350px))',
          gap: 18,
          width: '100%',
          marginBottom: 24,
        }}
      >
        {subPlans.map((plan) => (
          <div key={plan.id} className={`card plan ${plan.popular ? 'hot' : ''}`}>
            <div>
              {plan.popular && <span className="pl-tag">MOST POPULAR</span>}
              <h3 style={{ fontSize: 16 }}>{plan.name} Configuration</h3>
              <div className="plan-price" style={{ fontSize: 24 }}>
                ₹{plan.fee.toLocaleString('en-IN')} <small style={{ fontSize: 12 }}>/ month</small>
              </div>

              <p className="plan-desc" style={{ fontSize: 12, margin: '4px 0 12px' }}>
                {plan.desc}
              </p>

              <div style={{ display: 'grid', gap: 6, margin: '12px 0 14px' }}>
                <div className="kv2" style={{ padding: '4px 0' }}>
                  <span>Weekly Allowance</span>
                  <b>{plan.allow} Kg / wk</b>
                </div>
                <div className="kv2" style={{ padding: '4px 0' }}>
                  <span>Active Subscribers</span>
                  <b>{plan.subscribers} Active Users</b>
                </div>
                <div className="kv2" style={{ padding: '4px 0' }}>
                  <span>Monthly Tier Revenue</span>
                  <b className="mono">₹{(plan.fee * plan.subscribers).toLocaleString('en-IN')}</b>
                </div>
              </div>

              <div style={{ paddingTop: 10, borderTop: plan.popular ? '1px dashed rgba(255,255,255,0.15)' : '1px dashed var(--line)' }}>
                <span className="sec-label" style={{ fontSize: 10.5, marginBottom: 6, display: 'block' }}>
                  INCLUDED FEATURES ({plan.features.length})
                </span>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, fontSize: 12, display: 'grid', gap: 6 }}>
                  {plan.features.map((feat, i) => (
                    <li key={i} style={{ display: 'flex', gap: 6, alignItems: 'center' }}>
                      <Icon name="check" className="ic" style={{ width: 14, height: 14 }} />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <button
              className={`btn sm ${plan.popular ? 'coral' : 'ghost'} block`}
              style={{ marginTop: 14 }}
              onClick={() => handleOpenEdit(plan)}
            >
              <Icon name="edit" /> Edit Plan Rules & Pricing
            </button>
          </div>
        ))}
      </div>

      {/* EDIT PLAN MODAL */}
      {editingPlan && (
        <div className="ov" onClick={() => setEditingPlan(null)}>
          <div className="ovcard" onClick={(e) => e.stopPropagation()} style={{ padding: 26, width: 480 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
              <h3 style={{ fontFamily: 'var(--disp)', fontSize: 20 }}>Edit Tier — {editingPlan.name}</h3>
              <button className="btn ghost sm" onClick={() => setEditingPlan(null)}>
                <Icon name="x" />
              </button>
            </div>

            <div style={{ display: 'grid', gap: 14 }}>
              <div className="field">
                <label>Plan Name</label>
                <input
                  type="text"
                  value={editingPlan.name}
                  onChange={(e) => setEditingPlan({ ...editingPlan, name: e.target.value })}
                />
              </div>

              <div className="form-grid-2">
                <div className="field">
                  <label>Monthly Fee (₹)</label>
                  <input
                    type="number"
                    value={editingPlan.fee}
                    onChange={(e) => setEditingPlan({ ...editingPlan, fee: parseInt(e.target.value) || 0 })}
                  />
                </div>
                <div className="field">
                  <label>Weekly Allowance (Kg)</label>
                  <input
                    type="number"
                    step="0.5"
                    value={editingPlan.allow}
                    onChange={(e) => setEditingPlan({ ...editingPlan, allow: parseFloat(e.target.value) || 0 })}
                  />
                </div>
              </div>

              <div className="field">
                <label>Target Audience Description</label>
                <input
                  type="text"
                  value={editingPlan.desc}
                  onChange={(e) => setEditingPlan({ ...editingPlan, desc: e.target.value })}
                />
              </div>

              <div className="field" style={{ display: 'flex', alignItems: 'center', gap: 10, cursor: 'pointer', background: 'var(--sub)', padding: '10px 14px', borderRadius: 8 }}>
                <input
                  type="checkbox"
                  id="pop-check"
                  checked={!!editingPlan.popular}
                  onChange={(e) => setEditingPlan({ ...editingPlan, popular: e.target.checked })}
                  style={{ width: 18, height: 18, accentColor: 'var(--coral)' }}
                />
                <label htmlFor="pop-check" style={{ marginBottom: 0, cursor: 'pointer', fontWeight: 600 }}>
                  Mark as "MOST POPULAR" highlighted tier
                </label>
              </div>

              <div className="field">
                <label>Plan Features & Perks (One feature per line)</label>
                <textarea
                  rows={4}
                  value={editingFeaturesText}
                  onChange={(e) => setEditingFeaturesText(e.target.value)}
                  placeholder="e.g. Up to 2 Kg weekly fish allowance&#10;Express QR counter pickup"
                />
              </div>

              <button className="btn block" onClick={handleSaveEdit}>
                Save Changes to Tier
              </button>
            </div>
          </div>
        </div>
      )}

      {/* CREATE NEW PLAN MODAL */}
      {showAddModal && (
        <div className="ov" onClick={() => setShowAddModal(false)}>
          <div className="ovcard" onClick={(e) => e.stopPropagation()} style={{ padding: 26, width: 480 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
              <h3 style={{ fontFamily: 'var(--disp)', fontSize: 20 }}>Create New Subscription Tier</h3>
              <button className="btn ghost sm" onClick={() => setShowAddModal(false)}>
                <Icon name="x" />
              </button>
            </div>

            <form style={{ display: 'grid', gap: 14 }} onSubmit={handleCreatePlan}>
              <div className="field">
                <label>Plan Name</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Type 3 / Premium Family Tier"
                  value={newName}
                  onChange={(e) => setNewName(e.target.value)}
                />
              </div>

              <div className="form-grid-2">
                <div className="field">
                  <label>Monthly Fee (₹)</label>
                  <input
                    type="number"
                    required
                    value={newFee}
                    onChange={(e) => setNewFee(parseInt(e.target.value) || 0)}
                  />
                </div>
                <div className="field">
                  <label>Weekly Allowance (Kg)</label>
                  <input
                    type="number"
                    step="0.5"
                    required
                    value={newAllow}
                    onChange={(e) => setNewAllow(parseFloat(e.target.value) || 0)}
                  />
                </div>
              </div>

              <div className="field">
                <label>Description</label>
                <input
                  type="text"
                  required
                  placeholder="Short tagline for customers"
                  value={newDesc}
                  onChange={(e) => setNewDesc(e.target.value)}
                />
              </div>

              <div className="field">
                <label>Plan Features (One per line)</label>
                <textarea
                  rows={4}
                  required
                  value={newFeaturesText}
                  onChange={(e) => setNewFeaturesText(e.target.value)}
                />
              </div>

              <div className="field" style={{ display: 'flex', alignItems: 'center', gap: 10, cursor: 'pointer', background: 'var(--sub)', padding: '10px 14px', borderRadius: 8 }}>
                <input
                  type="checkbox"
                  id="new-pop-check"
                  checked={newPopular}
                  onChange={(e) => setNewPopular(e.target.checked)}
                  style={{ width: 18, height: 18, accentColor: 'var(--coral)' }}
                />
                <label htmlFor="new-pop-check" style={{ marginBottom: 0, cursor: 'pointer', fontWeight: 600 }}>
                  Mark as "MOST POPULAR" highlighted tier
                </label>
              </div>

              <button className="btn block" type="submit">
                Create & Publish Subscription Tier
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
