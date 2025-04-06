class Prof{
    constructor(ad,aa,ab){
        this.profname = ad;
        this.descr = aa
        this.fil = ab 
    }

}

let profs = []
profs.push(new Prof('директор','описание','1'))
profs.push(new Prof('строитель','описание2','12'))
profs.push(new Prof('учитель','описание3','1'))
profs.push(new Prof('водитель','описание4','1'))

let prif = document.querySelectorAll('.proff')
let opiss = document.querySelectorAll('.opis')

for (let i = 0; i < profs.length; i+= 1){
    prof = profs[i]
    prif [i].innerHTML = prof.profname
    opiss [i].innerHTML = prof.descr
}