import { View, Image } from 'react-native'
import React from 'react'
import { Tabs, Redirect } from 'expo-router'
import { icons } from '../../constants'

const TabIcon = ({ icon, color, name, focused }) => {
  return (
    <View>
      <Image style={{ width: 20 }}
        source={icon}
        resizeMode="contain"
        className="w-6 h-6"
        tintColor={color}
      />
    </View>
  )
}

const TabLayout = () => {
  return (
    <>
      <Tabs>
        <Tabs.Screen
          name="home"
          options={{
            title: 'Home',
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={icons.home}
                color={color}
                name="Home"
                focused={focused}
              />
            )
          }}
        /> //end of Home Icon

        <Tabs.Screen
          name="message"
          options={{
            title: 'message',
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={icons.message}
                color={color}
                name="message"
                focused={focused}
              />
            )
          }}
        /> //end of message

        <Tabs.Screen
          name="search"
          options={{
            title: 'search',
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={icons.search}
                color={color}
                name="search"
                focused={focused}
              />
            )
          }}
        /> //end of Search Icon

        <Tabs.Screen
          name="profile"
          options={{
            title: 'Profile',
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={icons.profile}
                color={color}
                name="Profile"
                focused={focused}
              />
            )
          }}
        /> //end of Profile Icon

      </Tabs>
    </>
  )
}

export default TabLayout