function buscaSimples(lista, numero){
    for(let item of lista){
        if (item == numero){
            console.log("Valor: ", item);
            console.log("Índice: ", lista.indexOf(item));
            break;
        }
    }
}