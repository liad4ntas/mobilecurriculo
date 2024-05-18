import * as React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StatusBar } from 'expo-status-bar';
import Icon from 'react-native-vector-icons/Ionicons';

// Home Screen Component
function HomeScreen() {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://i.natgeofe.com/n/2a832501-483e-422f-985c-0e93757b7d84/6_4x3.jpg?w=1436&h=1078' }} 
        style={styles.image}
      />
      <Text style={styles.text}>
        Olá, meu nome é Anna Cecília Cintra e estudo ADS no senac, na turma TADS027!
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}

// educação
function EducacaoScreen() {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://www.adorama.com/alc/wp-content/uploads/2018/11/landscape-photography-tips-yosemite-valley-feature.jpg' }} 
        style={styles.image}
      />
      <Text style={styles.text}>
        2014-2017 {'\n'}
        IFPE{'\n'}
        Saneamento Ambiental{'\n'}{'\n'}{'\n'}
        2020.2-2021.2{'\n'}
        POLI{'\n'}
      Curso trancado de Engenharia Mecânica{'\n'}{'\n'}{'\n'}
      2023.1-2025.1 (expectativa){'\n'}
      SENAC + Residência On Board Porto Digital{'\n'}
      Análise e Desenvolvimento de Sistemas{'\n'}{'\n'}{'\n'}{'\n'}
      Adicionais:{'\n'}
      Fluência em Inglês
    
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}

// educação
function EventosScreen() {
  return (
    <View style={styles.container}>
       <Image
        source={{ uri: 'https://media.istockphoto.com/id/1296913338/photo/sonoran-sunset.webp?b=1&s=170667a&w=0&k=20&c=XMjyEdHO1dkwK8RFWKaqXhd6mEGy-ziav2AnwCZ83u4=' }} 
        style={styles.image}
      />
      <Text style={styles.text}>
        2023.1{'\n'}
        Participação no evento de inovação Hacker Cidadão 10.0{'\n'}{'\n'}{'\n'}
        2023.2{'\n'}
        Participação com Excelência no evento Grand Prix de Inovação Senai{'\n'}{'\n'}{'\n'}
        2024.1{'\n'}
        Em breve...
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;

            if (route.name === 'Tela Inicial') {
              iconName = 'home-outline';
            } else if (route.name === 'Educação') {
              iconName = 'book-outline';
            } else if (route.name === 'Eventos') {
              iconName = 'calendar-outline';
            }

            // You can return any component that you like here!
            return <Icon name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#ffd1df',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen name="Tela Inicial" component={HomeScreen} />
        <Tab.Screen name="Educação" component={EducacaoScreen} />
        <Tab.Screen name="Eventos" component={EventosScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffd1df',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 60
  },
  image: {
    width: 200,  
    height: 200, 
    marginBottom: 20 
  },
  text: {
    textAlign: 'center',  // Centers text within the Text component
    padding: 10  // Adds space inside the Text component
  }
});
