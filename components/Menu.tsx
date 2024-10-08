import { FlashList } from "@shopify/flash-list";
import { View, StyleSheet } from "react-native";
import { IMenuItem, MenuItem } from "./MenuItem";
import { Text } from "./Text";
import { Button } from "./Button";
import { theme } from "../utils/theme";

const ITEM_VERTICAL_PADDING = 12;
const ITEM_HORIZONTAL_PADDING = 32;

const styles = StyleSheet.create({
  listContainer: {
    gap: 10,
    alignContent: "center",
    width: "100%",
    flexGrow: 1,
  },
  buttonContainer: {
    flex: 1,
    paddingVertical: ITEM_VERTICAL_PADDING,
    backgroundColor: theme.background,
    paddingHorizontal: ITEM_HORIZONTAL_PADDING,
  },
  priceTotal: {
    justifyContent: "space-between",
    flexDirection: "row",
    borderTopColor: theme.border,
    borderTopWidth: 1,
    paddingHorizontal: ITEM_HORIZONTAL_PADDING,
    alignItems: "center",
    minHeight: "15%",
  },
  itemContainer: {
    paddingVertical: ITEM_VERTICAL_PADDING,
    paddingHorizontal: ITEM_HORIZONTAL_PADDING,
  },
});

interface IMenuProps {
  onAdd: (index: number) => void;
  onSubtract: (index: number) => void;
  onNewOrder: () => void;
  menuItems: IMenuItem[];
  totalPrice: string;
}

export function Menu({
  onAdd,
  onSubtract,
  onNewOrder,
  menuItems,
  totalPrice,
}: IMenuProps) {
  return (
    <View style={styles.listContainer}>
      <FlashList
        data={["New Order", ...menuItems]}
        renderItem={({ item }) => {
          if (typeof item === "string") {
            // First item is the new order button so it can be used as a sticky header
            return (
              <View style={styles.buttonContainer}>
                <Button text={item} onPress={onNewOrder} />
              </View>
            );
          }
          return (
            <View style={styles.itemContainer}>
              <MenuItem
                name={item.name}
                quantity={item.quantity}
                totalPrice={item.totalPrice}
                onAdd={onAdd}
                onSubtract={onSubtract}
                id={item.id}
              />
            </View>
          );
        }}
        testID="menu-list"
        estimatedItemSize={89}
        stickyHeaderIndices={[0]} // First item is the new order button
      />
      <View style={styles.priceTotal}>
        <Text fontSize={24} bold>
          Total
        </Text>

        <Text fontSize={24} bold>
          ${totalPrice}
        </Text>
      </View>
    </View>
  );
}
