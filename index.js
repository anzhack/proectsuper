let var1 = document.querySelector('.var1')
let var2 = document.querySelector('.var2')
let otveti =[]
var1.addEventListener('click', function() {
    console.log(var1.querySelector('input'))
    var1.querySelector('input').checked = true 
    otveti.push('v1')
})
var2.addEventListener('click', function() {
    var2.querySelector('input').checked = true
    otveti.push('v2')
})
class Quest {
    constructor(question, var1, var2) {
       this.question=question
       this.var1= var1
       this.var2 = var2
    }  
 }