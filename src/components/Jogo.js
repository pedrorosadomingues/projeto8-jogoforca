export default function Jogo({ palavraState, jogoState, setJogoState, forcaState }) {
    function iniciarJogo() {
        setJogoState({...jogoState , status:true});
    }
    return (
        <div id="jogo">
            <img src={forcaState.imagem} alt="forca" />
            <button onClick={iniciarJogo}>Escolher Palavra</button>
            <div id="palavra" className={forcaState.contadorErros === 6 ? "vermelho" : jogoState.contadorAcertos === palavraState.length ? "verde" : null}>
                {palavraState.map((l, index) => l.letra  ? <span
                    key={index}
                    className={jogoState.status ? null : "hidden"}>
                    {l.acertou || forcaState.contadorErros === 6 || jogoState.contadorAcertos === palavraState.length ? ' ' + l.letra : ` _`}
                </span> : "")}
            </div>
        </div>
    )
}