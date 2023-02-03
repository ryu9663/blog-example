import { ReactNode } from "react";
import styles from "./alert.module.scss";
import { clsx } from "clsx";

interface Props {
  children: ReactNode;
  type: "success" | "error";
}

const Alert = ({ children, type }: Props) => {
  return (
    <div
      className={clsx({
        [styles.success]: type === "success",
        [styles.error]: type === "error",
      })}
    >
      {children}
    </div>
  );
};

export default Alert;
