import { render, userEvent } from "@testing-library/react-native";
import { IMenuItemProps, MenuItem } from "../MenuItem";

describe("MenuItem", () => {
  const onAdd = jest.fn();
  const onSubtract = jest.fn();
  const item: IMenuItemProps = {
    name: "Prata",
    quantity: 5,
    totalPrice: "0.5",
    onAdd,
    onSubtract,
    id: 1,
  };

  it("renders the item details", () => {
    const { getByText } = render(<MenuItem {...item} />);

    getByText(item.name);
    getByText(item.quantity.toString());
    getByText(`\$${item.totalPrice}`);
  });

  it("calls the onAdd function with the correct index when the + button is pressed", async () => {
    const user = userEvent.setup();
    const { getByText } = render(<MenuItem {...item} />);

    await user.press(getByText("+"));

    expect(onAdd).toHaveBeenCalledTimes(1);
    expect(onAdd).toHaveBeenCalledWith(item.id);
  });

  it("calls the onSubtract function with the correct index when the + button is pressed", async () => {
    const user = userEvent.setup();
    const { getByText } = render(<MenuItem {...item} />);

    await user.press(getByText("-"));

    expect(onSubtract).toHaveBeenCalledTimes(1);
    expect(onSubtract).toHaveBeenCalledWith(item.id);
  });
});
