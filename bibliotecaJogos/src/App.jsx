// importandi  o o useState do React
import { useState } from "react";
import Game from "./components/Game";

//funçao componente do React que representa a aplicação
function App() {
  const { games, addGame, removeGame } = UseGameCollection(); // usando o hook personalizado para gerenciar a coleção de jogos
  return (
    <div className="app">
      <h1>Biblioteca de Jogos</h1>
      <NewGameForm addGame={addGame} />
      <div className="games">
        {games.length > 0 ? ( // verificando se há jogos na coleção para renderizar a lista ou uma mensagem de vazio
          games.map((game) => (
            <Game
              key={game.id}
              title={game.title}
              cover={game.cover}
              onRemove={() => removeGame(game.id)}
          /> // passando a função de remoção como prop para o componente Game
        ))) : (
          <p style={{margin : "4ren auto"}}>Nenhum jogo adicionado ainda.</p>
        )}
      </div>
    </div>
  );
}

export default App;
