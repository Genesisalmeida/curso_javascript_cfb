// data e hora

const date = document.querySelector('.date')
const horaAlarme = document.querySelector('.hora_alarme')
const btn_parar = document.querySelector('#B_parar')
const btn_ativar = document.querySelector('#B_ativar')
const temp_alarme= document.querySelector('#tmp_alar')
const box_time = document.querySelector('.box_time')
let data = new Date()
const som = new Audio("som/alarm-26718.mp3")

console.log(som)
som.loop = -1

let ts_atual = null
let ts_alarme = null
let alarme_ativado = false
let alarme_desativado = false
let alarme_tocando = false


const data_r = data.getDate()+'/'+ data.getMonth()+'/'+data.getFullYear()

date.innerHTML=data_r
date.style.color='red'

// Métodos para obtenção de informações
// getDate(): Retorna o dia do mês (1-31).
// getDay(): Retorna o dia da semana (0-6, onde 0 é domingo e 6 é sábado).
// getMonth(): Retorna o mês (0-11, onde 0 é janeiro e 11 é dezembro).
// getFullYear(): Retorna o ano completo.
// getHours(): Retorna a hora (0-23).
// getMinutes(): Retorna os minutos (0-59).
// getSeconds(): Retorna os segundos (0-59).
// getMilliseconds(): Retorna os milissegundos (0-999).
// getTime(): Retorna o valor numérico da data em milissegundos desde 1 de janeiro de 1970 00:00:00 UTC.

// Métodos para definir informações//

// setDate(dia): Define o dia do mês.
// setMonth(mes): Define o mês (0-11).
// setFullYear(ano): Define o ano.
// setHours(horas): Define a hora (0-23).
// setMinutes(minutos): Define os minutos (0-59).
// setSeconds(segundos): Define os segundos (0-59).
// setMilliseconds(milissegundos): Define os milissegundos (0-999).
// setTime(tempoMillis): Define a data com base no valor numérico em milissegundos desde 1 de janeiro de 1970 00:00:00 UTC.

// Outros métodos úteis

// toDateString(): Retorna a parte da data em formato legível (sem a hora).
// toTimeString(): Retorna a parte da hora em formato legível (sem a data).
// toISOString(): Retorna a data no formato ISO 8601.




function time(){
    let relogio = new Date()
    let hora = relogio.getHours()
    let minutos = relogio.getMinutes()
    let segundos = relogio.getSeconds()
    const tempo = document.querySelector('.relogio')
    tempo.innerHTML =`${hora=hora<10?"0"+hora:hora}:${minutos=minutos<10?"0" + minutos:minutos}:${segundos=segundos<10?"0"+segundos:segundos}`
    if(alarme_ativado && !alarme_tocando){
        if(relogio.getTime() >= ts_alarme){
            alarme_tocando = true
            som.play()
            box_time.classList.add('alarme')
        }
    }
    setTimeout(time,500)
}
time();

btn_ativar.addEventListener('click',()=>{
    
    ts_atual=Date.now()
    ts_alarme=ts_atual+(temp_alarme.value*1000)
    alarme_ativado=true
    const dt_alarme = new Date(ts_alarme)
    horaAlarme.innerHTML = 'hora do alarme:'+ dt_alarme.getHours()+':'+dt_alarme.getMinutes()+':'+dt_alarme.getSeconds()
})
btn_parar.addEventListener('click',()=>{
  alarme_ativado = false
  alarme_desativado = false
  horaAlarme.innerHTML='Hora do alarme:'
  temp_alarme.value = 0
  box_time.classList.remove('alarme')
  som.pause()
  som.correntTime = 0;
  time();
  function reloadPage() {
    location.reload();
}
reloadPage()
})
// Criando  time com  alarme //



    




