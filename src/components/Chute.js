export default  function Chute({ chuteState,forcaState, setChuteState , palavra , jogoState , setJogoState , setForcaState}) {
    function chutar() {
        if (jogoState.contadorAcertos === palavra.length || !jogoState.status || forcaState.contadorErros === 6) return
        if(chuteState === palavra ){
            setJogoState({status:true , contadorAcertos: palavra.length});
        } else {
            setForcaState({imagem:'assets/forcaFinal.svg' , contadorErros:6});
        }
        setChuteState('');
    }
    function handleChuteState(e) {
        if (!jogoState.status || forcaState.contadorErros === 6) return
        setChuteState(e.target.value);
    }
    return (
        <div id="chute">
            <h1>Ja sei a palavra!</h1>
            <input 
            type="text" 
            name="chute" 
            onChange={(e)=> handleChuteState(e)}
            value={chuteState}
            data-test="guess-input" 
            />
            <button onClick={chutar} data-test="guess-button">Chutar</button>
        </div>
    )
}