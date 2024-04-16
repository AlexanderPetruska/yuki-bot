import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="container mx-auto flex h-dvh flex-col items-center align-middle md:flex-row">
      <div className="flex flex-1 items-center justify-center">
        <h1>Hero Page</h1>
      </div>
      <div className="flex flex-1 items-center justify-center">
        <Image src="/hero.png" alt="Hero Logo" width={400} height={400} />
      </div>
    </main>
  );
}
