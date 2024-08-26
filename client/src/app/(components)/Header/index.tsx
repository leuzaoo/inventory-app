import React from "react";

type HeaderProps = {
  name: string;
};

const Header = ({ name }: HeaderProps) => {
  return <div className="text-2xl font-semibold text-gray-700">{name}</div>;
};

export default Header;
