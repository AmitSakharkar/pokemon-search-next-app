// components/Breadcrumb.js
import React from 'react';
import Link from 'next/link';

const Breadcrumb = ({ paths }) => {
  return (
    <nav className="p-4">
      {paths.map((path, index) => (
        <span key={index}>
          <Link href={path.href} className="text-blue-500">{path.name}</Link>
          {index < paths.length - 1 && ' / '}
        </span>
      ))}
    </nav>
  );
};

export default Breadcrumb;
