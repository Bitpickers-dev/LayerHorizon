import styled from "@emotion/styled";

import BlockDetailRow from "./BlockDetailRow";

type BlockDetailProps = {
  chain_name: string;
  width: number;
};

const BlockDetail = (props: BlockDetailProps) => {
  const BlockDetailTable = styled.div`
    // width: ${(props: BlockDetailProps) => props.width}; //     width: 400px;がベスト
    width: 400px;
    margin-left: 16px;
    background-color: #fff;
    border-radius: 8px;
    box-shadow: gray 0 0 6px;
  `;

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
      <div className="block-detail">
        <BlockDetailTable chain_name={props.chain_name} width={props.width}>
          {blocks.map((block) => {
            return (
              <BlockDetailRow
                blockNumber={block.blockNumber}
                key={block.blockNumber}
                numberOfTransaction={block.numberOfTransaction}
                timestamp={block.timestamp}
              />
            );
          })}
        </BlockDetailTable>
      </div>
    </>
  );
};

export default BlockDetail;
