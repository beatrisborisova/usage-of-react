import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { Counter } from './components/counter/Counter';
import { Home } from './components/home/Home';
import { Movies } from './components/movies/Movies';
import { Navigation } from './components/navigation/Navigation';
import { NotFound } from './components/not-found/NotFound';
import { Timer } from './components/timer/Timer';
import { loadTodos, Todos } from './components/todos/Todos';

import { createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import { Root } from './components/Root';

function App() {

  const browserRouter = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Root />}>
        <Route index element={<Home />} />
        <Route path='/movies' element={<Movies />} />
        <Route path='/todos' element={<Todos />} loader={loadTodos} errorElement={<p>Error message here</p>} />
        <Route path='*' element={<NotFound />} />
      </Route>
    )
  )

  return (
    <div className="App">
      <RouterProvider router={browserRouter} />
    </div>

    // <BrowserRouter>
    //   <div className="App">
    //     <Navigation />
    //     <Routes>
    //       <Route path='/' element={<Home />} />
    //       <Route path='/movies' element={<Movies />} />
    //       <Route path='*' element={<NotFound />} />
    //     </Routes>
    //     {/* <Timer /> */}
    //     {/* <Counter /> */}
    //     {/* {<Todos />} */}
    //   </div>
    // </BrowserRouter>


  );
}

export default App;


