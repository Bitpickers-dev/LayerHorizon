import { useContext } from "react";

import styled from "@emotion/styled";
import Image from "next/image";

import DummyLogo from "public/img/chain_logo/dummy.svg"

import { LogoContext } from "@/app/hooks/useLogoContext";
import Chain from "@/types/ChainData";

import { BlockContext } from "../../hooks/useBlockContext";

import BlockDetailRow from "./BlockDetailRow";

type BlockDetailProps = {
  chain: Chain;
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
  const { logos } = useContext(LogoContext)

  const logo = (logos.find(logo => logo.name === props.chain.chain_name)?.logo)??DummyLogo;

  console.log(props)

  //TODO:opのロゴも表示させる
  return (
    <>
      <div className="block-detail">
        <BlockDetailTable>
          <ImageRow>
            <Image alt={props.chain.chain_name} height={25} src={logo} width={25} />
            <Period>{props.chain.blocks[0].number} ~ {props.chain.blocks.slice(-1)[0].number}</Period>
          </ImageRow>
          {props.chain.blocks.map((block) => {
            return (
              <BlockDetailRow
                block_number={parseInt(block.number, 16)}
                chain_name={props.chain.chain_name}
                key={block.number}
                num_of_tx={block.count}
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
