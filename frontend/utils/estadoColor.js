// Colores del punto de presencia según el estado combinado
// (Ausente = desconectado; los demás son la disponibilidad manual del usuario)
export function colorPorEstado(estado) {
  switch (estado) {
    case "Ocupado":
      return "#FF9F0A";
    case "No molestar":
      return "#E60023";
    case "Ausente":
      return "#8A8A8A";
    case "Disponible":
    default:
      return "#30D158";
  }
}