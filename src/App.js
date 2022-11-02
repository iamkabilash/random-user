import { renderIntoDocument } from 'react-dom/test-utils';
import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Card from './Card';

const App = () =>{

  const [data, setData] = useState();

  const fetchData = async() =>{
    const response = await axios.get("https://randomuser.me/api/");
    setData(response.data.results[0]);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return(
    data && <Card data={data} />
  );
}

export default App;
