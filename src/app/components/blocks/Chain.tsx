import { useState } from "react";

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
  const [activeBlock, setActiveBlock] = useState<number | null>(null);

  return (
    <BlocksContainer>
      <BlockContext.Provider value={{ activeBlock, setActiveBlock }}>
        <BlockWrapper>
          {props.ethBlockData.map((data) => {
            return <Block blockData={data} key={data.block_number} />;
          })}
        </BlockWrapper>
      </BlockContext.Provider>
    </BlocksContainer>
  );
};

export default Chain;
