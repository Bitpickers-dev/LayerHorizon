import styled from "@emotion/styled";

import "../../styles/components/Blocks/blockDetail.css";
import BlockDetailRow from "./BlockDetailRow";

const BlockDetail = () => {
  const BlockDetailTitle = styled.h2`
    margin: 0;
    margin-left: 16px;
    font-size: var(--title-font-size);
    font-weight: bold;
    text-align: left;
  `;

  //TODO:動的に幅を変える
  const BlockDetailTable = styled.div`
    width: 600px;
    margin: 16px;
    background-color: #fff;
    border-radius: 8px;
    box-shadow: gray 0 0 6px;
  `;

  const blocks = Array.from({ length: 50 }, (_, i) => {
    return {
      blockNumber: i + 10000000,
      numberOfTransaction: 100,
      timestamp: 0,
    };
  });

  return (
    <>
      <div className="block-detail">
        <BlockDetailTitle>Block detail</BlockDetailTitle>
        <BlockDetailTable>
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
