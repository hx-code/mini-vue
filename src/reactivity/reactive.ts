import { mutableHanders, readonlyHanders } from "./baseHanders";
import { track, trigger} from "./effect";

export const enum ReactiveFlags{
  IS_REACTIVE ="_v_isReactive",
  IS_REAONLY="_v_isReadonly"
}

export function reactive(raw){
  return createAciveObject(raw, mutableHanders)
}
export function readonly(raw){
  return createAciveObject(raw, readonlyHanders)
}
export function isReactive(value){
   return !!value[ReactiveFlags.IS_REACTIVE]
}

export function isReadonly(value){
  return !!value[ReactiveFlags.IS_REAONLY]

}
function createAciveObject(raw: any, baseHanders){
  return new Proxy(raw, baseHanders)
}