import React from "react";
import { Badge } from "./ui/badge";
const StackBadge = ({
  name,
  children,
}: {
  name: string;
  children?: React.ReactNode;
}) => {
  return (
    <Badge className="bg-accent text-primary rounded px-2 shadow">
      {children}
      {name}
    </Badge>
  );
};

export default StackBadge;
