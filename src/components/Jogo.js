export default function Jogo({ arrayPalavraObj, jogoState, setJogoState, forcaState }) {
    function iniciarJogo() {
        setJogoState({...jogoState , status:true});
    }
    return (
        <div id="jogo">
            <img src={forcaState.imagem} alt="forca" />
            <button onClick={iniciarJogo}>Escolher Palavra</button>
            <div id="palavra" className={forcaState.contadorErros === 6 ? "vermelho" : jogoState.contadorAcertos === arrayPalavraObj.length ? "verde" : null}>
                {arrayPalavraObj.map((l, index) => <span
                    key={index}
                    className={jogoState.status ? null : "hidden"}>
                    {l.acertou || forcaState.contadorErros === 6 || jogoState.contadorAcertos === arrayPalavraObj.length ? l.letra : ` _`}
                </span>)}
            </div>
        </div>
    )
}