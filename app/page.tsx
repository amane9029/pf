'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { usePondFish, FishItem } from '@/lib/context';
import { Icon } from '@/lib/icons';
import { FishCard } from '@/components/FishCard';
import { TruckTrackerWidget } from '@/components/TruckTrackerWidget';

export default function LandingPage() {
  const { fishCatalog, showToast } = usePondFish();
  const router = useRouter();

  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [selectedFish, setSelectedFish] = useState<FishItem | null>(null);
  const [contactName, setContactName] = useState('');
  const [contactPhone, setContactPhone] = useState('');
  const [contactMsg, setContactMsg] = useState('');

  const handleContact = (e: React.FormEvent) => {
    e.preventDefault();
    showToast('Message sent! Our store team will call you shortly.', 'send');
    setContactName('');
    setContactPhone('');
    setContactMsg('');
  };

  const handleReserveClick = () => {
    setSelectedFish(null);
    router.push('/customer/market');
  };

  return (
    <section className="portal" id="pt-landing">
      {/* LANDING HEADER - FULL WIDTH EDGE TO EDGE */}
      <header className="lnd-head">
        <div className="lnd-nav">
          <Link className="brand" href="/" title="PondFish Home">
            <span className="mark">
              <Icon name="fish" />
            </span>
            PondFish
          </Link>

          <nav className="desktop-nav">
            <a href="#catch">Today's Fish</a>
            <a href="#how">How It Works</a>
            <a href="#plans">Subscription Plans</a>
            <a href="#app">Mobile App</a>
            <a href="#contact">Contact</a>
          </nav>

          <div className="acts desktop-acts">
            <Link href="/customer/dashboard" className="btn ghost sm">
              Customer Portal
            </Link>
            <Link href="/customer/market" className="btn sm">
              Reserve Fish
            </Link>
          </div>

          {/* MOBILE HAMBURGER TOGGLE */}
          <button
            className="mobile-toggle icon-btn"
            onClick={() => setMobileNavOpen((prev) => !prev)}
            aria-label="Toggle navigation"
          >
            <Icon name={mobileNavOpen ? 'x' : 'menu'} />
          </button>
        </div>

        {/* MOBILE SLIDE-DOWN MENU */}
        {mobileNavOpen && (
          <div className="mobile-menu">
            <a href="#catch" onClick={() => setMobileNavOpen(false)}>Today's Fish</a>
            <a href="#how" onClick={() => setMobileNavOpen(false)}>How It Works</a>
            <a href="#plans" onClick={() => setMobileNavOpen(false)}>Subscription Plans</a>
            <a href="#app" onClick={() => setMobileNavOpen(false)}>Mobile App</a>
            <a href="#contact" onClick={() => setMobileNavOpen(false)}>Contact</a>
            <div className="mobile-acts">
              <Link href="/customer/dashboard" className="btn ghost sm block" onClick={() => setMobileNavOpen(false)}>
                Customer Portal
              </Link>
              <Link href="/customer/market" className="btn sm block" onClick={() => setMobileNavOpen(false)}>
                Reserve Fish
              </Link>
            </div>
          </div>
        )}
      </header>

      {/* TICKER BAND */}
      <div className="ticker">
        <div className="ticker-track">
          <span>
            <b>ORGANIC FARM HARVEST:</b> <i>LIVE</i> 320 Kg Fresh Catch En Route to Kukatpally Store
          </span>
          <span>
            <b>DAILY CUTOFF:</b> Reserve before 6:30 PM for Guaranteed Counter Pickup
          </span>
          <span>
            <b>SUBSCRIPTION BENEFITS:</b> Up to 3 Kg Weekly Included in Plan
          </span>
          <span>
            <b>ORGANIC FARM HARVEST:</b> <i>LIVE</i> 320 Kg Fresh Catch En Route to Kukatpally Store
          </span>
        </div>
      </div>

      {/* HERO SECTION */}
      <div className="wrap hero">
        <div>
          <div className="eyebrow">Direct Farm to Warehouse · Daily Fresh Catch</div>
          <h1>
            Farm-fresh fish, <em>tracked live</em> to your table.
          </h1>
          <p className="lede">
            Know exactly when today's catch arrives from our organic ponds. Reserve your favorite fish online with subscription discounts & skip counter queues with digital QR passes.
          </p>
          <div className="hero-cta">
            <Link href="/customer/market" className="btn">
              <Icon name="fish" /> Reserve Today's Catch
            </Link>
            <a href="#plans" className="btn ghost">
              View Subscription Plans
            </a>
          </div>

          <div className="hero-stats">
            <div>
              <b>100%</b>
              <span>Organic Farm Sourced</span>
            </div>
            <div>
              <b>45 min</b>
              <span>Average Delivery Time</span>
            </div>
            <div>
              <b>4.9 ★</b>
              <span>Rating in Hyderabad</span>
            </div>
          </div>
        </div>

        <div className="hero-r">
          <TruckTrackerWidget />

          <div className="card tilt1" style={{ padding: 18 }}>
            <div className="arr-row">
              <Icon name="check" />
              <b>Rohu (Organic Pond #4)</b>
              <span>Arrived 8:15 AM</span>
            </div>
            <div className="arr-row">
              <Icon name="check" />
              <b>Katla (Godavari Basin)</b>
              <span>Arrived 8:15 AM</span>
            </div>
            <div className="arr-row">
              <Icon name="clock" />
              <b>Murrel (Korameenu)</b>
              <span>In Truck (ETA 42m)</span>
            </div>
          </div>
        </div>
      </div>

      {/* FRESH CATCH SECTION */}
      <section className="blk" id="catch" style={{ background: '#fff', borderTop: '1px solid var(--line)', borderBottom: '1px solid var(--line)' }}>
        <div className="wrap">
          <div className="sec-head">
            <span className="sec-label">DAILY CATALOG</span>
            <h2>Today's Fresh Harvest</h2>
            <p>Sourced early morning from certified organic ponds. Click any fish to inspect origin & reserve!</p>
          </div>

          <div className="fish-grid">
            {fishCatalog.map((fish) => (
              <FishCard key={fish.id} fish={fish} onClick={() => setSelectedFish(fish)} />
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: 38 }}>
            <Link href="/customer/market" className="btn">
              Browse Full Catalog & Reserve Now <Icon name="arrow" />
            </Link>
          </div>
        </div>
      </section>

      {/* FISH DETAIL PREVIEW MODAL */}
      {selectedFish && (
        <div className="ov" onClick={() => setSelectedFish(null)}>
          <div className="ovcard" onClick={(e) => e.stopPropagation()} style={{ padding: 26, width: 480 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 14 }}>
              <h3 style={{ fontFamily: 'var(--disp)', fontSize: 24 }}>{selectedFish.name}</h3>
              <button className="btn ghost sm" onClick={() => setSelectedFish(null)}>
                <Icon name="x" />
              </button>
            </div>

            <div style={{ background: 'linear-gradient(135deg, ' + selectedFish.c1 + ' 0%, ' + selectedFish.c2 + ' 100%)', borderRadius: 12, padding: 24, textAlign: 'center', color: '#fff', marginBottom: 18 }}>
              <Icon name="fish" style={{ width: 64, height: 64, margin: '0 auto' }} />
              <b style={{ fontSize: 20, display: 'block', marginTop: 8 }}>₹{selectedFish.price} / Kg</b>
              <small style={{ opacity: 0.9 }}>{selectedFish.stock} Kg available in store today</small>
            </div>

            <div className="info-rows" style={{ marginBottom: 18 }}>
              <div>
                <span>Category</span>
                <b>{selectedFish.cat}</b>
              </div>
              <div>
                <span>Farm Origin</span>
                <b>{selectedFish.farm}</b>
              </div>
              <div>
                <span>Harvest Time</span>
                <b>Today, 5:30 AM</b>
              </div>
              <div>
                <span>Description</span>
                <b style={{ maxWidth: 220 }}>{selectedFish.desc}</b>
              </div>
            </div>

            <button className="btn block" onClick={handleReserveClick}>
              <Icon name="fish" /> Go to Market & Reserve Weight
            </button>
          </div>
        </div>
      )}

      {/* HOW IT WORKS */}
      <section className="blk how" id="how">
        <div className="wrap">
          <span className="sec-label">SMOOTH WORKFLOW</span>
          <h2>How PondFish Operates</h2>

          <ol className="steps">
            <li>
              <b>1</b>
              <h4>Farm Harvest</h4>
              <p>Fish harvested at 5:00 AM from Warangal organic ponds.</p>
            </li>
            <li>
              <b>2</b>
              <h4>Live Truck Tracking</h4>
              <p>Track delivery vehicle route & real-time ETA online.</p>
            </li>
            <li>
              <b>3</b>
              <h4>Digital Reservation</h4>
              <p>Reserve weight allowance using your subscription or Razorpay.</p>
            </li>
            <li>
              <b>4</b>
              <h4>Instant QR Pass</h4>
              <p>Receive digital QR ticket pass directly on your phone.</p>
            </li>
            <li>
              <b>5</b>
              <h4>Express Counter Pickup</h4>
              <p>Worker scans QR, weighs fresh fish, and packs in under 60 seconds.</p>
            </li>
            <li>
              <b>6</b>
              <h4>Enjoy Fresh Meal</h4>
              <p>Zero wait time, guaranteed stock, 100% fresh taste.</p>
            </li>
          </ol>
        </div>
      </section>

      {/* SUBSCRIPTION PLANS */}
      <section className="blk" id="plans">
        <div className="wrap">
          <div className="sec-head">
            <span className="sec-label">SUBSCRIPTIONS</span>
            <h2>Weekly Purchase Plans</h2>
            <p>Enjoy discounted fish prices and weekly prepaid allowances designed for regular fresh fish consumers.</p>
          </div>

          <div className="plans">
            <div className="plan">
              <h3>Type 1 Subscription</h3>
              <div className="plan-for">Ideal for small families (1-2 weekly meals)</div>
              <div className="plan-price">
                ₹2,000 <small>/ month</small>
              </div>
              <ul>
                <li>
                  <Icon name="check" /> Up to <b>2 Kg weekly</b> fish allowance
                </li>
                <li>
                  <Icon name="check" /> Priority booking access before cutoff
                </li>
                <li>
                  <Icon name="check" /> Express QR counter pickup
                </li>
                <li>
                  <Icon name="check" /> Unused credit carries over to next week
                </li>
              </ul>
              <Link href="/customer/subscription" className="btn ghost block">
                Select Type 1
              </Link>
            </div>

            <div className="plan hot">
              <span className="pl-tag">MOST POPULAR</span>
              <h3>Type 2 Subscription</h3>
              <div className="plan-for">Ideal for seafood lovers & larger households</div>
              <div className="plan-price">
                ₹6,000 <small>/ month</small>
              </div>
              <ul>
                <li>
                  <Icon name="check" /> Up to <b>3 Kg weekly</b> premium fish allowance
                </li>
                <li>
                  <Icon name="check" /> Access to high-demand marine species (Pomfret, Prawns)
                </li>
                <li>
                  <Icon name="check" /> Free home delivery option (within 5 km)
                </li>
                <li>
                  <Icon name="check" /> Dedicated customer support manager
                </li>
              </ul>
              <Link href="/customer/subscription" className="btn coral block">
                Subscribe Type 2
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* APP DOWNLOAD BAND */}
      <section className="appband" id="app">
        <div className="wrap app-in">
          <div>
            <span className="sec-label">MOBILE EXPERIENCE</span>
            <h2>Download the PondFish App</h2>
            <p>Get push alerts the exact minute today's fish truck leaves the farm. Manage subscriptions, show QR tickets, and track delivery live.</p>

            <div className="store-btns">
              <a href="#" className="store-btn">
                <Icon name="arrow" />
                <div>
                  <small>DOWNLOAD ON THE</small>
                  <b>App Store</b>
                </div>
              </a>
              <a href="#" className="store-btn">
                <Icon name="arrow" />
                <div>
                  <small>GET IT ON</small>
                  <b>Google Play</b>
                </div>
              </a>
            </div>
          </div>

          <div className="phone">
            <div className="phone-sc">
              <div className="notch" />
              <b style={{ fontFamily: 'var(--disp)', fontSize: 18, color: 'var(--ink)' }}>PondFish App</b>
              <p style={{ marginTop: 6, fontSize: 12 }}>Scan to install Capacitor native build</p>
              <div style={{ background: '#fff', border: '1px solid var(--line)', padding: 12, borderRadius: 10, marginTop: 12 }}>
                <Icon name="qr" style={{ width: 100, height: 100, margin: '0 auto' }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="blk" id="contact">
        <div className="wrap contact">
          <div className="card cinfo">
            <h3>PondFish Retail Store</h3>
            <div className="ci-row">
              <Icon name="pin" />
              <div>
                <b>Store Address</b>
                <small>Plot 104, Main Road, Kukatpally, Hyderabad 500072</small>
              </div>
            </div>
            <div className="ci-row">
              <Icon name="phone" />
              <div>
                <b>Phone Helpline</b>
                <small>+91 98480 22334 / +91 98480 12345</small>
              </div>
            </div>
            <div className="ci-row">
              <Icon name="clock" />
              <div>
                <b>Store Timings</b>
                <small>Everyday: 6:30 AM – 8:00 PM</small>
              </div>
            </div>
          </div>

          <form className="card cform" onSubmit={handleContact}>
            <h3>Get in Touch</h3>
            <div className="field">
              <label>Your Name</label>
              <input type="text" required value={contactName} onChange={(e) => setContactName(e.target.value)} placeholder="e.g. Rahul Sharma" />
            </div>
            <div className="field">
              <label>Mobile Number</label>
              <input type="tel" required value={contactPhone} onChange={(e) => setContactPhone(e.target.value)} placeholder="+91 98480 00000" />
            </div>
            <div className="field">
              <label>Message / Special Request</label>
              <textarea rows={3} value={contactMsg} onChange={(e) => setContactMsg(e.target.value)} placeholder="Ask about bulk orders or fish availability..." />
            </div>
            <button className="btn block" type="submit">
              Send Inquiry <Icon name="send" />
            </button>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <div className="wrap">
          <div className="f-in">
            <div>
              <Link className="brand" href="/" title="PondFish Home">
                <span className="mark">
                  <Icon name="fish" />
                </span>
                PondFish
              </Link>
              <p style={{ fontSize: 13, lineHeight: 1.6, color: '#A4C2FC' }}>
                Organic fresh fish retail ecosystem connecting organic ponds directly to Hyderabad households with live GPS visibility.
              </p>
            </div>
            <div>
              <h5>Navigation</h5>
              <a href="#catch">Today's Catch</a>
              <a href="#how">How It Works</a>
              <a href="#plans">Subscription Plans</a>
            </div>
            <div>
              <h5>Portals</h5>
              <Link href="/customer/dashboard">Customer Dashboard</Link>
              <Link href="/worker">Worker Counter</Link>
              <Link href="/admin/dashboard">Admin Management</Link>
            </div>
            <div>
              <h5>Legal</h5>
              <a href="#">Privacy Policy</a>
              <a href="#">Terms & Conditions</a>
              <a href="#">FSSAI Certification</a>
            </div>
          </div>

          <div className="f-bottom">
            <span>© 2026 PondFish Ecosystem · Prepared by SProjectX</span>
            <span>Single Codebase Web & Mobile (Capacitor Ready)</span>
          </div>
        </div>
      </footer>
    </section>
  );
}
