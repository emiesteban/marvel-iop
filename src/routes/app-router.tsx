import { JSX } from "react";

import { BrowserRouter, Routes, Route } from "react-router";
import CharacterList from "../pages/character-list/character-list";
import CharacterDetail from "../pages/character-details/character-details";
import NotFoundPage from "../pages/not-found-page/not-found-page";

export default function AppRouter(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CharacterList />} />
        <Route path="/char/:characterid" element={<CharacterDetail />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}
