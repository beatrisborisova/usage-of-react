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
import { AuthContext } from './contexts/authContext';
import { useState } from 'react';
import { Profile } from './components/profile/Profile';
import { configureStore } from '@reduxjs/toolkit';
import authReducer from './redux/auth';
import { Provider } from 'react-redux';

const store = configureStore({
  reducer: {
    auth: authReducer
  }
})

function App() {

  const [hasUser, setHasUser] = useState(false);

  const browserRouter = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Root />}>
        <Route index element={<Home />} />
        <Route path='/movies' element={<Movies />} />
        {/* <Route path='/todos' element={<Todos />} loader={loadTodos} errorElement={<p>Error message here</p>} /> */}
        <Route path='/todos' element={<Todos />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='*' element={<NotFound />} />
      </Route>
    )
  )

  return (
    <Provider store={store}>
      <AuthContext.Provider value={{ hasUser, setHasUser }}>
        <div className="App">
          <RouterProvider router={browserRouter} />
        </div>
      </AuthContext.Provider>
    </Provider>
  );
}

export default App;


