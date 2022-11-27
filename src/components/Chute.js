export default  function Chute({ chuteState, setChuteState , palavra , jogoState , setJogoState , setForcaState}) {
    function chutar() {
        if (jogoState.contadorAcertos === palavra.length || !jogoState.status) return
        if(chuteState === palavra ){
            setJogoState({status:true , contadorAcertos: palavra.length});
        } else {
            setForcaState({imagem:'assets/forcaFinal.svg' , contadorErros:6});
        }
        setChuteState('');
    }
    return (
        <div id="chute">
            <h1>Ja sei a palavra!</h1>
            <input 
            type="text" 
            name="chute" 
            onChange={(e)=> setChuteState(e.target.value)}
            value={chuteState}
            data-test="guess-input" 
            />
            <button onClick={chutar} data-test="guess-button">Chutar</button>
        </div>
    )
}