"use client";

import { useState } from "react";

import styled from "@emotion/styled";
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

  const Wrapper = styled.div`
    padding 12px
  `;

  return (
    <main className={styles.main}>
      <Wrapper>
        <Icon />
        <ChainSelector onSelectChain={handleSelectChain} />
      </Wrapper>
    </main>
  );
}
