"use client";

import { useState } from "react";

import styled from "@emotion/styled";
import { MultiValue } from "react-select";

import ChainOption from "@/types/ChainType";

import ChainSelector from "./components/ChainSelector";
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

  const Header = styled.div`
    width: fit-content;
    margin: 0 auto;
  `;

  return (
    <main className={styles.main}>
      {/* <Wrapper>
        <Header>
          <Icon />
        </Header>
        <Chain />
      </Wrapper> */}
      <ChainSelector onSelectChain={handleSelectChain} />
    </main>
  );
};

export default Home;
