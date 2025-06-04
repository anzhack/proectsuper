 let var1 = document.querySelector('.var1')
let var2 = document.querySelector('.var2')
let nav1 = document.querySelector('.nav1')
let nav2 = document.querySelector('.nav2')
let results = document.querySelector('.results')
let main = document.querySelector('main')
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
questions.push(new Quest(3, new Var('Участвовать в оформлении книг, плакатов,  журналов', "Х"), new Var('Следить за состоянием и развитием растений', "П")))
questions.push(new Quest(4, new Var('Обрабатывать материалы (древесину, ткань, металл, пластмассу и др.)', "Т"), new Var('Доводить товары до потребителя (рекламировать)', "Ч")))
questions.push(new Quest(5, new Var('Обсуждать научно-популярные книги, статьи', "З"), new Var('Обсуждать художественные книги (или пьесы, концерты)', "Х")))
questions.push(new Quest(6, new Var('Содержать животных', "П"), new Var('Тренировать товарищей (или младших школьников) в выполнении каких-либо действий (трудовых, учебных, спортивных)', "Ч")))
questions.push(new Quest(7, new Var('Копировать рисунки, изображения (или настраивать музыкальные инструменты)', "Х"), new Var('Управлять подъемным краном, трактором, тепловозом и т. п.', "Т")))
questions.push(new Quest(8, new Var('Сообщать (разъяснять) людям какие-либо сведения (в справочном бюро, на экскурсии)', "Ч"), new Var('Художественно оформлять выставки, витрины (или участвовать в подготовке пьес, концертов)', "Х")))
questions.push(new Quest(9, new Var('Ремонтировать вещи (одежду, технику), жилище', "Т"), new Var('Искать и исправлять ошибки в текстах, таблицах, рисунках', "З")))
questions.push(new Quest(10, new Var('Лечить животных', "П"), new Var('Выполнять вычисления, расчеты', "З")))
questions.push(new Quest(11, new Var('Выводить новые сорта растений', "П"), new Var('Конструировать, проектировать новые виды изделий (машины, одежду, дома и т. п.)', "Т")))
questions.push(new Quest(12, new Var('Разрешать споры, предупреждать ссоры, убеждать, разъяснять, поощрять, наказывать', "Ч"), new Var('Разбираться в чертежах, схемах, таблицах (проверять, уточнять, приводить в порядок)', "З")))
questions.push(new Quest(13, new Var('Участвовать в работе кружков художественной самодеятельности', "Х"), new Var('Наблюдать, изучать жизнь микробов', "П")))
questions.push(new Quest(14, new Var('Налаживать медицинские приборы, аппараты', "Т"), new Var('Оказывать людям медицинскую помощь при ранениях, ушибах и т. п.', "Ч")))
questions.push(new Quest(15, new Var('Составлять точные описания, отчеты о наблюдаемых явлениях, событиях, измеряемых объектах и т.п.', "З"), new Var('Художественно описывать, отображать события (наблюдаемые или представляемые)', "Х")))
questions.push(new Quest(16, new Var('Выполнять лабораторные анализы в больнице', "П"), new Var('Принимать, осматривать больных, беседовать с ними, назначать лечение', "Ч")))
questions.push(new Quest(17, new Var('Красить или расписывать стены или помещения, поверхность изделий', "Х"), new Var('Осуществлять монтаж зданий или сборку машин, приборов', "Т")))
questions.push(new Quest(18, new Var('Организовывать культпоходы сверстников или младших товарищей (в театры, музеи), экскурсии, туристические походы и т. п.', "Ч"), new Var('Играть на сцене, принимать участие в концертах', "Х")))
questions.push(new Quest(19, new Var('Изготавливать по чертежам детали, изделия (машины, одежду), строить здания', "Т"), new Var('Заниматься черчением, копировать чертежи, карты', "З")))
questions.push(new Quest(20, new Var('Вести борьбу с болезнями растений, с вредителями леса, сада', "П"), new Var('Работать на клавишных машинах (пишущей машинке, телетайпе и др.)', "З")))

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
    } else {
        if (otveti.some(otvet => {
            return otvet != ''
          })){
                results.style.display = 'block'
                main.style.display = 'none'
          }
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
            AskQuest(questions[quest_number])}, 1000)
        }
        else {
            if (otveti.some(otvet => {
                return otvet != ''
              })){
                    results.style.display = 'block'
                    main.style.display = 'none'
              }
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
                AskQuest(questions[quest_number])
            }, 1000)
        }
        else {
            if (otveti.some(otvet => {
                return otvet != ''
              })){
                    results.style.display = 'block'
                    main.style.display = 'none'
              }
        }

    })
