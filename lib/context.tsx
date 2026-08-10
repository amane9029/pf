'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

export interface FishItem {
  id: string;
  name: string;
  cat: string;
  price: number;
  stock: number;
  status: 'available' | 'coming' | 'out';
  farm: string;
  desc: string;
  c1: string;
  c2: string;
  image?: string;
}

export interface Booking {
  id: string;
  fish: string;
  qty: number;
  amt: number;
  covered: number;
  date: string;
  time: string;
  status: 'Active' | 'Completed';
  done?: string;
  cust?: string;
  phone?: string;
  pay?: string;
}

export interface NotificationItem {
  id?: string;
  cat: 'Booking' | 'Subscription' | 'Delivery';
  icon: string;
  cls: string;
  title: string;
  desc: string;
  t: string;
  unread: boolean;
}

export interface WorkerOrder {
  id: string;
  cust: string;
  phone: string;
  fish: string;
  qty: number;
  time: string;
  pay: string;
  done?: string;
}

interface PondFishContextType {
  user: {
    name: string;
    phone: string;
    id: string;
    since: string;
    area: string;
    age: number;
  };
  sub: {
    active: boolean;
    type: string;
    fee: number;
    allow: number;
    used: number;
    reset: string;
    credit: number;
  };
  subHistory: Array<{ t: string; d: string; a: number }>;
  eta: number;
  published: boolean;
  fishCatalog: FishItem[];
  bookings: Booking[];
  notifs: NotificationItem[];
  workerPending: WorkerOrder[];
  workerDone: WorkerOrder[];
  toastMessage: { text: string; icon: string } | null;
  razorpayModal: { open: boolean; amount: number; onSuccess?: () => void } | null;
  // actions
  showToast: (text: string, icon?: string) => void;
  openRazorpay: (amount: number, onSuccess: () => void) => void;
  closeRazorpay: () => void;
  addBooking: (fish: FishItem, qty: number, amtToPay: number, coveredQty: number) => string;
  rechargeSub: (planIndex: number) => void;
  completeWorkerOrder: (orderId: string) => void;
  updateFishInventory: (fishId: string, updates: Partial<FishItem>) => void;
  addFishItem: (item: Omit<FishItem, 'id' | 'c1' | 'c2'>) => void;
  togglePublishDelivery: () => void;
  markTruckArrived: () => void;
  markAllNotifsRead: () => void;
}

const INITIAL_FISH: FishItem[] = [
  { id: 'f1', name: 'Rohu', cat: 'Freshwater', price: 320, stock: 10.5, status: 'available', farm: 'Warangal Organic Ponds', desc: 'Fresh daily harvest. Firm texture, perfect for traditional curries.', c1: '#4A72B8', c2: '#1E3A70', image: 'https://images.unsplash.com/photo-1534483509719-3feaee7c30da?auto=format&fit=crop&w=800&q=85' },
  { id: 'f2', name: 'Katla', cat: 'Freshwater', price: 340, stock: 18, status: 'available', farm: 'Godavari Basin Farm', desc: 'Large sweet-water fish. Rich in Omega-3 and vitamin B12.', c1: '#3B82F6', c2: '#1D4ED8', image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=800&q=85' },
  { id: 'f3', name: 'Vannamei Prawns', cat: 'Shellfish', price: 450, stock: 8, status: 'available', farm: 'Nellore Coastal Farm', desc: 'Cleaned, devined fresh prawns. Medium size, sweet natural flavor.', c1: '#FF6B4A', c2: '#C23010', image: 'https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?auto=format&fit=crop&w=800&q=85' },
  { id: 'f4', name: 'Black Pomfret', cat: 'Marine', price: 780, stock: 4, status: 'available', farm: 'Kakinada Deep Sea', desc: 'Wild caught seawater pomfret. Premium delicacy, single bone structure.', c1: '#2563EB', c2: '#1E40AF', image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=85' },
  { id: 'f5', name: 'Tilapia', cat: 'Freshwater', price: 240, stock: 14, status: 'available', farm: 'Warangal Organic Ponds', desc: 'Mild flavor, lean white meat. Great for frying and grilling.', c1: '#60A5FA', c2: '#2563EB', image: 'https://images.unsplash.com/photo-1524704654690-b56c05c78a00?auto=format&fit=crop&w=800&q=85' },
  { id: 'f6', name: 'Murrel (Korameenu)', cat: 'Freshwater', price: 620, stock: 0, status: 'coming', farm: 'Warangal Organic Ponds', desc: 'Highly prized freshwater delicacy. Arrival expected in truck.', c1: '#818CF8', c2: '#4F46E5', image: 'https://images.unsplash.com/photo-1498654896293-37aacf113fd9?auto=format&fit=crop&w=800&q=85' },
];

const INITIAL_NOTIFS: NotificationItem[] = [
  { id: 'n1', cat: 'Delivery', icon: 'truck', cls: 'teal', title: 'Today\'s fish truck is on the way', desc: 'Departed Warangal farm at 6:15 AM. ETA ~42 minutes to Kukatpally.', t: '12 min ago', unread: true },
  { id: 'n2', cat: 'Subscription', icon: 'wallet', cls: 'amber', title: 'Weekly subscription allowance reset', desc: 'Your 2 Kg weekly allowance for Type 1 plan is active.', t: '2 hours ago', unread: true },
  { id: 'n3', cat: 'Booking', icon: 'check', cls: 'teal', title: 'Booking PF-20260807-00121 completed', desc: 'Picked up 2 Kg Rohu at store counter.', t: 'Yesterday', unread: false },
];

const INITIAL_WORKER_PENDING: WorkerOrder[] = [
  { id: 'PF-20260807-00125', cust: 'Stevan Antony', phone: '98480 12345', fish: 'Rohu', qty: 2, time: '11:42 AM', pay: 'Covered by subscription · 2 Kg' },
  { id: 'PF-20260807-00126', cust: 'Rahul Verma', phone: '98661 40987', fish: 'Katla', qty: 3, time: '11:48 AM', pay: 'Razorpay ₹160 · verified' },
  { id: 'PF-20260807-00127', cust: 'Kiran Kumar', phone: '90104 55621', fish: 'Tilapia', qty: 1, time: '11:55 AM', pay: 'Covered by subscription · 1 Kg' },
  { id: 'PF-20260807-00128', cust: 'Meena Iyer', phone: '98499 78120', fish: 'Vannamei Prawns', qty: 1.5, time: '12:03 PM', pay: 'Razorpay ₹675 · verified' },
  { id: 'PF-20260807-00129', cust: 'Arjun Rao', phone: '96525 34098', fish: 'Rohu', qty: 1, time: '12:10 PM', pay: 'Razorpay ₹320 · verified' },
];

const INITIAL_WORKER_DONE: WorkerOrder[] = [
  { id: 'PF-20260807-00124', cust: 'Divya Nair', phone: '97012 33456', fish: 'Pomfret', qty: 1.5, time: '10:22 AM', done: '10:41 AM', pay: 'Razorpay ₹780' },
  { id: 'PF-20260807-00119', cust: 'Suresh Babu', phone: '94401 88721', fish: 'Rohu', qty: 2, time: '09:40 AM', done: '09:58 AM', pay: 'Covered · Type 1' },
  { id: 'PF-20260807-00112', cust: 'Lakshmi Priya', phone: '91770 99234', fish: 'Tilapia', qty: 2.5, time: '08:55 AM', done: '09:12 AM', pay: 'Razorpay ₹600' },
];

const PondFishContext = createContext<PondFishContextType | undefined>(undefined);

export const PondFishProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user] = useState({
    name: 'Stevan Antony',
    phone: '+91 98480 12345',
    id: 'PF-CUST-8821',
    since: 'March 2026',
    area: 'Kukatpally, Hyderabad',
    age: 34,
  });

  const [sub, setSub] = useState({
    active: true,
    type: 'Type 1',
    fee: 2000,
    allow: 2,
    used: 0.5,
    reset: 'Monday 12:00 AM',
    credit: 1500,
  });

  const [subHistory, setSubHistory] = useState([
    { t: 'Type 1', d: '01 Aug 2026', a: 2000 },
    { t: 'Type 1', d: '01 Jul 2026', a: 2000 },
  ]);

  const [eta, setEta] = useState(42);
  const [published, setPublished] = useState(true);
  const [fishCatalog, setFishCatalog] = useState<FishItem[]>(INITIAL_FISH);
  const [notifs, setNotifs] = useState<NotificationItem[]>(INITIAL_NOTIFS);
  const [workerPending, setWorkerPending] = useState<WorkerOrder[]>(INITIAL_WORKER_PENDING);
  const [workerDone, setWorkerDone] = useState<WorkerOrder[]>(INITIAL_WORKER_DONE);

  const [bookings, setBookings] = useState<Booking[]>([
    {
      id: 'PF-20260807-00125',
      fish: 'Rohu',
      qty: 2,
      amt: 0,
      covered: 2,
      date: 'Today',
      time: '11:42 AM',
      status: 'Active',
      cust: 'Stevan Antony',
      phone: '98480 12345',
      pay: 'Covered by subscription · 2 Kg',
    },
    {
      id: 'PF-20260807-00121',
      fish: 'Rohu',
      qty: 2,
      amt: 0,
      covered: 2,
      date: '06 Aug 2026',
      time: '10:15 AM',
      status: 'Completed',
      done: '10:42 AM',
    },
  ]);

  const [toastMessage, setToastMessage] = useState<{ text: string; icon: string } | null>(null);
  const [razorpayModal, setRazorpayModal] = useState<{ open: boolean; amount: number; onSuccess?: () => void } | null>(null);

  // ETA timer simulation
  useEffect(() => {
    const timer = setInterval(() => {
      setEta((prev) => (prev > 2 ? prev - 1 : prev));
    }, 45000);
    return () => clearInterval(timer);
  }, []);

  const showToast = (text: string, icon = 'check') => {
    setToastMessage({ text, icon });
    setTimeout(() => {
      setToastMessage(null);
    }, 3200);
  };

  const openRazorpay = (amount: number, onSuccess: () => void) => {
    setRazorpayModal({ open: true, amount, onSuccess });
  };

  const closeRazorpay = () => {
    setRazorpayModal(null);
  };

  const addBooking = (fish: FishItem, qty: number, amtToPay: number, coveredQty: number): string => {
    const bookingId = `PF-20260807-${Math.floor(10000 + Math.random() * 90000)}`;
    const newBooking: Booking = {
      id: bookingId,
      fish: fish.name,
      qty,
      amt: amtToPay,
      covered: coveredQty,
      date: 'Today',
      time: new Date().toLocaleTimeString('en-IN', { hour: 'numeric', minute: '2-digit' }),
      status: 'Active',
      cust: user.name,
      phone: user.phone,
      pay: coveredQty > 0 ? `Covered by plan · ${coveredQty} Kg` : `Razorpay ₹${amtToPay}`,
    };

    setBookings((prev) => [newBooking, ...prev]);

    // Update stock
    setFishCatalog((prev) =>
      prev.map((f) => {
        if (f.id === fish.id) {
          const nextStock = Math.max(0, f.stock - qty);
          return { ...f, stock: nextStock, status: nextStock <= 0.5 ? 'out' : f.status };
        }
        return f;
      })
    );

    // Update subscription used allowance
    if (coveredQty > 0) {
      setSub((prev) => ({ ...prev, used: prev.used + coveredQty }));
    }

    // Add worker order
    setWorkerPending((prev) => [
      {
        id: bookingId,
        cust: user.name,
        phone: user.phone.replace('+91 ', ''),
        fish: fish.name,
        qty,
        time: newBooking.time,
        pay: newBooking.pay || 'Razorpay verified',
      },
      ...prev,
    ]);

    // Add notification
    setNotifs((prev) => [
      {
        id: 'n-' + Date.now(),
        cat: 'Booking',
        icon: 'check',
        cls: 'teal',
        title: 'Fresh Catch Booked!',
        desc: `${fish.name} · ${qty} Kg reserved. Show QR pass at counter for pickup.`,
        t: 'Just now',
        unread: true,
      },
      ...prev,
    ]);

    showToast(`Booked ${qty} Kg ${fish.name} — QR ticket generated!`, 'qr');
    return bookingId;
  };

  const rechargeSub = (planIndex: number) => {
    const PLANS = [
      { name: 'Type 1', fee: 2000, kg: 2 },
      { name: 'Type 2', fee: 6000, kg: 3 },
    ];
    const plan = PLANS[planIndex] || PLANS[0];

    openRazorpay(plan.fee, () => {
      setSub((prev) => ({
        ...prev,
        active: true,
        type: plan.name,
        fee: plan.fee,
        allow: plan.kg,
        credit: prev.credit + plan.fee,
      }));

      setSubHistory((prev) => [{ t: plan.name, d: 'Today', a: plan.fee }, ...prev]);

      setNotifs((prev) => [
        {
          id: 'n-' + Date.now(),
          cat: 'Subscription',
          icon: 'wallet',
          cls: 'amber',
          title: 'Subscription Recharged',
          desc: `${plan.name} · ₹${plan.fee.toLocaleString('en-IN')} activated successfully.`,
          t: 'Just now',
          unread: true,
        },
        ...prev,
      ]);

      showToast(`${plan.name} activated — ₹${plan.fee.toLocaleString('en-IN')} credit added`, 'wallet');
    });
  };

  const completeWorkerOrder = (orderId: string) => {
    const target = workerPending.find((w) => w.id === orderId);
    if (!target) return;

    setWorkerPending((prev) => prev.filter((w) => w.id !== orderId));
    setWorkerDone((prev) => [
      { ...target, done: new Date().toLocaleTimeString('en-IN', { hour: 'numeric', minute: '2-digit' }) },
      ...prev,
    ]);

    // Update customer booking status if matching
    setBookings((prev) =>
      prev.map((b) => (b.id === orderId ? { ...b, status: 'Completed', done: new Date().toLocaleTimeString('en-IN', { hour: 'numeric', minute: '2-digit' }) } : b))
    );

    showToast(`${orderId} completed · customer notified`, 'check');
  };

  const updateFishInventory = (fishId: string, updates: Partial<FishItem>) => {
    setFishCatalog((prev) =>
      prev.map((f) => {
        if (f.id === fishId) {
          const updated = { ...f, ...updates };
          if (updated.stock <= 0.5 && updated.status === 'available') {
            updated.status = 'out';
          }
          return updated;
        }
        return f;
      })
    );
    showToast(`Inventory updated`, 'check');
  };

  const addFishItem = (item: Omit<FishItem, 'id' | 'c1' | 'c2'>) => {
    const cols = [
      ['#3B82F6', '#1D4ED8'],
      ['#2563EB', '#1E40AF'],
      ['#60A5FA', '#2563EB'],
      ['#818CF8', '#4F46E5'],
    ];
    const c = cols[Math.floor(Math.random() * cols.length)];
    const newFish: FishItem = {
      ...item,
      id: 'f' + Date.now(),
      c1: c[0],
      c2: c[1],
    };
    setFishCatalog((prev) => [...prev, newFish]);
    showToast(`New fish added to catalog`, 'fish');
  };

  const togglePublishDelivery = () => {
    setPublished((prev) => {
      const next = !prev;
      showToast(next ? 'Live delivery published to customers' : 'Customer visibility paused', 'truck');
      return next;
    });
  };

  const markTruckArrived = () => {
    setEta(0);
    showToast('Truck arrived — arrival alert sent to customers', 'check');
  };

  const markAllNotifsRead = () => {
    setNotifs((prev) => prev.map((n) => ({ ...n, unread: false })));
    showToast('All notifications marked as read', 'check');
  };

  return (
    <PondFishContext.Provider
      value={{
        user,
        sub,
        subHistory,
        eta,
        published,
        fishCatalog,
        bookings,
        notifs,
        workerPending,
        workerDone,
        toastMessage,
        razorpayModal,
        showToast,
        openRazorpay,
        closeRazorpay,
        addBooking,
        rechargeSub,
        completeWorkerOrder,
        updateFishInventory,
        addFishItem,
        togglePublishDelivery,
        markTruckArrived,
        markAllNotifsRead,
      }}
    >
      {children}
    </PondFishContext.Provider>
  );
};

export const usePondFish = () => {
  const context = useContext(PondFishContext);
  if (!context) {
    throw new Error('usePondFish must be used within a PondFishProvider');
  }
  return context;
};
