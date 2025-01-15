import React from "react";
import Section from "./Section";
import { Input } from "./ui/input";

export default function Hero() {
  return (
    <Section>
      <div className="flex flex-col items-center justify-center min-h-screen gap-4 bg-hero-image">
        <h1 className="text-white text-4xl font-bold">
          Analyze your portfolio with PortiLens
        </h1>
        <p className="text-white">
          Uncover your portfolio&apos;s full potential with PortiLens
        </p>
        <div className="w-1/4 text-zinc-100">
          <Input type="link" placeholder="Enter your portfolio address" />
        </div>
      </div>
    </Section>
  );
}
