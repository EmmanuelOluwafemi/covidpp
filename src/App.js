import {useState, useEffect} from 'react';
import CardContainer from './components/CardContainer';
import TableData from './components/TableData';
import Header from './components/Header';
import Loading from './components/Loading';

import './App.css';

function App() {
  const [state, setState] = useState([])
  const [loading, setLoading] = useState(false)

  const fetchData = async (link) => {
    setLoading(true);
    const resp = await fetch(link);
    const data = await resp.json();
    setState(data.data);
    setLoading(false);
  }

  useEffect(() => {
    fetchData('https://covidnigeria.herokuapp.com/api')
  }, [])

  const {death, discharged, states, totalActiveCases, totalConfirmedCases, totalSamplesTested} = state;

  return (
    <div className="App">
      {loading 
      && 
        <Loading />
      }
      
      <Header />

      <CardContainer 
        death={death} 
        discharged={discharged} 
        totalActiveCases={totalActiveCases} 
        totalConfirmedCases={totalConfirmedCases} 
        totalSamplesTested={totalSamplesTested} 
      />

      {states && 
        <TableData states={states} />
      }
      
    </div>
  );
}

export default App;
