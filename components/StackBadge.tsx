import React from "react";
import { Badge } from "./ui/badge";
import { cn } from "@/lib/utils";
const StackBadge = ({
  name,
  children,
  className,
}: {
  name?: string;
  children?: React.ReactNode;
  className?: string;
}) => {
  return (
    <Badge
      className={cn("bg-accent text-primary rounded px-2 shadow", className)}
    >
      {children}
      {name}
    </Badge>
  );
};

export default StackBadge;
