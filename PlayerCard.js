import React from 'react';
import { Image, ScrollView, StyleSheet, Text} from 'react-native';
import { Card, Container, Content, Icon, Header, Footer, View } from 'native-base'
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';

export default function PlayerCard ({ name, picture, color, price}) {
  return (
    <Card style={{ position: 'relative', width: 140, paddingBottom: 20}}>
            <View style={{backgroundColor: color, width: 140}}>
            <Image
              style={{width: 120, height: 120, marginLeft: 10}}
              source={{uri: picture}}
            />
            </View>
            <Text style={{ fontWeight: 'bold'}}>{name}</Text>
            <Text style={{ fontSize: 12}}>SMB@MAG 6pm</Text>
            <View style={{ left: 90, right: 0, top: 100, bottom: 0, position: 'absolute',    width: 40,
    height: 40,
    borderRadius: 100/2,
    backgroundColor: 'white', justifyContent: 'center', alignItems: 'center', shadowOpacity: 1}}>
             <Icon name='ios-add'></Icon>
            </View>

            <View style={{ left: 0, right: 0, top: 0, bottom: 0, position: 'absolute', padding: 5}}>
              <Text style={{ color: 'white'}}>{price}</Text>
              <Text style={{ color: 'white'}}>SF</Text>
            </View>
            <View style={{ left: 110, right: 0, top: 0, bottom: 0, position: 'absolute', padding: 5}}>
              <Text style={{ color: 'white', fontSize: 12}}>29.4</Text>
              <Text style={{ color: 'white', fontSize: 8}}>PTS/G</Text>
            </View>
            
          </Card>
  )
}