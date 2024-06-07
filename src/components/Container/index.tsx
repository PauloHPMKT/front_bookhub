import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
}

export const Container = ({ children }: ContainerProps) => (
  <div className="px-2 md:px-5 py-4 max-w-7xl mx-auto w-full">
    { children }
  </div>
)