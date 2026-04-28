import * as React from "react";

type IconProps = {
  size?: number;
  color?: string;
};

export function EyeIcon({ size = 24, color = "#2563eb" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M2.8 12C5.1 8.6 8.3 6.7 12 6.7C15.7 6.7 18.9 8.6 21.2 12C18.9 15.4 15.7 17.3 12 17.3C8.3 17.3 5.1 15.4 2.8 12Z"
        stroke={color}
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="12" r="3.05" stroke={color} strokeWidth="1.8" />
    </svg>
  );
}

export function CataractIcon({ size = 24, color = "#2563eb" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M2.8 12C5.1 8.6 8.3 6.7 12 6.7C15.7 6.7 18.9 8.6 21.2 12C18.9 15.4 15.7 17.3 12 17.3C8.3 17.3 5.1 15.4 2.8 12Z"
        stroke={color}
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="12" r="3.05" stroke={color} strokeWidth="1.8" />
      <circle cx="12" cy="12" r="1.65" fill={color} opacity="0.3" />
    </svg>
  );
}

export function QuestionIcon({ size = 24, color = "#2563eb" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="8.7" stroke={color} strokeWidth="1.8" />
      <path
        d="M10.2 9.5C10.5 8.6 11.3 7.9 12.4 7.9C13.8 7.9 14.7 8.7 14.7 9.9C14.7 10.8 14.2 11.4 13.3 12C12.5 12.5 12.1 13 12.1 13.9"
        stroke={color}
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <circle cx="12.1" cy="16.7" r="1.05" fill={color} />
    </svg>
  );
}

export function ReadingIcon({ size = 24, color = "#2563eb" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M5.4 7C5.4 6.02 6.2 5.25 7.17 5.25H10.55C11.66 5.25 12.52 5.68 13.05 6.42V17.75C12.48 17.24 11.7 16.95 10.75 16.95H7.17C6.2 16.95 5.4 16.17 5.4 15.2V7Z"
        stroke={color}
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="M18.6 7C18.6 6.02 17.8 5.25 16.83 5.25H13.45C12.34 5.25 11.48 5.68 10.95 6.42V17.75C11.52 17.24 12.3 16.95 13.25 16.95H16.83C17.8 16.95 18.6 16.17 18.6 15.2V7Z"
        stroke={color}
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function SurgeryIcon({ size = 24, color = "#2563eb" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M14.8 5.2L18.7 9.1"
        stroke={color}
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M6.4 17.6L10.5 13.5L14.5 17.5L10.4 21.6"
        stroke={color}
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.3 6.7L17.2 10.6"
        stroke={color}
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function TargetIcon({ size = 24, color = "#2563eb" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="8.7" stroke={color} strokeWidth="1.8" />
      <circle cx="12" cy="12" r="4.4" stroke={color} strokeWidth="1.8" />
      <circle cx="12" cy="12" r="1.45" fill={color} />
    </svg>
  );
}

export function LensIcon({ size = 24, color = "#2563eb" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <ellipse cx="12" cy="12" rx="5.05" ry="6.8" stroke={color} strokeWidth="1.8" />
      <path
        d="M8.45 7.35C9.25 7.8 10.35 8.1 12 8.1C13.65 8.1 14.75 7.8 15.55 7.35"
        stroke={color}
        strokeWidth="1.55"
        strokeLinecap="round"
      />
      <path
        d="M8.45 16.65C9.25 16.2 10.35 15.9 12 15.9C13.65 15.9 14.75 16.2 15.55 16.65"
        stroke={color}
        strokeWidth="1.55"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function IntermediateIcon({ size = 24, color = "#2563eb" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="5.2" y="7.1" width="13.6" height="9.6" rx="2.45" stroke={color} strokeWidth="1.8" />
      <path d="M9.2 18.7H14.8" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
      <path d="M10 10.5H14" stroke={color} strokeWidth="1.55" strokeLinecap="round" />
      <path d="M9.1 13H14.9" stroke={color} strokeWidth="1.55" strokeLinecap="round" />
    </svg>
  );
}

export function MultifocalIcon({ size = 24, color = "#2563eb" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 5.7L18.7 9L12 12.3L5.3 9L12 5.7Z"
        stroke={color}
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="M7.1 12.2L12 14.7L16.9 12.2"
        stroke={color}
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.1 15L12 17.5L16.9 15"
        stroke={color}
        strokeWidth="1.8"
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
        d="M12 4.6C12 4.6 7.25 10 7.25 13.7C7.25 16.55 9.37 18.75 12 18.75C14.63 18.75 16.75 16.55 16.75 13.7C16.75 10 12 4.6 12 4.6Z"
        stroke={color}
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ComfortIcon({ size = 24, color = "#2563eb" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 18.5C12 18.5 6.35 15.3 6.35 11.05C6.35 9.2 7.62 7.95 9.17 7.95C10.34 7.95 11.23 8.5 12 9.28C12.77 8.5 13.66 7.95 14.83 7.95C16.38 7.95 17.65 9.2 17.65 11.05C17.65 15.3 12 18.5 12 18.5Z"
        stroke={color}
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function SparklesIcon({ size = 24, color = "#2563eb" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 4.9L13.15 8.35L16.6 9.5L13.15 10.65L12 14.1L10.85 10.65L7.4 9.5L10.85 8.35L12 4.9Z"
        stroke={color}
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
      <path
        d="M17.9 15.9L18.4 17.15L19.65 17.65L18.4 18.15L17.9 19.4L17.4 18.15L16.15 17.65L17.4 17.15L17.9 15.9Z"
        fill={color}
      />
    </svg>
  );
}
