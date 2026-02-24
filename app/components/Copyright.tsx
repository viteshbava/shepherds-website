import React from 'react';

const Copyright = ({ className }: { className: string }) => {
  return <p className={className}>&#169; {new Date().getFullYear()} Shepherds of Cassini</p>;
};

export default Copyright;
