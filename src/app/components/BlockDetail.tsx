import { useContext } from "react";

import styled from "@emotion/styled";

import { BlockContext } from "../hooks/useBlockContext";

import BlockDetailRow from "./BlockDetailRow";

type BlockDetailProps = {
  chain_name: string;
};

//TODO:fix width
const BlockDetailTable = styled.div`
  width: 400px;
  margin-left: 16px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: gray 0 0 6px;
`;

const BlockDetail = (props: BlockDetailProps) => {
  const { activeBlock } = useContext(BlockContext);
  // TODO:fix length
  const blocks = Array.from({ length: 5 }, (_, i) => {
    return {
      blockNumber: i + 10000000,
      numberOfTransaction: 100,
      timestamp: 0,
    };
  });

  return (
    <>
      <BlockDetailTable>
        {blocks.map((block) => {
          return (
            <BlockDetailRow
              blockNumber={activeBlock}
              key={block.blockNumber}
              numberOfTransaction={block.numberOfTransaction}
              timestamp={block.timestamp}
            />
          );
        })}
      </BlockDetailTable>
    </>
  );
};

export default BlockDetail;
