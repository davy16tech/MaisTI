class Casa {
    constructor(quartos, banheiros, area, ano, bairro){
    this.quartos = quartos
    this.banheiros = banheiros
    this.tamanho = area
    this.anoConstruc = ano
    this.bairro = bairro
}
idade(anoConstruc){
    return anoatual - anoConstuc
}
}
let minhaCasa = new Casa (2, 1, 40, 2000, "Rosa elze")
console.log ("minha casa tem " + minhaCasa.quartos + " quartos", ",", minhaCasa.banheiros , "banheiro" , " Foi construida em" , minhaCasa.anoConstruc + " No bairro" , minhaCasa.bairro)
