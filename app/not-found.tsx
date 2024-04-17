import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="container flex h-full w-full max-w-6xl flex-col items-center justify-center gap-4 text-center">
      <div>
        <h2 className="text-center text-3xl font-black text-primary">404</h2>
        <h1 className="mb-1 text-center text-3xl font-bold">Page not found</h1>
        <p className="max-w-80 overflow-auto text-center text-sm font-extralight text-gray-300 md:max-w-full">
          Sorry, the page you are looking for does not exist.
        </p>
      </div>
      <Link href="/">
        <Button>Go back to home</Button>
      </Link>
    </main>
  );
}
