import styled from "@emotion/styled";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(relativeTime);

type BlockDetailRowProps = {
  blockNumber: number;
  numberOfTransaction: number;
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
  const handleClick = (): void => {
    window.location.href = `https://etherscan.io/block/${props.blockNumber}`;
  };

  return (
    <Row blockNumber={0} numberOfTransaction={0} onClick={handleClick} timestamp={0}>
      <BlockNumber>#{props.blockNumber}</BlockNumber>
      <Age>{dayjs.unix(props.timestamp).fromNow()}</Age>
      <NumOfTx>{props.numberOfTransaction} txns</NumOfTx>
    </Row>
  );
};

export default BlockDetailRow;
