import { MainNav } from "@/components/mainnav";
import Link from "next/link";

export default function Moviespage() {
  return (
    <div className="flex flex-col   text-center min-h-screen">
      <MainNav />
      <main className=" flex flex-col flex-6 bg-purple-400 h-96 text-2xl justify-center items-center gap-4">
        This is movies page
        <Link
          href="./"
          className="text-white bg-black p-4 rounded-full text-sm"
        >
          GO HOME PAGE
        </Link>
        
      </main>
    </div>
  );
}
