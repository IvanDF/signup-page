export default interface IInputComponent {
  // Input type, (text default)
  type?: string;

  //error
  error?: boolean;
  errorMessage?: string;

  // Value handler
  label: string;
  value: string;
  placeholder: string;
  onChange: (e: any) => void;
  onEnter?: (e: any) => void;

  // Colors
  color: string;
}
