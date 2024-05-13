import { Route, Routes } from "react-router-dom";
import "./App.css";
import { HomePage } from "./components/pages-partial/home-page";
import UploadPage from "./components/pages-partial/upload-page";

function App() {
  return (
    <Routes>
      <Route path="*" element={<HomePage />} />
      <Route path="upload-page" element={<UploadPage />} />
    </Routes>
  );
}

export default App;
