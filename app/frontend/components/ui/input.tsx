import * as React from "react"

import { cn } from "@/lib/utils"

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const NoBorderNoOutlineInput = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-10 w-full ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus:outline-none",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
NoBorderNoOutlineInput.displayName = "NoBorderNoOutlineInput"

export { NoBorderNoOutlineInput }
