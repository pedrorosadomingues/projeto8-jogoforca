export default function Jogo({ palavraState, jogoState, setJogoState, forcaState, palavra }) {
    function iniciarJogo() {
        setJogoState({...jogoState , status:true});
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