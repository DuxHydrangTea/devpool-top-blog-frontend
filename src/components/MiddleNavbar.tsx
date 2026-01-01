import { For, Setter } from "solid-js"
import { cn } from "~/libs/cn"

const middleNavbars: string[] = [
    "Relevant",
    "Latest",
    "Top"
]

type MiddleNavbarProps = {
    currentIndex: number,
    setCurrentIndex: (i: number) => void
} 

export default function MiddleNavbar(props: MiddleNavbarProps) {
    return (
        <nav class="border-b border-primary/20 pb-4 mb-8">
            <ul class="flex text-xl font-display gap-8">
                <For each={middleNavbars}>
                    {(n, i) => (
                        <li>
                            <button class={cn(
                                "text-accent/50 cursor-pointer hover:text-accent",
                                (i() === props.currentIndex) && "text-primary"
                            )} onClick={() => props.setCurrentIndex(i())} >{n}</button>
                        </li>
                    )}
                </For>
            </ul>
        </nav>
    )
}