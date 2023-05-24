import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="bg-slate-400 py-20 px-20 grid gap-10">
      <div className="bg-white p-6 rounded-3xl shadow-xl ">
        <span className="font-semibold text-3xl">Select Item</span>
        <div className="flex justify-between mb-2">
          <span className="text-gray-500">Grey Chair</span>
          <span className="font-semibold">$19</span>
        </div>
        <div className="flex justify-between mb-2">
          <span className="text-gray-500">Grey Chair</span>
          <span className="font-semibold">$19</span>
        </div>
        <div className="flex justify-between mt-2 pt-2 border-t-2 border-dashed">
          <span>total</span>
          <span className="font-semibold">$38</span>
        </div>
        <div className="mt-5 bg-blue-500 text-white p-3 text-center rounded-xl w-1/2 mx-auto">
          checkout
        </div>
      </div>
      <div className="bg-white overflow-hidden rounded-3xl shadow-xl">
        <div className="bg-blue-500 p-6 pb-14">
          <h3 className="text-white text-2xl">Profile</h3>
        </div>
        <div className="bg-white p-6 realtive -top-5 rounded-3xl">
          <div className="relative -top-16 flex items-end justify-between">
            <div className="flex flex-col items-center">
              <span className="text-sm text-gray-500">Orders</span>
              <p className="font-medium">340</p>
            </div>
            <div className="w-24 h-24  bg-red-400 rounded-full" />
            <div className="flex flex-col items-center">
              <span className="text-sm text-gray-500">Orders</span>
              <p className="font-medium">340</p>
            </div>
          </div>
          <div className="-mt-10  flex flex-col items-center ">
            <p className="text-lg font-medium">Tony</p>
            <span className="text-sm text-gray-500">한국</span>
          </div>
        </div>
      </div>
      <div className="bg-white p-10 rounded-2xl shadow-xl"></div>
      <div className="bg-white p-10 rounded-2xl shadow-xl"></div>
    </div>
  );
}
