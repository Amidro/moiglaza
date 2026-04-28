import * as React from "react";

type IconProps = {
  size?: number;
  color?: string;
};

export function EyeIcon({ size = 22, color = "#2563eb" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M2.7 12C5 8.3 8.2 6.2 12 6.2C15.8 6.2 19 8.3 21.3 12C19 15.7 15.8 17.8 12 17.8C8.2 17.8 5 15.7 2.7 12Z"
        stroke={color}
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="12" r="3" stroke={color} strokeWidth="1.7" />
    </svg>
  );
}

export function CataractIcon({ size = 22, color = "#2563eb" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M2.7 12C5 8.3 8.2 6.2 12 6.2C15.8 6.2 19 8.3 21.3 12C19 15.7 15.8 17.8 12 17.8C8.2 17.8 5 15.7 2.7 12Z"
        stroke={color}
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="12" r="3" stroke={color} strokeWidth="1.7" />
      <circle cx="12" cy="12" r="1.3" fill={color} opacity="0.26" />
    </svg>
  );
}

export function QuestionIcon({ size = 22, color = "#2563eb" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="8.8" stroke={color} strokeWidth="1.7" />
      <path
        d="M10.2 9.5C10.5 8.5 11.3 7.8 12.4 7.8C13.8 7.8 14.7 8.5 14.7 9.7C14.7 10.6 14.2 11.2 13.3 11.8C12.5 12.3 12.1 12.8 12.1 13.7"
        stroke={color}
        strokeWidth="1.7"
        strokeLinecap="round"
      />
      <circle cx="12.1" cy="16.7" r="1" fill={color} />
    </svg>
  );
}

export function ReadingIcon({ size = 22, color = "#2563eb" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M5.2 6.8C5.2 5.82 6 5 7 5H10.8C11.8 5 12.6 5.44 13.1 6.1V18.5C12.55 17.96 11.8 17.6 10.8 17.6H7C6 17.6 5.2 16.8 5.2 15.8V6.8Z"
        stroke={color}
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
      <path
        d="M18.8 6.8C18.8 5.82 18 5 17 5H13.2C12.2 5 11.4 5.44 10.9 6.1V18.5C11.45 17.96 12.2 17.6 13.2 17.6H17C18 17.6 18.8 16.8 18.8 15.8V6.8Z"
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
        d="M14.6 5.2L18.8 9.4"
        stroke={color}
        strokeWidth="1.7"
        strokeLinecap="round"
      />
      <path
        d="M6.2 17.8L10.7 13.3L14.8 17.4L10.3 21.9"
        stroke={color}
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.2 6.6L17.4 10.8"
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
      <circle cx="12" cy="12" r="4.5" stroke={color} strokeWidth="1.7" />
      <circle cx="12" cy="12" r="1.4" fill={color} />
    </svg>
  );
}

export function LensIcon({ size = 24, color = "#2563eb" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <ellipse cx="12" cy="12" rx="5" ry="7" stroke={color} strokeWidth="1.7" />
      <path
        d="M8.1 6.9C9 7.4 10.3 7.8 12 7.8C13.7 7.8 15 7.4 15.9 6.9"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M8.1 17.1C9 16.6 10.3 16.2 12 16.2C13.7 16.2 15 16.6 15.9 17.1"
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
      <rect x="5" y="7" width="14" height="10" rx="2.6" stroke={color} strokeWidth="1.7" />
      <path d="M9 19H15" stroke={color} strokeWidth="1.7" strokeLinecap="round" />
      <path d="M10 10.5H14" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
      <path d="M9 13H15" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function MultifocalIcon({ size = 24, color = "#2563eb" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 5L19.2 8.8L12 12.6L4.8 8.8L12 5Z"
        stroke={color}
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
      <path
        d="M6.8 12L12 14.8L17.2 12"
        stroke={color}
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.8 15.1L12 17.9L17.2 15.1"
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
        d="M12 4.3C12 4.3 6.9 10.1 6.9 13.9C6.9 16.9 9.2 19.1 12 19.1C14.8 19.1 17.1 16.9 17.1 13.9C17.1 10.1 12 4.3 12 4.3Z"
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
        d="M12 18.9C12 18.9 5.8 15.3 5.8 10.6C5.8 8.6 7.2 7.2 8.9 7.2C10.2 7.2 11.2 7.8 12 8.7C12.8 7.8 13.8 7.2 15.1 7.2C16.8 7.2 18.2 8.6 18.2 10.6C18.2 15.3 12 18.9 12 18.9Z"
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
        d="M12 4.4L13.3 8.5L17.4 9.8L13.3 11.1L12 15.2L10.7 11.1L6.6 9.8L10.7 8.5L12 4.4Z"
        stroke={color}
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path
        d="M18.1 15.9L18.7 17.4L20.2 18L18.7 18.6L18.1 20.1L17.5 18.6L16 18L17.5 17.4L18.1 15.9Z"
        fill={color}
      />
    </svg>
  );
}
