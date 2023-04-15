import styled from "@emotion/styled";
import Image from "next/image";
import arbitrum_logo from "public/img/chain_logo/arbitrum.svg";

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

  const ImageRow = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 8px 16px;
  `;

  const Period = styled.span`
    margin-left: 8px;
    vertical-align: middle;
    text-align: left;
  `;

  // TODO:fix length
  const blocks = Array.from({ length: 5 }, (_, i) => {
    return {
      blockNumber: i + 10000000,
      numberOfTransaction: 100,
      timestamp: 0,
    };
  });

  //TODO:opのロゴも表示させる
  return (
    <>
      <div className="block-detail">
        <BlockDetailTable chain_name={props.chain_name} width={props.width}>
          <ImageRow>
            <Image alt="arbitrum" height={25} src={arbitrum_logo} width={25} />
            <Period>1234 ~ 6789</Period>
          </ImageRow>
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
