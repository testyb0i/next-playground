"use client";
import { Inter } from "next/font/google";
import { useMediaQuery } from "../../hooks/useMediaQuery";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const sm = useMediaQuery("(min-width: 640px)");
  const md = useMediaQuery("(min-width: 768px)");
  const lg = useMediaQuery("(min-width: 1024px)");
  const xl = useMediaQuery("(min-width: 1280px)");
  const xxl = useMediaQuery("(min-width: 1536px)");

  console.log({ sm, md, lg, xl, xxl });

  return (
    <main className=" max-h-screen snap-y snap-mandatory overflow-y-scroll">
      <div className="h-screen flex w-screen bg-lime-400">
        <div className="snap-center m-auto border-2 border-slate-900 relative w-96 h-56">
          <div className="absolute right-[90%] top-[20%] w-36 h-36 border-2 border-slate-900"></div>
          <div>
            
          </div>
        </div>
      </div>
      <div className="h-screen flex w-screen bg-sky-400">
        <h1 className="snap-center m-auto">hello</h1>
      </div>
      <div className="h-screen flex w-screen bg-amber-300">
        <h1 className="snap-center m-auto">hello</h1>
      </div>
      <div className="h-screen flex w-screen bg-rose-400">
        <h1 className="snap-center m-auto">hello</h1>
      </div>
      <div className="h-screen flex w-screen bg-orange-400">
        <h1 className="snap-center m-auto">hello</h1>
      </div>
    </main>
  );
}
