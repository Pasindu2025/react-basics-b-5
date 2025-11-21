//simple react server component
//home page

import Link from "next/link";
import Image from "next/image";
import { MainNav } from "@/components/mainnav";
//ssr enable by default
export default function Home() {
  return (
    <div className="min-h-screen flex flex-col relative">
      <MainNav/>
      <main className=" flex flex-col flex-6 bg-purple-400 h-96 text-2xl justify-center items-center gap-4">
        This is home page
        <Link
          href="./movies"
          className="text-white bg-black p-4 rounded-full text-sm"
        >
          GO MOVIE PAGE
        </Link>
        <div>
          <Image
            src="/programmer-night.jpg"
            alt="namejbjhddh "
            width={300}
            height={250}
          />
        </div>
      </main>
    </div>
  );
}
