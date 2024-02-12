"use client"
import Script from 'next/script'

export default function ContactForm() {

  return (
    <>
      <iframe data-tally-src="https://tally.so/embed/wALvAo?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1" loading="lazy" width="60%" height="256" title="Heartbeat 2k24 Registration Form"></iframe>

      <Script
        id="tally-js"
        src="https://tally.so/widgets/embed.js"

        onLoad={() => {
          Tally.loadEmbeds();
        }}
      />
    </>
  )
}
