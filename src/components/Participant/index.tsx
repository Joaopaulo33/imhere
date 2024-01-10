import { Text, TouchableOpacity, View } from "react-native";

import { styles } from "./styles";
interface participantData {
  name: string;
  onRemove: () => void;
}
export function Participant(props: participantData) {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{props.name}</Text>

      <TouchableOpacity style={styles.button} onPress={props.onRemove}>
        <Text style={styles.buttonText}>-</Text>
      </TouchableOpacity>
    </View>
  );
}
