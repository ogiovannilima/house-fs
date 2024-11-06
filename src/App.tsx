import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./routes";
import GlobalStyles from "./styles/GlobalStyles";

export function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <AppRoutes />
    </BrowserRouter>
  );
}
