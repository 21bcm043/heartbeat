import { HeroHeader, ContentSection } from "@/types/contents"

/* ====================
[> CUSTOMIZING CONTENT <]
-- Setup image by typing `/image-name.file` (Example: `/header-image.jpg`)
-- Add images by adding files to /public folder
-- Leave blank `` if you don't want to put texts or images
 ==================== */

export const heroHeader: HeroHeader = {
  header: `HEARTBEAT 2k24`,
  subheader: `Calling All CASIANS: Join Us for an Intra-Collegiate Event!`,
  image: `/Screenshot.png`,
}

export const featureCards: ContentSection = {
  header: `Event Guidelines`,
  subheader: `Here are the guidelines that you need to follow`,
  content: [
    {
      text: `Respectful Behavior`,
      subtext: `Treat all event attendees, organizers, and speakers with respect and courtesy. Avoid disruptive behavior such as talking loudly, using electronic devices inappropriately, or causing disturbances that may detract from others' enjoyment of the event.`,
      icon: "respectfulBehavior",
    },
    {
      text: `Follow Instructions:`,
      subtext: `Adhere to any instructions or guidelines provided by event organizers, including seating arrangements, designated entry and exit points, and safety protocols. Following these instructions helps ensure a smooth and enjoyable experience for everyone involved.`,
      icon: "followInstructions",
    },
    {
      text: `Participation:`,
      subtext: `Engage actively in event activities, such as competitions, or discussions, by asking questions, and participating in group activities. Your involvement contributes to the success of the event and enriches the experience for yourself and others.`,
      icon: "participation",
    },
  ],
}

export const features: ContentSection = {
  header: `Features`,
  subheader: `Why use Next Landing?`,
  image: `/features-img.webp`,
  content: [
    {
      text: `SEO Optimized`,
      subtext: `Improved website visibility on search engines`,
      icon: "fileSearch",
    },
    {
      text: `Highly Performant`,
      subtext: `Fast loading times and smooth performance`,
      icon: "barChart",
    },
    {
      text: `Easy Customizability`,
      subtext: `Change your content and layout with little effort`,
      icon: "settings",
    },
  ],
}
