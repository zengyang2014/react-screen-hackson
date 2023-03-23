import { Citys } from "./geo";

import { generateData } from "./generate";

interface DefectiveReasonCategory {
  breakage: {
    calibrationFailed: number;
    programError: number;
    mispositioning: number;
  };
  createPublicKey: {
    temperatureError: number;
    paramsAbnormal: number;
    toolbreakage: number;
  };
  cut: {
    tooTight: Number;
    conveyorForeign: number;
    machineForeign: number;
  };
}

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
      defectiveReason: DefectiveReasonCategory;
    }
  >
>;

export const mockData: MockDataType = generateData();
