import { Tabs } from 'expo-router'
import { View, Text } from 'react-native'
import {Ionicons,} from "@expo/vector-icons"
import React from 'react'

const TabsLayout = () => {
  return (
    <Tabs screenOptions={{
        tabBarActiveTintColor: "orange",
        tabBarInactiveTintColor: "grey",
        tabBarStyle: {
            backgroundColor: "#090e21"
        },
        headerShown: false,
    }}>
        <Tabs.Screen 
            name='index'
            options={{
                title: "Todos",
                tabBarIcon: ({color,size}) => (
                    <Ionicons name="flash-outline" size={size} color={color} />
                )
            }}
        />
        <Tabs.Screen 
            name='settings'
            options={{
                title: "Settings",
                tabBarIcon: ({color,size}) => (
                    <Ionicons name="settings" size={size} color={color} />
                )
            }}
        />
    </Tabs>
  )
}

export default TabsLayout