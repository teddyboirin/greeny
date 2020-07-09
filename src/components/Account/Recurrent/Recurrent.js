import React , {useState, useEffect} from "react";
import './recurrent.scss';
import Defi from "../../global/Defi/Defi";
import DefiDescription from "../../global/DefiDescription/DefiDescription";
const axios = require('axios');

function Reccurent(){
const [recurrence, setReccurence] = useState([]);

  useEffect(() => {
    getReccurrence()
  }, [])
  const getReccurrence = () => {
    const token = localStorage.getItem("token");
    axios.get(`http://127.0.0.1:8000/api/users/${localStorage.getItem('id')}/defis?recurrence=1`, {
      headers: {
        Authorization: `Bearer ${token}`,
      }
    })
    .then(function (response) {
      setReccurence(response.data["hydra:member"]);
      console.log(recurrence)
    })
    .catch(function (error) {
      console.log(error);
    })
  }
    


  return(
    <div>
      <div className="recurrence">
        {
          recurrence.map((recurrent, i) => {
            return <a key={i} href={"/item/" + recurrent.id}><Defi points={recurrent.points} defi={recurrent.name}/></a>
          })
        }
      </div>
    </div>
  )
}

export default Reccurent;