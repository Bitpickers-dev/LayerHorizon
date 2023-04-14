"use client";

import { useState } from "react";

import styled from "@emotion/styled";
import { MultiValue } from "react-select";

import ChainOption from "@/types/ChainType";

import BlockContainer from "./components/BlockContainer";
import ChainSelector from "./components/ChainSelector";
import Icon from "./components/Icon";
import Chain from "./components/blocks/Chain"
import styles from "./page.module.css";

const Home = () => {
  const [selectedChain, setSelectedChain] = useState({} as MultiValue<ChainOption>);
  const [numberOfChain, setNumberOfChain] = useState(1);

  const handleSelectChain = (chain: MultiValue<ChainOption>): void => {
    setSelectedChain(chain);
    //TODO:chainが消された場合は-1にする
    setNumberOfChain(numberOfChain + 1);
  };

  const Wrapper = styled.div`
    padding: 12px;
  `;

  return (
    <main className={styles.main}>
      <Wrapper>
        <Icon />
        <ChainSelector onSelectChain={handleSelectChain} />
        <Chain/>
        <BlockContainer
          chains={{
            chain_name: "",
            width: 0,
          }}
          number_of_chains={numberOfChain}
        />
      </Wrapper>
    </main>
  );
};

export default Home;
