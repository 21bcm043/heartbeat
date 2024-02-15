import { SiteConfig, ContactConfig } from "@/types"

/* ====================
[> WEBSITE CONFIG <]
-- Fill the details about your website
 ==================== */

const baseUrl = "https://nextlanding.rdev.pro"

export const siteConfig: SiteConfig = {
  name: "PSG College of Arts & Science",
  author: "Sree Narayanan",
  description:
    "PSGCAS | Heartbeat 2k24",
  keywords: [
    "PSGCAS",
    "Heartbeat",
    "Culturals",
    "Coimbatore",
  ],
  url: {
    base: baseUrl,
    author: "https://in.linkedin.com/in/sreenington",
  },
  ogImage: `${baseUrl}/psgcas.jpg`,
}

export const contactConfig: ContactConfig = {
  email: "21bcm043@psgcas.ac.in",
}
