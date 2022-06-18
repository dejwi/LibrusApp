import { View, Text } from "react-native";
import React, { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Loading = () => {
  const navigation = useNavigation();

  useEffect(() => {
    (async () => {
      const val = await AsyncStorage.getItem("user");
      val
        ? navigation.navigate("Home" as never)
        : navigation.navigate("Login" as never);
    })();
  }, []);

  return (
    <View>
      <Text>Loading</Text>
    </View>
  );
};

export default Loading;
