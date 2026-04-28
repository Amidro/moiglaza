import * as React from "react";

type IconProps = {
  size?: number;
  color?: string;
};

export function EyeIcon({ size = 22, color = "#2563eb" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M2.8 12C5.1 8.5 8.3 6.5 12 6.5C15.7 6.5 18.9 8.5 21.2 12C18.9 15.5 15.7 17.5 12 17.5C8.3 17.5 5.1 15.5 2.8 12Z"
        stroke={color}
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="12" r="2.9" stroke={color} strokeWidth="1.7" />
    </svg>
  );
}

export function CataractIcon({ size = 22, color = "#2563eb" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M2.8 12C5.1 8.5 8.3 6.5 12 6.5C15.7 6.5 18.9 8.5 21.2 12C18.9 15.5 15.7 17.5 12 17.5C8.3 17.5 5.1 15.5 2.8 12Z"
        stroke={color}
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="12" r="2.9" stroke={color} strokeWidth="1.7" />
      <circle cx="12" cy="12" r="1.2" fill={color} opacity="0.22" />
    </svg>
  );
}

export function QuestionIcon({ size = 22, color = "#2563eb" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="8.6" stroke={color} strokeWidth="1.7" />
      <path
        d="M10.3 9.6C10.6 8.7 11.3 8 12.4 8C13.7 8 14.6 8.7 14.6 9.8C14.6 10.7 14.1 11.2 13.3 11.7C12.5 12.2 12.1 12.7 12.1 13.6"
        stroke={color}
        strokeWidth="1.7"
        strokeLinecap="round"
      />
      <circle cx="12.1" cy="16.6" r="0.95" fill={color} />
    </svg>
  );
}

export function ReadingIcon({ size = 22, color = "#2563eb" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M5.5 7C5.5 6.03 6.28 5.25 7.25 5.25H10.6C11.65 5.25 12.47 5.65 13 6.35V17.9C12.45 17.4 11.68 17.1 10.75 17.1H7.25C6.28 17.1 5.5 16.32 5.5 15.35V7Z"
        stroke={color}
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
      <path
        d="M18.5 7C18.5 6.03 17.72 5.25 16.75 5.25H13.4C12.35 5.25 11.53 5.65 11 6.35V17.9C11.55 17.4 12.32 17.1 13.25 17.1H16.75C17.72 17.1 18.5 16.32 18.5 15.35V7Z"
        stroke={color}
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function SurgeryIcon({ size = 22, color = "#2563eb" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M14.9 5.3L18.7 9.1"
        stroke={color}
        strokeWidth="1.7"
        strokeLinecap="round"
      />
      <path
        d="M6.4 17.6L10.5 13.5L14.5 17.5L10.4 21.6"
        stroke={color}
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.4 6.8L17.2 10.6"
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
      <circle cx="12" cy="12" r="8.6" stroke={color} strokeWidth="1.7" />
      <circle cx="12" cy="12" r="4.3" stroke={color} strokeWidth="1.7" />
      <circle cx="12" cy="12" r="1.35" fill={color} />
    </svg>
  );
}

export function LensIcon({ size = 24, color = "#2563eb" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <ellipse cx="12" cy="12" rx="4.9" ry="6.7" stroke={color} strokeWidth="1.7" />
      <path
        d="M8.5 7.2C9.3 7.7 10.4 8 12 8C13.6 8 14.7 7.7 15.5 7.2"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M8.5 16.8C9.3 16.3 10.4 16 12 16C13.6 16 14.7 16.3 15.5 16.8"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function IntermediateIcon({ size = 24, color = "#2563eb" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="5.2" y="7.2" width="13.6" height="9.6" rx="2.4" stroke={color} strokeWidth="1.7" />
      <path d="M9 18.8H15" stroke={color} strokeWidth="1.7" strokeLinecap="round" />
      <path d="M10 10.6H14" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
      <path d="M9 13H15" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function MultifocalIcon({ size = 24, color = "#2563eb" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 5.6L18.8 9L12 12.4L5.2 9L12 5.6Z"
        stroke={color}
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
      <path
        d="M7 12.2L12 14.8L17 12.2"
        stroke={color}
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7 15L12 17.6L17 15"
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
        d="M12 4.6C12 4.6 7.2 10 7.2 13.7C7.2 16.6 9.36 18.8 12 18.8C14.64 18.8 16.8 16.6 16.8 13.7C16.8 10 12 4.6 12 4.6Z"
        stroke={color}
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ComfortIcon({ size = 22, color = "#2563eb" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 18.6C12 18.6 6.2 15.3 6.2 10.9C6.2 9 7.5 7.7 9.1 7.7C10.3 7.7 11.2 8.3 12 9.1C12.8 8.3 13.7 7.7 14.9 7.7C16.5 7.7 17.8 9 17.8 10.9C17.8 15.3 12 18.6 12 18.6Z"
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
        d="M12 4.8L13.2 8.4L16.8 9.6L13.2 10.8L12 14.4L10.8 10.8L7.2 9.6L10.8 8.4L12 4.8Z"
        stroke={color}
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path
        d="M17.8 15.8L18.3 17.1L19.6 17.6L18.3 18.1L17.8 19.4L17.3 18.1L16 17.6L17.3 17.1L17.8 15.8Z"
        fill={color}
      />
    </svg>
  );
}
