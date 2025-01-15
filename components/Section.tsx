import React from "react";

interface SectionProps {
  children: React.ReactNode;
}
export default function Section({ children }: SectionProps) {
  return <div className="px-4 py-2">{children}</div>;
}
