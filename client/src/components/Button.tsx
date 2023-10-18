import { ButtonHTMLAttributes, DetailedHTMLProps, forwardRef } from "react";
import './button.css'

export const Button = forwardRef<HTMLButtonElement, DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>>(({ className, children, ...rest }, ref) => {
    return <button className={`btn ${className}`} {...rest} ref={ref}>{children}</button>
})