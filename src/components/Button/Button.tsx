import { Button } from "@chakra-ui/react"

interface ButtonProps {
  buttonType?: string;
  children: React.ReactNode;
  onClick?: () => void;
}

const ButtonComponent = ({
  buttonType,
  children,
  onClick,
}: ButtonProps) => {

  const handleClick = () => {
    console.log('Button is Clicked ')
    onClick && onClick()
  }

  return (
    <Button
      colorScheme={buttonType}
      onClick={handleClick}
    >
    {children}
  </Button>
  )
}

export default ButtonComponent
