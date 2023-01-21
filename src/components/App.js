import React from "react";
import './App.css'
import NavBar from "./NavBar";
import GiftListContainer from "./GifListContainer";
// the App component should render out the GifListContainer component

const App = () => {
  const[searchTerm, setSearchTerm] = useState("");
  const handleInputChange = (e) => {}
  setSearchTerm(e.target.value);
  };
  
  const filteredList = list.filter((list) => {
  return list.name.includes(searchTerm);
  });
  return (
  <section>
  <search name = "search" onSearch={handleInputChange} value={searchTerm}/>
  <Lists lists ={filteredList} />
  </section>
  
function App() {
  return (
    <div>
      <NavBar color="black" title="Giphy Search" />
      <section>
<search name = "search" onSearch={handleInputChange} value={searchTerm}/>
<Lists lists ={filteredList} />
</section>

    </div>

 );
  }



export default App;
