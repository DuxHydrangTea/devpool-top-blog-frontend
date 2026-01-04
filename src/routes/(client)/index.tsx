import { FilterTabBar } from "~/components/FilterTabBar"

export default function Home() {
  return (
    <>
      <div class="lg:col-span-8 flex flex-col gap-6">
        <FilterTabBar />
        <div class="flex flex-col gap-6">
          <article class="group bg-white p-5 rounded-xl border border-ink/10 hover:border-ink/20 transition-colors shadow-sm">
            <div class="flex flex-col-reverse sm:flex-row gap-6">
              <div class="flex-1 flex flex-col gap-3">
                <div class="flex items-center gap-2 text-xs font-medium text-ink-light">
                  <div
                    class="size-6 rounded-full bg-linear-to-br from-purple-500 to-indigo-500"
                    data-alt="Avatar gradient purple"
                  ></div>
                  <span class="text-ink font-semibold">Sarah Jenkins</span>
                  <span>•</span>
                  <span>Oct 24</span>
                  <span class="px-2 py-0.5 rounded-full bg-accent/10 text-accent font-semibold ml-1">
                    #React
                  </span>
                </div>
                <a
                  class="block group-hover:opacity-80 transition-opacity"
                  href="#"
                >
                  <h3 class="text-xl sm:text-2xl font-bold text-ink leading-tight mb-2 group-hover:text-accent transition-colors">
                    Understanding React Server Components in 2024
                  </h3>
                  <p class="text-ink-light text-sm sm:text-base leading-relaxed line-clamp-2">
                    A deep dive into how server components are changing the
                    frontend landscape, what it means for performance, and how
                    you can start using them today in your Next.js projects.
                  </p>
                </a>
                <div class="flex items-center justify-between pt-2">
                  <div class="flex items-center gap-4">
                    <span class="text-xs font-medium text-ink-light flex items-center gap-1">
                      <span class="material-symbols-outlined text-[16px]">
                        schedule
                      </span>
                      5 min read
                    </span>
                  </div>
                  <button class="text-ink-light hover:text-ink transition-colors">
                    <span class="material-symbols-outlined">bookmark_add</span>
                  </button>
                </div>
              </div>
              <a
                class="sm:w-40 sm:h-28 w-full h-48 shrink-0 rounded-lg overflow-hidden bg-paper border border-ink/5"
                href="#"
              >
                <div
                  class="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                  data-alt="React abstract code screen illustration"
                  style="
                    background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuA8PjXuRRykBOex4W3JB4jAYbFvGk-ayxuKfgGYO32qsQ8hOoGMtluHIDdN2pubqU1Y4YIjJy-Zp4BYdhCiFSpNtIdM0ed2MFCucoCayj49qWygK9jYwH_NcOHohQV4CiGpllrEeRtrqNKqX_TloNPmsDExQnLdv8p8EW01ST-fbIrNNt3Pg0eA8lFDC_LYv6x0-NIxRZx7o1fuxLAe5awPdciJqYteHgs0txHrq3RZrIeexfSffBXjjFGUpwXx8-18O9rXp8GkNtI');
                  "
                ></div>
              </a>
            </div>
          </article>
          <article class="group bg-white p-5 rounded-xl border border-ink/10 hover:border-ink/20 transition-colors shadow-sm">
            <div class="flex flex-col-reverse sm:flex-row gap-6">
              <div class="flex-1 flex flex-col gap-3">
                <div class="flex items-center gap-2 text-xs font-medium text-ink-light">
                  <div
                    class="size-6 rounded-full bg-linear-to-br from-green-500 to-teal-500"
                    data-alt="Avatar gradient green"
                  ></div>
                  <span class="text-ink font-semibold">David Chen</span>
                  <span>•</span>
                  <span>Oct 22</span>
                  <span class="px-2 py-0.5 rounded-full bg-accent/10 text-accent font-semibold ml-1">
                    #CSS
                  </span>
                </div>
                <a
                  class="block group-hover:opacity-80 transition-opacity"
                  href="#"
                >
                  <h3 class="text-xl sm:text-2xl font-bold text-ink leading-tight mb-2 group-hover:text-accent transition-colors">
                    The Future of CSS Architecture
                  </h3>
                  <p class="text-ink-light text-sm sm:text-base leading-relaxed line-clamp-2">
                    Exploring the new features in CSS that are making
                    preprocessors less critical in modern web development. From
                    nesting to layers, see what's coming.
                  </p>
                </a>
                <div class="flex items-center justify-between pt-2">
                  <div class="flex items-center gap-4">
                    <span class="text-xs font-medium text-ink-light flex items-center gap-1">
                      <span class="material-symbols-outlined text-[16px]">
                        schedule
                      </span>
                      4 min read
                    </span>
                  </div>
                  <button class="text-ink-light hover:text-ink transition-colors">
                    <span class="material-symbols-outlined">bookmark_add</span>
                  </button>
                </div>
              </div>
              <a
                class="sm:w-40 sm:h-28 w-full h-48 shrink-0 rounded-lg overflow-hidden bg-paper border border-ink/5"
                href="#"
              >
                <div
                  class="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                  data-alt="Abstract colorful css code art"
                  style="
                    background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuD0V9Am9J9UvB9pVl09BT2K7KOdFiPEkYGYhQpNjwf4sTZ14gRn6DrcSAkhkzasojXzRRYACzDvTQDnNIWFo6ogJLafH-rsmQbw118ABUFJlgQfdUQ_7aP9vOEqCT-AELGCG9hJal9vGycfvPaOPv2O7CGQroyDBATvPU4LD9cYjqM-YxdVHq1CpdawcVZFnKsJpIYGr5U_WqH2ZAGU-OpfKiVLMe7TeaGRGhDcNe2n25GDF-RzQmQx8CtILjxN-PtSpb29OCueUu8');
                  "
                ></div>
              </a>
            </div>
          </article>
          <article class="group bg-white p-5 rounded-xl border border-ink/10 hover:border-ink/20 transition-colors shadow-sm">
            <div class="flex gap-6">
              <div class="flex-1 flex flex-col gap-3">
                <div class="flex items-center gap-2 text-xs font-medium text-ink-light">
                  <div
                    class="size-6 rounded-full bg-linear-to-br from-orange-400 to-red-500"
                    data-alt="Avatar gradient orange"
                  ></div>
                  <span class="text-ink font-semibold">Alex Rivera</span>
                  <span>•</span>
                  <span>Oct 20</span>
                  <span class="px-2 py-0.5 rounded-full bg-accent/10 text-accent font-semibold ml-1">
                    #Career
                  </span>
                </div>
                <a
                  class="block group-hover:opacity-80 transition-opacity"
                  href="#"
                >
                  <h3 class="text-xl sm:text-2xl font-bold text-ink leading-tight mb-2 group-hover:text-accent transition-colors">
                    Why I stopped using Docker for local development (and what I
                    use instead)
                  </h3>
                  <p class="text-ink-light text-sm sm:text-base leading-relaxed line-clamp-2">
                    Docker is great, but sometimes it adds too much overhead.
                    Here is a lightweight alternative workflow that speeds up my
                    daily coding routine by 50%.
                  </p>
                </a>
                <div class="flex items-center justify-between pt-2">
                  <div class="flex items-center gap-4">
                    <span class="text-xs font-medium text-ink-light flex items-center gap-1">
                      <span class="material-symbols-outlined text-[16px]">
                        schedule
                      </span>
                      8 min read
                    </span>
                  </div>
                  <button class="text-ink-light hover:text-ink transition-colors">
                    <span class="material-symbols-outlined">bookmark_add</span>
                  </button>
                </div>
              </div>
            </div>
          </article>
          <article class="group bg-white p-5 rounded-xl border border-ink/10 hover:border-ink/20 transition-colors shadow-sm">
            <div class="flex flex-col-reverse sm:flex-row gap-6">
              <div class="flex-1 flex flex-col gap-3">
                <div class="flex items-center gap-2 text-xs font-medium text-ink-light">
                  <div
                    class="size-6 rounded-full bg-linear-to-br from-blue-500 to-cyan-500"
                    data-alt="Avatar gradient blue"
                  ></div>
                  <span class="text-ink font-semibold">Maria Garcia</span>
                  <span>•</span>
                  <span>Oct 18</span>
                  <span class="px-2 py-0.5 rounded-full bg-accent/10 text-accent font-semibold ml-1">
                    #MachineLearning
                  </span>
                </div>
                <a
                  class="block group-hover:opacity-80 transition-opacity"
                  href="#"
                >
                  <h3 class="text-xl sm:text-2xl font-bold text-ink leading-tight mb-2 group-hover:text-accent transition-colors">
                    Intro to LLMs for Web Developers
                  </h3>
                  <p class="text-ink-light text-sm sm:text-base leading-relaxed line-clamp-2">
                    You don't need a PhD to understand Large Language Models. We
                    break down the concepts into simple terms for JavaScript
                    developers.
                  </p>
                </a>
                <div class="flex items-center justify-between pt-2">
                  <div class="flex items-center gap-4">
                    <span class="text-xs font-medium text-ink-light flex items-center gap-1">
                      <span class="material-symbols-outlined text-[16px]">
                        schedule
                      </span>
                      12 min read
                    </span>
                  </div>
                  <button class="text-ink-light hover:text-ink transition-colors">
                    <span class="material-symbols-outlined">bookmark_add</span>
                  </button>
                </div>
              </div>
              <a
                class="sm:w-40 sm:h-28 w-full h-48 shrink-0 rounded-lg overflow-hidden bg-paper border border-ink/5"
                href="#"
              >
                <div
                  class="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                  data-alt="Abstract AI neural network mesh"
                  style="
                    background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuDy303QurKplE_wLwFxWE44WR4cEBrSNOkG1nbHLd6bneocWRMCMXe-zeqXhrTqB5pXj4fmpfldrhPeiqqVTeFQ7UwmnIggCIYYn3OBbDxSoQV7xYFG6HzlppZv0-T0uURcU4CumW53cwSBYGrQ8xFPUMdfkOwjrvOlWOxDA7W-9MjzO9ucbL0qpGNDt52qBD0JJ5ZkVlwYSyl-C0AfoOjClJsSCUKNTHoORJbgKSVYoFYUNQly8OG15WwPhdNAlDAIRz7nTIlHvIc');
                  "
                ></div>
              </a>
            </div>
          </article>
        </div>
        <div class="flex justify-center py-6">
          <button class="px-6 py-2.5 rounded-lg border border-ink/20 text-sm font-semibold text-ink-light hover:bg-white transition-colors">
            Load more articles
          </button>
        </div>
      </div>
      <aside class="lg:col-span-4 space-y-8">
        <div class="bg-white p-6 rounded-xl border border-ink/10 shadow-sm">
          <div class="flex items-center gap-2 mb-6">
            <span class="material-symbols-outlined text-accent">
              trending_up
            </span>
            <h2 class="text-lg font-bold text-ink">Trending on DevBlog</h2>
          </div>
          <div class="flex flex-col gap-6">
            <a class="flex gap-4 items-start group" href="#">
              <span class="text-2xl font-bold text-ink/10 leading-none mt-1 group-hover:text-accent/50 transition-colors">
                01
              </span>
              <div>
                <h4 class="font-bold text-ink mb-1 leading-snug group-hover:text-accent transition-colors">
                  Why I stopped using Docker...
                </h4>
                <p class="text-xs text-ink-light">Alex Rivera • Oct 20</p>
              </div>
            </a>
            <a class="flex gap-4 items-start group" href="#">
              <span class="text-2xl font-bold text-ink/10 leading-none mt-1 group-hover:text-accent/50 transition-colors">
                02
              </span>
              <div>
                <h4 class="font-bold text-ink mb-1 leading-snug group-hover:text-accent transition-colors">
                  10 VS Code extensions you need
                </h4>
                <p class="text-xs text-ink-light">Sarah Jenkins • Oct 23</p>
              </div>
            </a>
            <a class="flex gap-4 items-start group" href="#">
              <span class="text-2xl font-bold text-ink/10 leading-none mt-1 group-hover:text-accent/50 transition-colors">
                03
              </span>
              <div>
                <h4 class="font-bold text-ink mb-1 leading-snug group-hover:text-accent transition-colors">
                  System Design Interview Guide
                </h4>
                <p class="text-xs text-ink-light">Mike Ross • Oct 15</p>
              </div>
            </a>
            <a class="flex gap-4 items-start group" href="#">
              <span class="text-2xl font-bold text-ink/10 leading-none mt-1 group-hover:text-accent/50 transition-colors">
                04
              </span>
              <div>
                <h4 class="font-bold text-ink mb-1 leading-snug group-hover:text-accent transition-colors">
                  The end of Create React App
                </h4>
                <p class="text-xs text-ink-light">David Chen • Oct 19</p>
              </div>
            </a>
          </div>
        </div>
        <div>
          <h3 class="text-sm font-bold text-ink mb-4 uppercase tracking-wider">
            Recommended Topics
          </h3>
          <div class="flex flex-wrap gap-2">
            <a
              class="px-3 py-1.5 bg-white border border-ink/10 hover:border-accent hover:text-accent rounded-md text-sm font-medium text-ink-light transition-colors"
              href="#"
            >
              JavaScript
            </a>
            <a
              class="px-3 py-1.5 bg-white border border-ink/10 hover:border-accent hover:text-accent rounded-md text-sm font-medium text-ink-light transition-colors"
              href="#"
            >
              Data Science
            </a>
            <a
              class="px-3 py-1.5 bg-white border border-ink/10 hover:border-accent hover:text-accent rounded-md text-sm font-medium text-ink-light transition-colors"
              href="#"
            >
              Productivity
            </a>
            <a
              class="px-3 py-1.5 bg-white border border-ink/10 hover:border-accent hover:text-accent rounded-md text-sm font-medium text-ink-light transition-colors"
              href="#"
            >
              Machine Learning
            </a>
            <a
              class="px-3 py-1.5 bg-white border border-ink/10 hover:border-accent hover:text-accent rounded-md text-sm font-medium text-ink-light transition-colors"
              href="#"
            >
              Rust
            </a>
            <a
              class="px-3 py-1.5 bg-white border border-ink/10 hover:border-accent hover:text-accent rounded-md text-sm font-medium text-ink-light transition-colors"
              href="#"
            >
              Web3
            </a>
            <a
              class="px-3 py-1.5 bg-white border border-ink/10 hover:border-accent hover:text-accent rounded-md text-sm font-medium text-ink-light transition-colors"
              href="#"
            >
              Accessibility
            </a>
          </div>
        </div>
        <div class="bg-accent/5 border border-accent/20 p-6 rounded-xl">
          <h3 class="text-lg font-bold text-ink mb-2">Weekly Newsletter</h3>
          <p class="text-sm text-ink-light mb-4">
            Get the latest posts delivered right to your inbox. No spam,
            unsubscribe anytime.
          </p>
          <form class="flex flex-col gap-3">
            <input
              class="w-full rounded-lg border-ink/20 bg-white text-sm py-2 px-3 focus:ring-accent focus:border-accent placeholder:text-ink-light/60 text-ink"
              placeholder="Your email address"
              type="email"
            />
            <button
              class="w-full py-2 px-4 bg-accent hover:bg-accent-hover text-white font-bold rounded-lg text-sm transition-colors shadow-sm"
              type="submit"
            >
              Subscribe
            </button>
          </form>
        </div>
        <div class="pt-4 border-t border-ink/10">
          <div class="flex flex-wrap gap-x-4 gap-y-2 text-xs text-ink-light/70">
            <a class="hover:underline hover:text-ink" href="#">
              Help
            </a>
            <a class="hover:underline hover:text-ink" href="#">
              Status
            </a>
            <a class="hover:underline hover:text-ink" href="#">
              Writers
            </a>
            <a class="hover:underline hover:text-ink" href="#">
              Blog
            </a>
            <a class="hover:underline hover:text-ink" href="#">
              Careers
            </a>
            <a class="hover:underline hover:text-ink" href="#">
              Privacy
            </a>
            <a class="hover:underline hover:text-ink" href="#">
              Terms
            </a>
            <a class="hover:underline hover:text-ink" href="#">
              About
            </a>
          </div>
        </div>
      </aside>
    </>
  );
}
