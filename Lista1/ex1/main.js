let arrayAluno = [];
let index = 0;

function getFields(){
    let fields = {
        nome: document.getElementById('nome'),
        idade: document.getElementById('idade'),
        notafinal: document.getElementById('notaFinal'),
        curso: document.getElementById('curso')
    }
    return fields;
}

function criarAluno(){
    let fields = getFields();
    let aluno = {
        nome: fields.nome.value,
        idade: fields.idade.value,
        notafinal: fields.notafinal.value,
        curso: fields.curso.value
    };
    fields.nome.value = "";
    fields.idade.value = "";
    fields.notafinal.value = "";
    fields.curso.value = "";
    return aluno;
}

function adicionarTabela(){
    arrayAluno.push(criarAluno());
    let table = document.getElementById('tableUser');
    let newLinha = table.insertRow();
    let cel1 = newLinha.insertCell(0);
    let cel2 = newLinha.insertCell(1);
    let cel3 = newLinha.insertCell(2);
    let cel4 = newLinha.insertCell(3);
    let cel5 = newLinha.insertCell(4);
    let cel6 = newLinha.insertCell(5)
    cel1.textContent = arrayAluno[newLinha.rowIndex-1].nome;
    cel2.textContent = arrayAluno[newLinha.rowIndex-1].idade;
    cel3.textContent = arrayAluno[newLinha.rowIndex-1].curso;
    cel4.textContent = arrayAluno[newLinha.rowIndex-1].notafinal;

    let editButton = document.createElement("button");
    let deleteButton = document.createElement("button");
    editButton.textContent = "Editar";
    editButton.onclick = function() {
        let fields = getFields();
        //console.log(newLinha.rowIndex);
        fields.nome.value = arrayAluno[newLinha.rowIndex-1].nome;
        fields.idade.value = arrayAluno[newLinha.rowIndex-1].idade;
        fields.notafinal.value = arrayAluno[newLinha.rowIndex-1].notafinal;
        fields.curso.value = arrayAluno[newLinha.rowIndex-1].curso;
        table.deleteRow(newLinha.rowIndex);
        arrayAluno.pop(newLinha.rowIndex-1);
    };
    deleteButton.textContent = "Excluir";
    deleteButton.onclick = function() {
        table.deleteRow(newLinha.rowIndex);
        arrayAluno.pop(newLinha.rowIndex-1);
    }
    cel5.appendChild(editButton);
    cel6.appendChild(deleteButton);
    
}