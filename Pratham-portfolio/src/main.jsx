import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider, createRoutesFromElements, Route } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Home from './componenets/Home.jsx'
import Projects from './componenets/Projects.jsx'
import Algorithms from './componenets/Algorithms.jsx'
import About from './componenets/About.jsx'

const routeDefinitions = createRoutesFromElements(
  <Route path="/" element={<App />}>
    <Route index element={<Home />}/>
    <Route path="/home" element={<Home />} />
    <Route path="/projects" element={<Projects />} />
    <Route path="/algorithms" element={<Algorithms />} />    
    <Route path="/about" element={<About />} />    
  </Route>
);

const appRouter = createBrowserRouter(routeDefinitions);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={appRouter} />
  </StrictMode>,
);
