import { JSX } from "solid-js";
import { cn } from "~/libs/cn";

const filledColorMap = {
    primary: "border-primary bg-primary hover:bg-primary/80",
    secondary: "border-secondary bg-secondary hover:bg-secondary/80",
    danger: "border-red-500 bg-red-500 hover:bg-red-500/80",
    dark: "border-dark bg-dark hover:bg-dark/80",
    accent: "border-accent bg-accent hover:bg-accent/80",
    card: "border-card bg-card hover:bg-card/80",
    border: "border-border bg-border hover:bg-border/80",
} as const;
const outlineColorMap = {
    primary: "border-primary/80 hover:bg-primary",
    secondary: "border-secondary/80 hover:bg-secondary",
    danger: "border-danger/80 hover:bg-danger",
    dark: "border-dark/80 hover:bg-dark",
    accent: "border-accent/80 hover:bg-accent",
    card: "border-card/80 hover:bg-card",
    border: "border-border/80 hover:bg-border",
}
type FilledButtonColor = keyof typeof filledColorMap;
type OutlineButtonColor = keyof typeof outlineColorMap;

interface IconButtonInterface extends JSX.ButtonHTMLAttributes<HTMLButtonElement>{
    icon: JSX.Element
}

interface OutlineButtonInterface extends JSX.ButtonHTMLAttributes<HTMLButtonElement>{
    outlineColor?: OutlineButtonColor,
}

interface FilledButtonInterface extends JSX.ButtonHTMLAttributes<HTMLButtonElement>{
    bgColor?: FilledButtonColor,
}

export function OutlineButton({outlineColor = "primary", ...props}: OutlineButtonInterface){
    const classes = outlineColorMap[outlineColor];
    // const classes = `border-${outlineColor}/80 hover:bg-${outlineColor}`;
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

export function FilledButton({bgColor = "primary", ...props}: FilledButtonInterface) {
    const classes = filledColorMap[bgColor];

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

export function IconButton({icon, ...props}: IconButtonInterface) {
    return (
        <button class="flex items-center px-5 h-10 transition text-primary/80 cursor-pointer hover:text-primary" {...props}>
            {icon}
        </button>
    )
}