import React from 'react';
import { ArrowUpRight } from 'tabler-icons-react';

export const FooterItem = ({ href, title }) => {
  return (
    <a href={href} target='_blank' rel='noopener noreferrer' className="flex justify-center items-center">
      <span>{title}</span>
      <ArrowUpRight
    size={18}
    strokeWidth={2}
    color={'black'}
  />
    </a>
  );
};
