import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <main className="container mx-auto flex h-screen max-h-screen max-w-6xl flex-col justify-between gap-5 md:flex-row">
      <div className="mx-auto flex max-w-xl flex-1 flex-col items-center justify-center gap-5">
        <div>
          <h1 className="mb-4 text-5xl font-bold">
            Best Trending Music Discord Bot
            <span className="text-primary"> Yuki </span>
          </h1>
          <p className="font-extralight">
            Enhance your Discord experience by enjoying your favorite music
            <br /> with Yuki!
          </p>
        </div>
        <div className="mx-auto flex max-w-lg flex-row justify-start gap-5">
          <Button>Invite to server</Button>
          <Button variant="outline">Support Server</Button>
        </div>
      </div>
      <div className="mb-20 flex flex-1 items-center justify-center">
        <Image
          src="/hero.png"
          alt="Hero Logo"
          width={500}
          height={500}
          className="h-200 w-200"
        />
      </div>
    </main>
  );
}
