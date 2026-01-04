import { useLocation, A } from "@solidjs/router";
import { createEffect, For } from "solid-js";
import { cn } from "~/libs/cn";

const tabs = [
    {
     label: "Following",
     url: "0"   
    },
    {
     label: "Recommended",
     url: "1"   
    },
    {
     label: "React",
     url: "2"   
    },
    {
     label: "Python",
     url: "3"   
    },
    {
     label: "UX Design",
     url: "4"   
    },
    {
     label: "DevOps",
     url: "5"   
    }
];

const FilterTabBar = () => {
  const location = useLocation();
  const query = () => new URLSearchParams(location.search);
  const getTab = () => query().has("tab") ? query().get("tab") : "0";

  return (
    <div class="border-b border-ink/10 -mx-4 px-4 sm:mx-0 sm:px-0 sticky top-16 bg-paper z-30 pt-2">
      <div class="flex gap-8 overflow-x-auto no-scrollbar pb-px">
        <For each={tabs}>
            { (t, i) => (
                <A
                    class={
                        cn("relative flex flex-col items-center justify-center pb-3 pt-2 group cursor-pointer",)
                    }
                    href={"?tab=" + t.url}
                    >
                    <p class={cn(
                        "text-ink-light text-sm font-bold group-hover:text-ink transition-colors",
                        getTab() === t.url && "text-accent"
                    )}>
                        {t.label}
                    </p>
                    <div class={
                        cn(
                            "absolute bottom-0 w-full h-0.75 bg-transparent group-hover:bg-ink/20 rounded-t-full transition-colors",
                            getTab() === t.url && "bg-accent" 
                        )
                    }></div>
                </A>
            ) }
        </For>
      </div>
    </div>
  );
};

export { FilterTabBar };
