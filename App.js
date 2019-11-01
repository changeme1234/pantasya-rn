import React from 'react';
import { Image, ScrollView, StyleSheet, Text} from 'react-native';
import { Button, Card, Container, Content, Icon, Header, Footer, View } from 'native-base'
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import PlayerCard from './PlayerCard';


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isReady: false,
    };
  }

  async componentDidMount() {
    await Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      ...Ionicons.font,
    });
    this.setState({ isReady: true });
  }

  render() {
    if (!this.state.isReady) {
      return <Text/>;
    }

    return (
      <Container>
        <Header />
        <Content contentContainerStyle={{}}>
          <ScrollView style={{ flexDirection: 'row'}} horizontal={true}>
            <View>
              <PlayerCard {...players.one}/>
              <PlayerCard {...players.two}/>
            </View>
            <View>
              <PlayerCard {...players.three}/>
              <PlayerCard {...players.four}/>
            </View>
            <View>
              <PlayerCard {...players.five}/>
              <PlayerCard {...players.six}/>
            </View>
            <View>
              <PlayerCard {...players.seven}/>
              <PlayerCard {...players.eight}/>
            </View>
            <View>
              <PlayerCard {...players.nine}/>
              <PlayerCard {...players.ten}/>
            </View>
            <View>
              <PlayerCard {...players.eleven}/>
       
            </View>
    
          </ScrollView>

         <View style={{flexDirection: 'row', alignSelf: 'center', marginTop: 20}}>
           <View style={{ alignItems: 'center'}}>
             <Text>PG</Text>
            <View style={{...styles.circle, height:60, width:60, backgroundColor: '#38CF6A'}}>
              <Image source={{uri: 'https://image.flaticon.com/icons/png/512/177/177701.png'}} style={{  width: 55, height: 55, resizeMode: 'contain'}}></Image>
            </View>
           </View>
      
           <View style={{ alignItems: 'center'}}>
             <Text>SG</Text>
            <View style={styles.circle}>
              <Image source={{uri: 'https://image.flaticon.com/icons/png/512/177/177701.png'}} style={{  width: 45, height: 45, resizeMode: 'contain'}}></Image>
            </View>
           </View>
           <View style={{ alignItems: 'center'}}>
             <Text>SF</Text>
            <View style={styles.circle}>
              <Image source={{uri: 'https://image.flaticon.com/icons/png/512/177/177701.png'}} style={{  width: 45, height: 45, resizeMode: 'contain'}}></Image>
            </View>
           </View>
           <View style={{ alignItems: 'center'}}>
             <Text>PF</Text>
            <View style={styles.circle}>
              <Image source={{uri: 'https://image.flaticon.com/icons/png/512/177/177701.png'}} style={{  width: 45, height: 45, resizeMode: 'contain'}}></Image>
            </View>
           </View>
           <View style={{ alignItems: 'center'}}>
             <Text>C</Text>
            <View style={styles.circle}>
              <Image source={{uri: 'https://image.flaticon.com/icons/png/512/177/177701.png'}} style={{  width: 45, height: 45, resizeMode: 'contain'}}></Image>
            </View>
           </View>
           
         </View>
         <View style={{ borderBottomWidth: '10', width: '95%', alignSelf: 'center', borderColor: '#FAFAFA', marginTop: 20}} />
         <View style={{ alignItems: 'center', marginTop: 20}}>
          <Button style={{ alignItems: 'center', justifyContent: 'center', width: '90%', backgroundColor: '#B2D8FE'}}>
            <Text style={{ color: 'white', fontWeight: 'bold'}}>SUBMIT</Text>
          </Button>
         </View>
       
        </Content>
        
        <Footer></Footer>
      </Container>
    );
  }
}

const players = {
  one: {
    name: 'T. Romeo',
    picture: 'https://dashboard.pba.ph/assets/players/smb-romeo19.png',
    color: '#E3040F',
    price: '70k'
  },
  two: {
    name: 'La Tenorio',
    picture: 'https://dashboard.pba.ph/assets/players/gin-tenorio18.png',
    color: '#E20125',
    price: '72k'
  },
  three: {
    name: 'K. Ravena',
    picture: 'https://dashboard.pba.ph/assets/players/nlx-ravena18.png',
    color: '#074C8A',
    price: '66k'
  },
  four: {
    name: 'CJ Perez',
    picture: 'https://dashboard.pba.ph/assets/players/col-perez2019.png',
    color: '#006200',
    price: '62k'
  },
  five: {
    name: 'R. Bolick',
    picture: 'https://dashboard.pba.ph/assets/players/nor-bolick19.png',
    color: '#52F71D',
    price: '55k'
  },
  six: {
    name: 'B. Amer',
    picture: 'https://dashboard.pba.ph/assets/players/mer-amer18.png',
    color: '#F37C35',
    price: '49k'
  },
  seven: {
    name: 'C. Banchero',
    picture: 'https://dashboard.pba.ph/assets/players/ala-Banchero.png',
    color: '#E80005',
    price: '47k'
  },
  eight: {
    name: 'A. Cabagnot',
    picture: 'https://dashboard.pba.ph/assets/players/smb-Cabagnot.png',
    color: '#E3040F',
    price: '45k'
  },
  nine: {
    name: 'C. Ross',
    picture: 'https://dashboard.pba.ph/assets/players/smb-Ross.png',
    color: '#E3040F',
    price: '42k'
  },
  ten: {
    name: 'S. Thompson',
    picture: 'https://dashboard.pba.ph/assets/players/gin-thompson18.png',
    color: '#E20125',
    price: '40k'
  },
  eleven: {
    name: 'J. Jalalon',
    picture: 'https://dashboard.pba.ph/assets/players/mag-jalalon18.png',
    color: '#FCD900',
    price: '38k'
  }
}

const styles = {
  circle: {
    width: 50,
    height: 50,
    borderRadius: 100/2,
    backgroundColor: '#DCE4F1',
    justifyContent: 'center', alignItems: 'center',
}
}