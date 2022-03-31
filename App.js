import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import Chat from './src/screens/Chat';
import DoctorProfileScreen from './src/screens/DoctorProfileScreen';
import DoctorsScreen from './src/screens/DoctorsScreen';
import HomeScreen from './src/screens/HomeScreen';
import SignInScreen from './src/screens/SignInScreen';
import SignUpScreen from './src/screens/SignUpScreen';

export default function App() {
  return (
    <SignInScreen />
  );
}


