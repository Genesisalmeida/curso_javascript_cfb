class Pessoa{
    constructor(nome,idade){
        this.nome = nome;
        this.idade = idade;
    };
    getNome(){

    };
    setIdade(){

    };
};


let but = document.querySelector('.add');
let res = document.querySelector('.resNone');
let input2 =document.querySelector('#inp2');
const pessoas = [];


const addPessoas=()=>{
    res.innerHTML=''
    res.classList.add('res')
    pessoas.map((ele)=>{
        const div = document.createElement('div');
        div.setAttribute('class','set');
        res.appendChild(div);
        div.innerHTML = `Nome:${ele.nome}<BR/>Idade:${ele.idade}`;
     
     })
    
}

but.addEventListener('click', ()=>{
    let nome = document.querySelector('#inp1');
    let idade = Number((document.querySelector('#inp2').value));
    if(!isNaN(idade)&& !input2.value==""){
       
    }else{
        alert('Digite um  valor válido no campo Idade');;
    }

    let p1 = new Pessoa(nome.value,idade);
    pessoas.push(p1);
    nome.value="";
    input2.value="";
    addPessoas();
    
    
})
