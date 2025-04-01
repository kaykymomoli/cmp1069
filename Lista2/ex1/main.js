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
    cel1.textContent = arrayFuncionarios[newLinha.rowIndex-1].nome;
    cel2.textContent = arrayFuncionarios[newLinha.rowIndex-1].idade;
    cel3.textContent = arrayFuncionarios[newLinha.rowIndex-1].cargo;
    cel4.textContent = arrayFuncionarios[newLinha.rowIndex-1].salario;
    console.log(arrayFuncionarios[newLinha.rowIndex-1].getFuncionario());
    console.log(arrayFuncionarios[newLinha.rowIndex-1].toString());

})