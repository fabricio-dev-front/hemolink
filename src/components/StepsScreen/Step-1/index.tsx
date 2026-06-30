import { Image } from 'expo-image';
import { StyleSheet, Text, View } from 'react-native';

export function Step1() {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.text}>
          Cada doação pode salvar até{' '}
          <Text style={styles.textRed}>4 vidas!</Text>
        </Text>
        <Text style={styles.subtitle}>
          Um pequeno gesto pode gerar um impacto gigante.{' '}
        </Text>
      </View>

      <Image
        source={require('../../../assets/img/hand-blood.png')}
        style={styles.image}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    overflow: 'hidden',
  },
  textContainer: {
    maxWidth: 315,
  },
  image: {
    width: 400,
    height: 450,
  },
  text: {
    fontSize: 24,
    fontWeight: '600',
    textAlign: 'center',
    color: '#000000',
    maxWidth: 315,
    marginTop: 45,
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    fontWeight: 500,
    color: '#555555',
  },
  textRed: {
    color: '#E31B23',
  },
});
