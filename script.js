class Ninja {
    constructor(nombre) {
        this.nombre = nombre;
        this.salud = 0;
        this.velocidad = 3;
        this.fuerza = 3;
    }
    sayName(){
        
        console.log( this.nombre);
    }  //nombre del ninja

    showStats(){
        console.log(`Nombre:  ${ this.nombre }, Fuerza:  ${ this.fuerza },   Velocidad:  ${ this.velocidad },   Salud:  ${ this.salud}`);
    } 
    
    dinkShake(){
        this.salud =+ 10;
    }
    
    
}
const ninja1 = new Ninja('Luis');
console.log(ninja1);


ninja1.sayName();

ninja1.dinkShake();
ninja1.showStats();
console.log(ninja1.salud);




 class Sensei extends Ninja {
    constructor(nombre ) {
        super(nombre);
        this.nombre = nombre
        this.sabiduria = 10;
        this.salud = +200;
        this.velocidad = this.velocidad + 7;
        this.fuerza = this.fuerza + 7
    }
    
     speakWisdom () {
        console.log("speakWisdom");
        console.log("Lo que un programador puede hacer en un mes, dos programadores pueden hacerlo en dos meses");
    }



} 
 const supersensei = new Sensei("Master Splinter");
 console.log(supersensei);
 
supersensei.speakWisdom(); 

