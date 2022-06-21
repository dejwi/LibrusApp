import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { MainColors } from "../theme";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Librus from "librusjs";

const Login = () => {
  const navigation = useNavigation();
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [showErr, setShowErr] = useState(false);
  const [disabled, setDisabled] = useState(false);

  const loginClick = async () => {
    if (!login || !password || disabled) return;
    setDisabled(true);

    Librus(login, password)
      .then(async (ses) => {
        const acc = await ses.getAccountInfo();
        const data: UserData = { ...acc, password };
        await AsyncStorage.setItem("user", JSON.stringify(data));
        navigation.navigate("Home" as never);
        setShowErr(false);
        setDisabled(false);
      })
      .catch((err) => {
        setShowErr(true);
        setDisabled(false);
      });
  };

  const inputClass = "border-[1.5px] w-36 py-1 text-center rounded ";
  return (
    <SafeAreaView
      style={{ backgroundColor: MainColors.bgPrimary, flex: 1 }}
      className="items-center justify-center"
    >
      <Text className="font-[PoppinsRegular] -mt-30 mb-8">
        Wprowadź dane konta librus
      </Text>
      <View className="gap-1">
        <TextInput
          placeholder="login"
          className={inputClass}
          value={login}
          onChangeText={setLogin}
        />
        <TextInput
          placeholder="hasło"
          className={inputClass}
          value={password}
          onChangeText={setPassword}
        />
      </View>
      <TouchableOpacity
        onPress={loginClick}
        style={{
          borderRadius: 5,
          overflow: "hidden",
        }}
        disabled={disabled}
      >
        <Text
          className="py-2 px-10 text-xs"
          style={{ color: disabled ? "#8f8f8f" : MainColors.secondary }}
        >
          Zaloguj
        </Text>
      </TouchableOpacity>
      {showErr && <Text className="text-red-400">Niepoprawne dane</Text>}
    </SafeAreaView>
  );
};

export default Login;
