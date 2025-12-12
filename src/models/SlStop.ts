export type SlStop = {
  locations: {
    coord: [number, number];
    disassembledName: string;
    id: string;
    isBest: boolean;
    isGlobalId: boolean;
    matchQuality: number;
    name: string;
    parent: {
      id: string;
      name: string;
      type: string;
    };
    productClasses: number[];
    properties: {
      mainLocality: string;
      stopId: string;
    };
    type: string;
  }[];
  systemMessages: {
    code: number;
    module: string;
    text: string;
    type: string;
  }[];
};
