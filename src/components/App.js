import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//Layouts
import ErrorLayout from "./layout/ErrorLayout";
import PrivateLayout from "./layout/PrivateLayout";
import PublicLayout from "./layout/PublicLayout";

//View


import SignUP from "./pages/public/signUp/SignUp";
import Profile from "./pages/private/profile/Profile";
import OnBoarding from "./pages/public/onBoarding/OnBoarding";
import Sendmoney from "./pages/private/sendmoney/SendMoneyView";
import ErrorPage from "./pages/errors/ErrorPage";
import RequestMoney from "./pages/private/requestmoney/RequestMoney";

// eslint-disable-next-line no-unused-vars
// import appStyle from "../scss/app.scss";
// import PrimaryBtn from "./designComponents/PrimaryBtn";
// import InputCustom from "./designComponents/InputCustom";
import MirWallet from "./pages/public/mirWallet/MirWallet";
import Login from "./pages/public/login/Login";
import MyInfo from "./pages/private/myinfo/MyInfo";
import Dashboard from "./pages/private/dashboard/Dashboard";
import Footer from "./pages/partials/footer/Footer";
import Transactions from "./pages/private/transactions/Transactions";
import Contacts from "./pages/private/contacts/Contacts";
import AllRequests from "./pages/private/allrequests/AllRequests";
import RequestSearch from "./pages/private/requestmoney/ReguestSearch";
import SendRequest from "./pages/private/sendrequest/SendRequest";
import ModalProfile from "./pages/partials/modal/modalmoney/ModalProfile";
import MyCards from "./pages/private/mycards/MyCards";
import SendMoneySearch from "./pages/private/sendmoney/SendMoneySearch";
import Settings from "./pages/private/Settings.js/Settings";
function App() {
  const publicPages = [
    
    {
      element: <SignUP />,
      path: '/signup'
    },
    {
      element: <OnBoarding />,
      path: '/'
    },
    {
      element: <Login />,
      path: '/login'
    },
    
  ];

  const PrivatePages = [
    
    {
      element: <Profile />,
      path: '/profile'
    },
    {
      element: <MirWallet />,
      path: '/mirWallet'
    },
    {
      element: <Transactions />,
      path: '/transactions'
    },
    
    {
      element: <Dashboard />,
      path: '/dashboard'
    },
    {
      element: <Footer />,
      path: '/footer'
    },
    {
      element: <MyInfo />,
      path: '/myinfo'
    },
    {
      element: <Sendmoney />,
      path: '/sendmoney/:id'
    },
    {
      element: <SendMoneySearch />,
      path: '/sendmoney'
    },
    {
      element: <RequestMoney />,
      path: '/requestmoney/:id'
    },
    {
      element: <Contacts/>,
      path: '/contacts'
    },
    {
      element: <AllRequests />,
      path: '/allrequests'
    },
    {
      element: <RequestSearch />,
      path: '/requestmoney'
    },
    {
      element: <SendRequest />,
      path: '/sendrequestmoney'
    },
    {
      element: <ModalProfile />,
      path: '/modalprofile'
    },
    {
      element: <MyCards />,
      path: '/mycards'
    },
    {
      element: <Settings />,
      path: '/settings'
    },
  ];



  return (
    <Router>
      <Routes>
        <Route element={<PrivateLayout />}>
          {PrivatePages.map(page => (
            <Route key={page.path} path={page.path} element={page.element} />
          ))}
        </Route>
        <Route element={<PublicLayout />}>
          {publicPages.map(page => (
            <Route key={page.path} path={page.path} element={page.element} />
          ))}
        </Route>
        <Route element={<ErrorLayout />}>
          <Route path="*" element={<ErrorPage />} />
        </Route>
        <Route path="/sendmoney/:id" element={<Sendmoney />} />
        <Route path="/requestmoney/:id" element={<RequestMoney />} />
        
        <Route path="/requestmoney" element={<RequestSearch />} />
      </Routes>
    
    </Router>
  );
}

export default App;
