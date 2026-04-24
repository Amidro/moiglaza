import * as React from "react";

type IconProps = {
  size?: number;
  color?: string;
};

export function EyeIcon({ size = 22, color = "#2563eb" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M2.5 12C4.8 8.2 8.1 6 12 6C15.9 6 19.2 8.2 21.5 12C19.2 15.8 15.9 18 12 18C8.1 18 4.8 15.8 2.5 12Z"
        stroke={color}
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="12" r="3.1" stroke={color} strokeWidth="1.7" />
    </svg>
  );
}

export function QuestionIcon({ size = 22, color = "#2563eb" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="8.8" stroke={color} strokeWidth="1.7" />
      <path
        d="M10.1 9.4C10.4 8.4 11.2 7.7 12.3 7.7C13.7 7.7 14.6 8.4 14.6 9.6C14.6 10.5 14.1 11.1 13.2 11.7C12.4 12.2 12 12.7 12 13.7"
        stroke={color}
        strokeWidth="1.7"
        strokeLinecap="round"
      />
      <circle cx="12" cy="16.8" r="1" fill={color} />
    </svg>
  );
}

export function BookIcon({ size = 22, color = "#2563eb" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M5 6.8C5 5.81 5.81 5 6.8 5H10.8C11.7 5 12.5 5.4 13 6.1V18.6C12.45 18.04 11.71 17.7 10.8 17.7H6.8C5.81 17.7 5 16.89 5 15.9V6.8Z"
        stroke={color}
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
      <path
        d="M19 6.8C19 5.81 18.19 5 17.2 5H13.2C12.3 5 11.5 5.4 11 6.1V18.6C11.55 18.04 12.29 17.7 13.2 17.7H17.2C18.19 17.7 19 16.89 19 15.9V6.8Z"
        stroke={color}
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ScalpelIcon({ size = 22, color = "#2563eb" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M14.6 5.1L18.9 9.4"
        stroke={color}
        strokeWidth="1.7"
        strokeLinecap="round"
      />
      <path
        d="M6 18L10.6 13.4L14.8 17.6L10.2 22.2"
        stroke={color}
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.3 6.4L17.6 10.7"
        stroke={color}
        strokeWidth="1.7"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function TargetIcon({ size = 22, color = "#2563eb" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="8.8" stroke={color} strokeWidth="1.7" />
      <circle cx="12" cy="12" r="4.6" stroke={color} strokeWidth="1.7" />
      <circle cx="12" cy="12" r="1.4" fill={color} />
    </svg>
  );
}

export function LensIcon({ size = 24, color = "#2563eb" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <ellipse cx="12" cy="12" rx="5.1" ry="7" stroke={color} strokeWidth="1.7" />
      <path
        d="M7.8 6.8C8.8 7.4 10.2 7.8 12 7.8C13.8 7.8 15.2 7.4 16.2 6.8"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M7.8 17.2C8.8 16.6 10.2 16.2 12 16.2C13.8 16.2 15.2 16.6 16.2 17.2"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function LayersIcon({ size = 24, color = "#2563eb" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 5L19.5 9L12 13L4.5 9L12 5Z"
        stroke={color}
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
      <path
        d="M6.5 12L12 15L17.5 12"
        stroke={color}
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.5 15.2L12 18.2L17.5 15.2"
        stroke={color}
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function DropIcon({ size = 24, color = "#2563eb" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 4.2C12 4.2 6.8 10.1 6.8 14C6.8 17 9.16 19.2 12 19.2C14.84 19.2 17.2 17 17.2 14C17.2 10.1 12 4.2 12 4.2Z"
        stroke={color}
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function SparklesIcon({ size = 22, color = "#2563eb" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 4.2L13.4 8.6L17.8 10L13.4 11.4L12 15.8L10.6 11.4L6.2 10L10.6 8.6L12 4.2Z"
        stroke={color}
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path
        d="M18.2 15.8L18.8 17.4L20.4 18L18.8 18.6L18.2 20.2L17.6 18.6L16 18L17.6 17.4L18.2 15.8Z"
        fill={color}
      />
    </svg>
  );
}
