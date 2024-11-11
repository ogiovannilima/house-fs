import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./routes";
import GlobalStyles from "./styles/GlobalStyles";
import { LanguageProvider } from "./contexts/LanguageContext";

export function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <LanguageProvider>
        <AppRoutes />
      </LanguageProvider>
    </BrowserRouter>
  );
}
