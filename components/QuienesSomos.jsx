import {
  View,
  Text,
  Image,
  Linking,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import imagenes from "../assets/images.js";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

export function QuienesSomos({ navigation }) {
  const insets = useSafeAreaInsets();
  return (
    <View
      className="bg-slate-300 flex-1"
      style={{ paddingBottom: insets.bottom }}
    >
      <View className="flex-row w-full flex-wrap justify-between mt-10 items-center border-b-2 p-2">
        <Text className="text-black text-2xl font-medium">
          {" "}
          ¿Quienes somos?
        </Text>
        <TouchableOpacity
          onPress={() => navigation.navigate("Login")}
          className="border-2 justify-center border-black rounded-xl flex-row items-center mr-2 p-1"
        >
          <Ionicons name="arrow-back-circle" size={24} color="black" />
          <Text className="text-black text-center"> Volver </Text>
        </TouchableOpacity>
      </View>
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View className="flex-row w-full flex-wrap p-3">
          <Text>
            Hola, mi nombre es Dustin Joel, soy un estudiante de la universidad
            Escuela Politécnica Nacional
          </Text>
          <Image
            source={imagenes.epn}
            className="max-w-full w-full bg-black max-h-60 h-auto"
            style={{ resizeMode: "contain" }}
          />
          <Text>
            Nací el 19 de Marzo del 2004 en la cuidad de Quito, Ecuador. He
            estudiado desarrollo de software y esta aplicación es mi primer
            proyecto móvil, el cual fue realizado con el propósito de ayudar a
            las personas a tener un control sobre su condición física y mental.
          </Text>
          <Text className="text-xl font-bold">Contáctame:</Text>
          <View className="flex-row w-full flex-wrap  bg-white justify-evenly">
            <TouchableOpacity onPress={() => Linking.openURL("https://www.facebook.com/DustinJMS")} className="border-2 justify-center border-black rounded-xl flex-row items-center ">
              <Ionicons name="logo-facebook" size={24} color="black" />
              <Text className="text-black text-center"> Facebook </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => Linking.openURL("mailto:dustin04ms@gmail.com")} className="border-2 justify-center border-black rounded-xl flex-row items-center ">
              <MaterialCommunityIcons name="email" size={24} color="black" />
              <Text className="text-black text-center"> Correo </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => Linking.openURL("https://www.tiktok.com/@dustinmsj")} className="border-2 justify-center border-black rounded-xl flex-row items-center ">
              <Ionicons name="logo-tiktok" size={24} color="black" />
              <Text className="text-black text-center"> Tiktok </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => Linking.openURL("https://wa.me/593")} className="border-2 justify-center border-black rounded-xl flex-row items-center ">
              <Ionicons name="logo-whatsapp" size={24} color="black" />
              <Text className="text-black text-center"> Whatsapp </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
