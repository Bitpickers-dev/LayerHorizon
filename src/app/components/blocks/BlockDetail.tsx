import { useContext } from "react";

import styled from "@emotion/styled";
import Image from "next/image";
import arbitrum_logo from "public/img/chain_logo/arbitrum.svg";

import { BlockContext } from "../../hooks/useBlockContext";

import BlockDetailRow from "./BlockDetailRow";
import L2ChainData from "@/types/L2ChainData";

type BlockDetailProps = {
  chain: L2ChainData;
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

  //TODO:opのロゴも表示させる
  return (
    <>
      <div className="block-detail">
        <BlockDetailTable>
          <ImageRow>
            <Image alt={props.chain.chainName} height={25} src={props.chain.chainLogo} width={25} />
            <Period>{props.chain.blocks[0].blockNumber} ~ {props.chain.blocks.slice(-1)[0].blockNumber}</Period>
          </ImageRow>
          {props.chain.blocks.map((block) => {
            return (
              <BlockDetailRow
                blockNumber={block.blockNumber}
                key={block.blockNumber}
                numberOfTransaction={block.numberOfTransactions}
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
