export default function Jogo({ arrayPalavra, jogoState, setJogoState }) {
    function iniciarJogo() {
        setJogoState(true);
    }
    return (
        <div id="jogo">
            <img src='assets/forca.svg' alt="forca" />
            <button onClick={iniciarJogo}>Escolher Palavra</button>
            <div id="palavra">
                {arrayPalavra.map((l, index) => <span key={index} className={jogoState ? null : "hidden"}>{l.acertou ? l.letra : ` _`} </span>)}
            </div>
        </div>
    )
}