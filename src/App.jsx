import React, { Suspense } from "react";
import { Link, Navigate, Route, Routes } from "react-router-dom";
import Loading from "./components/Loading";
import Navbar from "./components/Navbar";
import { useGlobalState } from "./Hooks/useGlobalState";
import Home from "./pages/Home";
// import Footer from "./components/Footer";
// import PdfViewer from "./pages/PdfViewer";

const BMCModule = React.lazy(() => import("./pages/BMCModule"))

function App() {
  const { user, authIsReady } = useGlobalState();

  return (
    <div className="font-sans">
      {
        authIsReady && (
          <Routes>
            <Route path="/" element={<Navbar />}>
              <Route index element={!user ? <Home /> : <Navigate to={'/BMC-Module'} />} />
              <Route path="BMC-Module" element={
                user ? (
                  <Suspense fallback={<Loading />}>
                    <BMCModule />
                  </Suspense>
                ) : <Navigate to={'/'} />
              } />
              {/* <Route path="/pdf" element={<PdfViewer />} /> */}
              <Route path="*" element={<PageNotFound />} />
            </Route>
          </Routes>
        )
      }
    </div>
  );
}

export default App;

function PageNotFound() {
  return (
    <div className="flex h-screen justify-center items-center flex-col">
      <h2 className="text-2xl font-bold">404 Page Not Found</h2>
      <p className="text-blue-400 underline">
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
}