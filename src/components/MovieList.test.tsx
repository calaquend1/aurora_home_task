import { fireEvent, render, screen } from "@testing-library/react";
import MovieList from "./MovieList";
import { Movie } from "../api";
import { MovieProvider } from "../context/MovieContext";

const movies: Movie[] = [
  { id: "1", title: "Movie 1", description: "Desc 1", image_url: "", rating: 8.5 },
  { id: "2", title: "Movie 2", description: "Desc 2", image_url: "", rating: 7.9 }
];

beforeEach(() => {
  localStorage.clear();
});

const renderWithProvider = (ui: React.ReactElement) => {
  return render(<MovieProvider>{ui}</MovieProvider>);
};

test("renders movie list correctly", () => {
  renderWithProvider(<MovieList movies={movies} />);

  expect(screen.getByText("Movie 1")).toBeInTheDocument();
  expect(screen.getByText("Movie 2")).toBeInTheDocument();
  expect(screen.getByText("⭐ 8.5")).toBeInTheDocument();
});

test("watched movies toggle works", () => {
  renderWithProvider(<MovieList movies={movies} />);
  const watchButton = screen.getAllByText("Mark as Watched")[0];

  fireEvent.click(watchButton);
  expect(watchButton.textContent).toBe("✅ Watched");
});

test("watched movies persist in local storage", () => {
  renderWithProvider(<MovieList movies={movies} />);
  const watchButton = screen.getAllByText("Mark as Watched")[0];

  fireEvent.click(watchButton);
  expect(watchButton.textContent).toBe("✅ Watched");

  // Reload component to check persistence
  renderWithProvider(<MovieList movies={movies} />);
  const updatedButton = screen.getAllByText("✅ Watched")[0];

  expect(updatedButton).toBeInTheDocument();
});

test("renders correctly when no movies are available", () => {
  renderWithProvider(<MovieList movies={[]} />);
  expect(screen.getByText("No movies found")).toBeInTheDocument();
});
