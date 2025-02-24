import React from "react";

import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

const Layout: React.FC = () => {
  return (
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name="index" />
          <Stack.Screen name="home" />
          <Stack.Screen name="adddata" />
        </Stack>
  
  );
};

export default Layout;
