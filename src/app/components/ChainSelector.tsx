"use client";
import React from "react";

import styled from "@emotion/styled";
import Image from "next/image";

import Select, { MultiValue } from "react-select";

import ChainOption from "@/types/ChainType";

import ArbitrumLogo from "../public/img/chain_logos/arbitrum.svg";
import OptimismLogo from "../public/img/chain_logos/optimism.svg";

import "./style.css";

const ChainNameWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const ChainName = styled.span`
  margin-left: 8px;
  vertical-align: middle;
`;

const SelectorContainer = styled.div`
  display: flex;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgb(0 0 0 / 10%);
`;

type ChainSelectorProps = {
  onSelectChain: (chain: MultiValue<ChainOption>) => void;
};

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

const ChainSelector = ({ onSelectChain }: ChainSelectorProps) => {
  const handleChange = (option: MultiValue<ChainOption>) => {
    onSelectChain(option);
  };

  return (
    <SelectorContainer>
      <Select
        classNamePrefix="select"
        instanceId="chain-selector"
        isMulti
        name="chains"
        onChange={handleChange}
        options={options}
        styles={{
          control: (base) => ({ ...base, margin: "16px", width: "400px" }),
        }}
      />
    </SelectorContainer>
  );
};

export default ChainSelector;
