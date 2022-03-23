function outer(){
    var ov=100

    function inner(){
        alert(ov)
 
   }
   return inner
}
var innerfun= outer()
innerfun()