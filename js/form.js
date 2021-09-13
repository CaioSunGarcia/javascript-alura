var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click",function(event){

    event.preventDefault(); // segura a acao padrao dentro de um evento no HTML

    var form = document.querySelector("#form-adiciona");

    var paciente = obtemPacienteDoFormulario(form);

    var erros = validaPaciente(paciente);
    console.log(erros);

    if(erros.length > 0){
        exibeMensagensDeErro(erros);

        return; // usei o return vazio para nao completar o circuito inteiro da tabela caso o peso esteja inválido.
    }

    adicionaPacienteNaTabela(paciente);

    form.reset();
    var mensagensErro = document.querySelector("#mensagens-erro");
    mensagensErro.innerHTML = "";

});

function adicionaPacienteNaTabela(paciente){
    var pacienteTr = montaTr(paciente);
    var tabela = document.querySelector("#tabela-pacientes"); // Colocamos esse tr dentro da tabela que já existe no nosso HTML
    tabela.appendChild(pacienteTr); // Colocamos esse tr dentro da tabela que já existe no nosso HTML

}


function exibeMensagensDeErro(erros){
    var ul = document.querySelector("#mensagens-erro");
    ul.innerHTML = "";

    erros.forEach(function(erro){
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    });

}

function obtemPacienteDoFormulario(form){

    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
}
        return paciente;
}

function montaTr(paciente){
    var pacienteTr = document.createElement("tr"); // Criamos o tr. O "createElement" permite a gente criar qualquer tag HTML 
    pacienteTr.classList.add("paciente");



    pacienteTr.appendChild(montaTd(paciente.nome, "info-nome")); // Colocamos os tds dentro o tr
    pacienteTr.appendChild(montaTd(paciente.peso, "info-peso")); // Colocamos os tds dentro o tr
    pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));// Colocamos os tds dentro o tr
    pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));// Colocamos os tds dentro o tr
    pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));// Colocamos os tds dentro o tr



    return pacienteTr;
}

    function montaTd(dado,classe){
        var td = document.createElement("td");
        td.textContent = dado
        td.classList.add(classe);

        return td;
    }

    function validaPaciente(paciente){

        var erros = [];

        if(paciente.nome.length == 0){
            erros.push("O nome nao pode ser em branco.");
        }

        if(!validaPeso(paciente.peso)){
            erros.push("Peso é invalido");
        }

        if(!validaAltura(paciente.altura)){
            erros.push("Altura inválida!");
        }

        if(paciente.gordura.length == 0){
            erros.push("A gordura nao pode ser deixada em branco.");
        }

        if(paciente.peso.length == 0){
            erros.push("O peso nao pode ser em branco!");
        }

        if(paciente.altura.length == 0){
            erros.push("A altura nao pode ser deixada em branco.")
        }

        return erros;
    }