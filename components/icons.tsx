import * as React from "react";

type IconProps = {
  size?: number;
  color?: string;
};

export function EyeIcon({ size = 26, color = "#2563eb" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M2.7 12C5 8.7 8.2 6.9 12 6.9C15.8 6.9 19 8.7 21.3 12C19 15.3 15.8 17.1 12 17.1C8.2 17.1 5 15.3 2.7 12Z"
        stroke={color}
        strokeWidth="2.05"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="12" r="3.05" stroke={color} strokeWidth="2.05" />
      <circle cx="12" cy="12" r="1.15" fill={color} />
    </svg>
  );
}

export function CataractIcon({ size = 26, color = "#2563eb" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M2.7 12C5 8.7 8.2 6.9 12 6.9C15.8 6.9 19 8.7 21.3 12C19 15.3 15.8 17.1 12 17.1C8.2 17.1 5 15.3 2.7 12Z"
        stroke={color}
        strokeWidth="2.05"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="12" r="3.1" stroke={color} strokeWidth="2.05" />
      <circle cx="12" cy="12" r="1.8" fill={color} opacity="0.28" />
    </svg>
  );
}

export function QuestionIcon({ size = 26, color = "#2563eb" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="8.4" stroke={color} strokeWidth="2.05" />
      <path
        d="M10.25 9.5C10.55 8.55 11.35 7.9 12.45 7.9C13.85 7.9 14.75 8.72 14.75 9.95C14.75 10.88 14.2 11.45 13.35 12.02C12.55 12.55 12.12 13.05 12.12 13.95"
        stroke={color}
        strokeWidth="2.05"
        strokeLinecap="round"
      />
      <circle cx="12.12" cy="16.7" r="1.08" fill={color} />
    </svg>
  );
}

export function ReadingIcon({ size = 26, color = "#2563eb" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M5 6.9C5 5.9 5.8 5.1 6.8 5.1H10.4C11.55 5.1 12.45 5.55 13 6.35V18C12.45 17.45 11.65 17.1 10.65 17.1H6.8C5.8 17.1 5 16.3 5 15.3V6.9Z"
        stroke={color}
        strokeWidth="2.05"
        strokeLinejoin="round"
      />
      <path
        d="M19 6.9C19 5.9 18.2 5.1 17.2 5.1H13.6C12.45 5.1 11.55 5.55 11 6.35V18C11.55 17.45 12.35 17.1 13.35 17.1H17.2C18.2 17.1 19 16.3 19 15.3V6.9Z"
        stroke={color}
        strokeWidth="2.05"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function SurgeryIcon({ size = 26, color = "#2563eb" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M15.2 4.8L19.2 8.8"
        stroke={color}
        strokeWidth="2.05"
        strokeLinecap="round"
      />
      <path
        d="M6.2 18.2L10.55 13.85L14.45 17.75L10.1 22.1"
        stroke={color}
        strokeWidth="2.05"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.55 6.45L17.55 10.45"
        stroke={color}
        strokeWidth="2.05"
        strokeLinecap="round"
      />
      <path
        d="M5.4 18.95H9.3"
        stroke={color}
        strokeWidth="2.05"
        strokeLinecap="round"
      />
      <path
        d="M10.55 13.85L13.55 10.85"
        stroke={color}
        strokeWidth="2.05"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function TargetIcon({ size = 26, color = "#2563eb" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="8.4" stroke={color} strokeWidth="2.05" />
      <circle cx="12" cy="12" r="4.2" stroke={color} strokeWidth="2.05" />
      <circle cx="12" cy="12" r="1.45" fill={color} />
    </svg>
  );
}

/**
 * ИОЛ — круг + гаптика
 */
export function LensIcon({ size = 26, color = "#2563eb" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="5.2" stroke={color} strokeWidth="2.05" />
      <path
        d="M8.2 8.7C9.1 7.85 10.4 7.35 12 7.35"
        stroke={color}
        strokeWidth="1.65"
        strokeLinecap="round"
      />
      <path
        d="M15.8 15.3C14.9 16.15 13.6 16.65 12 16.65"
        stroke={color}
        strokeWidth="1.65"
        strokeLinecap="round"
      />
      <path
        d="M7.2 7.1C4.2 7.35 3.25 9.2 3.25 12C3.25 14.8 4.2 16.65 7.2 16.9"
        stroke={color}
        strokeWidth="2.05"
        strokeLinecap="round"
      />
      <path
        d="M16.8 7.1C19.8 7.35 20.75 9.2 20.75 12C20.75 14.8 19.8 16.65 16.8 16.9"
        stroke={color}
        strokeWidth="2.05"
        strokeLinecap="round"
      />
    </svg>
  );
}

/**
 * EDOF — удлинённый свет / вытянутый фокус
 * Маяк полностью убран
 */
export function IntermediateIcon({
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
      <circle
        cx="7"
        cy="12"
        r="2.1"
        stroke={color}
        strokeWidth="1.8"
      />

      <path
        d="M9.4 10.2
           C11.2 9.2 13.4 8.6 16.1 8.5
           C18.0 8.45 19.5 8.8 20.9 9.3
           L20.9 14.7
           C19.5 15.2 18.0 15.55 16.1 15.5
           C13.4 15.4 11.2 14.8 9.4 13.8
           Z"
        fill={color}
        opacity="0.18"
      />

      <path
        d="M9.2 10.3
           C11.0 9.2 13.2 8.6 16.0 8.5
           C17.8 8.45 19.5 8.8 21.0 9.4"
        stroke={color}
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <path
        d="M9.2 13.7
           C11.0 14.8 13.2 15.4 16.0 15.5
           C17.8 15.55 19.5 15.2 21.0 14.6"
        stroke={color}
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <path
        d="M9.8 12H19.2"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.9"
      />
    </svg>
  );
}

/**
 * Трифокал — зачёркнутые очки
 */
export function MultifocalIcon({ size = 26, color = "#2563eb" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="8.4" cy="12" r="3.7" stroke={color} strokeWidth="2.05" />
      <circle cx="15.6" cy="12" r="3.7" stroke={color} strokeWidth="2.05" />
      <path
        d="M12.1 12C12.55 11.55 13.05 11.55 13.5 12"
        stroke={color}
        strokeWidth="2.05"
        strokeLinecap="round"
      />
      <path
        d="M4.1 11.1L2.9 10.6"
        stroke={color}
        strokeWidth="2.05"
        strokeLinecap="round"
      />
      <path
        d="M19.9 11.1L21.1 10.6"
        stroke={color}
        strokeWidth="2.05"
        strokeLinecap="round"
      />
      <path
        d="M5 19L19 5"
        stroke={color}
        strokeWidth="2.25"
        strokeLinecap="round"
      />
    </svg>
  );
}

/**
 * Торическая ИОЛ — линза + гаптика + осевые метки
 */
export function ToricIcon({ size = 26, color = "#2563eb" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="5.4" stroke={color} strokeWidth="2.05" />
      <path
        d="M8.4 8.7C9.25 7.95 10.45 7.5 12 7.5"
        stroke={color}
        strokeWidth="1.55"
        strokeLinecap="round"
        opacity="0.7"
      />
      <path
        d="M15.6 15.3C14.75 16.05 13.55 16.5 12 16.5"
        stroke={color}
        strokeWidth="1.55"
        strokeLinecap="round"
        opacity="0.7"
      />
      <path
        d="M7.15 6.85C4.35 7.05 3.25 9.1 3.25 12C3.25 14.9 4.35 16.95 7.15 17.15"
        stroke={color}
        strokeWidth="2.05"
        strokeLinecap="round"
      />
      <path
        d="M16.85 6.85C19.65 7.05 20.75 9.1 20.75 12C20.75 14.9 19.65 16.95 16.85 17.15"
        stroke={color}
        strokeWidth="2.05"
        strokeLinecap="round"
      />
      <circle cx="12" cy="6.7" r="0.85" fill={color} />
      <circle cx="12" cy="17.3" r="0.85" fill={color} />
      <circle cx="7.1" cy="12" r="0.75" fill={color} />
      <circle cx="16.9" cy="12" r="0.75" fill={color} />
    </svg>
  );
}

/**
 * Сухой глаз — капля + sparkle
 */
export function DropIcon({ size = 26, color = "#2563eb" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M11.4 4.6C11.4 4.6 6.8 9.8 6.8 13.45C6.8 16.35 8.85 18.6 11.4 18.6C13.95 18.6 16 16.35 16 13.45C16 9.8 11.4 4.6 11.4 4.6Z"
        stroke={color}
        strokeWidth="2.05"
        strokeLinejoin="round"
      />
      <path
        d="M9.55 15.35C10 16 10.55 16.35 11.3 16.45"
        stroke={color}
        strokeWidth="1.65"
        strokeLinecap="round"
        opacity="0.75"
      />
      <path
        d="M18.1 5.7L18.65 7.15L20.1 7.7L18.65 8.25L18.1 9.7L17.55 8.25L16.1 7.7L17.55 7.15L18.1 5.7Z"
        stroke={color}
        strokeWidth="1.65"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ComfortIcon({ size = 26, color = "#2563eb" }: IconProps) {
  return <DropIcon size={size} color={color} />;
}

export function SparklesIcon({ size = 26, color = "#2563eb" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M11.2 4.8L12.55 8.7L16.45 10.05L12.55 11.4L11.2 15.3L9.85 11.4L5.95 10.05L9.85 8.7L11.2 4.8Z"
        stroke={color}
        strokeWidth="1.9"
        strokeLinejoin="round"
      />
      <path
        d="M18.2 14.8L18.85 16.55L20.6 17.2L18.85 17.85L18.2 19.6L17.55 17.85L15.8 17.2L17.55 16.55L18.2 14.8Z"
        stroke={color}
        strokeWidth="1.65"
        strokeLinejoin="round"
      />
    </svg>
  );
}
