import {Header} from "./components/Header.jsx";
import {Route, Routes} from "react-router-dom";
import {Home} from "./components/Home.jsx";
import {Contact} from "./components/Contact.jsx";
import logo from "./assets/logo.png"
import {Blog} from "./components/Blog.jsx";
import {Footer} from "./components/Footer.jsx";
import {PageNotFound} from "./components/PageNotFound.jsx";

function HappyCakeApp() {

  return (
    <>
      <Header logo={logo}/>
      <div className="container my-4">
        <Routes>
          <Route path="/react-router-practice" element={<Home logo={logo}/>}></Route>
          <Route path="/react-router-practice/blog" element={<Blog />}></Route>
          <Route path="/react-router-practice/contact" element={<Contact/>}></Route>
          <Route path="*" element={<PageNotFound/>}></Route>
        </Routes>
      </div>
      <Footer />
    </>
  )
}

export default HappyCakeApp
