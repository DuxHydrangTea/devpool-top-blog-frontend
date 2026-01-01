import { For } from "solid-js";
import { A } from "@solidjs/router";

export default function RightAside() {
    return (
        <div class="flex flex-col gap-8">
            <TrendingList />
            <FollowList />
            <Footer/>
            <span class="w-full px-4 font-mono uppercase tracking-widest text-xs text-secondary/40">© 2024 DevHub Inc.</span>
        </div>
    )
}

const TrendingList = () => {
    const trendings = [
        {
            label: "Why I left Silicon Valley for a Farm",
            author: "John Doe"
        },
        {
            label: "The death of Junior Devs? AI Analysis",
            author: "TechCrunch"
        },
        {
            label: "Rust vs C++ in 2024: Benchmark",
            author: "SystemDesign"
        }
    ];
    return (
        <div class="border border-primary/40 shadow-retro-sm">
            <div class="border-b p-4 border-primary/40 bg-secondary/10 text-primary font-bold tracking-widest text-xs flex gap-2 items-center">
                <span class="material-symbols-outlined text-base!">trending_up</span>
                <h3 class="uppercase font-mono">trending now</h3>
            </div>
            <For each={trendings}>
                {(t) => (
                    <A href="#" class="p-4 block hover:bg-secondary/10 transition group border-b border-primary/40">
                        <p class="font-display text-sm leading-snug mb-1 group-hover:text-primary">
                            {t.label}
                        </p>
                        <p class="font-mono tracking-widest text-xs text-secondary/80">
                            {t.author}
                        </p>
                    </A>
                )}
            </For>
            <A href="#" class="flex justify-center items-center uppercase text-xs font-bold font-mono p-3 text-primary transition-colors tracking-widest hover:bg-primary hover:text-white duration-300">
                see all trending
            </A>
        </div>
    )
}

const FollowList = () => {
    const authors = [
        {
            name: "Mark Otto",
            nickname: "mdo"
        },
        {
            name: "Fatima",
            nickname: "fatima_dev"
        },
        {
            name: "James V.",
            nickname: "james_v"
        },
    ]
    return (
        <div class="border border-primary/40 flex flex-col gap-4 pb-4 shadow-retro-sm">
            <div class="mx-4 pt-4 border-b border-primary/40">
                <h3 class="font-mono uppercase text-xs text-primary">Who to follow</h3>
            </div>
            <For each={authors}>
                {
                    (a) => (
                        <div class="flex px-4">
                            <A href="#" class="flex cursor-pointer items-center gap-2 flex-1">
                                <div class="h-10 w-10 border border-accent">
                                    <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuBF-TfE5E-grAqWVFR7gVO2XQZmLJZVEZeKkUTFwmpCNiWM_AFglIIA8MKimUHGf0Kyg6g3Gcj_o_yf2h9Rc0zErJo3qEv7XH_KLNNiixcM9LdfvcBm03ldURS8Uz25Z60RnRrPYkd0UhzUdh0kj1ZiOBMeC4VMi5VxLKBH4LObg7DeyvuzrGAYI1U2mCGkmFE9yB1IW6QxhPXfsicBcy2r1RPcEgmFlxl1VbJKx26lNZwC1KczcM_Hsw-vpOv92nmU2OeS-cXCx2c" alt="" class="h-full w-full" />
                                </div>
                                <div class="">
                                    <p class="font-mono hover:text-primary">{a.name}</p>
                                    <p class="font-mono tracking-widest text-primary/80 text-xs">@{a.nickname}</p>
                                </div>
                            </A>
                            <button class="w-8 h-10 cursor-pointer hover:bg-accent flex justify-center items-center bg-primary text-dark">
                                <span class="material-symbols-outlined text-[18px]!">add</span>
                            </button>
                        </div>
                    )
                }
            </For>
        </div>
    )
}

const Footer = () => {

    const menus = [
        "About",
        "Contact",
        "Privacy Policy",
        "Terms",
        "Code of Conduct",
    ]

    return (
        <div class="px-4 uppercase text-primary/50 font-mono flex gap-4 flex-wrap text-xs tracking-widest ">
            <For each={menus}>
                {(m) => (
                    <A href="#" class="hover:text-primary/80">
                        {m}
                    </A>
                )}

            </For>
        </div>
    )
}