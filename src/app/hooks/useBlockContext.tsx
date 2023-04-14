import { createContext } from "react";

type BlockContextType = {
  activeBlock: number | null;
  setActiveBlock: (blockNumber: number) => void;
};

export const BlockContext = createContext<BlockContextType>({
  activeBlock: null,
  setActiveBlock: () => {},
});
