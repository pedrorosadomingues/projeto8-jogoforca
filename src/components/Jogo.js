export default function Jogo({ arrayPalavraObj, jogoState, setJogoState ,  forcaState }) {
    function iniciarJogo() {
        setJogoState(true);
    }
    return (
        <div id="jogo">
            <img src={forcaState.imagem} alt="forca"/>
            <button onClick={iniciarJogo}>Escolher Palavra</button>
            <div id="palavra">
                {arrayPalavraObj.map((l, index) => <span key={index} className={jogoState ? null : "hidden"}>{l.acertou ? l.letra : ` _`} </span>)}
            </div>
        </div>
    )
}