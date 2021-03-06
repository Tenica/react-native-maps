import React, { useContext } from 'react';
import  { View, StyleSheet, TouchableOpacity } from 'react-native';
import { NavigationEvents } from 'react-navigation';
import { Context as AuthContext } from '../context/AuthContext';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';


const SignupScreen = ({ navigation }) => {
    const {state, signup, clearErrorMessage} =  useContext(AuthContext);
   


  console.log(state);


   
    
    return (
        <View style={styles.container}> 
        <NavigationEvents 
        onWillFocus={clearErrorMessage}/>
        <AuthForm 
        headerText="Sign Up for Tracker"
        errorMessage={state.errorMessage}
        submitButtonText="Sign Up"
        onSubmit={( {email, password}) => signup({email, password})}
        />
       <NavLink
           routeName="Signin"
           text="Already have an account? Sign In instead" />
        </View>
        );
};

SignupScreen.navigationOptions = () => {
    return {
        headerShown: false,
    };
};

const styles = StyleSheet.create({
  container: {
      
      flex: 1,
      justifyContent: 'center',
      marginBottom: 200
  },
  
  
})
 
export default SignupScreen