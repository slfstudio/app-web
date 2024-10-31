export enum dropdownVariant {
  'default',
  'info',
  'phone',
}
export interface DropdownProps {
  label: string;
  placeholder?: string;
  data?: Array<{ label: string | number; value: string | number }>;
  onSelect?: (item: { label: string; value: string }) => void;
  optionalText?: string;
  error?: string;
  variant?: keyof typeof dropdownVariant;
  onPressInfo?: () => void;
}
