"use client";

import ChainOption from "@/types/ChainType";
import { MultiValue } from "react-select";
import ChainSelector from "./components/ChainSelector";
import styles from "./page.module.css";
import { useState } from "react";
import Icon from './components/Icon'

export default function Home() {
  const [selectedChain, setSelectedChain] = useState({} as MultiValue<ChainOption>);

  const handleSelectChain = (chain: MultiValue<ChainOption>): void => {
    setSelectedChain(chain);
  };

  return (
    <main className={styles.main}>
      <Icon/>
      <ChainSelector onSelectChain={handleSelectChain} />
    </main>
  );
}
