import { number } from "echarts";

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
      faultReason: number[]
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
          defective: 1,
          qualified: 1,
        },
        faultReason: [0, 0, 0, 0, 0, 0, 0, 0, 0]
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

  updateProduct(status: string){
    if(status === '0'){
      this.cache.source.product.qualified += 1
    }else{
      this.cache.source.product.defective += 1
      this.cache.source.faultReason[Number(status) - 1] += 1
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
