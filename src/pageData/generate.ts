import {Citys} from './geo'
const randomNum = (minNum: number, maxNum: number) => {
  return Math.floor(Math.random() * (maxNum - minNum + 1) + minNum);
};

const randomScope = {
  productStatus: {
    month: {
      capacity: {
        max: 20000,
        min: 10000,
      },
      defective: {
        max: 60,
        min: 30,
      },
    },
    day: {
      capacity: {
        max: 700,
        min: 300,
      },
      defective: {
        max: 5,
        min: 0,
      },
    },
  },
  inventory: {
    materialA: {
      max: 1000,
      min: 600,
    },
    materialB: {
      max: 2000,
      min: 1000,
    },
    materialC: {
      max: 3000,
      min: 900,
    },
  },
};

export const generateData = () => {
  const data = {}
  for (let i in Citys) {
    const city = Citys[i];
    const monthData: {
      [key: number]: {
        capacity: number;
        defective: number;
      };
    } = {};
    const dayData: {
      [key: number]: {
        capacity: number;
        defective: number;
      };
    } = {};
    for (let m = 1; m < 13; m++) {
      monthData[m] = {
        capacity: randomNum(
          randomScope.productStatus.month.capacity.min,
          randomScope.productStatus.month.capacity.max
        ),
        defective: randomNum(
          randomScope.productStatus.month.defective.min,
          randomScope.productStatus.month.defective.max
        ),
      };
    }

    for (let d = 18; d < 25; d++) {
      dayData[d] = {
        capacity: randomNum(
          randomScope.productStatus.day.capacity.min,
          randomScope.productStatus.day.capacity.max
        ),
        defective: randomNum(
          randomScope.productStatus.day.defective.min,
          randomScope.productStatus.day.defective.max
        ),
      };
    }
    data[city] = {
      productStatus: {
        month: monthData,
        day: dayData,
      },
      inventory: {
        materialA: randomNum(
          randomScope.inventory.materialA.min,
          randomScope.inventory.materialA.max
        ),
        materialB: randomNum(
          randomScope.inventory.materialB.min,
          randomScope.inventory.materialB.max
        ),
        materialC: randomNum(
          randomScope.inventory.materialC.min,
          randomScope.inventory.materialC.max
        ),
      },
      defectiveReason: {
        breakage: {
          calibrationFailed: randomNum(0, 20),
          programError: randomNum(0, 20),
          mispositioning: randomNum(0, 20),
        },
        createPublicKey: {
          temperatureError: randomNum(0, 20),
          paramsAbnormal: randomNum(0, 20),
          toolbreakage: randomNum(0, 20),
        },
        cut: {
          tooTight: randomNum(0, 20),
          conveyorForeign: randomNum(0, 20),
          machineForeign: randomNum(0, 20),
        },
      },
    };
  }

  return data
};