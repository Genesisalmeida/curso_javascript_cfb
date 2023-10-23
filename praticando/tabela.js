
let n1 = document.getElementsByClassName('nota');
let n2 = document.getElementsByClassName('medianum')
let media = 0;
    for(let i in n1){
        let n = parseFloat(n1[i].innerText);
        if(!isNaN(n)){
           media += n ; 
        }
     }

