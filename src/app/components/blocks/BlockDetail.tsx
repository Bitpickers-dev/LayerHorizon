import { useContext } from "react";

import styled from "@emotion/styled";
import Image from "next/image";
import arbitrum_logo from "public/img/chain_logo/arbitrum.svg";

import { BlockContext } from "../../hooks/useBlockContext";

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

  //TODO:opのロゴも表示させる
  return (
    <>
      <div className="block-detail">
        <BlockDetailTable>
          <ImageRow>
            <Image alt="arbitrum" height={25} src={arbitrum_logo} width={25} />
            <Period>1234 ~ 6789</Period>
          </ImageRow>
          {blocks.map((block) => {
            return (
              <BlockDetailRow
                block_number={block.blockNumber}
                chain_name={props.chain_name}
                key={block.blockNumber}
                num_of_tx={block.numberOfTransaction}
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
