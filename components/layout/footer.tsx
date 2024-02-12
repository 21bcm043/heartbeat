import Link from "next/link"
import { siteConfig } from "@/config/site"
import { navLinks } from "@/lib/links"

export default function Footer() {
  return (
    <footer className="mt-auto">
      <div className="mx-auto w-full max-w-screen-xl p-6 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <Link href="/">
            <h1 className="mb-2 text-2xl font-bold sm:mb-0">
              {siteConfig.name}
            </h1>
          </Link>
          <ul className="mb-6 flex flex-wrap items-center text-primary sm:mb-0">
            {navLinks.map((link) => (
              <li key={link.route}>
                <Link href={link.path} className="mr-4 hover:underline md:mr-6">
                  {link.route}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <hr className="my-6 text-muted-foreground sm:mx-auto lg:my-8" />
        <span className="block text-sm text-muted-foreground sm:text-center">
          © {new Date().getFullYear()}{" "}
          <a
            target="_blank"
            href="https://www.psgcas.ac.in/index.html"
            className="hover:underline"
          >
            PSG College of Arts and Science
          </a>
          . All Rights Reserved.
        </span>
        <span className="block text-sm text-muted-foreground sm:text-center">
          Developed By:{" "}
          <a
            target="_blank"
            href="https://in.linkedin.com/in/sreenington"
            className="hover:underline"
          >
            Sreenarayanan Sreekanth
          </a>
        </span>
      </div>
    </footer>
  )
}
