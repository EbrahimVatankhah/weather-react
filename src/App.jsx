import ThemeProvider from "./context/ThemeContext";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

const App = () => {
  return (
    <>
      <ThemeProvider>
        <Navbar />
        <Home />
      </ThemeProvider>
    </>
  );
};

export default App;
