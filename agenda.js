var agenda = [];

do{
    function Gravar(nome, telefone){
        agenda.push({'Nome': nome, 'Telefone': telefone})
        return "Gravado com sucesso!"
    }
    function Listar(){
        var texto = ''
        for(var i=0; i<agenda.length; i++){
            texto += `Nome: ${agenda[i]['Nome']} | Telefone: ${agenda[i]['Telefone']}\n`
        }
        return texto
    }
    function Buscar(nome){
        for(var i = 0; i < agenda.length ; i++){
            if(agenda[i]['Nome']==nome){
                i_busca = i
                return `Nome: ${agenda[i]['Nome']} | Telefone: ${agenda[i]['Telefone']}`
            }
        }
        return 'Nome não cadastrado'
    }
    function Excluir(nome){
        for(var i=0;i<agenda.length;i++){
            if(agenda[i]['Nome']==nome){
                agenda.splice(i)
                return 'Exclusão realizada com sucesso.'
            }
        }
        return 'Nome não encontrado.'
    }

    var menu = prompt("Insira uma opção:\n1.Gravar\n2.Listar\n3.Buscar\n4.Excluir\n0.Sair")

    if(menu==1){
        var nome = prompt("Nome: ")
        var telefone = prompt("Telefone: ")
        alert(Gravar(nome, telefone))
    }else if(menu==2){
        alert(Listar())
    }else if (menu == 3){
        var buscar = prompt("Nome para busca: ")
        alert(Buscar(buscar))
    }else if (menu==4){
        var excluir = prompt('Nome para exclusão: ')
        alert(Excluir(excluir))
    }else if (menu==0){
        alert('Até logo!')
    }else{
        alert('Não há essa opção.')
    }
}while(menu!=0);