var matriz =[];
var n = 8;
for (let i =1; i <= n; i +=1) {
var unit =[];
    for (var indexT = 0 ; indexT <= n  ; indexT += 1){ if (indexT <= n-i){
    unit = unit + ' '; 
     } else {
     unit = unit + '*';
     }}
matriz.push(unit); 
}
console.log(matriz)