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
        max: 1,
        min: 0,
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
    const defectiveReasonData = []
    for(let i =0; i < 9; i++){
      defectiveReasonData.push(randomNum(0, 5))
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
      defectiveReason: defectiveReasonData,
    };
  }

  return data
};