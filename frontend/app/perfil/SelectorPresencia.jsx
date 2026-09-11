import { useChat } from "../../hooks/useChat";
import { Text, TouchableOpacity, View } from "react-native";

const OPCIONES = [
  { valor: "Disponible", color: "#30D158" },
  { valor: "Ocupado", color: "#FF9F0A" },
  { valor: "No molestar", color: "#E60023" },
];

export default function SelectorPresencia() {
  const { disponibilidad, cambiarDisponibilidad } = useChat();

  return (
    <View
      style={{
        flexDirection: "row",
        marginHorizontal: 20,
        marginTop: 12,
        marginBottom: 4,
        backgroundColor: "#1A1A1A",
        borderRadius: 12,
        padding: 4,
      }}
    >
      {OPCIONES.map((op) => {
        const activo = disponibilidad === op.valor;
        return (
          <TouchableOpacity
            key={op.valor}
            onPress={() => cambiarDisponibilidad(op.valor)}
            style={{
              flex: 1,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              paddingVertical: 9,
              borderRadius: 9,
              backgroundColor: activo ? "#2A2A2A" : "transparent",
              gap: 5,
            }}
          >
            <View
              style={{
                width: 8,
                height: 8,
                borderRadius: 4,
                backgroundColor: op.color,
              }}
            />
            <Text
              style={{
                color: activo ? "#FFF" : "#888",
                fontSize: 12,
                fontWeight: activo ? "700" : "500",
              }}
              numberOfLines={1}
            >
              {op.valor}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}