import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="container mx-auto flex h-14 max-w-6xl flex-col items-center justify-between md:flex-row">
      <div className="flex-1">
        <p className="text-primary">© 2024 Yuki Softwares.</p>
      </div>
      <div>
        <Link href="/privacy">
          <Button variant="link" className="">
            <p>Privacy & Policy</p>
          </Button>
        </Link>
        <Link href="/terms">
          <Button variant="link" className="">
            <p>Terms of Service</p>
          </Button>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
