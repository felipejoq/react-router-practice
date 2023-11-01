import {Header} from "./components/Header.jsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Home} from "./components/Home.jsx";
import {Contact} from "./components/Contact.jsx";
import logo from "./assets/logo.png"
import {Blog} from "./components/Blog.jsx";
import {Footer} from "./components/Footer.jsx";
import {PageNotFound} from "./components/PageNotFound.jsx";

function HappyCakeApp() {

  return (
    <>
      <BrowserRouter basename="/react-router-practice">
      <Header/>
        <Routes>
          <Route path="/" element={<Home logo={logo}/>}></Route>
          <Route path="/blog" element={<Blog/>}></Route>
          <Route path="/contact" element={<Contact/>}></Route>
          <Route path="*" element={<PageNotFound/>}></Route>
        </Routes>
      </BrowserRouter>
      <Footer/>
    </>
  )
}

export default HappyCakeApp
