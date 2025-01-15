"use client";

import DoughnutChart from "@/components/charts/DonoutChart";
import Section from "@/components/Section";
import PolarAreaChart from "@/components/charts/PolarArea";

import DataFetchingComponent from "@/components/dataFetching/fetchJson";
import { useState } from "react";

export default function Dashboard() {
  const [value, setValue] = useState(50);
  const getColor = (value) => {
    if (value >= 0 && value <= 49) return "text-red-500"; // red color for 0-49
    if (value >= 50 && value <= 79) return "text-yellow-500"; // yellow color for 50-79
    if (value >= 80 && value <= 100) return "text-green-500"; // green color for 80-100
    return ""; // Default case (in case the value is outside the range)
  };

  const strengths = DataFetchingComponent();

  return (
    <Section>
      <div className="flex">
        <div className="flex flex-col min-h-screen w-1/6 bg-blue-800 rounded-l-xl"></div>
        <div className="flex flex-col min-h-screen w-5/6 gap-4">
          <div className="flex flex-col h-1/4 w-full bg-zinc-800 p-8 rounded-tr-xl">
            <h1 className="text-2xl font-bold text-zinc-50">
              Analysis Results
            </h1>
            <div className="flex justify-around">
              <div className=" mt-4 text-xl text-zinc-200 text-center">
                <h3 className="font-bold">Overal Rating</h3>
                <span className="font-bold text-xl">
                  <p className={getColor(79)}>{`${value}%`}</p>
                </span>
              </div>
              <div className=" mt-4 text-xl text-zinc-200 text-center">
                <h3 className="font-bold">Design</h3>
                <span className="font-bold text-xl">
                  <p className={getColor(85)}>{`${value}%`}</p>
                </span>
              </div>
              <div className=" mt-4 text-xl text-zinc-200 text-center">
                <h3 className="font-bold">Content</h3>
                <span className="font-bold text-xl">
                  <p className={getColor(40)}>{`${value}%`}</p>
                </span>
              </div>
              <div className=" mt-4 text-xl text-zinc-200 text-center">
                <h3 className="font-bold">Career Readiness</h3>
                <span className="font-bold text-xl">
                  <p className={getColor(60)}>{`${value}%`}</p>
                </span>
              </div>
            </div>
          </div>
          <div className="flex px-8 py-2 gap-6">
            <div className="flex w-auto justify-center items-center bg-zinc-800 rounded-xl">
              <PolarAreaChart />
            </div>
            <div className="flex  w-fit justify-center items-center bg-zinc-800 rounded-xl p-4">
              <DoughnutChart />
            </div>
          </div>
          <div className="ml-8 px-8 py-6 bg-zinc-800 rounded-br-xl">
            <div>
              <h3 className="text-xl font-bold text-zinc-50">
                Actionable Suggestions
              </h3>
              <ul className="text-zinc-200">
                {strengths.length > 0 ? (
                  strengths.map((strength, index) => (
                    <li key={index}>{strength}</li>
                  ))
                ) : (
                  <li>Loading...</li>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
