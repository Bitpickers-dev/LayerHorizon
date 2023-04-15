import Block from "@/types/Block";

export const getEthBlock = (number: string): Promise<Blocks> =>
  fetch(`http://127.0.0.1:8000/ethblock/${number}/`).then((x) => x.json());
