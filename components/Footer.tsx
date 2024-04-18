import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="container mx-auto mb-2 flex h-full w-full max-w-6xl flex-col items-center justify-between bg-background md:flex-row">
      <div className="flex-1">
        <p className="font-bold text-primary">© 2024 Yuki Softwares.</p>
      </div>
      <div>
        <Link href="/privacy">
          <Button variant="link" className="">
            <p className="font-extralight">Privacy & Policy</p>
          </Button>
        </Link>
        <Link href="/terms">
          <Button variant="link" className="">
            <p className="font-extralight">Terms of Service</p>
          </Button>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
