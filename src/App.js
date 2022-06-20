import './App.css';
import { useState } from 'react'

// note that input elements in React have to be self closing tags


function App() {

  const [contactInfo, setContactInfo] = useState({
    email: "",
    name: "",
    address: "",
  })

  const handleChange = (event) => {
    setContactInfo({ ...contactInfo, [event.target.name]: event.target.value })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log({ ...contactInfo})
  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>

        <div className="fieldWrapper">
          <label htmlFor="email">email:</label>
          <input autoComplete="off" type="text" name="email" value={contactInfo.email} onChange={handleChange}/>
        </div>
        <div className="fieldWrapper">
          <label htmlFor="name">name:</label>
          <input autoComplete="off" type="text" name="name" value={contactInfo.name} onChange={handleChange}/>
        </div>
        <div className="fieldWrapper">
          <label htmlFor="address:">address:</label>
          <input autoComplete="off" type="text" name="address" value={contactInfo.address} onChange={handleChange}/>
        </div>

        {/* <div className="fieldWrapper"> */}
        {/*   <label htmlFor="country">country:</label> */}
        {/*   <select autoComplete="off" id="country" name="country"> */}
        {/*     <option value="Australia">Australia</option> */}
        {/*     <option value="Japan">Japan</option> */}
        {/*     <option value="England">England</option> */}
        {/*   </select> */}
        {/* </div> */}

        <input type="submit" value="submit form"/>

      </form>

      <div className="output">
        <div>{contactInfo.email}</div>
        <div>{contactInfo.name}</div>
        <div>{contactInfo.address}</div>
        {/* <div>{country}</div> */}
      </div>
    </div>
  );
}

export default App;
