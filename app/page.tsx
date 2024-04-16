import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="container flex h-full max-w-6xl flex-1 flex-col items-center justify-center gap-5 align-middle md:flex-row">
      <div className="flex flex-1 flex-col items-end justify-center gap-5 align-middle">
        <div>
          <h1 className="mb-4 text-5xl font-bold leading-snug">
            Best Trending Music Discord Bot
            <span className="text-primary"> Yuki </span>
          </h1>
          <p className="font-extralight">
            Enhance your Discord experience by enjoying your favorite music
            <br /> with Yuki!
          </p>
        </div>
        <div className="mx-auto w-full">
          <div className="flex flex-row justify-start gap-5">
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
          className="h-200 w-200"
        />
      </div>
    </main>
  );
}
