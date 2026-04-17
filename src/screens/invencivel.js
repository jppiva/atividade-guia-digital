import { View, Text, StyleSheet } from 'react-native';

export default function contatoScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Tela contato</Text>
      <Text style={styles.subtitle}>Ajuste suas preferências</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000000',
  },
  emoji: {
    fontSize: 48,
    marginBottom: 12,
  },
  text: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1e40af',
  },
  subtitle: {
    fontSize: 16,
    color: '#64748b',
    marginTop: 8,
  },
}); 