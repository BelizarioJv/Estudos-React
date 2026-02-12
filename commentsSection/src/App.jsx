import { useState } from "react";
import "./App.css";

function App() {
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");
  const [comments, setComments] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newComment = {
      id: Math.floor(Math.random() * 1000000), // Gerando um ID único para o comentário
      author: author,
      content: content,
      date: new Date().toLocaleString(),
    };

    setComments((state) => [newComment, ...state]); // Adicionando o novo comentário à lista de comentários e consestindo o estado anterior
    setAuthor("");
    setContent("");
  };

  return (
    <>
      <div className="app">
        <h1>Seção de Comentários</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="author">Email:</label>
          <input
            type="email"
            id="author"
            required
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />

          <label htmlFor="content">Comentario :</label>
          <textarea
            id="content"
            cols="30"
            rows="5"
            value={content}
            onChange={(e) => setContent(e.target.value)}></textarea>
          <button type="submit">Enviar comentario</button>
        </form>
        <hr />

        <section id="comments">
          {comments.length > 0 ? (
            comments.map((comment) => (
              <div key={comment.id}>
                <h3>{comment.author}</h3>
                <span>Em {comment.date}</span>
                <p>{comment.content}</p>
              </div>
            ))
          ) : (
            <p style={{ margin: "4rem auto" }}>Nenhum comentário ainda.</p>
          )}
        </section>
      </div>
    </>
  );
}

export default App;
