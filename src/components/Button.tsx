import { JSX } from "solid-js";
import { cn } from "~/libs/cn";

const colorMap = {
    primary: "border-primary bg-primary hover:bg-primary/80",
    secondary: "border-secondary bg-secondary hover:bg-secondary/80",
    danger: "border-red-500 bg-red-500 hover:bg-red-500/80",
    dark: "border-dark bg-dark hover:bg-dark/80",
    accent: "border-accent bg-accent hover:bg-accent/80",
    card: "border-card bg-card hover:bg-card/80",
    border: "border-border bg-border hover:bg-border/80",
} as const;

interface  TextButtonInterface extends JSX.ButtonHTMLAttributes<HTMLButtonElement> {
    label: string,
}

interface IconButtonInterface extends JSX.ButtonHTMLAttributes<HTMLButtonElement>{
    icon: JSX.Element
}

interface OutlineButtonInterface extends JSX.ButtonHTMLAttributes<HTMLButtonElement>{
    outlineColor?: string,
}

interface FilledButtonInterface extends JSX.ButtonHTMLAttributes<HTMLButtonElement>{
    bgColor?: string,
}

export function OutlineButton({outlineColor, ...props}: OutlineButtonInterface){
    outlineColor = outlineColor || "primary";
    const classes = `border-${outlineColor}/80 hover:bg-${outlineColor}`;

    return (
        <button {...props} class={cn(
            "flex items-center border px-5 h-10 text-xs font-mono font-bold tracking-widest cursor-pointer transition",
            props.class,
            classes,
        )}>
            {props.children}
        </button>
    )
}

export function FilledButton({bgColor, ...props}: FilledButtonInterface) {
    bgColor = bgColor || "primary";
    const classes = `border-${bgColor} bg-${bgColor} hover:bg-${bgColor}/80`;

    return <> 
        <button class={
            cn(
                "flex items-center border px-5 h-10 text-xs font-mono font-bold tracking-widest cursor-pointer transition hover:translate-y-0.5",
                classes
            )
        }>
            {props.children}
        </button>
    </>
}

export function TextButton({ label, ...props }: TextButtonInterface) {
    return (
        <button {...props} class={cn(
            "flex items-center border border-primary/80 px-5 h-10 text-xs uppercase font-mono font-bold tracking-widest hover:bg-primary hover:text-white cursor-pointer transition",
            props.class
        )}>
            {label}
        </button>
    )
}

export function IconButton({icon, ...props}: IconButtonInterface) {
    return (
        <button class="flex items-center px-5 h-10 transition text-primary/80 cursor-pointer hover:text-primary" {...props}>
            {icon}
        </button>
    )
}