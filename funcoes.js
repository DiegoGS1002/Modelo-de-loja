function alterarQtd(produto, acao){
        const qtd = document.getElementById('qtd_' + produto)
        const valor = document.getElementById('valor_' + produto)
        const total = document.getElementById('total_' + produto)    

        if(acao =='-'&& qtd.innerHTML==0){
            alert('Atenção! A quantidade não pode ser menor que zero')
        } else{
        acao == '+' ? qtd.innerHTML++ : qtd.innerHTML--
         const valortotal = qtd.innerHTML * somenteNumero(valor.innerHTML)
            total.innerHTML = formataValor(valortotal) 
        soma()
    } }

function soma(){
     let soma = 0
for(let i=1; i<4; i++){

     let numero = somenteNumero(document.getElementById('total_' + i).innerHTML)

     soma += Number(numero)
} 
     document.getElementById('Subtotal').innerHTML = formataValor(soma)
}

function somenteNumero(n){
     return n.replace(/\D/g, '')

}

function formataValor(n){
     return 'R$ ' + n.toLocaleString('pt-BR')   
}