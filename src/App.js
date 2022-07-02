import "./App.css";
// --- Components
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
// --- Pages
import Pages from "./pages/Pages";
// --- Material-UI
import { Box } from "@mui/material";

function App() {
  return (
    <Box width="400px" sx={{ width: { xl: "1488px" } }}>
      <Navbar />
      <Pages />
      <Footer />
    </Box>
  );
}

export default App;
