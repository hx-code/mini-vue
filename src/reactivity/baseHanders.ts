import{track, trigger} from './effect'
import { ReactiveFlags } from './reactive';

const get = createGetter()
const set = createSetter()
const readonlyGet = createGetter(true)
function createGetter(isReadonly = false){
    return function get(target, key){
    
    if(key === ReactiveFlags.IS_REACTIVE){
            return !isReadonly
        }else if(key === ReactiveFlags.IS_REAONLY){
            return isReadonly
        }
      const res = Reflect.get(target, key);
     if(!isReadonly){
       track(target, key)
     }
     return res
  
  };
    
  }
  function createSetter(){
    return function set(target, key, value){
      const res = Reflect.set(target, key, value)
  
    trigger(target, key);
    return res
    }
  }
  

export const mutableHanders = {
    get,
    set,
  
}

export const readonlyHanders = {
    get: readonlyGet,
  set(target, key, value){
      console.warn('key: ${key} set失败因为target 是readonly, target')
    return true
  }
}