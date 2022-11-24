import { useState } from "react";



const alfabeto = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split(''); //array com todas as letras do alfabeto
const arrayAlfabetoObj = []; //array que recebe os objetos com as letras e o estado de selecionado { letra: , selecionado: false} //
alfabeto.forEach((i) => arrayAlfabetoObj.push({ letra: i, selecionada: false })); //cria um objeto para cada letra e adiciona ao array de objetos{ letra: , selecionado: false}

const arrayImagens = [
    'assets/forca.svg',
    'assets/forcaI.png',
    'assets/forcaII.png',
    'assets/forcaIII.png',
    'assets/forcaIV.png',
    'assets/forcaV.png',
    'assets/forcaFinal.svg'] //array com as imagens da forca

export default function Letras({ arrayLetras, setPalavraState, jogoState, arrayPalavraObj, setForcaState, forcaState }) {
    const [alfabetoState, setAlfabetoState] = useState(arrayAlfabetoObj); // estado com o alfabeto em forma de array com objetos { letra: , selecionado: false } 



    function encontraLetra(letra , selecionada) {
        const indexRepetidos = [] //array que recebe os indices das letras repetidas na palavra sorteada

        if (!jogoState || selecionada) return; //se o jogo nao tiver iniciado nao faz nada
        arrayLetras.forEach((i, index) => {
            if (i === letra.toLowerCase()) {
                indexRepetidos.push(index)
            } else {
                setForcaState({imagem:arrayImagens[forcaState.contadorErros + 1] , contadorErros: forcaState.contadorErros + 1})//se a letra nao estiver na palavra sorteada incrementa o contador de erros e altera a imagem da forca
            }
        })

        indexRepetidos.forEach((i) => {
            setPalavraState([...arrayPalavraObj, arrayPalavraObj[i].acertou = true])
        })


        const indexLetra = alfabeto.indexOf(letra); //encontra o indice da letra no array alfabeto para aplicar o estilo selecionado no botao
        if (indexLetra !== -1) {
            setAlfabetoState([...arrayAlfabetoObj, arrayAlfabetoObj[indexLetra].selecionada = true])
        }
    }

    return (
        <div id="teclado">
            {alfabetoState.map((l) => l.letra !== undefined ? //condicao para prevenir renderizacao de um botao a mais //
                <button
                    onClick={() => encontraLetra(l.letra , l.selecionada)}
                    className={!jogoState || l.selecionada // jogo nao iniciado ou o botao  selecionado //
                        ? "botao-selecionado" : "botao-nao-selecionado"}
                    key={l.letra}
                >{l.letra}</button> : null)
            }
        </div>
    )
}
