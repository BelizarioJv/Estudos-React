import ItemsTable from "../../components/itemsTable";

export default function ListItems() {
  return (
    <section className="allItems">
      <h1>Todos os items do estoque</h1>
      <ItemsTable></ItemsTable>
    </section>
  );
}
