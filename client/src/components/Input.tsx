import { DetailedHTMLProps, InputHTMLAttributes, forwardRef } from "react";
import './input.css'

export const Input = forwardRef<HTMLInputElement, DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>>(({ className, ...rest }, ref) => {
    return <input className={`inputs ${className}`} {...rest} ref={ref} />
})