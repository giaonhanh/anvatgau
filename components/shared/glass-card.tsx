'use client';

import React, { ReactNode } from 'react';
import { motion, MotionProps } from 'framer-motion';

interface GlassCardProps extends Omit<MotionProps, 'children'> {
  children: ReactNode;
  /** Additional class names to apply */
  className?: string;
}

/**
 * GlassCard – a reusable card with a frosted‑glass background.
 *
 * Hover animation lifts the card slightly (y: -4) and scales it up a bit (1.01).
 * It uses the utility classes defined in `styles/globals.css`:
 *   • `ios-glass` – backdrop blur effect
 *   • `ios-shadow` – soft shadow
 * The corner radius is set to 24px to match the design spec.
 */
export const GlassCard: React.FC<GlassCardProps> = ({
  children,
  className = '',
  ...motionProps
}) => {
  return (
    <motion.div
      className={`ios-glass ios-shadow ${className}`}
      style={{ borderRadius: '24px' }}
      whileHover={{ y: -4, scale: 1.01 }}
      {...motionProps}
    >
      {children}
    </motion.div>
  );
};
