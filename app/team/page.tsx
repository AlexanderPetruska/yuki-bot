import Image from "next/image";
import Link from "next/link";
import { FaDiscord } from "react-icons/fa6";

const Team = () => {
  return (
    <main className="flex flex-col items-center justify-center gap-4">
      <div>
        <h1 className="mb-1 text-center text-3xl font-bold">
          Meet our <span className="text-center text-primary">Team</span>
        </h1>
        <p className="container mb-10 max-w-80 overflow-auto text-center text-sm font-light text-gray-300 md:max-w-full">
          Meet the amazing team behind the development of the Yuki Bot!
        </p>
      </div>
      <div className="flex flex-col gap-4 md:flex-row md:gap-8">
        <div className="flex h-28 w-full flex-row items-center justify-start gap-6 rounded-xl bg-card p-5 md:h-64 md:w-52 md:flex-col md:rounded-3xl">
          <div className="flex justify-center align-top">
            <Image
              src="/logo.png"
              alt="profile picture"
              className="h-20 w-20 md:h-28 md:w-28"
              width={1000}
              height={1000}
            />
          </div>
          <div className="flex flex-col justify-start gap-2 md:text-center">
            <h2 className="font-bold md:font-black">iNy &lt;3</h2>
            <p className="text-xs font-light md:text-sm">Founder & Developer</p>
            <div className="flex flex-row md:justify-center">
              <Link href="/LINK TO DISCORD">
                <FaDiscord className="h-6 w-6" size={0} />
              </Link>
            </div>
          </div>
        </div>
        <div className="flex h-28 w-full max-w-72 flex-row items-center justify-start gap-6 rounded-xl bg-card p-5 md:h-64 md:w-52 md:flex-col md:rounded-3xl">
          <div className="flex justify-center align-top">
            <Image
              src="/logo.png"
              alt="profile picture"
              className="h-20 w-20 md:h-28 md:w-28"
              width={1000}
              height={1000}
            />
          </div>
          <div className="flex flex-col justify-start gap-2 md:text-center">
            <h2 className="font-bold md:font-black">iNy &lt;3</h2>
            <p className="text-xs font-light md:text-sm">Founder & Developer</p>
            <div className="flex flex-row md:justify-center">
              <Link href="/LINK TO DISCORD">
                <FaDiscord className="h-6 w-6" size={0} />
              </Link>
            </div>
          </div>
        </div>
        <div className="mb-10 flex h-28 w-full max-w-72 flex-row items-center justify-start gap-6 rounded-xl bg-card p-5 md:h-64 md:w-52 md:flex-col md:rounded-3xl">
          <div className="flex justify-center align-top">
            <Image
              src="/logo.png"
              alt="profile picture"
              className="h-20 w-20 md:h-28 md:w-28"
              width={1000}
              height={1000}
            />
          </div>
          <div className="flex flex-col justify-start gap-2 md:text-center">
            <h2 className="font-bold md:font-black">iNy &lt;3</h2>
            <p className="text-xs font-light md:text-sm">Founder & Developer</p>
            <div className="flex flex-row md:justify-center">
              <Link href="/LINK TO DISCORD">
                <FaDiscord className="h-6 w-6" size={0} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Team;
