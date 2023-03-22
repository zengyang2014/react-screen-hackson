class ScadaCache {
  private cache: {
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
