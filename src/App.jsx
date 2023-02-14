import { lazy, Suspense } from "react";
import { Link, Route, Routes } from "react-router-dom";

// import Home from "./Pages/Home";
// import Contact from "./Pages/Contact";
// import About from "./Pages/About";

function wait(delay) {
  return new Promise((res) => setTimeout(() => res(), delay));
}

const Home = lazy(() => wait(1000).then(() => import("./Pages/Home.jsx")));
const Ikkinchi = lazy(() =>
  wait(1000).then(() =>
    import("./Pages/Home.jsx").then((module) => ({ default: module.Ikkinchi }))
  )
);
const About = lazy(() => wait(1000).then(() => import("./Pages/About.jsx")));
const Contact = lazy(() => wait(0).then(() => import("./Pages/Contact.jsx")));

function App() {
  return (
    <div>
      <h1>Hammaga Salom!</h1>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/ikkinchi">Ikkinchi</Link>
      <Suspense fallback={<h1>Loading...</h1>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/ikkinchi" element={<Ikkinchi />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
