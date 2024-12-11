import React from 'react';

interface NavbarLinkProps {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
}

const NavbarLink: React.FC<NavbarLinkProps> = ({ href, children, onClick }) => {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    onClick?.();
  };

  return (
    <a
      href={href}
      onClick={handleClick}
      className="text-white hover:text-pink-200 transition-colors duration-200"
    >
      {children}
    </a>
  );
};

export default NavbarLink;