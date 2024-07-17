// import { StatusBar } from "expo-status-bar";
import * as React from 'react';
import AppNavigation from './src/navigation/Entrypoints/index';
import {AuthProvider} from './src/utils/auth';

export default function App() {
  return (
    <AuthProvider>
      <AppNavigation />
    </AuthProvider>
  );
}
