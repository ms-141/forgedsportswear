"use client";

import { Minus, Plus } from "lucide-react";

type Props = {
  value: number;
  min?: number;
  step?: number;
  onChange: (value: number) => void;
};

export function QuantitySelector({ value, min = 6, step = 1, onChange }: Props) {
  const decrement = () => onChange(Math.max(min, value - step));
  const increment = () => onChange(value + step);

  return (
    <div className="inline-flex items-center overflow-hidden rounded-md border border-brand-border bg-brand-bg">
      <button
        type="button"
        onClick={decrement}
        disabled={value <= min}
        aria-label="Decrease quantity"
        className="flex h-11 w-11 items-center justify-center text-brand-silver transition-colors hover:bg-brand-surface-2 hover:text-brand-orange disabled:cursor-not-allowed disabled:opacity-30"
      >
        <Minus size={16} />
      </button>
      <input
        type="number"
        min={min}
        value={value}
        onChange={(e) => {
          const next = parseInt(e.target.value, 10);
          onChange(Number.isNaN(next) ? min : Math.max(min, next));
        }}
        className="h-11 w-16 bg-transparent text-center font-display text-lg font-semibold text-white outline-none [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
      />
      <button
        type="button"
        onClick={increment}
        aria-label="Increase quantity"
        className="flex h-11 w-11 items-center justify-center text-brand-silver transition-colors hover:bg-brand-surface-2 hover:text-brand-orange"
      >
        <Plus size={16} />
      </button>
    </div>
  );
}
