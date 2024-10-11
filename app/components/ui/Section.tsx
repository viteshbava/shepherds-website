import React from 'react';

interface SectionProps {
  id?: string;
  children: React.ReactNode;
  className?: string;
}

const Section = ({ id, children, className }: SectionProps) => {
  return (
    <section
      id={id}
      className={`${className} flex flex-col justify-center relative max-w-screen-xl w-[75%]`}>
      {children}
    </section>
  );
};

export default Section;
