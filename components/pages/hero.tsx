import Link from "next/link"
import { Button, buttonVariants } from "@/components/ui/button"
import { heroHeader } from "@/config/contents"
import VideoPlayer from "../ui/video"

export default function HeroHeader() {
  return (
    <section className="container flex flex-col gap-4 pb-12 pt-4 text-center lg:items-center lg:gap-8 lg:py-20">
      <div className="flex flex-1 flex-col items-center gap-4 text-center lg:gap-8">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold lg:text-6xl duration-200 hover:text-amber-400 lg:hover:scale-[1.10]">
            {heroHeader.header}
          </h1>
          <h2 className="text-lg font-light text-foreground lg:text-3xl">
            {heroHeader.subheader}
          </h2>
          <h2 className="text-lg font-bold text-foreground lg:text-3xl duration-200 hover:text-amber-400 lg:hover:scale-[1.10]">
            Date: 1/3/2024
          </h2>
        </div>
        <Button className="bg-amber-400 duration-200 lg:hover:scale-[1.10]"><Link
          href="/register"
          className={`py-4 font-bold text-xl`}
        >
          Register Now!!!
        </Link></Button>
        <p className="font-light text-sm text-slate-300">{"Scroll Down👇 for Guidelines"}</p>
      </div>
      <div className="flex flex-1 justify-center lg:justify-end">
        <VideoPlayer src="https://vimeo.com/913994674" height={"720"} width={"1280"} />
      </div>
    </section>
  )
}
