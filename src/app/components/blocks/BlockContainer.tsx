import { useContext } from "react";
import styled from "@emotion/styled";

import BlockDetail from "./BlockDetail";
import EthBlockData from "@/types/EthBlockData";
import { BlockContext } from "../../hooks/useBlockContext";

type BlockContainerProps = {
  blockData: EthBlockData;
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
      {props.blockData.l2_chains.map(chain => (
        <BlockDetail chain_name={chain.chainName} key={chain.chainName} />
      ))}
    </BlockDetailContainer>
  );
};

export default BlockContainer;
