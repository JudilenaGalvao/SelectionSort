let tam =[5,4,8,1,2,6,7,3]

var SelectionSort = function(array){
    
    for(let i = 0; i < tam.length; i++){
        let indMenor = i;
        
        for(let j = i; j < tam.length; j++){
            if(tam[indMenor] > tam[j]){
                indMenor = j
            }
        }
        if(i != indMenor){
            aux = tam[i]
            tam[i] = tam[indMenor]
            tam[indMenor] = aux
        }
    }
    console.log(tam)
}
SelectionSort(tam)