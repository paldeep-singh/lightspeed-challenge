import { ActivityIndicator, StyleSheet, View } from "react-native";
import { useCallback, useEffect, useState } from "react";
import { Menu } from "../components/Menu";
import { Text } from "../components/Text";
import { Button } from "../components/Button";
import { PRODUCTS_ENDPOINT } from "../utils/constants";

const styles = StyleSheet.create({
  errorContainer: { flex: 1, alignItems: "center", justifyContent: "center" },
});

interface IProduct {
  id: number;
  name: string;
  price: string;
}

export function OrderScreen() {
  const [menuItems, setMenuItems] = useState<
    {
      id: number;
      name: string;
      price: number;
      quantity: number;
      totalPrice: string;
    }[]
  >([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchData = async () => {
    setError(false);
    setLoading(true);

    try {
      const response = await fetch(PRODUCTS_ENDPOINT);
      const data = await response.json();
      setMenuItems(
        data.map((item: IProduct) => ({
          quantity: 0,
          ...item,
          price: parseFloat(item.price),
          totalPrice: "0",
        }))
      );
      setLoading(false);
    } catch {
      setError(true);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleRefetch = () => {
    fetchData();
  };

  const onAdd = (id: number) => {
    setMenuItems(
      menuItems.map((item) => {
        if (id === item.id) {
          const quantity = item.quantity + 1;
          const totalPrice = (quantity * item.price).toFixed(2);

          return {
            ...item,
            quantity,
            totalPrice,
          };
        }

        return item;
      })
    );
  };

  const onSubtract = (id: number) => {
    setMenuItems(
      menuItems.map((item) => {
        if (id === item.id) {
          const quantity = item.quantity === 0 ? 0 : item.quantity - 1;
          const totalPrice = (quantity * item.price).toFixed(2);

          return {
            ...item,
            quantity,
            totalPrice,
          };
        }

        return item;
      })
    );
  };

  const totalPrice = useCallback(() => {
    return menuItems
      .map(({ totalPrice }) => totalPrice)
      .reduce((partialSum, a) => partialSum + parseFloat(a), 0)
      .toFixed(2);
  }, [menuItems]);

  if (error) {
    return (
      <View style={styles.errorContainer}>
        <Text>An error has occurred, click the button below to try again.</Text>
        <Button text="Try again" onPress={handleRefetch} />
      </View>
    );
  }

  return loading ? (
    <ActivityIndicator />
  ) : (
    <Menu
      menuItems={menuItems}
      onAdd={onAdd}
      onSubtract={onSubtract}
      onNewOrder={handleRefetch}
      totalPrice={totalPrice()}
    />
  );
}
