import { render, screen } from "@testing-library/react";
import * as hooks from "../hooks";
import App from "../App";

describe("my test", () => {
  test("My first test", () => {
    jest.spyOn(hooks, "useTime").mockReturnValue(53344);
    render(<App />);
    screen.debug();
    expect(screen.getByTestId(/myDiv/)).not.toBeNull();
  });
});
