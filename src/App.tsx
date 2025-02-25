// import viteLogo from '/vite.svg'
import CharacterProvider from "./context/character-context";
import "./App.css";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/react-query";
import AppRouter from "./routes/app-router";
import MainLayout from "./layouts/main-layout";

function App() {
  return (
    <CharacterProvider>
      <QueryClientProvider client={queryClient}>
        <MainLayout>
          <AppRouter />
        </MainLayout>
      </QueryClientProvider>
    </CharacterProvider>
  );
}

export default App;
