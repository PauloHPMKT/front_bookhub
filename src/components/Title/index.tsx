import classNames from "classnames";

interface TitleProps {
  children: string;
  className?: string;
}

export const Title = ({ children, className }: TitleProps) => {
  return (
    <div className={
      classNames([
        "md:text-5xl text-2xl border-b-4 border-b-evergreen-light w-fit font-bold text-evergreen",
        className
      ])
    }>
      { children }
    </div>
  )
}