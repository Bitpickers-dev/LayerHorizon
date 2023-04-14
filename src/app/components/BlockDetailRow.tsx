import styled from "@emotion/styled";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(relativeTime);

type BlockDetailRowProps = {
  blockNumber: number;
  numberOfTransaction: number;
  timestamp: number;
};

const BlockDetailRow = ({ blockNumber, numberOfTransaction, timestamp }: BlockDetailRowProps) => {
  const BlockDetailRow = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 32px 64px;
  `;

  return (
    <BlockDetailRow>
      <a className="block-detail-block-number">#{blockNumber}</a>
      <p className="block-detail-age">{dayjs.unix(timestamp).fromNow()}</p>
      <a className="block-detail-transaction-number">{numberOfTransaction} txns</a>
    </BlockDetailRow>
  );
};

export default BlockDetailRow;
