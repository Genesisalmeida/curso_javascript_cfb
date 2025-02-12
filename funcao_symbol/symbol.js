    // const id = Symbol() // tornando id restrito com o symbol

    // const pessoa = {

    //     nome:'binho',
    //     idade:18,
    //     [id]:5859 //aplicando symbol com'[]' para deixar id restrito
    // }
    // console.log(pessoa[id])

    // class Jogador{
    //     constructor(nome){
    //         this.nome=nome
    //         this.id = Symbol()
    //     }
      
    // }

    // let jogadores = [new Jogador('j1'),new Jogador('j2'),new Jogador('j3'),new Jogador('j4')];

    // let jo = jogadores[2].id

    // let j = jogadores.filter((n)=>{
    //     return n.id!=jo
    // })

    // console.log(j)


    // aula 2 symbol//

    let nome =Symbol('idade')
    let id_ = Symbol()
    let idade = Symbol()

    let aluno = {
        [nome]:'binho',
        [id_]:120,
        [idade]:28
    }

    console.log(aluno[nome])