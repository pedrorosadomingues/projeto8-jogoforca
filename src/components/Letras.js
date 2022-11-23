import { useState } from "react";



export default function Letras({ palavra, arrayPalavra, setPalavraState, jogoState , alfabetoState , setAlfabetoState}) {
    function encontraLetra(letra) {
        const indexRepetidos = []
        const indexLetra = alfabetoState.indexOf(letra);
        const arrayLetra = alfabetoState;

        palavra.forEach((i, index) => {
            if (i === letra.toLowerCase()) {
                indexRepetidos.push(index)
            }
        })

        indexRepetidos.forEach((i) => {

            setPalavraState([...arrayPalavra, arrayPalavra[i].acertou = true])
        })
        console.log(alfabetoState)

        setAlfabetoState([...arrayLetra, alfabetoState[indexLetra].selecionada = true])
    }

    return (
        <div id="teclado">
            {alfabetoState.map((l) => <button
                onClick={() => encontraLetra(l.letra)}
                className={jogoState || !l.selecionada ? "botao-nao-selecionado" : "botao-selecionado"}
                key={l.letra}
            >{l.letra}</button>)}
        </div>
    )
}
