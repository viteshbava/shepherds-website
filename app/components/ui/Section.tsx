import React from 'react';

interface SectionProps {
  id?: string;
  children: React.ReactNode;
  className?: string;
}

const Section = ({ id, children, className }: SectionProps) => {
  return (
    <section id={id} className={`${className} flex justify-center relative z-20 max-w-5xl w-5/6`}>
      {children}
    </section>
  );
};

export default Section;
