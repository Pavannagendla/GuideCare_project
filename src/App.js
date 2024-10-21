import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import AboutUs from './mainPages/AboutUs';
import Homepage from './mainPages/Homepage';
import Destinations from './mainPages/Destinations';
import FindADoctor from './mainPages/FindaDoctor';
import GuidecareDoc from './mainPages/GuidecareDoc';
import Profile from './mainPages/Profile';
import Cancellation_policy from './Components/Cancellation_policy/Cancellation_policy';
import Terms_And_Conditions from './Components/Terms_And_Conditions/Terms_And_Conditions';
import Privacy_Policy from './Components/Privacy_Policy/Privacy_Policy';
import Contact from './pages/Contact/Contact';
import Sea from './pages/destination/sea/Sea';
import FlightsMain from './pages/destination/flightsmain'; // Add import for FlightsMain
import FlightMainPage2 from './pages/destination/flightmainpage2';
import FlightMainPage3 from './pages/destination/flightmainpage3';
import FlightMainPage4 from './pages/destination/flightmainpage4';
import FlightMainPage5 from './pages/destination/flightmainpage5';
import HotelMain from './pages/destination/hotelmain'; // Add import for HotelMain
import Hotelmainpage2 from './pages/destination/hotelmainpage2'
import Hotelmainpage3 from './pages/destination/hotelmainpage3';
import CabMain from './pages/destination/cabmain'; // Add import for CabMain
import Cabmainpage2 from './pages/destination/cabmainpage2';
import Cabmainpage3 from './pages/destination/cabmainpage3';
import FindDoc2 from './pages/finddoctor2/FindDoc2';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="/destinations" element={<Destinations />} />
        <Route path="/sea" element={<Sea />} />
        <Route path="/findadoctor" element={<FindADoctor />} />
        <Route path="/guidecaredoc" element={<GuidecareDoc />} />
        <Route path="/joinusfree" element={<Profile />} />
        <Route path="/Cancellation_policy" element={<Cancellation_policy />} />
        <Route path="/Terms_And_Conditions" element={<Terms_And_Conditions />} />
        <Route path="/Privacy_Policy" element={<Privacy_Policy />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/flightsmain" element={<FlightsMain />} /> {/* Add route for FlightsMain */}
        <Route path='/flightmainpage2' element={<FlightMainPage2/>} />
        <Route path='/flightmainpage3' element={<FlightMainPage3/>} />
        <Route path='/flightmainpage4' element={<FlightMainPage4/>} />
        <Route path='/flightmainpage5' element={<FlightMainPage5/>} />
        <Route path="/hotelmain" element={<HotelMain />} /> {/* Add route for HotelMain */}
        <Route path="/cabmain" element={<CabMain />} /> {/* Add route for CabMain */}
        <Route path="/cabmainpage2" element={<Cabmainpage2 />} />
        <Route path="/cabmainpage3" element={<Cabmainpage3 />} />
        <Route path="/hotelmainpage2" element={<Hotelmainpage2/>} />
        <Route path="/hotelmainpage3" element={<Hotelmainpage3/>} />
        <Route path="/finddocpage2" element={<FindDoc2 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
