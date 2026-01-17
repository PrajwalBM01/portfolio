import React from "react";
import { Badge } from "./ui/badge";
import { JavaScript } from "./icons/js";

const StackBadge = ({
  name,
  children,
}: {
  name: string;
  children?: React.ReactNode;
}) => {
  return (
    <Badge className="bg-accent text-primary rounded px-2">
      {children}
      {name}
    </Badge>
  );
};

export default StackBadge;
