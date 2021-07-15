export default interface IButtonComponent {
  label: string;
  isUpper?: boolean;
  disabled?: boolean;
  textColor: string;
  bgColor: string;
  bgColorLayer: string;
  onClick: () => void;
}
