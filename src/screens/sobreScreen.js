import { View, Text, StyleSheet } from 'react-native';

export default function sobreScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.emoji}>ℹ️</Text>
      <Text style={styles.text}>GUIA DIGITAL DE FILMES E SÉRIES </Text>
      <Text style={styles.subtitle}>O objetivo do app é ajudar usuários a encontrar filmes e séries interessantes, com informações detalhadas e navegação simples.
</Text>
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
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1e40af',
  },
  subtitle: {
    fontSize: 18,
    color: '#64748b',
    marginTop: 8,
    marginLeft:45,
  },
});    