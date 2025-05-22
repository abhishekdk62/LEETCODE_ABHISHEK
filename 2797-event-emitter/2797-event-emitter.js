class EventEmitter {
    
    /**
     * @param {string} eventName
     * @param {Function} callback
     * @return {Object}
     */
     constructor()
     {

     this.map={}
     }
    subscribe(eventName, callback) {
        if(this.map[eventName])
        {
            this.map[eventName].push(callback)

        }else
        {
            this.map[eventName]=[callback]
        }
        return {
            unsubscribe: () => {

                this.map[eventName].forEach((fn,i)=>{
                    if(fn==callback)
                    {
                        this.map[eventName][i]=null
                    }
                })
                
            }
        };
    }
    
    /**
     * @param {string} eventName
     * @param {Array} args
     * @return {Array}
     */
    emit(eventName, args = []) {
let res=[]
if(this.map[eventName])
{
    this.map[eventName].forEach((fn)=>{
    if(fn!=null)
    {

    res.push(fn(...args))
    }
})
}
return res

        
    }
}

/**
 * const emitter = new EventEmitter();
 *
 * // Subscribe to the onClick event with onClickCallback
 * function onClickCallback() { return 99 }
 * const sub = emitter.subscribe('onClick', onClickCallback);
 *
 * emitter.emit('onClick'); // [99]
 * sub.unsubscribe(); // undefined
 * emitter.emit('onClick'); // []
 */