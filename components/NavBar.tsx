"use client";

import { FaDiscord } from "react-icons/fa6";
import { IoIosMenu } from "react-icons/io";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { BsStars } from "react-icons/bs";
import { useState } from "react";
import { RxCross1 } from "react-icons/rx";

const clientId = "635558005382971462";

const NavBar = () => {
  const [isClicked, setIsClicked] = useState<boolean>(false);
  const oauthUrl = `https://discord.com/api/oauth2/authorize?client_id=${clientId}&scope=bot`;

  const toggleNavbar = () => {
    setIsClicked(!isClicked);
  };

  return (
    <nav className="container bg-background">
      <div className="mx-auto max-w-6xl px-2 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <div className="flex items-center">
            <div className="flex-shirnk-0">
              <Link href="/" className="flex flex-row items-center">
                <Image
                  src="/logo.png"
                  width={50}
                  height={50}
                  alt="YukiBot Logo"
                  className="mr-3"
                />
                <p className="text-base">Yuki Bot</p>
              </Link>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-4 flex items-center space-x-8">
              <Link href="/commands" className="hover:text-primary">
                <Button variant="link">Commands</Button>
              </Link>
              <Link href="/team" className="hover:text-primary">
                <Button variant="link">Team</Button>
              </Link>
              <Link
                href="https://discord.gg/vwZywKzMZu"
                className="hover:text-primary"
                target="_blank"
                rel="noreferrer noopener"
              >
                <Button variant="link">Support</Button>
              </Link>
              <Link
                target="_blank"
                rel="noreferrer noopener"
                href="https://ko-fi.com/yuki_bot"
                className="flex flex-row items-center text-primary hover:text-white"
              >
                <Button variant="link">
                  <BsStars className="mr-1" />
                  Donate
                </Button>
              </Link>
            </div>
          </div>
          <div className="flex flex-row gap-2">
            <Link
              target="_blank"
              rel="noreferrer noopener"
              href={oauthUrl}
              className="hidden md:block"
            >
              <Button variant="outline">
                <FaDiscord size={20} className="mr-2" />
                Add to server
              </Button>
            </Link>
            <div className="flex items-center md:hidden">
              <Button
                className="inline-flex items-center justify-center rounded-md p-2"
                onClick={toggleNavbar}
                variant="link"
              >
                <IoIosMenu size={40} />
              </Button>
            </div>
          </div>
        </div>
      </div>
      {isClicked && (
        <div className="fixed inset-0 h-auto bg-gray-800 bg-opacity-75 md:hidden">
          <div className="flex h-full justify-end">
            <div className="space-y-2 rounded-lg bg-background p-4 text-right">
              <div className="mb-4 flex justify-end">
                <Button onClick={toggleNavbar} variant="link">
                  <RxCross1 size={30} />
                </Button>
              </div>
              <Link
                href="/commands"
                rel="noreferrer noopener"
                className="block text-right hover:text-primary"
                onClick={toggleNavbar}
              >
                Commands
              </Link>
              <Link
                href="/team"
                rel="noreferrer noopener"
                className="block text-right hover:text-primary"
                onClick={toggleNavbar}
              >
                Team
              </Link>
              <Link
                href="https://discord.gg/vwZywKzMZu"
                target="_blank"
                rel="noreferrer noopener"
                className="block text-right hover:text-primary"
                onClick={toggleNavbar}
              >
                Support
              </Link>
              <Link
                href="https://ko-fi.com/yuki_bote"
                target="_blank"
                rel="noreferrer noopener"
                className="flex justify-end text-right text-primary hover:text-white"
                onClick={toggleNavbar}
              >
                <div className="justify-cente flex items-center">
                  <BsStars className="mr-1" />
                  Donate
                </div>
              </Link>
              <Link
                onClick={toggleNavbar}
                target="_blank"
                rel="noreferrer noopener"
                href={oauthUrl}
                className="ml-12 block text-center"
              >
                <Button variant="outline">
                  <FaDiscord size={20} className="mr-2" />
                  Add to server
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
