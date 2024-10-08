import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomeScreen from "./Screens/HomeScreen";
import AboutUs from "./Screens/AboutUs";
import ContactUs from "./Screens/ContactUs";
import Placement from "./Screens/Placement";
import Events from "./Screens/Events";
import CampusLife from "./Screens/CampusLife";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contactUs" element={<ContactUs />} />
        <Route path="/placement" element={<Placement />} />
        <Route path="/events" element={<Events />} />
        <Route path="/campus-life" element={<CampusLife />} />
        <Route path="/contact-us" element={<ContactUs />} />
      </Routes>
    </Router>
  );
}

export default App;
