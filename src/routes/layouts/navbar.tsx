import { A } from "@solidjs/router";
import { IconButton, OutlineButton, FilledButton } from "~/components/Button";

export default function NavBar() {
  return (
    <header class="sticky top-0 z-50 w-full border-b bg-dark border-secondary/40 shadow-lg">
      <div class="container mx-auto max-w-7xl h-20 flex justify-between">
        <div class="flex shrink-0 gap-6 items-center">
          <A href="#" class="flex items-center gap-3">
            <div class="w-15 border border-accent bg-primary p-2 flex items-center justify-center text-dark hover:bg-accent hover:text-primary">
              <span class="material-symbols-outlined" style="font-size: 28px;">
                type_specimen
              </span>
            </div>
            <span>
              <span class="font-display text-3xl">Dev</span>
              <span class="font-display text-3xl text-primary">Pool</span>
            </span>
          </A>
          <div class="flex items-center bg-card text-primary/40 border border-primary/40 p-2.5 h-fit relative group focus-within:border-primary">
            <div class="absolute top-1/2 left-3 translate-y-[-50%] flex items-center">
              <span class="material-symbols-outlined text-brand-secondary group-focus-within:text-primary">
                search
              </span>
            </div>
            <input
              type="text"
              class="ml-8 min-w-75 outline-none font-mono text-accent placeholder:text-primary/60"
              placeholder="Search any posts..."
            />
          </div>
        </div>

        <div class="flex shrink-0 items-center">
          <OutlineButton>
            <span class="uppercase hover:text-white">Write Post</span>
          </OutlineButton>
          <IconButton
            icon={<span class="material-symbols-outlined">notifications</span>}
          />
          <FilledButton>
            <span class="text-white">Login</span>
          </FilledButton>
        </div>
      </div>
    </header>
  );
}
