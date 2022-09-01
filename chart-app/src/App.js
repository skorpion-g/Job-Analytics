import './App.css';
import LineChart from './components/LineChart';
import Summaries from './components/Summaries';
import Table from './components/Table';
import DataTable from './components/DataTable';

const App = () => {
  return (
    <div>
      <h1>Occupation Overview</h1>
      <Summaries />
      <LineChart />
      <Table />
      <DataTable />
    </div>
  )
}

export default App;
