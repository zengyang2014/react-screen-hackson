import { Citys } from "./geo";

import { generateData } from "./generate";

export type MockDataType = Partial<
  Record<
    Citys,
    {
      productStatus: {
        month: {
          [key: number]: {
            capacity: number;
            defective: number;
          };
        };
        day: {
          [key: number]: {
            capacity: number;
            defective: number;
          };
        };
      };
      inventory: {
        materialA: number;
        materialB: number;
        materialC: number;
      };
      defectiveReason: number[];
    }
  >
>;

export const mockData: MockDataType = generateData();
