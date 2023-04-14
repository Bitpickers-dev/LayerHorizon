"use client";
import React from "react";

import Image from "next/image";
import ArbitrumLogo from "../public/img/chain_logos/arbitrum.svg";
import OptimismLogo from "../public/img/chain_logos/optimism.svg";

import Select, { MultiValue } from "react-select";
import styled from "@emotion/styled";

import "../style.css";
import ChainOption from "@/types/ChainType";

const ChainNameWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const ChainName = styled.span`
  vertical-align: middle;
`;

type ChainSelectorProps = {
  onSelectChain: (chain: MultiValue<ChainOption>) => void;
};

const ChainSelector = ({ onSelectChain }: ChainSelectorProps) => {
  const ChainSelector = styled.div`
    display: flex;
    width: fit-content;
    background: #fff;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgb(0 0 0 / 10%);
  `;

  const options: ChainOption[] = [
    {
      label: (
        <ChainNameWrapper>
          <Image alt="optimism" className="chain-logo" height={20} src={OptimismLogo} width={20} />
          <ChainName>Optimism</ChainName>
        </ChainNameWrapper>
      ),
      value: "Optimism",
    },
    {
      label: (
        <ChainNameWrapper>
          <Image alt="arbitrum" className="chain-logo" height={20} src={ArbitrumLogo} width={20} />
          <ChainName>Arbitrum</ChainName>
        </ChainNameWrapper>
      ),
      value: "Arbitrum",
    },
  ];

  const handleChange = (option: MultiValue<ChainOption>) => {
    onSelectChain(option);
  };

  return (
    <ChainSelector>
      <Select
        classNamePrefix="select"
        isMulti
        name="chains"
        onChange={handleChange}
        options={options}
        styles={{
          control: (base) => ({ ...base, margin: "16px", width: "400px" }),
        }}
      />
    </ChainSelector>
  );
};

export default ChainSelector;
