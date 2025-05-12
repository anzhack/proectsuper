let var1 = document.querySelector('.var1')
let var2 = document.querySelector('.var2')
let nav1 = document.querySelector('.nav1')
let nav2 = document.querySelector('.nav2')
let otveti =[]
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
for (let i=0; i < questions.length; i +=1){
    otveti.push('')

} 
console.log(otveti)

let quest_number = 0

// })

function AskQuest(question){
    var1.querySelector('label').innerHTML = question.var1.text
    var2.querySelector('label').innerHTML = question.var2.text
    var1.querySelector('input').checked = false
    var2.querySelector('input').checked = false
    
}

function NextQuest(){
    quest_number+=1
    if (quest_number<questions.length){
        AskQuest(questions[quest_number])
    }
    
}
nav2.addEventListener('click', NextQuest)

function PrevQuest(){
    quest_number-=1
    if (quest_number<questions.length){
        AskQuest(questions[quest_number])
    }
}
nav1.addEventListener('click', PrevQuest)

AskQuest(questions[quest_number])
// NextQuest()
var1.addEventListener('click', function() {
        var1.querySelector('input').checked = true 
        // if(otveti.length-1==quest_number){
            otveti[quest_number]=questions[quest_number].var1.letter
        // }
        // else{
        //     otveti.push(questions[quest_number].var1.letter)
        // }

        console.log(otveti)
        quest_number+=1
        if (quest_number<questions.length){
            
        setTimeout(function(){
            console.log('l')
            AskQuest(questions[quest_number])}, 1000)
        }

    })
    var2.addEventListener('click', function() {
        var2.querySelector('input').checked = true
        // if(otveti.length-1==quest_number){
            otveti[quest_number]=questions[quest_number].var2.letter
        // }
        // else{
        //     otveti.push(questions[quest_number].var2.letter)
        // }
        console.log(otveti)
        quest_number+=1
        if (quest_number<questions.length){
            
            setTimeout(function(){
                console.log('l')
                AskQuest(questions[quest_number])}, 1000)
            }

    })
