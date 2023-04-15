import Response from "@/types/Response";

export const getEthList = (length: number): Promise<Response> =>
  fetch(`http://127.0.0.1:8000/ethblock/?size=${length}`).then((x) => x.json());
