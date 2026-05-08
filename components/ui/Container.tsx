import type { ElementType, HTMLAttributes, ReactNode } from "react";
import styles from "./Container.module.css";

type ContainerProps<T extends ElementType = "div"> = {
  as?: T;
  children: ReactNode;
  className?: string;
} & Omit<HTMLAttributes<HTMLElement>, "className" | "children">;

export function Container({
  as,
  children,
  className,
  ...rest
}: ContainerProps) {
  const Tag = (as ?? "div") as ElementType;
  const cls = className ? `${styles.container} ${className}` : styles.container;
  return (
    <Tag className={cls} {...rest}>
      {children}
    </Tag>
  );
}
