function inserir(){
    let tr = document.createElement("tr");
    
    let td = document.createElement("td");
    let td2 = document.createElement("td");
    let td3 = document.createElement("td");
    let td4 = document.createElement("td");
    let td5 = document.createElement("td");
    
    td.innerHTML='<input type="text" id="idNome" name="cNome" class="cNome"" required maxlength="45">';
    td2.innerHTML='<input type="email" id="idEmail" name="cEmail" required maxlength="50">';
    td3.innerHTML='<select id="idInstituicoes" name="cInstituicoes" required><option value=""></option><option value="1">Hospital</option><option value="2">Creche</option><option value="3">Museu</option></select>';
    td4.innerHTML='<input type="number" id="idValor" name="cValor" required maxlength="20">';
    td5.innerHTML='<input type="button" onclick="deleteRow(this)" value="Excluir" id="excluir">';

    tr.appendChild(td);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    tr.appendChild(td5);

    let table = document.getElementById("table");
    table.appendChild(tr);

}

function deleteRow(r) {
    let confirme = window.confirm("Deseja excluir está linha?");
    var i = r.parentNode.parentNode.rowIndex;

    if (confirme == true){
        document.getElementById("table").deleteRow(i);
    } else {
        alert("Linha não excluída");
    } 
}

function validar(){

    let status = false;

    let inputText = document.querySelectorAll('input[type="text"]')
    let inputEmail = document.querySelectorAll('input[type="email"]')
    let selectInstituicao = document.querySelectorAll('select')
    let inputNumber = document.querySelectorAll('input[type="number"]')
    
    let totalTexts=inputText.length;
    let totalEmails=inputEmail.length;
    let totalInstituicoes=selectInstituicao.length;
    let totalNumbers=inputNumber.length;

    
    for(let i=0;i<totalTexts;i++){
        if(inputText[i].value == ""){
            status = true;
        }
    }

    for(let i=0;i<totalEmails;i++){
        if(inputEmail[i].value == ""){
            status = true;
        }
    }

    for(let i=0;i<totalInstituicoes;i++){
        if(selectInstituicao[i].value == ""){
            
            status = true;
        }
    }

    for(let i=0;i<totalNumbers;i++){
        if(inputNumber[i].value == ""){
            
            status = true;
        }
    }

    if(status == true){
        alert("Preencha todos os campos");
    } else {
        alert("Enviado...");
    }

}