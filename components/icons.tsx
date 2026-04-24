import * as React from "react";

type IconProps = {
  size?: number;
  color?: string;
};

export function EyeIcon({ size = 22, color = "#2563eb" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M2 12C4.5 7.8 8 5.5 12 5.5C16 5.5 19.5 7.8 22 12C19.5 16.2 16 18.5 12 18.5C8 18.5 4.5 16.2 2 12Z"
        stroke={color}
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="12" r="3.2" stroke={color} strokeWidth="1.8" />
    </svg>
  );
}

export function QuestionIcon({ size = 22, color = "#2563eb" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="9" stroke={color} strokeWidth="1.8" />
      <path
        d="M9.9 9.2C10.2 8.2 11 7.5 12.2 7.5C13.6 7.5 14.6 8.3 14.6 9.5C14.6 10.5 14 11.1 13.1 11.7C12.2 12.3 11.9 12.8 11.9 13.8"
        stroke={color}
        strokeWidth="1.8"
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
        d="M4.5 6.5C4.5 5.67 5.17 5 6 5H11C12.1 5 13 5.9 13 7V19C12.3 18.4 11.5 18 10.5 18H6C5.17 18 4.5 17.33 4.5 16.5V6.5Z"
        stroke={color}
        strokeWidth="1.8"
      />
      <path
        d="M19.5 6.5C19.5 5.67 18.83 5 18 5H13C11.9 5 11 5.9 11 7V19C11.7 18.4 12.5 18 13.5 18H18C18.83 18 19.5 17.33 19.5 16.5V6.5Z"
        stroke={color}
        strokeWidth="1.8"
      />
    </svg>
  );
}

export function ScalpelIcon({ size = 22, color = "#2563eb" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M14.5 4.5L19.5 9.5" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
      <path
        d="M5 19L10.5 13.5L14.5 17.5L9 23"
        stroke={color}
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path d="M13.5 5.5L18.5 10.5" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

export function TargetIcon({ size = 22, color = "#2563eb" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="8.5" stroke={color} strokeWidth="1.8" />
      <circle cx="12" cy="12" r="4.2" stroke={color} strokeWidth="1.8" />
      <circle cx="12" cy="12" r="1.2" fill={color} />
    </svg>
  );
}

export function LensIcon({ size = 26, color = "#2563eb" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <ellipse cx="12" cy="12" rx="5.5" ry="7" stroke={color} strokeWidth="1.8" />
      <path d="M6 8L3.8 6.2" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
      <path d="M18 16L20.2 17.8" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

export function LayersIcon({ size = 24, color = "#2563eb" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 4L20 8L12 12L4 8L12 4Z"
        stroke={color}
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="M4 12L12 16L20 12"
        stroke={color}
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="M4 16L12 20L20 16"
        stroke={color}
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function DropIcon({ size = 24, color = "#2563eb" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 3C12 3 6 10 6 14.2C6 17.6 8.7 20 12 20C15.3 20 18 17.6 18 14.2C18 10 12 3 12 3Z"
        stroke={color}
        strokeWidth="1.8"
      />
    </svg>
  );
}

export function SparklesIcon({ size = 22, color = "#2563eb" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 3L13.7 8.3L19 10L13.7 11.7L12 17L10.3 11.7L5 10L10.3 8.3L12 3Z"
        stroke={color}
        strokeWidth="1.6"
      />
      <path
        d="M18.5 16L19.2 18L21.2 18.7L19.2 19.4L18.5 21.4L17.8 19.4L15.8 18.7L17.8 18L18.5 16Z"
        fill={color}
      />
    </svg>
  );
}
