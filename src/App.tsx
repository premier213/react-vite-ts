import "./App.css";
import AddUser from "./components/new/addButton";
import Cards from "./components/list/cards";
import Search from "./components/ui/search";
import Button from "./components/ui/button";

function App() {
  return (
    <div className="flex flex-col mx-auto justify-center bg-slate-100 w-1/4 my-12">
      <Search />
      <Cards />
      <AddUser />
    </div>
  );
}

export default App;
