function calcularMedia(){
    var total = 0;
    var qtd = arguments.length;
    var x = 0;
    //while(argumentes[x]){}
    while(typeof arguments[x] === 'number'){
        total += arguments[x];
        x++
    }

    return total / qtd;
}