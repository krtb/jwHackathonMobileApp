import React from 'react';
import { StyleSheet, Text, ScrollView, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Home = ({navigation}) => {
    return (
        <View >
           <Text> Home </Text>
            <Button
                title="View Your Videos Playlist"
                onPress={() => navigation.navigate('VideosList')}
            />
            <Button
                title="View Your Players Playlist"
                onPress={() => navigation.navigate('PlayersList')}
            />
        </View>
    )
}

export default Home
