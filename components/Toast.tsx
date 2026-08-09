'use client';

import React from 'react';
import { usePondFish } from '@/lib/context';
import { Icon } from '@/lib/icons';

export const Toast: React.FC = () => {
  const { toastMessage } = usePondFish();

  return (
    <div id="toast" className={toastMessage ? 'show' : ''}>
      <Icon name={toastMessage?.icon || 'check'} />
      <span>{toastMessage?.text}</span>
    </div>
  );
};
