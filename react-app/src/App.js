import './App.css';
import Navbar from "./components/Navbar/Navbar"
import Searchbar from './components/Searchbar/Searchbar';
import Home from './components/Home/Home';
import Country from './components/Country/Country';
import { RouterProvider, createBrowserRouter } from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <>
      <Navbar />
      {/* <Searchbar /> */}
      <Home />
    </>
  },
  {
    path: "/country",
    element: <>
      <Navbar />
      <Country />
    </>
  }
])

function App() {
  return (
    <RouterProvider router = {router}></RouterProvider>
  );
}

export default App;
