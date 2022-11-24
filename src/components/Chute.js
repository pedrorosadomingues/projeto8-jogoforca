export default  function Chute({ chuteState, setChuteState , palavra , jogoState , setJogoState , setForcaState}) {
    function handleChuteState(e) {
        setChuteState(e.target.value);
        console.log(chuteState , palavra);
    }

    function chutar() {
        if (jogoState.contadorAcertos === palavra.length || !jogoState.status) return
        if(chuteState === palavra ){
            setJogoState({status:true , contadorAcertos: palavra.length});
        } else {
            setForcaState({imagem:'assets/forcaFinal.svg' , contadorErros:6});
        }

    }
    return (
        <div id="chute">
            <h1>Ja sei a palavra!</h1>
            <input type="text" name="chute" onChange={(e)=> handleChuteState(e) } />
            <button onClick={chutar}>Chutar</button>
        </div>
    )
}