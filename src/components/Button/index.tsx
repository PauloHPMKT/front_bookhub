import classNames from "classnames";
import { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode | string;
  className?: string;
  variant?: 'light' | 'dark';
}

export const Button = ({ children, className, variant, ...rest }: ButtonProps) => {
  return (
    <button 
      { ...rest }
      className={classNames([
        'bg-evergreen-light px-6 py-2 mt-3 rounded-lg shadow-md font-medium',
        variant === 'dark' && 'bg-evergreen-light text-white',
        variant === 'light' && 'bg-white text-evergreen-light border-2 border-evergreen-light ',
        className,
      ])}
    >
      { children }
    </button> 
  );
}