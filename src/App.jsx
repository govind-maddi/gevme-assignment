import { useState } from 'react'
import './App.css'

function App() {
  
  const [ fname,setFname ] = useState('');
  
  const [ lname,setLname ] = useState('');
  
  const [ email,setEmail ] = useState('');

  const [data,setData ] = useState([]);

  const [ count,setCount ] = useState(0);

  const handleSubmit = () => {
          setData((prevData) => [{name:fname,lname:lname,email:email},...prevData]);
      setCount((prevCount) => prevCount+1);
    }


  return (
    <>
      <div>
        <div>
          <form>
            <input type="text" placeholder='Enter First Name' onChange={(e) => setFname(e.target.value)}/><br/>
            <input type="text" placeholder='Enter Last Name' onChange={(e) => setLname(e.target.value)}/><br/>
            <input type='email' placeholder='Enter email' required onChange={(e) => setEmail(e.target.value)}/><br/>
            <button type='button' onClick={handleSubmit}>Submit</button><br/>     
          </form>
        </div>

        <div>
          <table>
            <tbody>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
            </tr>
            {
              data.map((row) => {
                return <tr>
                  <td>{row.name}</td>
                  <td>{row.lname}</td>
                  <td>{row.email}</td>
                </tr>
              })
            }
            </tbody>
          </table>
        </div>
        <div>
          count is : { count }
        </div>
      </div>
    </>
  )
}

export default App
