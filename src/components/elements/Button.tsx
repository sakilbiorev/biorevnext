import type { VariantProps } from 'class-variance-authority';
// eslint-disable-next-line import/no-extraneous-dependencies
import { cva } from 'class-variance-authority';
import Link from 'next/link';
import * as React from 'react';

import { cn } from '@/utils/utils';

const buttonVariants = cva('', {
  variants: {
    types: {
      default:
        "border-[1px] border-[#000000] bg-[#000000] text-[13px] font-medium uppercase text-white-0 transition-all duration-700 before:absolute before:left-[10px] before:top-[100%] before:h-[1px] before:w-[calc(100%+2px)] before:bg-[#000000] before:transition-all before:duration-700 before:content-[''] after:absolute after:left-[calc(100%+6px)] after:top-[10px] after:box-border after:h-[calc(100%+2px)] after:w-[1px] after:bg-[#000000] after:transition-all after:duration-700 after:content-[''] hover:bg-transparent hover:text-[#000000] hover:before:w-0 hover:after:h-0",
      destructive:
        'bg-red-500 text-white-0 hover:bg-red-600 dark:hover:bg-red-600',
      outline:
        'border border-slate-200 bg-transparent hover:bg-slate-100 dark:border-[#000000] dark:text-slate-500',
      subtle:
        'bg-slate-100 text-slate-900 hover:bg-slate-200 dark:bg-[#000000] dark:text-slate-100',
      ghost:
        'bg-transparent hover:bg-slate-100 data-[state=open]:bg-transparent dark:bg-transparent dark:text-slate-100 dark:hover:bg-slate-800 dark:hover:text-slate-100 dark:data-[state=open]:bg-transparent',
      link: 'bg-transparent text-slate-900 underline-offset-4 hover:bg-transparent hover:underline dark:bg-transparent dark:text-slate-700 dark:hover:bg-transparent',
      orange:
        "border-[1px] border-orange-0 bg-orange-0 text-[13px] font-medium uppercase text-white-0 transition-all duration-700 before:absolute before:left-[10px] before:top-[calc(100%+6px)] before:h-[1px] before:w-[calc(100%+2px)] before:bg-orange-0 before:transition-all before:duration-700 before:content-[''] after:absolute after:left-[calc(100%+6px)] after:top-[10px] after:box-border after:h-[calc(100%+2px)] after:w-[1px] after:bg-orange-0 after:transition-all after:duration-700 after:content-[''] hover:bg-transparent hover:text-orange-0 hover:before:w-0 hover:after:h-0",
    },
    size: {
      default: 'px-10 py-5',
      sm: 'px-6 py-3  before:left-[10px] before:top-[50px] after:left-[149px] after:top-[10px]',
      lg: 'px-12 py-6 before:left-[10px] before:top-[75px] after:left-[198px] after:top-[10px]',
    },
  },
  defaultVariants: {
    types: 'default',
    size: 'default',
  },
});

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  href?: string;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, href, types, size, ...props }, ref) => {
    if (href) {
      return (
        <Link
          href={href}
          className={cn(buttonVariants({ types, size, className }))}
        >
          {children}
        </Link>
      );
    }
    return (
      <div className="relative inline-flex">
        <button
          type="button"
          className={cn(buttonVariants({ types, size, className }))}
          ref={ref}
          {...props}
        >
          {children}
        </button>
      </div>
    );
  }
);
Button.displayName = 'Button';

export { Button, buttonVariants };
