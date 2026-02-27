import products from "../database.json";

//funçao para pegar os dados na banco de dados e retorna o objeto para exportar para a rota
//verificando se tem o produto e manipulando caso nao encontrado

export function loadProduct({ params }) {
  const product = products.find((p) => p.id === +params.productId);

  if (!product) {
    throw new Response("404 Not found", { status: 404 });
  }
  return product;
}
