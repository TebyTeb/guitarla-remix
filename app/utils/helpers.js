export const formatDate = fecha => {
  const date = new Date(fecha)
  const options = {
    year: 'numeric',
    month: 'long',
    day: '2-digit'
  }
  return date.toLocaleDateString('es-ES', options)
}