import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Body from "./components/Body";
import Cart from "./components/Cart";
import Main from "./components/Main"
import { Provider } from "react-redux";
import appStore from "./utils/appStore";


function App() {
  const AppRouter = createBrowserRouter([
    {
        path: "/",
        element: <Body />,
        children: [
          {
            path: "/",
            element: <Main />,
          },
          {
            path: "/cart",
            element: <Cart />,
          }
        ]
    },
    
  ])
  return (
    <Provider store={appStore}>
      <RouterProvider router={AppRouter} />
    </Provider>
    
  );
}

export default App;
