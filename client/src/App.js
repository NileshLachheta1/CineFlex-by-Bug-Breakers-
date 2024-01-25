import { Routes, Route, useLoaderData, useLocation } from 'react-router-dom';
import TheaterRegFormComponent from './components/TheaterRegistrationForm/TheaterRegFormComponent.js'
import Sidenavbar from './components/NavbarComponent/SideNavbar.js';
import Topnavbar from './components/NavbarComponent/TopNavbar.js';
import Homepage from './components/HomepageComponent/Homepage.js';
import Footer from './components/FooterComponent/FooterComponent.js';
import FormComponent from './components/FormComponent/FormComponent.js';
import EventHomeComponent from './components/EventComponent/EventHomeComponent.js';
import EventDetailComponent from './components/EventComponent/EventMainComponent';
import MovieHomePageComponent from './components/MoviesComponent/MovieHome.js';
import MovieDetailPageComponent from './components/MoviesComponent/MovieDetails.js';
import MovieBookingPageComponent from './components/MoviesComponent/BookingShow.js';
import EditprofileComponent from './components/ProfileComponent/editprofileComponent.js';
import ContactUsComponent from './components/ContactUsComponent/ContactUsComponent.js';
import SeatChartComponent from './components/SeatSelectComponent/SeatSelectComponent.js';
import AboutUsComponent from './components/AboutUsComponent/AboutUsComponent.js';
import ThreaterOwnerHomePage from './components/ThreaterOwnerComponent/ThreaterOwnerDashboard.js'
import ProfileTicketSection from './components/TicketsComponent/UpcomingTicketsComponent.js'
import EventRegFormComponent from './components/EventComponent/EventRegFormController.js';
import QuizComponent from './components/QuizComponent/QuizeComponent.js';

function App() {
  let location=useLocation();
  const isLogin = location.pathname.includes('/login');
  const isTheaterOwner = location.pathname.includes('/threaterOwnerHomePage');
  const isquiz = location.pathname.includes('/quiz');
  
  return (<>
    <Topnavbar />
    {(!isTheaterOwner)&&<Sidenavbar/>}
    <Routes>
      <Route path="/" element={<Homepage />}></Route>
      <Route path="/login" element={<FormComponent />}></Route>
      <Route path="/eventhome" element={<EventHomeComponent />}></Route>
      <Route path="/eventDetail" element={<EventDetailComponent />}></Route>
      <Route path="/movieHomePage" element={<MovieHomePageComponent />}></Route>
      <Route path="/movieDetailPage" element={<MovieDetailPageComponent />}></Route>
      <Route path="/movieBookingPage" element={<MovieBookingPageComponent />}></Route>
      <Route path="/editUserProfile" element={<EditprofileComponent/>}></Route>
      <Route path="/theaterRegistrationForm" element={<TheaterRegFormComponent/>}></Route>
      <Route path="/contactUs" element={<ContactUsComponent/>}></Route>
      <Route path="/seatBookingChart" element={<SeatChartComponent/>}></Route>
      <Route path="/aboutUs" element={<AboutUsComponent/>}></Route>
      <Route path="/theaterRegistrationForm" element={<TheaterRegFormComponent/>}></Route>
      <Route path="/threaterOwnerHomePage" element={<ThreaterOwnerHomePage/>}></Route>
      <Route path="/profileTicketSection" element={<ProfileTicketSection/>}></Route>
      <Route path="/eventRegistration" element={<EventRegFormComponent/>} ></Route>
      <Route path="/quiz" element={<QuizComponent/>} ></Route>
    </Routes>
    {(!isLogin)&&(!isquiz)&&<Footer/>}
      
  </>
  );
}

export default App;
