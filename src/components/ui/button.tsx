import { ReactNode, useEffect, useState } from "react";

interface ButtonProps {
  children: ReactNode;
  variant: "danger" | "success";
  rounded?: "full";
  type?: "submit" | "reset" | "button";
}

export const Button: React.FC<ButtonProps> = (props) => {
  const { children, variant, rounded, ...other } = props;
  const [isVariant, setIsVariant] = useState("");
  const [isRounded, setIsRounded] = useState("");

  useEffect(() => {
    setIsVariant(
      {
        danger: "mx-2 bg-red-400",
        success: "mx-2 bg-emerald-400",
      }[variant]
    );
    if (rounded === "full") {
      setIsRounded(" rounded-full h-12 w-12");
    } else {
      setIsRounded(" rounded-md w-24");
    }
  }, []);

  return (
    <button className={isVariant + isRounded} {...other}>
      {children}
    </button>
  );
};

export default Button;
