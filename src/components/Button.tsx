import { JSX } from "solid-js"
import { cn } from "~/libs/cn";

const outlineColors = {
    primary: "border-primary/20 text-primary",
    accent: "border-accent/20 text-accent",
    ink: "border-ink/20 text-ink"
}

const filledColors = {
    primary: "bg-primary hover:bg-primary-hover",
    accent: "bg-accent hover:bg-accent-hover"
}

type outlineColorsType = keyof typeof outlineColors;

type filledColorsType = keyof typeof filledColors;

interface OutlineButtonProps extends JSX.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: outlineColorsType  
}

interface FilledButtonProps extends JSX.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: filledColorsType
}

const OutlineButton = ({ variant = "primary",  ...props}: OutlineButtonProps) => {
    return <>
        <button class={
            cn("hidden sm:flex h-9 items-center justify-center px-4 rounded-lg bg-transparent border border-ink/20 text-ink text-sm font-bold hover:bg-white transition-colors",
                outlineColors[variant]
            )
        } >
            {props.children}
        </button>
    </>
}

const FilledButton = ({ variant = "primary",  ...props}: FilledButtonProps) => {
    return <>
        <button class={
            cn("flex h-9 items-center justify-center px-4 rounded-lg bg-accent hover:bg-accent-hover text-white text-sm font-bold transition-colors shadow-sm",
                filledColors[variant]
            )
        }>
            {props.children}
        </button>
    </>
}

export {
    OutlineButton,
    FilledButton
}