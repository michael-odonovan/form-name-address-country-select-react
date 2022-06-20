import './App.css';

// note that input elements in React have to be self closing tags

function App() {
  return (
    <div className="App">
      <form>
        <div>
          <label htmlFor="email">email:</label>
          <input type="text"/>
        </div>
        <div>
          <label htmlFor="name">name:</label>
          <input type="text"/>
        </div>
        <div>
          <label htmlFor="address:">address:</label>
          <input type="text"/>
        </div>

        <div>
          <label htmlFor="country">country:</label>
          <select id="country" name="country">
            <option value="Australia">Australia</option>
            <option value="Japan">Japan</option>
            <option value="England">England</option>
          </select>
        </div>

        <input type="submit" value="submit form"/>
      </form>
    </div>
  );
}

export default App;
