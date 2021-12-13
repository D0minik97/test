import React from "react";

interface Props {
  name: string;
  border: string;
  color: string;
  height: string;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  width: string;
}

const Button: React.FC<Props> = ({ 
    name,
    border,
    color,
    height,
    onClick, 
    width
  }) => { 
  return (
    <button 
      onClick={onClick}
      name={name}
      style={{
          backgroundColor: color,
          border,
          height,
          width,
      }}
    >
    {name}
    </button>
  );
}

export default Button;

