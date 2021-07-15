import React from 'react';

function LinkItem({ href, target, rel, Icon, title }) {
  return (
    <li>
      <a href={href} target={target} rel={rel} title={title}>
        <Icon />
      </a>
    </li>
  );
}

export default LinkItem;
