import PropTypes from 'prop-types';

// Componente para exibir um jogo
Game.propTypes = {
  title: PropTypes.string.isRequired,
  cover: PropTypes.string.isRequired,
  onRemove: PropTypes.func.isRequired,
};

export default function Game({ title, cover, onRemove }) {
  return (
    <div key={game.id}>
      <img src={game.cover} alt="Capa do jogo" />
      <div>
        <h2>{game.title}</h2>
        <button onClick={() => removeGame(game.id)}>Remover</button>
      </div>
    </div>
  );
}

