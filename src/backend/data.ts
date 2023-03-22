class Scada{
  private cache : {[key: string]: any}
  constructor(){
    this.cache = {}
  }

  setCacheByKey(key: string, value: string){
    this.cache[key] = value
  }

  getCache(){
    return this.cache
  }

  getValue(key: string){
    return this.cache[key]
  }
}

export const scadaCache = new Scada()