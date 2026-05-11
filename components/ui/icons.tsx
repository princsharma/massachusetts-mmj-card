import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const baseProps = {
  fill: "none",
  stroke: "currentColor",
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  viewBox: "0 0 24 24",
  "aria-hidden": true,
  focusable: false,
};

const DEFAULT_SIZE = 18;

export function ArrowRightIcon({
  width = DEFAULT_SIZE,
  height = DEFAULT_SIZE,
  strokeWidth = 2.5,
  ...rest
}: IconProps) {
  return (
    <svg {...baseProps} width={width} height={height} strokeWidth={strokeWidth} {...rest}>
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  );
}

export function CheckIcon({
  width = DEFAULT_SIZE,
  height = DEFAULT_SIZE,
  strokeWidth = 3,
  ...rest
}: IconProps) {
  return (
    <svg {...baseProps} width={width} height={height} strokeWidth={strokeWidth} {...rest}>
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

export function BoltIcon({
  width = DEFAULT_SIZE,
  height = DEFAULT_SIZE,
  strokeWidth = 2.5,
  ...rest
}: IconProps) {
  return (
    <svg {...baseProps} width={width} height={height} strokeWidth={strokeWidth} {...rest}>
      <path d="M13 2 L3 14 L12 14 L11 22 L21 10 L12 10 L13 2" />
    </svg>
  );
}

export function StarIcon({
  width = DEFAULT_SIZE,
  height = DEFAULT_SIZE,
  strokeWidth = 2.5,
  ...rest
}: IconProps) {
  return (
    <svg {...baseProps} width={width} height={height} strokeWidth={strokeWidth} {...rest}>
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}

export function ShieldCheckIcon({
  width = DEFAULT_SIZE,
  height = DEFAULT_SIZE,
  strokeWidth = 2.5,
  ...rest
}: IconProps) {
  return (
    <svg {...baseProps} width={width} height={height} strokeWidth={strokeWidth} {...rest}>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <polyline points="9 12 11 14 15 10" />
    </svg>
  );
}

export function LockIcon({
  width = DEFAULT_SIZE,
  height = DEFAULT_SIZE,
  strokeWidth = 2.5,
  ...rest
}: IconProps) {
  return (
    <svg {...baseProps} width={width} height={height} strokeWidth={strokeWidth} {...rest}>
      <rect x="3" y="11" width="18" height="11" rx="2" />
      <path d="M7 11V7a5 5 0 0110 0v4" />
    </svg>
  );
}

export function ClockIcon({
  width = DEFAULT_SIZE,
  height = DEFAULT_SIZE,
  strokeWidth = 2.5,
  ...rest
}: IconProps) {
  return (
    <svg {...baseProps} width={width} height={height} strokeWidth={strokeWidth} {...rest}>
      <circle cx="12" cy="12" r="10" />
      <path d="M12 6v6l4 2" />
    </svg>
  );
}

export function UserIcon({
  width = DEFAULT_SIZE,
  height = DEFAULT_SIZE,
  strokeWidth = 2,
  ...rest
}: IconProps) {
  return (
    <svg {...baseProps} width={width} height={height} strokeWidth={strokeWidth} {...rest}>
      <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
      <circle cx="8.5" cy="7" r="4" />
    </svg>
  );
}

export function MailIcon({
  width = DEFAULT_SIZE,
  height = DEFAULT_SIZE,
  strokeWidth = 2,
  ...rest
}: IconProps) {
  return (
    <svg {...baseProps} width={width} height={height} strokeWidth={strokeWidth} {...rest}>
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  );
}

export function PhoneIcon({
  width = DEFAULT_SIZE,
  height = DEFAULT_SIZE,
  strokeWidth = 2,
  ...rest
}: IconProps) {
  return (
    <svg {...baseProps} width={width} height={height} strokeWidth={strokeWidth} {...rest}>
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
    </svg>
  );
}

export function MapPinIcon({
  width = DEFAULT_SIZE,
  height = DEFAULT_SIZE,
  strokeWidth = 2,
  ...rest
}: IconProps) {
  return (
    <svg {...baseProps} width={width} height={height} strokeWidth={strokeWidth} {...rest}>
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

export function ChevronRightIcon({
  width = DEFAULT_SIZE,
  height = DEFAULT_SIZE,
  strokeWidth = 2,
  ...rest
}: IconProps) {
  return (
    <svg {...baseProps} width={width} height={height} strokeWidth={strokeWidth} {...rest}>
      <polyline points="9 18 15 12 9 6" />
    </svg>
  );
}

export function HelpCircleIcon({
  width = DEFAULT_SIZE,
  height = DEFAULT_SIZE,
  strokeWidth = 2.5,
  ...rest
}: IconProps) {
  return (
    <svg {...baseProps} width={width} height={height} strokeWidth={strokeWidth} {...rest}>
      <circle cx="12" cy="12" r="10" />
      <path d="M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3M12 17h.01" />
    </svg>
  );
}

export function InfoIcon({
  width = DEFAULT_SIZE,
  height = DEFAULT_SIZE,
  strokeWidth = 2,
  ...rest
}: IconProps) {
  return (
    <svg {...baseProps} width={width} height={height} strokeWidth={strokeWidth} {...rest}>
      <circle cx="12" cy="12" r="10" />
      <path d="M12 16v-4M12 8h.01" />
    </svg>
  );
}

export function PlayIcon({
  width = DEFAULT_SIZE,
  height = DEFAULT_SIZE,
  strokeWidth = 2,
  ...rest
}: IconProps) {
  return (
    <svg {...baseProps} width={width} height={height} strokeWidth={strokeWidth} {...rest}>
      <circle cx="12" cy="12" r="10" />
      <polygon points="10 8 16 12 10 16 10 8" fill="currentColor" />
    </svg>
  );
}

export function MedalIcon({
  width = DEFAULT_SIZE,
  height = DEFAULT_SIZE,
  strokeWidth = 2,
  ...rest
}: IconProps) {
  return (
    <svg {...baseProps} width={width} height={height} strokeWidth={strokeWidth} {...rest}>
      <circle cx="12" cy="8" r="6" />
      <polyline points="9 14 7 22 12 19 17 22 15 14" />
    </svg>
  );
}

