import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import Estatisticas from './Estatisticas';

export default function Jogo({ nome, categoria, plataforma, imagem, data, descricao }) {
  const [exibirDescricao, setExibirDescricao] = useState(false);

  return (
    <View style={styles.card}>
      <Image source={{ uri: imagem }} style={styles.imagem} resizeMode="cover" />
      
      <View style={styles.conteudo}>
        <Text style={styles.nome}>{nome}</Text>
        
        <View style={styles.tagContainer}>
          <Text style={styles.tag}>{categoria}</Text>
          <Text style={styles.tagPlataforma}>{plataforma}</Text>
        </View>

        <Text style={styles.data}>Lançamento: {data}</Text>

        <TouchableOpacity 
          style={styles.btnToggle} 
          onPress={() => setExibirDescricao(!exibirDescricao)}
        >
          <Text style={styles.btnToggleTexto}>
            {exibirDescricao ? '▲ Ocultar Descrição' : '▼ Mostrar Descrição'}
          </Text>
        </TouchableOpacity>

        {exibirDescricao && (
          <Text style={styles.descricao}>{descricao}</Text>
        )}

        <Estatisticas />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    marginBottom: 16,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 6,
    elevation: 3,
  },
  imagem: {
    width: '100%',
    height: 160,
  },
  conteudo: {
    padding: 16,
  },
  nome: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1a1a1a',
    marginBottom: 6,
  },
  tagContainer: {
    flexDirection: 'row',
    gap: 8,
    marginBottom: 8,
  },
  tag: {
    backgroundColor: '#E3F2FD',
    color: '#1976D2',
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 4,
    fontSize: 12,
    fontWeight: '600',
  },
  tagPlataforma: {
    backgroundColor: '#E8F5E9',
    color: '#388E3C',
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 4,
    fontSize: 12,
    fontWeight: '600',
  },
  data: {
    fontSize: 12,
    color: '#777',
    marginBottom: 6,
  },
  btnToggle: {
    paddingVertical: 6,
  },
  btnToggleTexto: {
    color: '#007AFF',
    fontWeight: '600',
    fontSize: 13,
  },
  descricao: {
    fontSize: 14,
    color: '#555',
    lineHeight: 20,
    marginTop: 4,
    marginBottom: 8,
    backgroundColor: '#F9F9F9',
    padding: 8,
    borderRadius: 6,
  },
});