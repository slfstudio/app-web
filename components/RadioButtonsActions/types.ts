export interface RadioButtonsActionsProps {
  options: [{ id: number; text: string; value: number }];
  value: string;
  selectOption: (id: string) => void;
  error: string | null;
  label?: string;
  optionalText?: string;
}
