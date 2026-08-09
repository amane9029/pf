'use client';

import React from 'react';
import { usePondFish } from '@/lib/context';
import { Icon } from '@/lib/icons';
import { TruckTrackerWidget } from '@/components/TruckTrackerWidget';

export default function AdminDeliveryPage() {
  const { published, togglePublishDelivery, markTruckArrived } = usePondFish();

  return (
    <div>
      <div className="sec-head" style={{ marginBottom: 20 }}>
        <h2>Live Delivery Fleet Dispatcher</h2>
        <p>Control live truck GPS broadcasts, ETA parameters, and customer notification pushes.</p>
      </div>

      <div className="truck-hero">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <b style={{ fontSize: 18, display: 'block' }}>Vehicle #TS-09-BF-4410 (3-Ton Refrigerated Truck)</b>
            <small style={{ color: 'var(--mut)' }}>Driver: Srinivas Rao · Departs Warangal Farm @ 6:15 AM Daily</small>
          </div>

          <div style={{ display: 'flex', gap: 10 }}>
            <button
              className={`btn sm ${published ? 'coral' : 'okbtn'}`}
              onClick={togglePublishDelivery}
            >
              {published ? 'Pause Customer Visibility' : 'Publish to Customers'}
            </button>
            <button className="btn sm" onClick={markTruckArrived}>
              <Icon name="check" /> Trigger Arrival Alert
            </button>
          </div>
        </div>

        <div style={{ marginTop: 20 }}>
          <TruckTrackerWidget />
        </div>
      </div>

      <div className="truck-grid">
        <div className="a-card">
          <header>
            <b>Farm Sourcing Origin</b>
          </header>
          <div className="kv2">
            <span>Farm Name</span>
            <b>Sri Lakshmi Organic Ponds</b>
          </div>
          <div className="kv2">
            <span>Location</span>
            <b>Warangal Dist, Telangana</b>
          </div>
          <div className="kv2">
            <span>Total Harvest</span>
            <b>320 Kg</b>
          </div>
        </div>

        <div className="a-card">
          <header>
            <b>Transit Telemetry</b>
          </header>
          <div className="kv2">
            <span>Vehicle Speed</span>
            <b className="mono">62 km/h</b>
          </div>
          <div className="kv2">
            <span>Ice Temp</span>
            <b className="mono">2.4 °C</b>
          </div>
          <div className="kv2">
            <span>Broadcast Status</span>
            <b style={{ color: published ? 'var(--ok)' : 'var(--amber)' }}>
              {published ? 'Published ✓' : 'Paused'}
            </b>
          </div>
        </div>

        <div className="a-card">
          <header>
            <b>Destination Warehouse</b>
          </header>
          <div className="kv2">
            <span>Store</span>
            <b>PondFish Kukatpally</b>
          </div>
          <div className="kv2">
            <span>Receiving Staff</span>
            <b>Ramesh Kumar (WK-1008)</b>
          </div>
          <div className="kv2">
            <span>Counter Status</span>
            <b className="tag ok">READY</b>
          </div>
        </div>
      </div>
    </div>
  );
}
