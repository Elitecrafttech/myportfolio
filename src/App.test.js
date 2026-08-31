import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders the professional home introduction", () => {
  render(<App />);
  expect(screen.getByText(/Full-Stack Product Engineer/i)).toBeInTheDocument();
  expect(screen.getByRole("navigation", { name: /primary/i })).toBeInTheDocument();
});
