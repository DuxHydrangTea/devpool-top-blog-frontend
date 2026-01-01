import { A } from "@solidjs/router"
import { createSignal, For, Setter } from "solid-js";
import { cn } from "~/libs/cn";
import { OutlineButton } from "./Button";

type Category = {
    id: number,
    icon: string,
    label: string,
    isActive?: boolean,
    onClick?: () => void
}

const topCategories: Category[] = [
    {
        id: 1,
        icon: "home",
        label: "Home",
    },
    {
        id: 2,
        icon: "auto_stories",
        label: "Reading List",
    },
    {
        id: 3,
        icon: "podcasts",
        label: "Podcasts",
    },
    {
        id: 4,
        icon: "videocam",
        label: "Videos",
    },
    {
        id: 5,
        icon: "local_offer",
        label: "Tags",
    },
    {
        id: 6,
        icon: "help",
        label: "FAQ",
    }
];

const tags: string[] = [
    "javascript",
    "webdev",
    "beginners",
    "productivity",
    "css",
];

type LeftAsignProps = {
    category: number,
    setCategory: (i: number) => void
}

export default function LeftAsign(props: LeftAsignProps) {
    return <>
        <nav class="flex flex-col gap-5 text-accent/60 text-sm">
            <ul class="flex flex-col gap-2 font-mono">
                <For each={topCategories}>
                    {(m) => 
                        <li>
                            <TopCategoryAsign {...m} isActive={m.id === props.category} onClick={() => props.setCategory(m.id)}/>
                        </li>
                    }
                </For>
            </ul>

            <div class="mt-8 pt-6 border-t border-primary/20">
                <div class="flex justify-between text-primary mb-4 items-center">
                    <p class="uppercase font-bold text-xs font-mono">
                        My Tags
                    </p>
                    <button class="material-symbols-outlined text-[18px]!">settings</button>
                </div>
                <ul class="flex flex-col font-mono">
                    <For each={tags}>
                        {(t) => <li class=""><A href="#" class="flex    px-2 py-1.5 hover:text-primary">#{t}</A></li>}
                    </For>
                </ul>
            </div>

            <div class="mt-8 border border-primary p-5 bg-linear-to-b from-secondary/20">
                <div class="flex flex-col gap-2">
                    <p class="flex gap-1 font-display text-xl">
                        <span class="text-accent">
                            DevPool
                        </span>
                        <span class="italic text-primary uppercase">
                            Top
                        </span>
                    </p>
                    <p class="font-mono">
                        Join the inner circle. Exclusive badges & features await.
                    </p>
                    <OutlineButton>
                        <span class="uppercase font-mono text-primary hover:text-white">
                            upgrade now
                        </span>
                    </OutlineButton>
                </div>
            </div>
        </nav>
    </>
}

const TopCategoryAsign = (props: Category) => {
    return <>
        <button class={
            cn(
                "flex w-full font-bold items-center gap-3 px-3 py-2 border-l-2 border-transparent hover:bg-secondary/20 hover:text-primary hover:border-primary",
                props.isActive && "bg-secondary/20 text-primary border-primary"
            )
        } onClick={props.onClick}>
            <span class="material-symbols-outlined text-[20px]!">{props.icon}</span>
            <span>{props.label}</span>
        </button>
    </>
}