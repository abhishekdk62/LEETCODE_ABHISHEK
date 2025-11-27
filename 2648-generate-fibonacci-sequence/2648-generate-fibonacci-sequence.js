/**
 * @return {Generator<number>}
 */
var fibGenerator = function*() {

let j=0
let k=1   

while(true)
{
    yield j
    let temp=j+k
    j=k
    k=temp
    

}
   
    
};

/**
 * const gen = fibGenerator();
 * gen.next().value; // 0
 * gen.next().value; // 1
 */