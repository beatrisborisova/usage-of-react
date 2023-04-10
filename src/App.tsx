import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { Counter } from './components/counter/Counter';
import { Home } from './components/home/Home';
import { Movies } from './components/movies/Movies';
import { Navigation } from './components/navigation/Navigation';
import { NotFound } from './components/not-found/NotFound';
import { Timer } from './components/timer/Timer';
import { Todos } from './components/todos/Todos';

import { createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import { Root } from './components/Root';
import { Login } from './components/login/Login';
import { Register } from './components/register/Register';
import { MovieDetails } from './components/movie-details/MovieDetails';

function App() {

  // const browserRouter = createBrowserRouter(
  //   createRoutesFromElements(
  //     <Route path='/' element={<Root />}>
  //       <Route index element={<Home />} />
  //       <Route path='/movies' element={<Movies />} />
  //       <Route path='/todos' element={<Todos />} loader={loadTodos} errorElement={<p>Error message here</p>} />
  //      <Route path='/login' element={<Login/>}/>
  //       <Route path='*' element={<NotFound />} />
  //     </Route>
  //   )
  // )

  const browserRouter = createBrowserRouter([
    {
      path: '/', element: < Root />, children: [
        { index: true, element: <Home /> },
        { path: '/movies', element: <Movies /> },
        { path: '/movies/:id', element: <MovieDetails /> },
        { path: '/todos', element: <Todos /> },
        { path: '/login', element: <Login /> },
        { path: '/register', element: <Register /> },
        { path: '*', element: <NotFound /> }
      ]
    }
  ])


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


