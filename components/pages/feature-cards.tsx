import Image from "next/image"
import HeadingText from "@/components/heading-text"
import { offStageEvents, onStageEvents } from "@/config/contents"
import { Card, CardDescription, CardTitle } from "@/components/ui/card"
import { Icons } from "@/components/icons"
import Video from "../ui/video"
import AnimatedText from "../ui/alternating-text"

export default function FeatureCards() {
  return (
    <section className="bg-slate-50 dark:bg-slate-900" id="guidelines">
      <div className="container space-y-8 py-12 text-center lg:py-20">
        <AnimatedText text="On stage Events" />
        {onStageEvents.header || onStageEvents.subheader ? (
          <HeadingText subtext={onStageEvents.subheader}>
            {onStageEvents.header}
          </HeadingText>
        ) : null}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {onStageEvents.content.map((cards) => {

            return (
              <Card
                key={cards.text}
                className="flex flex-grow flex-col items-center justify-between gap-4 p-8 dark:bg-secondary"
              >
                <div className="space-y-2">
                  <CardTitle>{cards.text}</CardTitle>
                  <CardDescription style={{ whiteSpace: 'pre-line' }}>{cards.subtext}</CardDescription>
                </div>
              </Card>
            )
          })}
        </div>
      </div>
      <div className="container space-y-8 py-12 text-center lg:py-20">
        <AnimatedText text="Off stage Events" />
        {offStageEvents.header || offStageEvents.subheader ? (
          <HeadingText subtext={offStageEvents.subheader}>
            {offStageEvents.header}
          </HeadingText>
        ) : null}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {offStageEvents.content.map((cards) => {

            return (
              <Card
                key={cards.text}
                className="flex flex-grow flex-col items-center justify-between gap-4 p-8 dark:bg-secondary"
              >
                <div className="space-y-2">
                  <CardTitle>{cards.text}</CardTitle>
                  <CardDescription style={{ whiteSpace: 'pre-line' }}>{cards.subtext}</CardDescription>
                </div>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
