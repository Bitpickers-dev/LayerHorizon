import { createContext } from "react";

import ArbitrumLogo from "public/img/chain_logo/arbitrum.svg";
import EthereumLogo from "public/img/chain_logo/ethereum.svg";
import OptimismLogo from "public/img/chain_logo/optimism.svg";

type LogoContextType = {
  logos: {
    logo: string;
    name: string;
  }[];
};

export const DefaultLogo = {
  logos: [
    {
      logo: EthereumLogo,
      name: "ethereum",
    },
    {
      logo: OptimismLogo,
      name: "optimism",
    },
    {
      logo: ArbitrumLogo,
      name: "arbitrum",
    },
  ],
};

export const LogoContext = createContext<LogoContextType>({
  logos: [
    {
      logo: EthereumLogo,
      name: "ethereum",
    },
    {
      logo: OptimismLogo,
      name: "optimism",
    },
    {
      logo: ArbitrumLogo,
      name: "arbitrum",
    },
  ],
});
