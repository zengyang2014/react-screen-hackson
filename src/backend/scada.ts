class ScadaCache {
  private readonly cache: {
    source: {
      material: {
        materialA: number,
        materialB: number,
        materialC: number;
      };
      product: {
        defective: number;
        qualified: number;
      };
    }
  };

  constructor() {
    this.cache = {
      source: {
        material: {
          materialA: 1458,
          materialB: 2564,
          materialC: 3368
        },
        product: {
          defective: 2,
          qualified: 135,
        },
      }
    };
  }

  setCacheByKey(key: string, value: string) {
    this.cache[key] = value;
  }

  subMateria(){
    this.cache.source.material.materialA -= 1
    this.cache.source.material.materialB -= 1
    this.cache.source.material.materialC -= 1
  }

  updateProduct(qualified: boolean){
    if(qualified){
      this.cache.source.product.qualified += 1
    }else{
      this.cache.source.product.defective += 1
    }
  }

  setPlcPortValues(data: { [key: string]: any }) {
  }

  getCache() {
    return this.cache;
  }

  getValue(key: string) {
    return this.cache[key];
  }
}

export const scadaCache = new ScadaCache();
