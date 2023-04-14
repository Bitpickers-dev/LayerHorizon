"use client";

import { createContext, useState } from "react";

import styled from "@emotion/styled";
import { MultiValue } from "react-select";

import ChainOption from "@/types/ChainType";

import BlockContainer from "./components/BlockContainer";
import ChainSelector from "./components/ChainSelector";
import Icon from "./components/Icon";
import Chain from "./components/blocks/Chain"
import styles from "./page.module.css";
import EthBlockData from "@/types/EthBlockData";

import dummyBlockData from "./dummy_api/BlockData"
import blockData from "./dummy_api/BlockData";

const Home = () => {
  const [selectedChain, setSelectedChain] = useState({} as MultiValue<ChainOption>);
  const [numberOfChain, setNumberOfChain] = useState(1);

  const handleSelectChain = (chain: MultiValue<ChainOption>): void => {
    setSelectedChain(chain);
    //TODO:chainが消された場合は-1にする
    setNumberOfChain(numberOfChain + 1);
  };

  const handleClickBlock = (blockData: EthBlockData): void => {
    console.log(blockData.blockNumber)
  }

  const Wrapper = styled.div`
    padding: 12px;
  `;

  const Header = styled.div`
    width: fit-content;
    margin: 0 auto;
  `

  return (
    <main className={styles.main}>
      <Wrapper>
        <Header>
          <Icon />
          <ChainSelector onSelectChain={handleSelectChain} />
        </Header>
        <Chain blockData={dummyBlockData} clickBlockHandler={handleClickBlock}/>
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
