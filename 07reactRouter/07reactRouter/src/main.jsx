import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router';
import Layout from './components/Layout.jsx';
import Home from './components/Home.jsx';
import About from './components/About.jsx';
import Contact from './components/Contact';
import Github, { githubInfoLoader } from './components/Github';
import User from './components/User.jsx';


// create router

// first method
// const router = createBrowserRouter([
//   {
//     path: '/'
//   }
// ])

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout />,
//     children : [
//       {
//         path: "",
//         element: <Home />
//       },      // or nested routes bna skte hai
//       {
//         path:"/about",
//         element: <About />
//       },
//       {
//         path: "/contact",
//         element: <Contact />
//       },
//       {
//         path: "/github",
//         element: <Github />
//       }
//     ]
//   }
// ])

// createBrowserRouter se Router bnaga
const routerBySunil = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>

      <Route path="" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path='user/:userid' element={<User />} >
        {/* <Route path=':userid' /> */}
      </Route>

      <Route
        loader = {githubInfoLoader}
        path='github'
        element={<Github />} />
      </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={routerBySunil}/>
  </StrictMode>,
)
