import { useContext } from "react";

import styled from "@emotion/styled";


import Chain from "@/types/Chain";

import { BlockContext } from "../../hooks/useBlockContext";

import BlockDetail from "./BlockDetail";


type BlockContainerProps = {
  chains: Chain[]
};

const BlockContainer = (props: BlockContainerProps) => {
  const { activeBlock } = useContext(BlockContext);

  const BlockDetailContainer = styled.div<{ isVisible: boolean }>`
    display: flex;
    margin: auto;
    justify-content: left;
    display: ${(props) => (props.isVisible ? "flex" : "none")};
  `;

  return (
    <BlockDetailContainer isVisible={activeBlock !== 0}>
      {props.chains.map(chain => (
        <BlockDetail chain={chain} key={chain.chain_name} />
      ))}
    </BlockDetailContainer>
  );
};

export default BlockContainer;
