"use client";

import { ChevronDown } from "lucide-react";

interface ButtonDownProps {
  className?: string;
}

export function ButtonDown({ className }: ButtonDownProps) {
  return (
    <a
      href="#skills"
      className={`${className} border-2 rounded-full bg-primary text-primary-foreground hover:bg-primary/75 p-5`}>
      <ChevronDown className="w-8 h-8" />
    </a>
  );
}
