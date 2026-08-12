import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet, Alert } from 'react-native';

export default function Estatisticas() {
  const [curtidas, setCurtidas] = useState(0);
  const [descurtidas, setDescurtidas] = useState(0);
  const [favorito, setFavorito] = useState(false);
  const [comentariosCount, setComentariosCount] = useState(0);
  const [novoComentario, setNovoComentario] = useState('');

  const handleCurtir = () => setCurtidas(curtidas + 1);

  const handleDescurtir = () => {
    if (descurtidas > 0) {
      setDescurtidas(descurtidas - 1);
    }
  };

  const toggleFavorito = () => setFavorito(!favorito);

  const handleEnviarComentario = () => {
    if (novoComentario.trim() === '') {
      Alert.alert('Atenção', 'Digite um comentário antes de enviar.');
      return;
    }
    setComentariosCount(comentariosCount + 1);
    setNovoComentario('');
    Alert.alert('Sucesso', 'Comentário enviado com sucesso!');
  };

  return (
    <View style={styles.container}>
      {/* Botões de Reação */}
      <View style={styles.acoesRow}>
        <TouchableOpacity style={styles.btnAcao} onPress={handleCurtir}>
          <Text style={styles.btnTexto}>👍 {curtidas}</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btnAcao} onPress={handleDescurtir}>
          <Text style={styles.btnTexto}>👎 {descurtidas}</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={[styles.btnAcao, favorito && styles.btnFavoritado]} 
          onPress={toggleFavorito}
        >
          <Text style={styles.btnTexto}>{favorito ? '⭐ Favorito' : '☆ Favoritar'}</Text>
        </TouchableOpacity>
      </View>

      {/* Caixa de Comentário */}
      <View style={styles.comentariosSection}>
        <Text style={styles.comentariosTitle}>Comentários ({comentariosCount})</Text>
        <TextInput
          style={styles.input}
          placeholder="Escreva um comentário..."
          value={novoComentario}
          onChangeText={setNovoComentario}
        />
        <TouchableOpacity style={styles.btnEnviar} onPress={handleEnviarComentario}>
          <Text style={styles.btnEnviarTexto}>Enviar Comentário</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    borderTopWidth: 1,
    borderTopColor: '#f0f0f0',
    paddingTop: 10,
  },
  acoesRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  btnAcao: {
    backgroundColor: '#f5f5f5',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 6,
    flex: 1,
    alignItems: 'center',
    marginHorizontal: 3,
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
  btnFavoritado: {
    backgroundColor: '#FFF8E1',
    borderColor: '#FFD54F',
  },
  btnTexto: {
    fontWeight: '600',
    fontSize: 13,
    color: '#333',
  },
  comentariosSection: {
    marginTop: 5,
  },
  comentariosTitle: {
    fontSize: 13,
    fontWeight: 'bold',
    marginBottom: 6,
    color: '#444',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 6,
    padding: 10,
    marginBottom: 8,
    backgroundColor: '#fafafa',
    fontSize: 14,
  },
  btnEnviar: {
    backgroundColor: '#007AFF',
    padding: 10,
    borderRadius: 6,
    alignItems: 'center',
  },
  btnEnviarTexto: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14,
  },
});