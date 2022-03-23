let data= ['a','b','c','a']

let unique= data.filter((c,index)=>{
    return data.indexOf(c)===index
})

console.log(unique)