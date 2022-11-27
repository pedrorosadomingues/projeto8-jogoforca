import palavra from '../utils/palavras'; // importa palavra ja sorteada
const arrayLetras = palavra.split(''); //transforma a palavra sorteada em um array de strings para ser manipulado com metodos de array
const arrayPalavraObj = []; //array que recebera os objetos com as letras da palavra sorteada e o estado de acerto  { letra: , acerto: false }
arrayLetras.forEach((i) => arrayPalavraObj.push({ letra: i, acertou: false , contadorAcertos:0})); //cria um objeto { letra: , acerto: false} para cada letra da palavra sorteada e adiciona ao array de objetos.

export default function Jogo({ palavraState, jogoState, setJogoState,setForcaState, setChuteState,setPalavraState, forcaState, palavra }) {
    function iniciarJogo() {
        if ( jogoState.contadorAcertos === palavra.length ) {
            setJogoState({status:false , contadorAcertos:0});
            setForcaState({imagem:'assets/forca.svg' , contadorErros:0});
            setChuteState('');
            setPalavraState(arrayPalavraObj);
        }
        setJogoState({status:true , contadorAcertos:0});
    }
    return (
        <div id="jogo">
            <img src={forcaState.imagem} alt="forca" data-test="game-image" />
            <button onClick={iniciarJogo} data-test="choose-word">Escolher Palavra</button>
            <div id="palavra" data-test="word" data-answer={palavra} className={forcaState.contadorErros === 6 ? "vermelho" : jogoState.contadorAcertos === palavra.length ? "verde" : null}>
                {palavraState.map((l, index) => l.letra  ? <span
                    key={index}
                    className={jogoState.status ? null : "hidden"}>
                    {l.acertou || forcaState.contadorErros === 6 || jogoState.contadorAcertos === palavraState.length ? ' ' + l.letra : ` _`}
                </span> : "")}
            </div>
        </div>
    )
}