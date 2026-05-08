import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import styles from "./Button.module.css";
import { ArrowRightIcon } from "./icons";

type Variant = "primary" | "secondary";

const variantClass: Record<Variant, string> = {
  primary: styles.primary,
  secondary: styles.secondary,
};

type CommonProps = {
  variant?: Variant;
  children: ReactNode;
  withArrow?: boolean;
  className?: string;
};

type LinkProps = CommonProps & { href: string } & Omit<
    AnchorHTMLAttributes<HTMLAnchorElement>,
    "className" | "children" | "href"
  >;

type ButtonProps = CommonProps & { href?: undefined } & Omit<
    ButtonHTMLAttributes<HTMLButtonElement>,
    "className" | "children"
  >;

export function Button(props: LinkProps | ButtonProps) {
  const { variant = "primary", children, withArrow, className, ...rest } = props;
  const cls = [variantClass[variant], className].filter(Boolean).join(" ");
  const content = (
    <>
      {children}
      {withArrow ? <ArrowRightIcon /> : null}
    </>
  );

  if ("href" in rest && rest.href) {
    return (
      <a className={cls} {...(rest as AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {content}
      </a>
    );
  }
  return (
    <button className={cls} {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {content}
    </button>
  );
}

export function CenterCta({ children }: { children: ReactNode }) {
  return <div className={styles.centerCta}>{children}</div>;
}
