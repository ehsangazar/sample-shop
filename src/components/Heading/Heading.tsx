import { As, Heading } from "@chakra-ui/react";
import React from "react";

interface HeadingComponentProps {
  as?: As;
  size?: string;
  children: React.ReactNode;
}

const HeadingComponent = ({
  as,
  size,
  children
}: HeadingComponentProps) => {
  return (
    <Heading as={as} size={size}>
      {children}
    </Heading>
  )
};

export default HeadingComponent;
