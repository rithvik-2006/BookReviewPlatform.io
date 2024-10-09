import React from "react";
import { BackgroundLines } from "@/components/ui/background-lines";
import { Button } from "./ui/button";
import Link from "next/link";

export function HomeBackground() {
  return (<div>
    <BackgroundLines className="min-h-screen flex items-center justify-center w-full flex-col px-4">
      <h2 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-2xl md:text-4xl lg:text-7xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight">
  Discover Your Next Favorite Book, <br /> Share Your Thoughts.
</h2>
<p className="max-w-xl mx-auto text-sm md:text-lg text-neutral-700 dark:text-neutral-400 text-center">
  Dive into insightful reviews from passionate readers, explore trending books, 
  and contribute your own reviews to help others on their literary journey.
  
</p>
<div className="flex justify-center absolute z-20 top-[70vh]">
        <Link href="/MainPage">
          <Button variant="outline" className="text-white mt-4 size-base">Get Started</Button>
        </Link>
        </div>
    </BackgroundLines>
    
    </div>
  );
}
