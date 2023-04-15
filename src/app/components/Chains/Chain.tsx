import React, { useState } from "react";

import styled from "@emotion/styled";

import { MultiValue } from "react-select";

import dummyBlockData from "@/app/dummy_api/BlockData";
import { BlockContext } from "@/app/hooks/useBlockContext";
import ChainOption from "@/types/ChainType";
import EthBlockData from "@/types/EthBlockData";

import Block from "../Blocks/Block";
import BlockContainer from "../Blocks/BlockContainer";

const BlocksContainer = styled.div`
  display: flex;
  margin: 32px 0;
`;

const BlockWrapper = styled.div`
  margin: 0 16px;
`;

type ChainProps = {
  chain: MultiValue<ChainOption>;
  ethBlockData: EthBlockData[];
};

//選択されたチェーンを表示する
const Chain = (props: ChainProps) => {
  const [activeBlock, setActiveBlock] = useState<number>(0);
  return (
    <BlockContext.Provider value={{ activeBlock, setActiveBlock }}>
      <BlocksContainer>
        <BlockWrapper>
          {props.ethBlockData.map((data) => {
            return (
              <Block
                blockData={{
                  block_number: data.block_number,
                  l2_chains: data.l2_chains,
                }}
                key={data.block_number}
              />
            );
          })}
        </BlockWrapper>
      </BlocksContainer>
      <BlockContainer blockData={dummyBlockData[0]} />
    </BlockContext.Provider>
  );
};

export default Chain;
