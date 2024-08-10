import './App.css';
import './styles.css'
import RootLayout from './RootLayout'
import Home from './components/Home/Home'
import TodoMain from './Pages/TodoPage/TodoMain'
import CountriesPage from './Pages/CountriesPage/CountriesPage'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import NotFound from './components/NotFound/NotFound';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<RootLayout/>}>
          <Route path='home' element={<Home/>}/>
          <Route path='todo' element={<TodoMain/>}/>
          <Route path='countries' element={<CountriesPage/>}/>
        </Route>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
