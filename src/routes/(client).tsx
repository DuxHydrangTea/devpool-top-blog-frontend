import NavBar from "./layouts/navbar";

export default function () {
    return (
        <>
            <div class="flex flex-col">
                <NavBar />
                <slot />
            </div>
        </>
    )
}