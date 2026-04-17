import { View, Text, StyleSheet } from 'react-native';

export default function contatoScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.emoji}>📞</Text>
      <Text style={styles.text}>Qualquer Duvida</Text>
      <Text style={styles.subtitle}>☎️ (19) 99339-1877</Text>
      <Text style={styles.subtitle}>📧 joaopedropiva17@gmail.com</Text>
      <Text style={styles.subtitle}>🌐 @jppiva17</Text>
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