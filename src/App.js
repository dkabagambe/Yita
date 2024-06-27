import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect } from "react";

// Component Imports
import Header from "./component/sections/Header/Header";
import Main from "./component/sections/Main/Main";
import AboutSection from "./component/sections/aboutUs/aboutSection";
import Mid from "./component/sections/Mid/Mid";
import Footer from "./component/sections/Footer/Footer";
import Subscribe from "./component/sections/Subscribe/Subscribe";
import Partner from "./component/sections/Partners/Partner";
import Serve from "./component/sections/Dataserve/Serve";
import Services from "./component/sections/Services/Services";
import Contact from "./component/Page/Contact/Contact";
import Service from "./component/Page/Services/Service";
import About from "./component/Page/AboutUs/About";
import Appoint from "./component/Appointment/Appoint";
import ScrollToTop from "./scroll";
import Activities from "./component/sections/Activities/Activities";
import Value from "./component/sections/Value/Value";
import Tweets from "./component/sections/Tweets/Tweets";
import Reciept from "./component/Reciept/Reciept";
import Panel from "./component/Panel/Panel";
import Dashboard from "./component/Panel/Dashboard";
import ImageUpload from "./component/Upload/Upload";
import WhatsApp from "./component/WhatsApp/WhatsApp";
import Activity from "./component/Page/Activities/Activity";
import Gallery from "./component/Page/Gallery/Gallery";

function App() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <Router>
      <ScrollToTop>
        <Routes>
          <Route
            path="/Contact"
            element={
              <>
                <Header />
                <Contact />
                <Subscribe />
                <Footer />
              </>
            }
          />
          <Route
            path="/Services"
            element={
              <>
                <Header />
                <Service />
                <Subscribe />
                <Footer />
              </>
            }
          />
          <Route
            path="/AboutUS"
            element={
              <>
                <Header />
                <About />
                <Subscribe />
                <Footer />
              </>
            }
          />
          <Route
            path="/Appointment"
            element={
              <>
                <Header />
                <Appoint />
                <Subscribe />
                <Footer />
              </>
            }
          />
          <Route path="/Reciept" element={<Reciept />} />
          <Route path="/Up" element={<ImageUpload />} />
          <Route
            path="/Admin"
            element={
              localStorage.getItem("logged") === "true" ? (
                <Dashboard />
              ) : (
                <Panel />
              )
            }
          />
          <Route
            path="/"
            element={
              <>
                <Header />
                <Main />
                <Mid />
                <AboutSection />
                <Value />
                <Services />
                <Partner />
                <Serve />
                <Tweets />
                <Activities />
                <Subscribe />
                <Footer />
              </>
            }
          />
          <Route
            path="/Gallery"
            element={
              <>
                <Header />
                <Gallery />
                <Footer />
              </>
            }
          />

          <Route
            path="/Activity"
            element={
              <>
                <Header />
                <Activity />
                <Footer />
              </>
            }
          />
        </Routes>
        <WhatsApp />
      </ScrollToTop>
    </Router>
  );
}

export default App;
