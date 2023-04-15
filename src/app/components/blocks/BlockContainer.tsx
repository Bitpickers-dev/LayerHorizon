import styled from "@emotion/styled";

import BlockDetail from "./BlockDetail";

type Blocks = {
  chain_name: string;
  width: number;
};

type BlockContainerProps = {
  chains: Blocks;
  number_of_chains: number;
};

const BlockContainer = (props: BlockContainerProps) => {
  //TODO:動的にlengthを変える
  const chains = Array.from({ length: 3 }, (_, i) => i + 1);

  const BlockDetailContainer = styled.div`
    display: flex;
    margin: auto;
    justify-content: space-between;
  `;

  return (
    <BlockDetailContainer>
      {chains.map((chain) => (
        <BlockDetail chain_name={props.chains.chain_name} key={chain} width={props.chains.width} />
      ))}
    </BlockDetailContainer>
  );
};

export default BlockContainer;
