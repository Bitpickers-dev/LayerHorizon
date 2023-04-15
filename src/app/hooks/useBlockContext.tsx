import { createContext } from "react";

type BlockContextType = {
  activeBlock: number;
  setActiveBlock: (blockNumber: number) => void;
};

export const BlockContext = createContext<BlockContextType>({
  activeBlock: 0,
  setActiveBlock: () => {},
});
