import palavras from '../utils/palavras'; // importa array com todas as palavras

export default function Jogo({setArrayLetrasState, palavraState, jogoState, setJogoState,setForcaState, setChuteState,setPalavraState, forcaState, palavra, setAlfabetoState }) {
    function iniciarJogo() {
       
        const alfabeto = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split(''); //array com todas as letras do alfabeto
        const arrayAlfabetoObj = []; //array que recebe os objetos com as letras e o estado de selecionado { letra: , selecionado: false} //
        alfabeto.forEach((i) => arrayAlfabetoObj.push({ letra: i, selecionada: false }))
        if ( jogoState.contadorAcertos === palavra.length ) {
            const palavraNova = palavras[Math.floor(Math.random() * palavras.length)];
            const arrayLetras = palavraNova.split(''); //transforma a palavra sorteada em um array de strings para ser manipulado com metodos de array
        const arrayPalavraObj = []; //array que recebera os objetos com as letras da palavra sorteada e o estado de acerto  { letra: , acerto: false }
        arrayLetras.forEach((i) => arrayPalavraObj.push({ letra: i, acertou: false , contadorAcertos:0})); //cria um objeto { letra: , acerto: false} para cada letra da palavra sorteada e adiciona ao array de objetos.
        console.log(arrayAlfabetoObj)

            setPalavraState(arrayPalavraObj);
            setJogoState({status:false , contadorAcertos:0});
            setForcaState({imagem:'assets/forca.svg' , contadorErros:0});
            setChuteState('');
            setAlfabetoState(arrayAlfabetoObj);
            setArrayLetrasState(arrayLetras);
            
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