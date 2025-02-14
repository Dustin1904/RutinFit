import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Modal, Pressable, ScrollView, Text, View } from 'react-native';

export function ErrorModal({ visible, onRequestClose, title, messages }) {
  return (
    <Modal animationType="fade" transparent={true} visible={visible}>
      <View className="size-full items-center justify-center bg-black/20">
        <ScrollView
          className="max-h-80 w-3/4 gap-y-2 rounded-3xl bg-white"
          contentContainerStyle={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Text className="text-2xl">{title}</Text>
          <View className="w-4/5 gap-y-2 border-2 border-black" />
          {messages.map((message, index) => (
            <View key={index} className="flex-row items-center gap-x-2 p-4">
              <MaterialCommunityIcons
                name="alert-circle"
                size={24}
                color="black"
              />
              <Text>{message}</Text>
            </View>
          ))}
          <Pressable
            onPress={onRequestClose}
            className="w-1/2 rounded-md bg-primary p-3"
          >
            <Text className="text-center">Aceptar</Text>
          </Pressable>
        </ScrollView>
      </View>
    </Modal>
  );
}
