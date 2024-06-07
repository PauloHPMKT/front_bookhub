import classNames from "classnames";
import { useCallback } from "react";

interface TagProps {
  children: string;
  className?: string;
}

export const Tag = ({ children, className }: TagProps) => {
  const randomColors = useCallback(() => {
    const hue = Math.floor(Math.random() * 360);
    const lightness = `hsl(${hue}, 100%, 95%)`;
    const darkness = `hsl(${hue}, 100%, 20%)`;

    return { 
      lightness, 
      darkness 
    };
  }, [])

  return (
    <p 
      style={{ backgroundColor: randomColors().lightness, color: randomColors().darkness }}
      className={classNames([
        "rounded-full bg-green-100 bg-opacity-50 text-evergreen text-center w-fit px-6 py-1",
        className
      ])}
    >
      { children }
    </p>
  );
}
