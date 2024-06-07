import { InputHTMLAttributes, forwardRef } from "react"

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  placeholder: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(({ placeholder, ...rest }: InputProps, ref) => {
  return (
    <input 
      ref={ref}
      placeholder={placeholder}
      className="w-full px-4 py-2 mt-3 rounded-lg shadow-md font-medium outline-none my-2"
      { ...rest }
    />
  )
})