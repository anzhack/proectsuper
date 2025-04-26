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
class Var{
    constructor(text, letter){
        this.text = text
        this.letter = letter
    }
}
class Quest {
    constructor(question, var1, var2) {
       this.question=question
       this.var1= var1
       this.var2 = var2
    }  
 }

let questions =[]
questions.push(new Quest(1, new Var('Ухаживать за животными', "П"), new Var('Обслуживать машины', "Т")))
questions.push(new Quest(2, new Var('Помогать больным людям, лечить их', "Ч"), new Var('Составлять таблицы, схемы, программы для вычислительных машин', "З")))
// questions.forEach(question =>{
    console.log(questions)
console.log(questions[0])
let quest_number = 1
var1.querySelector('label').innerHTML = questions[quest_number].var1.text
var2.querySelector('label').innerHTML = questions[quest_number].var2.text
// })