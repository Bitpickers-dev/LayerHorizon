import Response from "@/types/Response";

export const getEthBlock = (number: string): Promise<Response> =>
  fetch(`http://127.0.0.1:8000/ethblock/${number}/`).then((x) => x.json());
