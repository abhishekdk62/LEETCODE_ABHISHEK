/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let pairs={
        "}":"{",
        ")":"(",
        "]":"["
    }
    let stack=[]
    let g=s.split("")
for(let v of g){

if(v=="{"||v=="("||v=="[")
{
    stack.push(v)
}else
{
    console.log(v)
    let val=stack.pop()
    console.log(val)
    console.log(pairs[v])
    if(val!=pairs[v])
    {
        
        return false
    }
}



}

if(stack.length!=0)
{return false}
else
{return true}

};