import React from 'react';
import { StyleSheet, Text, View, FlatList, SafeAreaView, StatusBar } from 'react-native';
import Jogo from './componentes/Jogo';

const jogos = [
  { id: '1', nome: 'Minecraft', categoria: 'Sandbox', plataforma: 'PC / Mobile', descricao: 'Jogo de construção e sobrevivência em um mundo aberto de blocos.', imagem: 'https://picsum.photos/400/200?random=1', data: '01/06/2026' },
  { id: '2', nome: 'Cyberpunk 2077', categoria: 'RPG', plataforma: 'PC / Consoles', descricao: 'RPG de ação ambientado na megalópole futurista de Night City.', imagem: 'https://picsum.photos/400/200?random=2', data: '10/12/2020' },
  { id: '3', nome: 'The Witcher 3', categoria: 'RPG', plataforma: 'Multiplataforma', descricao: 'Enfrente monstros em um vasto mundo fantástico como o bruxo Geralt.', imagem: 'https://picsum.photos/400/200?random=3', data: '19/05/2015' },
  { id: '4', nome: 'GTA V', categoria: 'Ação', plataforma: 'Multiplataforma', descricao: 'Explore Los Santos na história de três criminosos interligados.', imagem: 'https://picsum.photos/400/200?random=4', data: '17/09/2013' },
  { id: '5', nome: 'Elden Ring', categoria: 'Soulslike', plataforma: 'PC / Consoles', descricao: 'Desafie chefes lendários em um mundo aberto sombrio e expansivo.', imagem: 'https://picsum.photos/400/200?random=5', data: '25/02/2022' },
  { id: '6', nome: 'Red Dead Redemption 2', categoria: 'Ação', plataforma: 'PC / Consoles', descricao: 'Uma jornada épica sobre o fim da era dos fora-da-lei nos EUA.', imagem: 'https://picsum.photos/400/200?random=6', data: '26/10/2018' },
  { id: '7', nome: 'God of War Ragnarök', categoria: 'Ação', plataforma: 'PlayStation / PC', descricao: 'Kratos e Atreus viajam pelos Nove Reinos na iminência do Ragnarök.', imagem: 'https://picsum.photos/400/200?random=7', data: '09/11/2022' },
  { id: '8', nome: 'Hollow Knight', categoria: 'Metroidvania', plataforma: 'Multiplataforma', descricao: 'Desça até o reino esquecido de Hallownest em uma aventura 2D incrível.', imagem: 'https://picsum.photos/400/200?random=8', data: '24/02/2017' },
  { id: '9', nome: 'Stardew Valley', categoria: 'Simulação', plataforma: 'Multiplataforma', descricao: 'Herde a fazenda do seu avô e construa uma nova vida no campo.', imagem: 'https://picsum.photos/400/200?random=9', data: '26/02/2016' },
  { id: '10', nome: 'Valorant', categoria: 'FPS', plataforma: 'PC / Consoles', descricao: 'Jogo de tiro tático 5v5 com agentes dotados de habilidades únicas.', imagem: 'https://picsum.photos/400/200?random=10', data: '02/06/2020' },
  { id: '11', nome: 'League of Legends', categoria: 'MOBA', plataforma: 'PC', descricao: 'Estratégia e combate dinâmico em equipe no mapa Summoner’s Rift.', imagem: 'https://picsum.photos/400/200?random=11', data: '27/10/2009' },
  { id: '12', nome: 'Overwatch 2', categoria: 'FPS', plataforma: 'Multiplataforma', descricao: 'Shooter em equipe focado em objetivos com heróis de diversas classes.', imagem: 'https://picsum.photos/400/200?random=12', data: '04/10/2022' },
  { id: '13', nome: 'EA Sports FC 25', categoria: 'Esporte', plataforma: 'Multiplataforma', descricao: 'A simulação do futebol mundial com física refinada e modos de carreira.', imagem: 'https://picsum.photos/400/200?random=13', data: '27/09/2024' },
  { id: '14', nome: 'Roblox', categoria: 'Sandbox', plataforma: 'Multiplataforma', descricao: 'Plataforma com milhões de experiências virtuais criadas por usuários.', imagem: 'https://picsum.photos/400/200?random=14', data: '01/09/2006' },
  { id: '15', nome: 'Fortnite', categoria: 'Battle Royale', plataforma: 'Multiplataforma', descricao: 'Construa, atire e seja o último sobrevivente na ilha.', imagem: 'https://picsum.photos/400/200?random=15', data: '21/07/2017' },
  { id: '16', nome: 'Celeste', categoria: 'Plataforma', plataforma: 'Multiplataforma', descricao: 'Supere desafios precisos de plataforma escalando a Montanha Celeste.', imagem: 'https://picsum.photos/400/200?random=16', data: '25/01/2018' },
  { id: '17', nome: 'Hades', categoria: 'Roguelike', plataforma: 'Multiplataforma', descricao: 'Lute contra hordas de monstros para escapar do Submundo grego.', imagem: 'https://picsum.photos/400/200?random=17', data: '17/09/2020' },
  { id: '18', nome: 'Resident Evil 4 Remake', categoria: 'Terror', plataforma: 'Multiplataforma', descricao: 'Reimaginação moderna do clássico jogo de survival horror com Leon S. Kennedy.', imagem: 'https://picsum.photos/400/200?random=18', data: '24/03/2023' },
  { id: '19', nome: 'Apex Legends', categoria: 'Battle Royale', plataforma: 'Multiplataforma', descricao: 'Jogo de tiro rápido onde lendas lutam por glória na Orla Exterior.', imagem: 'https://picsum.photos/400/200?random=19', data: '04/02/2019' },
  { id: '20', nome: 'Terraria', categoria: 'Sandbox', plataforma: 'Multiplataforma', descricao: 'Aventura 2D focada em exploração, construção e batalhas de chefes.', imagem: 'https://picsum.photos/400/200?random=20', data: '16/05/2011' },
];

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#1A1A1D" />
      
      {/* Header Fixo */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>🎮 GameStore Mobile</Text>
      </View>

      {/* Lista Otimizada */}
      <FlatList
        data={jogos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Jogo
            nome={item.nome}
            categoria={item.categoria}
            plataforma={item.plataforma}
            imagem={item.imagem}
            data={item.data}
            descricao={item.descricao}
          />
        )}
        contentContainerStyle={styles.listContent}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F2F5',
  },
  header: {
    backgroundColor: '#1A1A1D',
    paddingVertical: 18,
    paddingHorizontal: 16,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  headerTitle: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: 'bold',
    letterSpacing: 0.5,
  },
  listContent: {
    padding: 16,
  },
});