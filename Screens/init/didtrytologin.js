import React , {useEffect,useState} from 'react';
import {View,ActivityIndicator,StyleSheet} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
// import { LinearGradient } from 'expo-linear-gradient';
import Colors from '../../Constants/Colors';
import { useSelector,useDispatch } from 'react-redux';
import * as authActions from '../../Store/Actions/auth';

const StartupScreen = props =>{
    const dispatch = useDispatch();
    useEffect(() =>{
        const tryLogin = async () =>{
            const userData = await AsyncStorage.getItem('userData');
            if(!userData){
                dispatch(authActions.setDidTryAl());
                return;
            }
            const transformedData= JSON.parse(userData);
            const {token,userId,expiryDate} = transformedData;
            const expirationDate = new Date(expiryDate);
            if(expirationDate <= new Date()||!token||!userId){
                dispatch(authActions.setDidTryAl());
                return;
            }
            const expirationTime = expirationDate.getTime() - new Date().getTime();
            dispatch(authActions.authenticate(userId,token,expirationTime));
        }
        tryLogin();
    },[dispatch])
    return (
        <View>
            <ActivityIndicator size='large' colors={Colors.primary}/>
        </View>
    )
}
const styles = StyleSheet.create({
    screen: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    }
  });
  export default StartupScreen;