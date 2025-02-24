import React from "react";
import { Provider } from "react-redux";
import {persistor, store} from '../redux/Store'
import { PersistGate } from "redux-persist/integration/react";
import { StatusBar } from "expo-status-bar";
import { Stack } from "expo-router";

const Layout: React.FC = () => {
  return (
    <Provider store={store}>
       <PersistGate loading={null}  persistor={persistor}>
       <StatusBar style="dark" backgroundColor="white" translucent={false}/>
       <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name="index" />
          <Stack.Screen name="home" />
          <Stack.Screen name="adddata" />
        </Stack>
       </PersistGate>
    </Provider>
  );
};

export default Layout;
