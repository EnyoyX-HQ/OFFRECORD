"use client";

import { FunctionComponent } from 'react';

const Footer: FunctionComponent = () => {
  return (
    <div className="flex flex-row items-center justify-center p-5 border-t border-zinc-700 bg-black">
      <div className="flex-1 text-center text-gray-400 text-base leading-6">
        © 2025 build in off record -
      </div>
    </div>
  );
};

export default Footer;