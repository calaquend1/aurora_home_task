import { render, screen, fireEvent } from "@testing-library/react";
import Pagination from "./Pagination";

test("pagination buttons work", () => {
  const setPage = jest.fn();

  render(<Pagination page={1} total={20} limit={10} setPage={setPage} />);
  const nextButton = screen.getByText("Next ➡");

  fireEvent.click(nextButton);
  expect(setPage).toHaveBeenCalledWith(2);
});

test("disables 'Previous' button on first page", () => {
  render(<Pagination page={1} total={20} limit={10} setPage={() => { }} />);

  const prevButton = screen.getByText("⬅ Previous");
  expect(prevButton).toBeDisabled();
});

test("disables 'Next' button on last page", () => {
  render(<Pagination page={2} total={20} limit={10} setPage={() => { }} />);

  const nextButton = screen.getByText("Next ➡");
  expect(nextButton).toBeDisabled();
});
