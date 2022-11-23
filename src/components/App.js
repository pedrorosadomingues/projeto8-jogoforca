import Jogo from './Jogo';
import Letras from './Letras';
import Chute from './Chute';
import palavras from '../utils/palavras';
import { useState } from 'react';

const arrayPalavras = palavras;
const palavra = arrayPalavras[Math.floor(Math.random() * arrayPalavras.length)];
const arrayLetras = palavra.split('');
const arrayPalavra = [];
const alfabeto = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
const arrayLetra = [];

alfabeto.forEach((i) => arrayLetra.push({ letra: i, selecionada: false }));
arrayLetras.forEach((i) => arrayPalavra.push({ letra: i, acertou: false }));

console.log(arrayPalavra)

export default function App() {
  const [palavraState, setPalavraState] = useState(arrayPalavra);
  const [jogoState, setJogoState] = useState(false);
  const [alfabetoState, setAlfabetoState] = useState(arrayLetra);

  return (
    <div className="App">
      <Jogo 
      arrayPalavra={arrayPalavra} 
      jogoState={jogoState}
      setJogoState={setJogoState}
      />
      <Letras
        palavra={arrayLetras}
        arrayPalavra={palavraState}
        setPalavraState={setPalavraState}
        jogoState={jogoState}
        alfabetoState={alfabetoState}
        setAlfabetoState={setAlfabetoState}
        />
      <Chute />
    </div>
  );
}

