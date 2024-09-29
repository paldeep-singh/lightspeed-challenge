import { Pressable, StyleSheet, View } from "react-native";
import { Text } from "./Text";
import { theme, useTheme } from "../utils/theme";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    minHeight: 64,
    alignItems: "center",
  },
  quantityContainer: {
    height: "100%",
    flex: 1,
    paddingVertical: 2,
    borderRadius: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: theme.secondary,
  },
  quantityButton: {
    width: "30%",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
  },
  quantity: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: theme.background,
  },
  name: { width: "40%" },
  price: { width: "25%", alignItems: "flex-end" },
});

export interface IMenuItem {
  id: number;
  name: string;
  quantity: number;
  totalPrice: string;
}

interface IQuantityController extends Pick<IMenuItem, "id" | "quantity"> {
  onAdd: (index: number) => void;
  onSubtract: (index: number) => void;
}

export interface IMenuItemProps extends IQuantityController, IMenuItem {}

function QuantityController({
  quantity,
  onAdd,
  onSubtract,
  id,
}: IQuantityController) {
  const { secondary, secondaryHighlight } = useTheme();
  return (
    <View style={[styles.quantityContainer]}>
      <Pressable
        style={({ pressed }) => [
          styles.quantityButton,
          {
            backgroundColor: pressed ? secondaryHighlight : secondary,
          },
        ]}
        onPress={() => onSubtract(id)}
      >
        <Text>-</Text>
      </Pressable>
      <View style={[styles.quantity]}>
        <Text>{quantity}</Text>
      </View>
      <Pressable
        style={({ pressed }) => [
          styles.quantityButton,
          {
            backgroundColor: pressed ? secondaryHighlight : secondary,
          },
        ]}
        onPress={() => onAdd(id)}
      >
        <Text>+</Text>
      </Pressable>
    </View>
  );
}

export function MenuItem({
  name,
  quantity,
  totalPrice,
  onAdd,
  onSubtract,
  id,
}: IMenuItemProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{name}</Text>
      <QuantityController
        quantity={quantity}
        onAdd={onAdd}
        onSubtract={onSubtract}
        id={id}
      />
      <View style={styles.price}>
        <Text>${totalPrice}</Text>
      </View>
    </View>
  );
}
