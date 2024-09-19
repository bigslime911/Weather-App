import { View, Text, SafeAreaView, TextInput, TouchableOpacity} from 'react-native'
import React , {useState}from 'react'
import { StatusBar } from 'expo-status-bar'
import { Image } from 'react-native'
import {CalendarDaysIcon, MagnifyingGlassIcon} from 'react-native-heroicons/outline'
import { MapPinIcon } from'react-native-heroicons/solid'

const HomeScreen = () => {
  const [showSearch, toggleSearch] = useState(false);
  const [location,setlocation]= useState([1,2,3]);


  const handleLocation = (loc) => {
    console.log('location : ', loc)
  }

  return (
    <View className='flex-1 relative'>
      <StatusBar style='light'/>  
      <Image blurRadius={70} source={require('../Images/bg.png')} className='absolute h-full w-full'/>
      <SafeAreaView className= 'flex flex-1'> 
        {/* Search Section */}
        <View style={{height: "7%"}} className="mx-4 relative z-50" >
          <View className='flex-row justify-end items-center rounded-full ' style={{backgroundColor: showSearch ? '#f4f7fa36' : 'transparent'}}>
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
          {
            location.length > 0 && showSearch ? (
              <View className='absolute w-full bg-gray-300 top-16 rounded-3xl'>
                {
                  location.map((loc , index)=>{
                    let showBorder = index +1 != location.length;
                    let borderClass = showBorder ? 'border-b-2 border-b-gray-400': '';
                    return(
                      <TouchableOpacity
                      onPress={()=> handleLocation (loc)}
                      key={index}
                      className={'flex-row items-center border-0 p-3 px-4 ' + borderClass}>
                        <MapPinIcon size='24' color='gray'/>
                        <Text className='text-black text-lg ml-2'>
                          London, United Kingdom
                        </Text>
                      </TouchableOpacity>
                    )
                  })
                }

              </View>
            ): null
          }

        </View>
        {/* forecast Section */}
        <View className='mx-4 flex justify-around flex-1 mb-2'>
          {/* location  */}
          <Text className='text-white text-center text-2xl font-bold'>
            London
            <Text className='text-gray-300 text-lg font-semibold'>,United Kingdom</Text>
          </Text>
          {/* weather  image */}
          <View className='flex-row justify-center'>
            <Image source={require('../Images/partlycloudy.png')} className='h-52 w-52' />
            
          </View >
          {/* degree Celicus */}
          <View className='space-y-2'>
            <Text className='text-center font-bold text-white text-6xl ml-2'>
              23&#176;
            </Text>
            <Text className='text-center  text-white text-xl ml-2 tracking-widest' >
              Partly Cloudy;
            </Text>

          </View>
          {/* Other Stats */}
          <View className='flex-row justify-between mx-4'>
            <View className='flex-row space-x-2 items-center'>
              <Image source={require('../Images/wind.png')} className='h-6 w-6'/>
              <Text className='text-white font-semibold text-base'>
                22km
              </Text>

            </View>
            <View className='flex-row space-x-2 items-center'>
              <Image source={require('../Images/drop.png')} className='h-6 w-6'/>
              <Text className='text-white font-semibold text-base'>
                23%
              </Text>

            </View>
            <View className='flex-row space-x-2 items-center'>
              <Image source={require('../Images/sun.png')} className='h-6 w-6'/>
              <Text className='text-white font-semibold text-base'>
                6:O5 AM              
              </Text>

            </View>

          </View>
        
        </View>

        {/* Forcast sectio */}
        <View className='mb-2 space-y-3'>
          <View className='flex-row items-center mx-5 space-x-2'>
            <CalendarDaysIcon size='22' color='white'/>
            <Text className='text-white text-base'>
              Daily Forecast
            </Text>

          </View>
        </View>

      </SafeAreaView>
      
    </View>
    
    
  )
}

export default HomeScreen