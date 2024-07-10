import { Provider } from 'react-redux';
import Body from './components/Body';
import appStore from './utils/appStore';
import Login from './components/Login';
import Browse from './components/Browse';
import {createBrowserRouter , Outlet, RouterProvider } from 'react-router-dom';
import Error from './components/Error';

function App() {
  const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <Body/>
    },
    {
        path: "/login",
        element: <Login/>
    },
    {
        path: "/browser",
        element: <Browse/>
    },
    {
      path: "/error",
      element: <Error/>
  }
]);

  return (
    <Provider store={appStore}>
      <RouterProvider router={appRouter}>
        <Body />
      </RouterProvider>
    </Provider>
  );
}

export default App;
