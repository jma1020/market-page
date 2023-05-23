import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="bg-slate-400 py-10 px-5 flex-col space-y-5">
      <div className="bg-white p-10 rounded-2xl "> </div>
      <div className="bg-white p-10 rounded-2xl"></div>
      <div className="bg-white p-10 rounded-2xl"></div>
      <div className="bg-white p-10 rounded-2xl"></div>
    </div>
  );
}
