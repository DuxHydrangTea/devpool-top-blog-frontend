import { JSX } from "solid-js"
import { A } from "@solidjs/router"

type PostOutlineProps = {
    children?: JSX.Element
}

type ArticleAuthorProps = {
    avatar: string,
    name: string,
    time: string
}

type TagProps = {
    label: string
}

export const PostOutline = (props: PostOutlineProps) => {
    return (
        <article class="border border-primary/50 retro-card">
            {props.children}
        </article>
    )
}

export const ArticleAuthor = (props: ArticleAuthorProps) => {
    return (
        <A href="#" class="flex items-center gap-3 mb-4">
            <div class="h-10 w-10 border border-accent">
                <img src={props.avatar} alt="" class="w-full h-full" />
            </div>
            <div class="">
                <p class="uppercase font-mono">
                    {props.name}
                </p>
                <p class="font-mono text-sm text-primary">{props.time}</p>
            </div>
        </A>
    )
}

export const Tag = (props: TagProps) => {
    return <div class="px-3 py-1 uppercase border border-primary/20 text-primary font-mono cursor-pointer hover:text-white hover:bg-primary hover:border-primary text-xs tracking-wider transition duration-300">#{props.label}</div>
}

export const FuturedPostItem = () => {
    return (
        <PostOutline>
            <div class="group">
                <div class="w-full h-64 relative overflow-hidden border-b border-primary">
                    <span class="absolute z-10 top-4 left-4 flex justify-center items-center border border-accent bg-primary text-dark w-fit px-3 py-1 font-mono uppercase font-bold text-xs tracking-widest">
                        Feature
                    </span>
                    <div class="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-700" style={
                        {
                            "background-image": "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDObYxfq-TzGMpY7npxbWi5lc0KOhpLpq2yK4LySDyqxy3359VjpmHYJLC360SY6u2VLJR7Uj9qxydFiH_wpTUVTPAOwzS2XyYOAlr_fxATCfJ3Ag0SLyLJfjR4iIM5iKNJEmwGpcpATpqMCoXV5ihSkq7oMou9LumwSKZersrf1Tv1NUfAtEACPgif7sHIVDDx_HsAX2RwpI5_Lt7V67tYhnM_grw1c5YrN5buFm_TFOkq_zJyROuxzW_Vmoa-SD4Xquqo3tQaDvY')"
                        }
                    }>
                    </div>
                    <div class="absolute inset-0 bg-linear-to-t from-dark via-dark/60 to-transparent"></div>
                    <div class="absolute inset-0 bg-linear-to-t from-dark to-transparent opacity-90"></div>
                </div>
                <div class="p-6 -mt-32 relative">
                    <ArticleAuthor avatar="https://lh3.googleusercontent.com/aida-public/AB6AXuBRktlBgzYmSx0UskbUYSAMDGOQu645G_m3FvXh96oaa6c00MpZ1xQCzbczU8xZDiP8r2y6qnIcYrOQqXI8gGCLf5jcdUGab0qruyPS7MrUoMYxXkF-Oy2sBFpUdBrPZqFecDbzegr4dKmakRrtrQMD6jVtaJJsBcAiD7-gxW3AAI1JNhVUSHhIXRKLr1PttyGdmaf-ZR8xeOFyQ2HPKQoP87DZlmgHDM1-tWuEyGV5ReMPjf6d6c0kxH4AuVRaguErq_hDlw3nr7E" name="Sarah Drasner" time="Nov 12" />
                    <A href="#">
                       <h2 class="text-4xl font-display font-normal leading-tight group-hover:text-primary transition duration-700 mb-4">
                            <span class="hover-underline">Understanding React Server Components</span>
                        </h2>
                    </A>
                    <p class="text-lg mb-4 text-accent/80 opacity-90">
                        A deep dive into the new architecture and how it changes the way we build web apps. We explore streaming, suspense, and the future of rendering.
                    </p>
                    <div class="flex gap-3 mb-4">
                        <Tag label="javascript" />
                        <Tag label="react" />
                        <Tag label="webdev" />
                    </div>
                    <div class="border-t border-primary/20 flex justify-between font-mono text-accent/60 pt-4">
                        <div class="flex gap-6 items-center">
                            <button class="flex justify-center items-center gap-2 group/btn hover:text-primary cursor-pointer">
                                <span class="material-symbols-outlined text-[18px]!">favorite</span>
                                <span class="tracking-widest text-xs">145</span>
                            </button>
                            <button class="flex justify-center items-center gap-2 group/btn hover:text-primary cursor-pointer">
                                <span class="material-symbols-outlined text-[18px]!">chat_bubble</span>
                                <span class="tracking-widest text-xs">145</span>
                            </button>
                            <span class="uppercase text-xs tracking-widest">6 min read</span>
                        </div>

                        <button class="flex justify-center items-center gap-2 group/btn hover:text-primary cursor-pointer">
                        <span class="material-symbols-outlined text-[20px]!">bookmark</span>
                        </button>
                    </div>
                </div>
            </div>
        </PostOutline>
    )
}

export const ImageSidePost = () => {
    return (
        <PostOutline>
            <div class="group">
                <div class="p-6 relative">
                    <ArticleAuthor avatar="https://lh3.googleusercontent.com/aida-public/AB6AXuBRktlBgzYmSx0UskbUYSAMDGOQu645G_m3FvXh96oaa6c00MpZ1xQCzbczU8xZDiP8r2y6qnIcYrOQqXI8gGCLf5jcdUGab0qruyPS7MrUoMYxXkF-Oy2sBFpUdBrPZqFecDbzegr4dKmakRrtrQMD6jVtaJJsBcAiD7-gxW3AAI1JNhVUSHhIXRKLr1PttyGdmaf-ZR8xeOFyQ2HPKQoP87DZlmgHDM1-tWuEyGV5ReMPjf6d6c0kxH4AuVRaguErq_hDlw3nr7E" name="Sarah Drasner" time="Nov 12" />
                    <div class="flex">
                        <div class="">
                            <A href="#">
                            <h2 class="text-4xl font-display font-normal leading-tight group-hover:text-primary transition duration-700 mb-4">
                                    <span class="hover-underline">Understanding React Server Components</span>
                                </h2>
                            </A>
                            <p class="text-lg mb-4 text-accent/80 opacity-90">
                                A deep dive into the new architecture and how it changes the way we build web apps. We explore streaming, suspense, and the future of rendering.
                            </p>
                            <div class="flex gap-3 mb-4">
                                <Tag label="javascript" />
                                <Tag label="react" />
                                <Tag label="webdev" />
                            </div>
                        </div>
                        <div class="w-50 h-35 shrink-0">
                            <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuBPS6otlGqlGd3VN9UEPpMO4OelTFOIDit-OCH07COEsACyFs9NnKyRxFv3WqQ08fixZ6uokSEaKOycz2Prc7dttXWX0n9eBJ9gKQMfnl8EMiygClAh2966tlFvnCfzXDLUblwEvE-2Y5SVySAvobcExHaj6psRGW8OYn5Z1GDZnfJBKOMPRmKVPSAcCsra6_p8sqSsvqYbEGtV-Iv5E_oYxWjjINz-eJ3Fb6GeG0wgxxhh3cnz848g4oOAreT9w7xzsAZZjcO1Bhk" alt="" class="w-full h-full object-cover" />
                        </div>
                    </div>
                    <div class="border-t border-primary/20 flex justify-between font-mono text-accent/60 pt-4">
                        <div class="flex gap-6 items-center">
                            <button class="flex justify-center items-center gap-2 group/btn hover:text-primary cursor-pointer">
                                <span class="material-symbols-outlined text-[18px]!">favorite</span>
                                <span class="tracking-widest text-xs">145</span>
                            </button>
                            <button class="flex justify-center items-center gap-2 group/btn hover:text-primary cursor-pointer">
                                <span class="material-symbols-outlined text-[18px]!">chat_bubble</span>
                                <span class="tracking-widest text-xs">145</span>
                            </button>
                            <span class="uppercase text-xs tracking-widest">6 min read</span>
                        </div>

                        <button class="flex justify-center items-center gap-2 group/btn hover:text-primary cursor-pointer">
                        <span class="material-symbols-outlined text-[20px]!">bookmark</span>
                        </button>
                    </div>
                </div>
            </div>
        </PostOutline>
    )
}

export const NoImagePost = () => {
    return (
        <PostOutline>
            <div class="group">
                <div class="p-6 relative">
                    <ArticleAuthor avatar="https://lh3.googleusercontent.com/aida-public/AB6AXuBRktlBgzYmSx0UskbUYSAMDGOQu645G_m3FvXh96oaa6c00MpZ1xQCzbczU8xZDiP8r2y6qnIcYrOQqXI8gGCLf5jcdUGab0qruyPS7MrUoMYxXkF-Oy2sBFpUdBrPZqFecDbzegr4dKmakRrtrQMD6jVtaJJsBcAiD7-gxW3AAI1JNhVUSHhIXRKLr1PttyGdmaf-ZR8xeOFyQ2HPKQoP87DZlmgHDM1-tWuEyGV5ReMPjf6d6c0kxH4AuVRaguErq_hDlw3nr7E" name="Sarah Drasner" time="Nov 12" />
                    <A href="#">
                       <h2 class="text-4xl font-display font-normal leading-tight group-hover:text-primary transition duration-700 mb-4">
                            <span class="hover-underline">Understanding React Server Components</span>
                        </h2>
                    </A>
                    <p class="text-lg mb-4 text-accent/80 opacity-90">
                        A deep dive into the new architecture and how it changes the way we build web apps. We explore streaming, suspense, and the future of rendering.
                    </p>
                    <div class="flex gap-3 mb-4">
                        <Tag label="javascript" />
                        <Tag label="react" />
                        <Tag label="webdev" />
                    </div>
                    <div class="border-t border-primary/20 flex justify-between font-mono text-accent/60 pt-4">
                        <div class="flex gap-6 items-center">
                            <button class="flex justify-center items-center gap-2 group/btn hover:text-primary cursor-pointer">
                                <span class="material-symbols-outlined text-[18px]!">favorite</span>
                                <span class="tracking-widest text-xs">145</span>
                            </button>
                            <button class="flex justify-center items-center gap-2 group/btn hover:text-primary cursor-pointer">
                                <span class="material-symbols-outlined text-[18px]!">chat_bubble</span>
                                <span class="tracking-widest text-xs">145</span>
                            </button>
                            <span class="uppercase text-xs tracking-widest">6 min read</span>
                        </div>

                        <button class="flex justify-center items-center gap-2 group/btn hover:text-primary cursor-pointer">
                        <span class="material-symbols-outlined text-[20px]!">bookmark</span>
                        </button>
                    </div>
                </div>
            </div>
        </PostOutline>
    )
}

export const SkeletonPost = () => {
    return (
        <div class="p-6 border border-secondary/30 bg-card/40 flex flex-col gap-2">
            <div class="flex items-center gap-4">
                <div class="h-10 w-10 bg-secondary/10"></div>
                <div class="h-5 w-40 bg-secondary/10"></div>
            </div>
            <div class="h-7 w-[80%] bg-secondary/10"></div>
            <div class="h-5 w-full bg-secondary/10"></div>
            <div class="h-5 w-[70%] bg-secondary/10"></div>
        </div>
    )
}