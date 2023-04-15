import Block from "@/types/Block";

export const getArbBatch = (eth: string): Promise<Block[]> =>
  // fetch(`http://127.0.0.1:8000/arbblock/?eth=${eth}`).then((x) => x.json());
  fetch(`http://127.0.0.1:8000/arbblock/?eth=${eth}`).then((x) => x.json());
