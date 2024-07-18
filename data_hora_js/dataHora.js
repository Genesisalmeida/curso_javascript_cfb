// data e hora

const date = document.querySelector('.date')
let data = new Date()


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
const tempo = document.querySelector('.relogio')
tempo.innerHTML =`${relogio.getHours()}:${relogio.getMinutes()}:${relogio.getSeconds()}`

setTimeout('time()',500)
}



