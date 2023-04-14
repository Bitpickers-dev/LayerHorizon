"use client";

import { useState } from "react";

import { MultiValue } from "react-select";

import ChainOption from "@/types/ChainType";

import ChainSelector from "./components/ChainSelector";
import Icon from "./components/Icon";
import styles from "./page.module.css";

export default function Home() {
  const [selectedChain, setSelectedChain] = useState({} as MultiValue<ChainOption>);

  const handleSelectChain = (chain: MultiValue<ChainOption>): void => {
    setSelectedChain(chain);
  };

  return (
    <main className={styles.main}>
      <Icon />
      <ChainSelector onSelectChain={handleSelectChain} />
    </main>
  );
}
