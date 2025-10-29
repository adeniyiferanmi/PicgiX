import { BrowserRouter, Route, Routes } from "react-router-dom";
// import { Button } from "./components/ui/button"
import SignUp from "./components/pages/SignUpPage";
import LoginPage from "./components/pages/LoginPage";
import DashBoard from "./components/pages/DashBoardPage";
import HeaderPage from "./components/pages/HeaderPage";
import FooterPage from "./components/pages/FooterPage";
import AuthProvider from "./context/AuthContext";
import { Toaster } from "sonner";
import PromptPage from "./components/pages/PromptPage";
import ProtectedRoutes from "./Routes/ProtectedRoutes";
import VideoProvider from "./context/videoContext";
import { FormProvider } from "react-hook-form";
import ContactPage from "./components/pages/ContactPage";
import VideosPage from "./components/pages/VideosPage";
import PricingPage from "./components/pages/PricingPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Toaster closeButton position="top-right" richColors />
        <AuthProvider>
          <VideoProvider>
            
            <Routes>
              <Route path="/dashbord" element={<DashBoard />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/login" element={<LoginPage />} />
              <Route element={<ProtectedRoutes />}>
                <Route path="/" element={<PromptPage />} />
                <Route path="/contact" element={<ContactPage/>}/>
                <Route path="/videos" element={<VideosPage/>}/>
                <Route path="/pricing" element={<PricingPage/>}/>
              </Route>
            </Routes>
            <FooterPage />
          </VideoProvider>
        </AuthProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
