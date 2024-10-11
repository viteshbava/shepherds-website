import React from 'react';
import Section from '../../ui/Section';
import ButtonLink from '../../ui/ButtonLink';

const Contact = () => {
  return (
    <Section id='contact' className='mt-24 items-center'>
      <h2 className='mb-6 text-2xl pb-2 w-full border-white/50 border-b-[1px]'>Contact</h2>
      <ButtonLink
        isExternal
        href='mailto:shepherdsofcassini@gmail.com'
        ariaLabel='Send email to shepherdsofcassini@gmail.com'
        className='w-80 max-w-full bg-red_dim uppercase text-sm'>
        shepherdsofcassini@gmail.com
      </ButtonLink>
    </Section>
  );
};

export default Contact;
