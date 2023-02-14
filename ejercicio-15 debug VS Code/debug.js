let lista=[];

const secFibonacci = (num) =>{
    for (let i=0;i<=num;i++){
        if(i<2){
            const numSerie = 1;
            lista = [...lista, numSerie]
        }else{
            const numSerie = lista[(i-2)] + lista[(i-1)];
            lista = [...lista, numSerie]
        };
    };
};

secFibonacci(6);