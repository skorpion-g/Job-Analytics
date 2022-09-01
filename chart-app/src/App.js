import './App.css';
import LineChart from './components/LineChart';
import Summaries from './components/Summaries';

const App = () => {
  return (
    <div>
      <h1>Occupation Overview</h1>
      <Summaries />
      <LineChart />
    </div>
  )
}

export default App;
