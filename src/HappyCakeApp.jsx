import {Header} from "./components/Header.jsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Contact} from "./views/Contact.jsx";
import logo from "./assets/logo.png"
import {Blog} from "./views/Blog.jsx";
import {Footer} from "./components/Footer.jsx";
import {Home} from "./views/Home.jsx";
import {PageNotFound} from "./views/PageNotFound.jsx";

function HappyCakeApp() {

  return (
    <>
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path="/" element={<Home logo={logo}/>}></Route>
          <Route path="/blog" element={<Blog/>}></Route>
          <Route path="/contact" element={<Contact/>}></Route>
          <Route path="*" element={<PageNotFound />}></Route>
        </Routes>
      </BrowserRouter>
      <Footer/>
    </>
  )
}

export default HappyCakeApp
