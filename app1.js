function getDescuento(min,max){
    return Math.floor(Math.random()*(max- min))+min;
}
const n= Number(prompt("Por favor ingrese la cantidad de usuarios"))
let descuento =[];
for(let i =1; i<=n;i++){
    let names = prompt("ingrese el nombre del usuario " + i)
    let id = Number(prompt("ingrese su numero de identificacion" + i))
    let almacenar={
        name:names,
        identificacion:id,
        valor:getDescuento(1,40)   
    }
    descuento.push(almacenar);
    alert("El descuento que tenemos hoy para  "+names+" con identificacion "+id+" es del "+ almacenar.valor +"%");
}
alert(JSON.stringify(descuento))