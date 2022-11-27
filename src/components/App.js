import Jogo from './Jogo';
import Letras from './Letras';
import Chute from './Chute';
import palavra from '../utils/palavras'; // importa palavra ja sorteada
import { useState } from 'react';


const arrayLetras = palavra.split(''); //transforma a palavra sorteada em um array de strings para ser manipulado com metodos de array
const arrayPalavraObj = []; //array que recebera os objetos com as letras da palavra sorteada e o estado de acerto  { letra: , acerto: false }
arrayLetras.forEach((i) => arrayPalavraObj.push({ letra: i, acertou: false , contadorAcertos:0})); //cria um objeto { letra: , acerto: false} para cada letra da palavra sorteada e adiciona ao array de objetos.

export default function App() {
  const [palavraState, setPalavraState] = useState(arrayPalavraObj);// estado com a palavra em forma de array com objetos { letra: , acertou: } para componente jogo usar como condição e componente letras manipular
  const [jogoState, setJogoState] = useState({status:false , contadorAcertos:0});// estado que controla inicio do jogo manipulado pelo botao do componente jogo
  const [forcaState, setForcaState] = useState({imagem:'assets/forca.svg' , contadorErros:0});// estado que controla o numero de erros do jogador
  const [chuteState, setChuteState] = useState('');// estado que controla o chute do jogador
  
  return (
    <div className="App">
      <Jogo 
      palavraState={palavraState} //palavra sorteada em forma de array com objetos { letra: , acertou:  } para o componente Jogo usar como condicao na renderizacao da palavra
      jogoState={jogoState} //  estado controlador do inicio do jogo  manipulado pelo botao do componente Jogo
      setJogoState={setJogoState} // funcao que altera estado controlador do inicio do jogo
      forcaState={forcaState} // estado que altera SRC da imagem da forca
      palavra={palavra} // palavra sorteada
      />
      <Letras
        arrayLetras={arrayLetras} // array com as letras da palavra selecionada para componente encontrar indices de letras repetidas
        palavraState={palavraState} // //palavra sorteada em forma de array com objetos { letra: , acertou:  } para o componente Letras manipular o estado da palavra oculta no jogo.
        setPalavraState={setPalavraState} // funcao que altera o estado da palavra oculta no jogo
        jogoState={jogoState}  
        setJogoState={setJogoState} 
        forcaState={forcaState} // estado que altera SRC da imagem da forca
        setForcaState={setForcaState} // funcao que altera estado que altera SRC da imagem da forca
        />
      <Chute
        setChuteState={setChuteState} // funcao que altera estado que controla o chute do jogador
        chuteState={chuteState} // estado que controla o chute do jogador
        palavra={palavra} // palavra sorteada      
        jogoState={jogoState} 
        setJogoState={setJogoState}     
        setForcaState={setForcaState} 
      />
    </div>
  );
}

