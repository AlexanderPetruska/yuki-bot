import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="container flex h-full max-w-6xl flex-1 flex-col items-center justify-center gap-5 align-middle md:flex-row">
      <div className="container flex flex-1 flex-col items-end justify-center gap-5 align-middle">
        <div className="flex w-full flex-1 items-center justify-center align-middle">
          <Image
            src="/hero.png"
            alt="Hero Logo"
            width={320}
            height={320}
            className="h-200 w-200 md:hidden"
          />
        </div>
        <div className="flex w-full flex-1 flex-col md:items-start">
          <h1 className="mx-auto mb-4 max-w-[25rem] text-center text-3xl font-bold leading-snug md:max-w-full md:text-left md:text-5xl">
            Best Trending Music Discord Bot
            <span className="text-primary"> Yuki </span>
          </h1>
          <p className="mx-auto max-w-80 flex-wrap text-center text-sm font-extralight md:mx-0 md:w-full md:max-w-full md:text-left md:text-xl">
            Enhance your Discord experience by enjoying your favorite music with
            Yuki!
          </p>
        </div>
        <div className="mx-auto w-full">
          <div className="flex flex-row justify-center gap-5 md:justify-start">
            <Link href="https://discord.com/oauth2/authorize?client_id=635558005382971462">
              <Button>Invite to server</Button>
            </Link>
            <Link href="/todo">
              <Button variant="outline">Support Server</Button>
            </Link>
          </div>
        </div>
      </div>
      <div className="flex flex-1 items-center justify-center">
        <Image
          src="/hero.png"
          alt="Hero Logo"
          width={450}
          height={450}
          className="h-200 w-200 hidden md:block"
        />
      </div>
    </main>
  );
}
