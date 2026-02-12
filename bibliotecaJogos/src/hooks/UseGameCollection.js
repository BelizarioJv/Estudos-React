export default function UseGameCollection() {
  //estado para armazenar a lista de jogos, inicializado com os dados do localStorage ou um array vazio
  const [games, setGames] = useState(() => {
    const storedGames = localStorage.getItem("obc-game-lib");
    if (!storedGames) return [];
    return JSON.parse(storedGames);
  });

  //função para adicionar um jogo à biblioteca, gerando um ID aleatório e atualizando o estado e o localStorage
  const addGame = ({ title, cover }) => {
    const id = Math.floor(Math.random() * 1000000);
    const game = { id, title, cover };
    setGames((state) => {
      const newState = [...state, game];
      localStorage.setItem("obc-game-lib", JSON.stringify(newState));
      return newState;
    });
  };

  //função para remover um jogo da biblioteca, filtrando o jogo pelo ID e atualizando o estado e o localStorage
  const removeGame = (id) => {
    setGames((state) => {
      const newState = state.filter((game) => game.id !== id);
      localStorage.setItem("obc-game-lib", JSON.stringify(newState));
      return newState;
    });
  };
  return { games, addGame, removeGame };
}
