import styled from "@emotion/styled";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(relativeTime);

type BlockDetailRowProps = {
  blockNumber: number;
  numberOfTransaction: number;
  timestamp: number;
};

const BlockDetailRow = (props: BlockDetailRowProps) => {
  const BlockDetailRow = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 8px 16px;
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

  return (
    <BlockDetailRow>
      <BlockNumber>#{props.blockNumber}</BlockNumber>
      <Age>{dayjs.unix(props.timestamp).fromNow()}</Age>
      <NumOfTx>{props.numberOfTransaction} txns</NumOfTx>
    </BlockDetailRow>
  );
};

export default BlockDetailRow;
