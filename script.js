const n =500; //number of digits created
const array = [];//holder for random digits created

init();



function init(){


for(let i=0; i<n; i++){
    array[i]=Math.random(); //random numbers between 0 and 1 generated and stored in the array.
}
showbars();
}

function play(){
    const copy = [...array];
   const swaps = bubbleSort(copy);
    animate(swaps);

}

function animate(swaps){
    if(swaps.length ===0)
        {
            showbars();
            return;
        }
       const [i,j] = swaps.shift(); 
      [ array[i],array[j]] = [array[j],array[i]];
        showbars([i,j]);
        setTimeout(function(){
            animate(swaps);

        }, 0)
    }

function bubbleSort(array){
    const swaps = [];
    do{
        var swapped = false;
        for(let i =1; i<array.length; i++){
            if (array[i-1]>array[i]){
                swapped = true;
                swaps.push([i-1, i]);
                [array[i-1], array[i]]= [array[i], array[i-1]];
            }
        }
    }while(swapped);
    return swaps;

}



function showbars(indicies){

container.innerHTML = "";

for(let i = 0; i< array.length; i++){
    const bar = document.createElement("div");
    bar.style.height=array[i]*100 + "%";
    bar.classList.add("bar");
    if(indicies && indicies.includes(i)){
        bar.style.backgroundColor = "green";
    }
    container.appendChild(bar);
}
    

}
