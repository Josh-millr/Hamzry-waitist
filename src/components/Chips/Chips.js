import Image from "next/image";
import { VscBellDot } from "react-icons/vsc";
import { HiStar, HiOutlineChartSquareBar } from "react-icons/hi";

// Base styles
const shadowStyle = "shadow-[0_0_14px_rgba(0,0,0,0.1)]";

// Rating Chip
export function RatingChip({ img, name, count, className }) {
  return (
    <div
      className={`${className} inline flex h-fit w-fit items-center 
      gap-x-2 rounded-full bg-white p-2 pr-4 ${shadowStyle}`}
    >
      <Image
        width={40}
        height={40}
        src={img || ""}
        className="rounded-full"
        alt="Profile image of man in hoodie"
      />

      <div className="">
        <div className="flex items-center gap-x-2">
          <p className="text-sm font-bold">{name}</p>
          <div className="flex">
            <HiStar color="#E8B535" size={16} />
            <HiStar color="#E8B535" size={16} />
            <HiStar color="#E8B535" size={16} />
            <HiStar color="#E8B535" size={16} />
            <HiStar color="#D9D9D9" size={16} />
          </div>
        </div>
        <p className="text-sm">{`Completed ${count} Projects`}</p>
      </div>
    </div>
  );
}

// Milestone Chip
export function MilestoneChip({ count, className }) {
  return (
    <div
      className={`${className} inline grid h-fit w-fit gap-y-2
      gap-x-2 rounded-2xl bg-white p-3 ${shadowStyle}`}
    >
      <p className="text-sm text-gray-500">MILESTONE</p>

      <div className="flex items-center gap-x-2">
        <HiOutlineChartSquareBar size={24} color="#108239" />
        <p className="text-sm font-bold">{`${count}/10 Completed`}</p>
      </div>
    </div>
  );
}

// Payment Chip
export function PaymentChip({ amount, className }) {
  return (
    <div
      className={`${className} inline flex h-fit w-fit items-center 
      gap-x-2 rounded-2xl bg-white p-2 pr-4 ${shadowStyle}`}
    >
      <div className="flex h-12 w-12 rounded-lg bg-[#DAEEE1]">
        <VscBellDot size={20} color="#108239" className="m-auto" />
      </div>

      <div className="grid gap-y-1">
        <p className="text-sm text-gray-400">Payment Received</p>
        <p className="text-sm">
          You just received <span className="font-bold">₦{amount}</span>
        </p>
      </div>
    </div>
  );
}
