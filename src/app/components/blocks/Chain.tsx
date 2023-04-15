import React, { useState } from "react";

import styled from "@emotion/styled";

import { MultiValue } from "react-select";

import { BlockContext } from "@/app/hooks/useBlockContext";
import ChainOption from "@/types/ChainType";
import EthBlockData from "@/types/EthBlockData";

import Block from "./Block";

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

const Chain = (props: ChainProps) => {
  const [activeBlock, setActiveBlock] = useState<number>(0);
  const blocks = Array.from({ length: 5 }, (_, i) => i + 1);
  return (
    <BlockContext.Provider value={{ activeBlock, setActiveBlock }}>
      <BlocksContainer>
        <BlockWrapper>
          {blocks.map((data) => {
            return (
              <Block
                blockData={{
                  block_number: 0,
                  l2_chains: [],
                }}
                key={data}
              />
            );
          })}
        </BlockWrapper>
      </BlocksContainer>
    </BlockContext.Provider>
  );
};

export default Chain;
