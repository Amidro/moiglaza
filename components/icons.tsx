import * as React from "react";

type IconProps = {
  size?: number;
  color?: string;
};

export function EyeIcon({ size = 26, color = "#2563eb" }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M2.9 12C5.15 8.7 8.28 6.9 12 6.9C15.72 6.9 18.85 8.7 21.1 12C18.85 15.3 15.72 17.1 12 17.1C8.28 17.1 5.15 15.3 2.9 12Z"
        stroke={color}
        strokeWidth="1.85"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="12" r="3.05" stroke={color} strokeWidth="1.85" />
      <circle cx="12" cy="12" r="1.15" fill={color} />
    </svg>
  );
}

export function CataractIcon({ size = 26, color = "#2563eb" }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M2.9 12C5.15 8.7 8.28 6.9 12 6.9C15.72 6.9 18.85 8.7 21.1 12C18.85 15.3 15.72 17.1 12 17.1C8.28 17.1 5.15 15.3 2.9 12Z"
        stroke={color}
        strokeWidth="1.85"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="12" r="3.05" stroke={color} strokeWidth="1.85" />
      <circle cx="12" cy="12" r="1.65" fill={color} opacity="0.28" />
      <circle cx="12" cy="12" r="0.7" fill={color} opacity="0.12" />
    </svg>
  );
}

export function QuestionIcon({ size = 26, color = "#2563eb" }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="8.6" stroke={color} strokeWidth="1.85" />
      <path
        d="M10.25 9.55C10.55 8.68 11.28 8.02 12.38 8.02C13.75 8.02 14.68 8.82 14.68 10.02C14.68 10.92 14.16 11.48 13.32 12.04C12.54 12.56 12.12 13.02 12.12 13.9"
        stroke={color}
        strokeWidth="1.85"
        strokeLinecap="round"
      />
      <circle cx="12.12" cy="16.62" r="1.02" fill={color} />
    </svg>
  );
}

export function ReadingIcon({ size = 26, color = "#2563eb" }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M5.45 7.1C5.45 6.08 6.26 5.28 7.28 5.28H10.62C11.74 5.28 12.56 5.67 13.08 6.34V17.65C12.54 17.15 11.77 16.88 10.86 16.88H7.28C6.26 16.88 5.45 16.07 5.45 15.05V7.1Z"
        stroke={color}
        strokeWidth="1.85"
        strokeLinejoin="round"
      />
      <path
        d="M18.55 7.1C18.55 6.08 17.74 5.28 16.72 5.28H13.38C12.26 5.28 11.44 5.67 10.92 6.34V17.65C11.46 17.15 12.23 16.88 13.14 16.88H16.72C17.74 16.88 18.55 16.07 18.55 15.05V7.1Z"
        stroke={color}
        strokeWidth="1.85"
        strokeLinejoin="round"
      />
      <path
        d="M12 6.6V17"
        stroke={color}
        strokeWidth="1.4"
        strokeLinecap="round"
        opacity="0.18"
      />
    </svg>
  );
}

export function SurgeryIcon({
  size = 24,
  color = "#2563eb",
}: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      {/* глаз */}
      <path
        d="M2.5 12C4.3 8.7 7.7 6.8 12 6.8C16.3 6.8 19.7 8.7 21.5 12C19.7 15.3 16.3 17.2 12 17.2C7.7 17.2 4.3 15.3 2.5 12Z"
        stroke={color}
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* зрачок */}
      <circle
        cx="10.2"
        cy="12"
        r="2.1"
        stroke={color}
        strokeWidth="1.7"
      />

      {/* искусственная линза */}
      <circle
        cx="16.9"
        cy="8.3"
        r="2.2"
        stroke={color}
        strokeWidth="1.7"
      />

      {/* маленькие "опоры" линзы */}
      <path
        d="M15.3 6.9L14.4 6.2"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M18.5 9.7L19.4 10.4"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
      />

      {/* мягкая дуга / движение к глазу */}
      <path
        d="M14.5 10.2C13.9 10.7 13.3 11.1 12.7 11.4"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function TargetIcon({ size = 26, color = "#2563eb" }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="8.55" stroke={color} strokeWidth="1.85" />
      <circle cx="12" cy="12" r="4.35" stroke={color} strokeWidth="1.85" />
      <circle cx="12" cy="12" r="1.45" fill={color} />
    </svg>
  );
}

export function LensIcon({ size = 26, color = "#2563eb" }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <ellipse
        cx="12"
        cy="12"
        rx="5.05"
        ry="6.85"
        stroke={color}
        strokeWidth="1.85"
      />
      <path
        d="M8.45 7.35C9.24 7.82 10.35 8.12 12 8.12C13.65 8.12 14.76 7.82 15.55 7.35"
        stroke={color}
        strokeWidth="1.55"
        strokeLinecap="round"
      />
      <path
        d="M8.45 16.65C9.24 16.18 10.35 15.88 12 15.88C13.65 15.88 14.76 16.18 15.55 16.65"
        stroke={color}
        strokeWidth="1.55"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function IntermediateIcon({ size = 26, color = "#2563eb" }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <rect
        x="5.15"
        y="7.05"
        width="13.7"
        height="9.7"
        rx="2.45"
        stroke={color}
        strokeWidth="1.85"
      />
      <path
        d="M9.25 18.75H14.75"
        stroke={color}
        strokeWidth="1.85"
        strokeLinecap="round"
      />
      <path
        d="M10.05 10.55H13.95"
        stroke={color}
        strokeWidth="1.55"
        strokeLinecap="round"
      />
      <path
        d="M9.15 13H14.85"
        stroke={color}
        strokeWidth="1.55"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function MultifocalIcon({ size = 26, color = "#2563eb" }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M12 5.7L18.75 9L12 12.3L5.25 9L12 5.7Z"
        stroke={color}
        strokeWidth="1.85"
        strokeLinejoin="round"
      />
      <path
        d="M7.15 12.15L12 14.65L16.85 12.15"
        stroke={color}
        strokeWidth="1.85"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.15 15L12 17.5L16.85 15"
        stroke={color}
        strokeWidth="1.85"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function DropIcon({ size = 26, color = "#2563eb" }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M12 4.65C12 4.65 7.25 10.02 7.25 13.72C7.25 16.57 9.37 18.77 12 18.77C14.63 18.77 16.75 16.57 16.75 13.72C16.75 10.02 12 4.65 12 4.65Z"
        stroke={color}
        strokeWidth="1.85"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ComfortIcon({ size = 26, color = "#2563eb" }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M12 18.45C12 18.45 6.35 15.25 6.35 11.05C6.35 9.23 7.62 7.98 9.18 7.98C10.33 7.98 11.22 8.51 12 9.27C12.78 8.51 13.67 7.98 14.82 7.98C16.38 7.98 17.65 9.23 17.65 11.05C17.65 15.25 12 18.45 12 18.45Z"
        stroke={color}
        strokeWidth="1.85"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function SparklesIcon({ size = 26, color = "#2563eb" }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M12 5L13.18 8.48L16.66 9.66L13.18 10.84L12 14.32L10.82 10.84L7.34 9.66L10.82 8.48L12 5Z"
        stroke={color}
        strokeWidth="1.72"
        strokeLinejoin="round"
      />
      <path
        d="M17.95 15.95L18.45 17.15L19.65 17.65L18.45 18.15L17.95 19.35L17.45 18.15L16.25 17.65L17.45 17.15L17.95 15.95Z"
        fill={color}
      />
    </svg>
  );
}
