"use client";

import Image from "next/image";

import logo from "public/img/logo.svg";

const Icon = () => {
  return (
    <div>
      <Image alt="LayerHorizon" height={140} src={logo} width={200} />
    </div>
  );
};

export default Icon;
