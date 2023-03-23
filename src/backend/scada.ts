class ScadaCache {
  private readonly cache: {
    plcPortValues: {
      [key: string]: any;
    };
    source: {
      material: {
        [key: string]: number;
      };
      product: {
        defective: number;
        qualified: number;
      };
    };
    energyTrends: number[];
  };

  constructor() {
    this.cache = {
      plcPortValues: {},
      source: {
        material: {},
        product: {
          defective: 0,
          qualified: 0,
        },
      },
      energyTrends: [3.01, 2.6, 3.65, 3.33, 3.12, 3.40, 3.28, 3.51]
    };
  }

  setCacheByKey(key: string, value: string) {
    this.cache[key] = value;
  }

  setPlcPortValues(data: { [key: string]: any }) {
    this.cache.plcPortValues = data;
  }

  getCache() {
    return this.cache;
  }

  getValue(key: string) {
    return this.cache[key];
  }
}

export const scadaCache = new ScadaCache();
