import { render, screen, fireEvent } from "@testing-library/react";
import { vi } from "vitest";
import CharacterCard from "../../src/components/character-card/character-card";
import useCharacterContext from "../../src/hooks/use-character-context";

// Mock de useNavigate para evitar navegación real
vi.mock("react-router", async () => {
  const actual = await vi.importActual("react-router");
  return {
    ...actual,
    useNavigate: () => vi.fn(),
  };
});

// Mock de useCharacterContext
vi.mock("../../hooks/use-character-context", () => ({
  default: vi.fn(),
}));

describe("CharacterCard Component", () => {
  const mockCharacter = {
    id: 1,
    name: "Spider-Man",
    thumbnail: {
      path: "https://example.com/spiderman",
      extension: "jpg",
    },
  };

  it("Rendering", () => {
    (useCharacterContext as jest.Mock).mockReturnValue({
      isFavorite: () => false,
    });

    render(<CharacterCard character={mockCharacter} />);

    expect(screen.getByTestId("character-card")).toBeInTheDocument();
    expect(screen.getByText("Spider-Man")).toBeInTheDocument();
    expect(screen.getByRole("img")).toHaveAttribute(
      "src",
      "https://example.com/spiderman.jpg"
    );
  });

  it("Favorite is showing", () => {
    (useCharacterContext as jest.Mock).mockReturnValue({
      isFavorite: () => true,
    });

    render(<CharacterCard character={mockCharacter} />);

    expect(screen.getByTestId("character-card")).toHaveClass(
      "character-card-favorite"
    );
  });

  it("Not Favorite is showing", () => {
    (useCharacterContext as jest.Mock).mockReturnValue({
      isFavorite: () => false,
    });

    render(<CharacterCard character={mockCharacter} />);

    expect(screen.getByTestId("character-card")).toHaveClass(
      "character-card-not-favorite"
    );
  });

  it("Navigate is been called", () => {
    const mockNavigate = vi.fn();
    vi.mocked(useCharacterContext).mockReturnValue({
      isFavorite: () => false,
      favorites: [],
      addFavorite: () => null,
      removeFavorite: () => null,
      getFavoritesCount: () => 0,
      showFavorites: false,
      setShowFavorites: () => null,
    });
    vi.mocked(require("react-router")).useNavigate.mockReturnValue(
      mockNavigate
    );

    render(<CharacterCard character={mockCharacter} />);

    fireEvent.click(screen.getByTestId("character-card"));
    expect(mockNavigate).toHaveBeenCalledWith("/char/1");
  });
});
