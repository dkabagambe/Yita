import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Header from "./component/sections/Header/Header";
import Main from "./component/sections/Main/Main";
import AboutSection from "./component/sections/aboutUs/aboutSection";
import Mid from "./component/sections/Mid/Mid";
import Footer from "./component/sections/Footer/Footer";
import Subscribe from "./component/sections/Subscribe/Subscribe";
import Partner from "./component/sections/Partners/Partner";
import Serve from "./component/sections/Dataserve/Serve";
import Services from "./component/sections/Services/Services";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Contact from "./component/Page/Contact/Contact";
import Service from "./component/Page/Services/Service";
import About from "./component/Page/AboutUs/About";
import Demo from "./component/demopage/demo";
import Appoint from "./component/Appointment/Appoint";
import ScrollToTop from "./scroll";
import Activities from "./component/sections/Activities/Activities";
import { useEffect } from "react";
import Value from "./component/sections/Value/Value";
import Tweets from "./component/sections/Tweets/Tweets";
import wp from "./images/wp.png";
import Reciept from "./component/Reciept/Reciept";
import Panel from "./component/Panel/Panel";
import Dashboard from "./component/Panel/Dashboard";
import ImageUpload from "./component/Upload/Upload";
function App() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="">
      {/* <Demo /> */}
      <Router>
        <ScrollToTop>
          <Switch>
            <Route path="/Contact">
              <Header />
              <Contact />
              <Subscribe />
              <Footer />
            </Route>
            <Route path="/Services">
              <Header />

              <Service />
              <Subscribe />
              <Footer />
            </Route>
            <Route path="/AboutUS">
              <Header />
              <About />
              <Subscribe />
              <Footer />
            </Route>
            <Route path="/Appointment">
              <Header />
              <Appoint />
              <Subscribe />
              <Footer />
            </Route>
            <Route path="/Reciept">
              <Reciept />
            </Route>
            <Route path="/Up">
              <ImageUpload />
            </Route>
            <Route path="/Admin">
              {localStorage.getItem("logged") == "true" ? (
                <Dashboard />
              ) : (
                <Panel />
              )}
            </Route>

            <Route path="/">
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
            </Route>
          </Switch>

          <div className="fixedwhatsapp">
            <a href="https://wa.me/+256777114327" target="blank">
              <img src={wp} />
            </a>
          </div>
        </ScrollToTop>
      </Router>

      {/* ------------------------------------------------------ */}
    </div>
  );
}

export default App;
