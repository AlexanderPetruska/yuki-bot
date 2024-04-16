import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="pb- container mx-auto flex max-w-6xl flex-col items-center justify-between md:flex-row">
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
