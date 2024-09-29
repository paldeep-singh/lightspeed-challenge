import * as React from "react";
import { render, userEvent } from "@testing-library/react-native";

import { Button } from "../Button";

describe("Button", () => {
  const text = "BUTTON_TEXT";
  const onPress = jest.fn();

  it("renders the provided text", () => {
    const { getByText } = render(<Button text={text} onPress={onPress} />);

    getByText(text);
  });

  it("calls the onPress function when pressed", async () => {
    const user = userEvent.setup();
    const { getByText } = render(<Button text={text} onPress={onPress} />);

    await user.press(getByText(text));

    expect(onPress).toHaveBeenCalledTimes(1);
  });
});
