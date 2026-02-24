interface ButtonProps {
  onClick?: (value: any) => void;
  // onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  submit?: boolean;
  children: React.ReactNode;
  className?: string;
  ariaLabel?: string;
  color?: 'green' | 'red';
}

export const buttonStyles = ({
  disabled = false,
  className = '',
}: Partial<{
  disabled?: boolean;
  className?: string;
}> = {}) => `
relative 
flex 
justify-center 
disabled:opacity-50 
disabled:cursor-not-allowed 
rounded-md 
transition 
px-2 
py-4  
bg-opacity-25	
hover:bg-opacity-30
focus-visible:ring-2 focus-visible:ring-white/80 focus-visible:ring-offset-2 focus-visible:ring-offset-black
${!disabled && 'active:scale-95'}
${className}
`;

const Button = ({
  children,
  onClick = () => {},
  disabled = false,
  submit,
  className = '',
  ariaLabel = '',
}: ButtonProps) => {
  return (
    <button
      aria-label={ariaLabel}
      onClick={onClick}
      disabled={disabled}
      type={submit ? 'submit' : undefined}
      className={buttonStyles({ disabled, className })}>
      {children}
    </button>
  );
};

export default Button;
