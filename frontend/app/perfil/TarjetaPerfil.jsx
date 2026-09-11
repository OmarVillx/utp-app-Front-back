import { Image, Text, View } from "react-native";
import styles from "./cssTarjetaPerfil";
import { useChat } from "../../hooks/useChat";
import { colorPorEstado } from "../../utils/estadoColor";

export default function TarjetaPerfil({ usuario }) {
  const isPrivado = usuario.privado === true || usuario.privado === "true";
  const { disponibilidad } = useChat();

  return (
    <View style={styles.container}>
      <View style={styles.avatarContainer}>
        <View style={styles.avatar}>
          {usuario.foto_perfil ? (
            <Image source={{ uri: usuario.foto_perfil }} style={styles.avatarImage} />
          ) : (
            <Text style={styles.avatarInitial}>
              {usuario.username ? usuario.username.charAt(0).toUpperCase() : ""}
            </Text>
          )}
        </View>
        <View
          style={[
            styles.statusDot,
            { backgroundColor: colorPorEstado(disponibilidad) },
          ]}
        />
      </View>

      <Text style={styles.username}>{usuario.username}</Text>
      <Text style={styles.carrera}>
        {usuario.carrera}{!isPrivado && usuario.ciclo ? ` • ${usuario.ciclo}` : ""}
      </Text>

      {!isPrivado && usuario.bio ? (
        <View style={styles.bioContainer}>
          <Text style={styles.comillas}>"</Text>
          <Text style={styles.bio}>{usuario.bio}</Text>
        </View>
      ) : null}
    </View>
  );
}