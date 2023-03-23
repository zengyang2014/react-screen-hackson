import {atom} from "recoil";
import { mockData } from "../pageData/mockData";

export const provinceState = atom({
  key: 'provinceState',
  default: 'China',
})

export const scadaCache = atom({
  key: 'scadaCache',
  default: mockData
})

export const powerUsageState = atom({
  key: 'powerUsage',
  default: 3.453
})
