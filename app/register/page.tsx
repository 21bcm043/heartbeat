import ContactForm from "@/components/pages/contact-form"
import HeadingText from "@/components/heading-text"

export const metadata = {
  title: "Contact",
}

export default function Contact() {
  return (
    <main className="container flex flex-col items-center py-8">
      <div className="flex flex-col items-center space-y-2 text-center">
        <HeadingText subtext="Please reload if the form takes time to load*">
          Registration Form
        </HeadingText>
      </div>
      <ContactForm />
      <span className="block text-sm text-muted-foreground sm:text-center">
        If the form doesn&apos;t load {" "}
        <a
          target="_blank"
          href="https://tally.so/r/wALvAo"
          className="hover:underline"
        >
          click here.
        </a>
      </span>
    </main>
  )
}
