import React, { ReactNode } from 'react';

interface ParagraphProps {
  children: ReactNode;
  size?: string;
}

const Paragraph = ({ children, size = 'base' }: ParagraphProps) => {
  return <p className={`text-${size}`}>{children}</p>;
};

export default Paragraph;
