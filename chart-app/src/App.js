import './App.css';
import LineChart from './components/LineChart';
import Summaries from './components/Summaries';
import Table from './components/Table';

const App = () => {
  return (
    <div>
      <h1>Occupation Overview</h1>
      <Summaries />
      <LineChart />
      <Table />
    </div>
  )
}

export default App;
