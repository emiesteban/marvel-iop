import CharacterProvider from "./context/character-context";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/react-query";
import "./App.css";
import AppRouter from "./routes/app-router";
import MainLayout from "./layouts/main-layout";
import { BrowserRouter } from "react-router";

function App() {
  return (
    <CharacterProvider>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <MainLayout>
            <AppRouter />
          </MainLayout>
        </BrowserRouter>
      </QueryClientProvider>
    </CharacterProvider>
  );
}

export default App;
