let arrayFuncionarios = []

class Funcionario{
    constructor(nome, idade, cargo, salario){
        this.nome= nome;
        this.idade= parseFloat(idade);
        this.cargo= cargo;
        this.salario= parseFloat(salario);
    }

    getFuncionario(){
            return `${this.nome}, ${this.idade}, ${this.cargo}, ${this.salario}`
    }

    setFuncionario(nome, idade, cargo, salario){
            this.nome= nome;
            this.idade= parseFloat(idade);
            this.cargo= cargo;
            this.salario= parseFloat(salario);
    }

    toString(){return `${this.nome}, ${String(this.idade)}, ${this.cargo}, ${String(this.salario)}`}
}

let  getFields = () =>{
    let fields = {
        nome: document.getElementById('nome'),
        idade: document.getElementById('idade'),
        cargo: document.getElementById('cargo'),
        salario: document.getElementById('salario')
    }
    return fields;
}

let clearFields = function (){
    document.getElementById('nome').value = "";
    document.getElementById('idade').value = "";
    document.getElementById('cargo').value = "";
    document.getElementById('salario').value = "";
}

let botaoCadastrar = document.getElementById("botaoCadastrar");
botaoCadastrar.addEventListener("click", () => {
    let fields = getFields();
    let funcionario = new Funcionario(fields.nome.value, fields.idade.value, fields.cargo.value, fields.salario.value);
    arrayFuncionarios.push(funcionario);
    let table = document.getElementById('tableUser');
    let newLinha = table.insertRow();
    let cel1 = newLinha.insertCell(0);
    let cel2 = newLinha.insertCell(1);
    let cel3 = newLinha.insertCell(2);
    let cel4 = newLinha.insertCell(3);
    let cel5 = newLinha.insertCell(4);
    let cel6 = newLinha.insertCell(5);
    cel1.textContent = arrayFuncionarios[newLinha.rowIndex-1].nome;
    cel2.textContent = arrayFuncionarios[newLinha.rowIndex-1].idade;
    cel3.textContent = arrayFuncionarios[newLinha.rowIndex-1].cargo;
    cel4.textContent = arrayFuncionarios[newLinha.rowIndex-1].salario;
    console.log(arrayFuncionarios[newLinha.rowIndex-1].getFuncionario());
    console.log(arrayFuncionarios[newLinha.rowIndex-1].toString());
    clearFields();
    let editButton = document.createElement("button");
    editButton.textContent = "Editar";
    let deleteButton = document.createElement("button");
    deleteButton.textContent = "Excluir";

    editButton.addEventListener("click", () => {
        let fields = getFields();
        fields.nome.value = arrayFuncionarios[newLinha.rowIndex-1].nome;
        fields.idade.value = arrayFuncionarios[newLinha.rowIndex-1].idade;
        fields.cargo.value = arrayFuncionarios[newLinha.rowIndex-1].cargo;
        fields.salario.value = arrayFuncionarios[newLinha.rowIndex-1].salario;
        table.deleteRow(newLinha.rowIndex);
        arrayFuncionarios.pop(newLinha.rowIndex-1);
    })
    deleteButton.addEventListener("click", () => {
        table.deleteRow(newLinha.rowIndex);
        arrayFuncionarios.pop(newLinha.rowIndex-1);
    })

    cel5.appendChild(editButton);
    cel6.appendChild(deleteButton);
})

let buttonBuscarFuncionario = document.getElementById('buttonBuscarFuncionario');
buttonBuscarFuncionario.addEventListener("click", () => {
    let funcionario = arrayFuncionarios.filter(funcionario => funcionario.nome === document.getElementById('buscarFuncionario').value);
    console.log(funcionario);
    if (funcionario.length > 0)
        document.getElementById('textoBuscaFuncionario').textContent = `Dados do funcionário: Nome - ${funcionario[0].nome}, Idade - ${funcionario[0].idade}, 
                                                                        Cargo - ${funcionario[0].cargo} e Salário - ${funcionario[0].salario} reais.`;
    else 
        document.getElementById('textoBuscaFuncionario').textContent = "Funcionário não encontrado.";
})

