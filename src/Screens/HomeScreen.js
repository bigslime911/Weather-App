import { View, Text, SafeAreaView, TextInput, TouchableOpacity} from 'react-native'
import React , {useState}from 'react'
import { StatusBar } from 'expo-status-bar'
import { Image } from 'react-native'
import {MagnifyingGlassIcon} from 'react-native-heroicons/outline'

const HomeScreen = () => {
  const [showSearch, toggleSearch] = useState(false);
  return (
    <View className='flex-1 relative'>
      <StatusBar style='light'/>  
      <Image blurRadius={70} source={require('../Images/bg.png')} className='absolute h-full w-full'/>
      <SafeAreaView className= 'flex flex-1'> 
        {/* Search Section */}
        <View style={{height: "7%"}} className="mx-4 relative z-50" >
          <View className='flex-row justify-end items-center rounded-full bg-[#f4f7fa36]'>
            {showSearch ? (
              <TextInput 
              placeholder='Search City' 
              placeholderTextColor='lightgray'
              className='pl-6 h-10 pb-1 flex-1 text-base text-white '
              />
            ): null }
          
          <TouchableOpacity 
          onPress={()=>toggleSearch(!showSearch)}
          className='rounded-full p-3 m-1 bg-[#f4f7fa36]'
          >
            <MagnifyingGlassIcon size='25' color='white'/>

          </TouchableOpacity>

          </View>

        </View>

      </SafeAreaView>
      
    </View>
    
    
  )
}

export default HomeScreen