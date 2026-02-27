import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import Error from "../components/Error";

//tratamento de erros dos produtos

export function ProductBoundary() {
  const error = useRouteError();

  if (isRouteErrorResponse(error)) {
    switch (error.status) {
      case 404:
        return <Error errorMessage={"Oops... Produto não encontrado =("} />;
      case 401:
        return (
          <Error errorMensage={"Você não está autorizado a ver essa página."} />
        );
      case 400:
        return (
          <Error errorMensage={"Parece que algo deu errado na requisição."} />
        );
      case 500:
        return <Error errorMensage={"Erro interno no servidor."} />;
    }
  }

  return <h2>Algo deu errado.</h2>;
}
