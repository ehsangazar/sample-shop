import { Button } from "@chakra-ui/react"

interface ButtonProps {
  buttonType: string;
  children: React.ReactNode;
  onClick: () => void;
}

const ButtonComponent = ({
  buttonType,
  children,
  onClick,
}: ButtonProps) => {
  return (
    <Button
      colorScheme={buttonType}
      onClick={onClick}
    >
    {children}
  </Button>
  )
}

export default ButtonComponent
