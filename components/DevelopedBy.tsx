"use client";

import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

function DevelopedBy() {
  return (
    <div className="h-[3.6rem] text-gray-500 flex-col justify-center items-center">
      <div className="flex-1 ">
        Developed by &nbsp;
        <Link
          className="underline text-blue-500"
          href={"https://linkedin.com/in/catherineonia"}
        >
          Catherine Onia
          <sup className=" inline-flex">
            <ArrowTopRightOnSquareIcon className="w-3 h-3 text-blue-500" />
          </sup>
        </Link>
      </div>
    </div>
  );
};

export default DevelopedBy;
