import { ReactNode } from "react" 
import './fullscreen.css'

type FullScreenCardProps = {
    children: ReactNode
}

export function FullScreenCard ({ children }: FullScreenCardProps) {
    return <div className="screen__card">
        <div className="screen__cardchildren">{children}</div>
    </div>
}

FullScreenCard.Body = function ({children}: FullScreenCardProps) {
    return <div className="screen__body">{children}</div>
}

FullScreenCard.BelowCard = function ({children}: FullScreenCardProps) {
    return <div className="mt-2 justify-center flex gap-3">{children}</div>
}