import { RouteSectionProps } from "@solidjs/router";
import Header from "./layouts/Header";

export default function (props: RouteSectionProps) {
    return (
        <main class="bg-paper min-h-screen flex flex-col font-display text-ink antialiased selection:bg-accent/20 selection:text-ink">
            <Header />
            <main class="grow max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
                { props.children }
            </main>
        </main>
    )
}