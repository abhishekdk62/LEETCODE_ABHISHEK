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
let flag=false
let stack=[]
let e=[]
let b=[]
s.split("").map((v)=>{

if(v=="{"||v=="("||v=="[")
{
stack.push(v)
b.push(v)
}
else
{
    e.push(v)
    let popepd=stack.pop()

    if(pairs[v]!=popepd)
    {
        flag= false
    }
    else
    {
        e.pop()
        flag= true
    }
  

}

})
if(e.length!=0||stack.length!=0)
{
    flag=false
}
 return flag   
};