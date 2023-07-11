export interface InputProps {
  type: "text" | "email";
  value: string;
  onChange: (newValue: string) => void;
}

// interface Feature :
// 1. Declaration Merging
// 2. Familiarity (extends)
