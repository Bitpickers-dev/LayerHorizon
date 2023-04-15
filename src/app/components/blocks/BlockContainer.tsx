import { useContext } from "react";

import styled from "@emotion/styled";

import ChainData from "@/types/ChainData";

import { BlockContext } from "../../hooks/useBlockContext";

import BlockDetail from "./BlockDetail";

type BlockContainerProps = {
  chains: ChainData[];
};

const BlockDetailContainer = styled.div`
  display: flex;
  margin: auto;
  justify-content: left;
`;

const BlockContainer = (props: BlockContainerProps) => {
  const { activeBlock } = useContext(BlockContext);

  //TODO chains[0]のみ指定しているので修正する
  if (activeBlock !== 0 && props.chains[0].blocks) {
    return (
      <BlockDetailContainer>
        {props.chains.map((chain) => (
          <BlockDetail chain={chain} key={chain.chain_name} />
        ))}
      </BlockDetailContainer>
    );
  } else {
    return <p>No block selected</p>;
  }
};

export default BlockContainer;
