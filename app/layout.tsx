import type { Metadata } from 'next';
import './globals.css';
import { PondFishProvider } from '@/lib/context';
import { PrototypeBar } from '@/components/PrototypeBar';
import { RazorpayModal } from '@/components/RazorpayModal';
import { Toast } from '@/components/Toast';

export const metadata: Metadata = {
  title: 'PondFish — Digital Ecosystem',
  description: 'Organic fresh fish retail ecosystem with live truck tracking and digital subscriptions.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <PondFishProvider>
          <PrototypeBar />
          {children}
          <RazorpayModal />
          <Toast />
        </PondFishProvider>
      </body>
    </html>
  );
}
