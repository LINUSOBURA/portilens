import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <div>
      <div className="flex items-center justify-between px-8 py-2 text-white">
        <div className="flex-1">
          <h1 className="text-2xl font-bold">PortiLens</h1>
        </div>
        <div className="flex-1">
          <div className="flex justify-end">
            <div className="flex items-center space-x-4 font-medium">
              <div>
                <Link href={"/"} className="opacity-50 hover:opacity-100">
                  Home
                </Link>
              </div>
              <div className="">
                <Link
                  href={"/dashboard"}
                  className="opacity-50 hover:opacity-100"
                >
                  Dashboard
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
