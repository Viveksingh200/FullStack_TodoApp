import { ThemeProvider } from "react-theme-snap";
import Home from "./pages/Home";
import {Toaster} from "react-hot-toast";

function App() {
  const tokens = {
    light: {
      home: "text-custom-orange bg-white"
    },
    dark: {
      home: "text-beige bg-black"
    },
  };

  return (
    <>
      <ThemeProvider tokens={tokens} storageKey="theme">
        <Toaster position="top-center"/>
        <Home/>
      </ThemeProvider>
    </>
  )
}

export default App
