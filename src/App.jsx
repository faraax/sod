import { Link, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import BMCModule from "./pages/BMCModule";
import Home from "./pages/Home";
import PdfViewer from "./pages/PdfViewer";

function App() {
  return (
    <div className="font-sans">

      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path="BMC-Module" element={<BMCModule />} />
          <Route path="PdfViewer" element={<PdfViewer />} />
          {/* <Route path="aboutUs" element={<Dashboard />} /> */}
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
function PageNotFound() {
  return (
    <div className="mt-36">
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
}