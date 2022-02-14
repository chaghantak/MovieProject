import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'
import Home from './routes/Home'
import Detail from './routes/Detail'
import Chart from './routes/Chart'
function App() {
  return(
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        
        <Route path="/" element={< Home />}/>
        <Route path="/movie/:id" element={< Detail />}/>
        <Route path="/chart" element={<Chart/>}/>
      </Routes>
    </BrowserRouter>
    )
}

export default App;