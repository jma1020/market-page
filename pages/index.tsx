import Image from "next/image";
import { Inter } from "next/font/google";
import SVGIcon from "@/com/SVGIcon";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="bg-slate-400 py-20 px-20 grid gap-10 min-h-screen">
      <SVGIcon icon="CheckIcon" size={16} />
      <div className="bg-white p-6 rounded-3xl shadow-xl ">
        <span className="font-semibold text-3xl">Select Item</span>

        <ul>
          {[1, 2, 3, 4, 50].map((i) => (
            <div
              key={i}
              className={`flex justify-between my-2 first:bg-blue-50 last:bg-blue-${i} odd:bg-blue-500`}
            >
              <span className="text-gray-500">Grey Chair</span>
              <span className="font-semibold">$19</span>
            </div>
          ))}
        </ul>

        <ul>
          {["a", "b", "c", ""].map((item, index) => (
            <li key={index} className="bg-red-500 py-6 empty:hidden">
              {item}
            </li>
          ))}
        </ul>

        <div className="flex justify-between mt-2 pt-2 border-t-2 border-dashed">
          <span>total</span>
          <span className="font-semibold">$38</span>
        </div>
        <button
          className="mt-5 bg-blue-500 text-white p-3 text-center rounded-xl w-1/2 mx-auto
        hover:bg-teal-500 hover:text-black active:bg-yellow-500 focus:bg-red-500
        "
        >
          checkout
        </button>
      </div>
      <div className="bg-white overflow-hidden rounded-3xl shadow-xl group">
        <div className="bg-blue-500 p-6 pb-14">
          <h3 className="text-white text-2xl">Profile</h3>
        </div>
        <div className="bg-white p-6 realtive -top-5 rounded-3xl">
          <div className="relative -top-16 flex items-end justify-between">
            <div className="flex flex-col items-center">
              <span className="text-sm text-gray-500">Orders</span>
              <p className="font-medium">340</p>
            </div>
            <div className="w-24 h-24  bg-red-400 rounded-full group-hover:bg-red-300 transition-colors " />
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
      <div className="bg-white p-6 rounded-3xl shadow-xl">
        <div className="flex justify-between items-center mb-5">
          <span>⬅️</span>
          <div className="space-x-3">
            <span>⭐️4.7</span>
            <span className="shadow-xl p-2 rounded-md">💖 </span>
          </div>
        </div>
        <div className="bg-zinc-400 h-72 mb-5" />
        <div>
          <h3 className="font-medium text-xl">Swoon Lounge</h3>
          <span className="text-xs text-gray-500">Chair</span>
          <div className="mt-3 mb-5 flex justify-between items-center">
            <div className="space-x-2">
              <button className="w-5 h-5 rounded-full bg-yellow-500 focus:ring-2 ring-offset-2 ring-yellow-500 transition"></button>
              <button className="w-5 h-5 rounded-full bg-indigo-500  focus:ring-2 ring-offset-2 ring-indigo-500 transition"></button>
              <button className="w-5 h-5 rounded-full bg-teal-500  focus:ring-2 ring-offset-2 ring-teal-500 transition"></button>
            </div>
            <div className="flex items-center space-x-5">
              <button className="w-8  bg-blue-200 flex justify-center items-center aspect-square text-xl text-gray-500 rounded-lg">
                -
              </button>
              <span>1</span>
              <button className="w-8  bg-blue-200 flex justify-center items-center aspect-square text-xl text-gray-500 rounded-lg">
                +
              </button>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <span className="font-medium text-2xl">4,600원</span>
            <button className="px-8 py-2 bg-blue-500 text-center text-xs text-white rounded-lg">
              장바구니 추가
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
