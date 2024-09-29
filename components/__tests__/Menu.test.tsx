import { render } from "@testing-library/react-native";
import { Menu } from "../Menu";
import { IMenuItem } from "../MenuItem";

describe("Menu", () => {
  const menuItems: IMenuItem[] = [
    {
      name: "Prata",
      id: 1,
      quantity: 5,
      totalPrice: "20.00",
    },
    {
      name: "Dosa",
      id: 2,
      quantity: 25,
      totalPrice: "15.00",
    },
  ];

  const totalPrice = "35.00";
  const onAdd = jest.fn();
  const onSubtract = jest.fn();
  const onNewOrder = jest.fn();

  it("renders the total price", () => {
    const { getByText } = render(
      <Menu
        menuItems={menuItems}
        onAdd={onAdd}
        onSubtract={onSubtract}
        onNewOrder={onNewOrder}
        totalPrice={totalPrice}
      />
    );
    getByText("Total");
    getByText(`$${totalPrice}`);
  });

  it("renders the list of menu items", () => {
    const { getByTestId } = render(
      <Menu
        menuItems={menuItems}
        onAdd={onAdd}
        onSubtract={onSubtract}
        onNewOrder={onNewOrder}
        totalPrice={totalPrice}
      />
    );

    getByTestId("menu-list");
  });
});
