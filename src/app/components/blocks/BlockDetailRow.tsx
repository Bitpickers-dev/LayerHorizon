import styled from "@emotion/styled";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(relativeTime);

type BlockDetailRowProps = {
  block_number: number;
  chain_name: string;
  num_of_tx: number;
  timestamp: number;
};

const Row = styled.a<BlockDetailRowProps>`
  display: flex;
  justify-content: space-between;
  background-color: #fefefe;
  width: 100%;
  padding: 8px 16px;
  border: none;
`;

const BlockNumber = styled.a`
  font-size: 15px;
  color: #818181;
  text-align: right;
`;
const Age = styled.p`
  font-size: 12px;
  color: #818181;
  text-align: right;
`;

const NumOfTx = styled.a`
  font-size: 15px;
  color: #818181;
  text-align: right;
`;

const BlockDetailRow = (props: BlockDetailRowProps) => {
  const explolerMap = new Map();
  explolerMap.set('ethereum', 'etherscan.io');
  explolerMap.set('arbitrum', 'arbiscan.io');
  explolerMap.set('optimism', 'optimistic.etherscan.io');

  const handleClick = (): void => {
    window.location.href = `https://${explolerMap.get(props.chain_name)}/block/${props.block_number}`;
  };

  return (
    <Row block_number={0} chain_name={""} num_of_tx={0} onClick={handleClick} timestamp={0}>
      <BlockNumber>#{props.block_number}</BlockNumber>
      <Age>{dayjs.unix(props.timestamp).fromNow()}</Age>
      <NumOfTx>{props.num_of_tx} txns</NumOfTx>
    </Row>
  );
};

export default BlockDetailRow;
