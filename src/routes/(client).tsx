import { RouteSectionProps } from "@solidjs/router";
import NavBar from "./layouts/navbar";
import LeftAsign from "~/components/LeftAsign";
import { createSignal, For } from "solid-js";
import MiddleNavbar from "~/components/MiddleNavbar";
import RightAside from "~/components/RightAside";

const middleNavbars: string[] = [
    "Relevant",
    "Latest",
    "Top"
]

export default function (props: RouteSectionProps) {
    const [category, setCategory] = createSignal<number>(1);
    const [middleNavbar, setMiddleNavbar] = createSignal<number>(0);

    return (
        <>
            <div class="flex flex-col">
                <NavBar />
                <div class="max-w-7xl w-full py-10 mx-auto grid grid-cols-12 gap-10">
                    <aside class="col-span-2">
                        <LeftAsign category={category()} setCategory={setCategory}/>
                    </aside>
                    <main class="col-span-7">
                        <MiddleNavbar currentIndex={middleNavbar()} setCurrentIndex={setMiddleNavbar} />
                        { props.children }
                    </main>
                    <aside class="col-span-3">
                        <RightAside />
                    </aside>
                </div>
            </div>
        </>
    )
}