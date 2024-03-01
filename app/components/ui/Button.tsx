interface ButtonProps {
  onClick?: (value: any) => void;
  // onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  outline?: boolean;
  small?: boolean;
  submit?: boolean;
  children: React.ReactNode;
  className?: string;
}

export const buttonStyles = ({
  outline = false,
  small = false,
  disabled = false,
  className = '',
}: Partial<{
  outline?: boolean;
  small?: boolean;
  disabled?: boolean;
  className?: string;
}> = {}) => `
relative 
flex 
justify-center 
disabled:opacity-50 
disabled:cursor-not-allowed 
rounded-md 
hover:opacity-90   
transition 
px-2 
py-2 
border-[1px] 
min-w-20 
uppercase 
w-min 
text-md
${!disabled && 'active:scale-95'} 
${outline ? 'bg-white' : 'bg-primary_green_light'}
${outline && !disabled && 'hover:bg-gray-100'}
${outline ? 'border-black' : 'border-primary_green_light'}
${outline ? 'text-black' : 'text-white'}
${small ? 'py-1' : ''}
${small ? 'text-sm' : ''}
${className}
`;

const Button = ({
  children,
  onClick = () => {},
  disabled = false,
  outline,
  small,
  submit,
  className = '',
}: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      type={submit ? 'submit' : undefined}
      className={buttonStyles({ outline, small, disabled, className })}>
      {children}
    </button>
  );
};

export default Button;
