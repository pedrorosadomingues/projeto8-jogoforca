
const alfabeto = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split(''); //array com todas as letras do alfabeto
const arrayAlfabetoObj = []; //array que recebe os objetos com as letras e o estado de selecionado { letra: , selecionado: false} //
alfabeto.forEach((i) => i !== undefined ? arrayAlfabetoObj.push({ letra: i, selecionada: false }): null); //cria um objeto para cada letra e adiciona ao array de objetos{ letra: , selecionado: false}

const arrayImagens = [
    'assets/forca.svg',
    'assets/forcaI.png',
    'assets/forcaII.png',
    'assets/forcaIII.png',
    'assets/forcaIV.png',
    'assets/forcaV.png',
    'assets/forcaFinal.svg'] //array com as imagens da forca

export default function Letras({  arrayLetras, setPalavraState, jogoState, setJogoState, palavraState, setForcaState, forcaState,alfabetoState, setAlfabetoState }) {
    let indexEcontrados = [];//array que recebe os indices das letras repetidas na palavra sorteada
    const acertos = jogoState.contadorAcertos; 
   
    function encontraLetra(letra, selecionada) {
      
       
        
        if (!jogoState.status || selecionada || forcaState.contadorErros === 6 || jogoState.contadorAcertos === arrayLetras.length || jogoState.contadorAcerto === palavraState.length) return; //se o jogo nao tiver iniciado nao faz nada
        arrayLetras.forEach((i, index) => {
            if ( i !== undefined && i === letra.toLowerCase()) {
    
                indexEcontrados.push(index)
            }
            if (!arrayLetras.includes(letra.toLowerCase())) {
                setForcaState({ imagem: arrayImagens[forcaState.contadorErros + 1], contadorErros: forcaState.contadorErros + 1 })//se a letra nao estiver na palavra sorteada incrementa o contador de erros e altera a imagem da forca
            }
        })

        indexEcontrados.forEach((i) => i !== undefined ? setPalavraState([
            ...palavraState,
            palavraState[i].acertou = true,
        ]) : null) //altera o estado da palavra sorteada para mostrar as letras acertadas

        indexEcontrados.forEach((i) => setJogoState({...jogoState, contadorAcertos: acertos + indexEcontrados.length})) //incrementa o contador de acertos
        const indexLetra = alfabeto.indexOf(letra); //encontra o indice da letra no array alfabeto para aplicar o estilo selecionado no botao
        if (indexLetra !== -1 && letra !== undefined ) {
            setAlfabetoState([...arrayAlfabetoObj, arrayAlfabetoObj[indexLetra].selecionada = true])
        }
    }

    return (
        <div id="teclado">
            {alfabetoState.map((l) => l.letra !== undefined ? //condicao para prevenir renderizacao de um botao a mais //
                <button data-test="letter"
                    onClick={() => encontraLetra(l.letra, l.selecionada)}
                    className={!jogoState.status || l.selecionada // jogo nao iniciado ou o botao  selecionado //
                        ? "botao-selecionado" : "botao-nao-selecionado"}
                    key={l.letra}
                >{l.letra}</button> : null)
            }
        </div>
    )
}
