export default interface IInputComponent {
  // Input type, (text default)
  type?: string;

  //error
  error: string;

  // Value handler
  value: string;
  onChange: (e: any) => void;

  // Colors
  caretColor: string;
  linesColor: string;
}
