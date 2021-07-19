import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Dimensions,
  ImageBackground,
  SafeAreaView,
  Image,
  TouchableWithoutFeedback,
  ScrollView,
  TouchableOpacity,
  TouchableNativeFeedback,
  Linking,
} from 'react-native';
import {colors} from '../../utils/colors';
import {fonts} from '../../utils/fonts';
import {getData} from '../../utils/localStorage';
import {Icon} from 'react-native-elements';
import MyCarouser from '../../components/MyCarouser';
import MyNews from '../../components/MyNews';
import MyKategori from '../../components/MyKategori';
import axios from 'axios';
import MyCarouser2 from '../../components/MyCarouser2';

export default function Home({navigation}) {
  const images = [
    {
      image:
        'https://images.bisnis-cdn.com/posts/2019/09/27/1153079/rruk-dynamix2.jpg',
    },
    {
      image: 'https://kipmi.or.id/wp-content/uploads/2017/01/molen-kecil.jpg',
    },
    {
      image: 'https://kipmi.or.id/wp-content/uploads/2016/11/beton8.jpg',
    },
  ];

  const [user, setUser] = useState([]);
  const [token, setToken] = useState('');

  useEffect(() => {
    getData('user').then(res => {
      console.log(res);
      setUser(res);
      getData('token').then(res => {
        console.log('data token,', res);
        setToken(res.token);
      });
    });
    axios
      .post('https://zavalabs.com/mylaundry/api/update_token.php', {
        id_member: user.id,
        token: token,
      })
      .then(res => {
        console.log('update token', res);
      });
  }, []);

  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;
  const ratio = 192 / 108;
  const _renderItem = ({item, index}) => {
    return (
      <Image
        resizeMode="contain"
        source={{uri: item.image}}
        style={{
          width: windowWidth,
          height: Math.round((windowWidth * 9) / 16),
        }}
      />
    );
  };
  return (
    <ImageBackground
      style={{
        flex: 1,
      }}>
      <ScrollView>
        <View
          style={{
            backgroundColor: colors.white,
            flexDirection: 'row',
            paddingHorizontal: 10,
          }}>
          <View style={{flex: 1}}>
            <Image
              source={require('../../assets/logo.png')}
              style={{width: 200, resizeMode: 'contain'}}
            />
          </View>

          <Text
            style={{
              fontSize: windowWidth / 20,
              fontFamily: fonts.secondary[600],
            }}>
            19 Juli 2021
          </Text>
        </View>
        <View
          style={{
            padding: 10,
            backgroundColor: colors.white,
            flexDirection: 'row',
          }}>
          <View style={{flex: 1}}>
            <Text
              style={{
                fontSize: windowWidth / 25,
                color: colors.black,
                fontFamily: fonts.secondary[400],
              }}>
              Hallo, Selamat Bekerja
            </Text>
            <Text
              style={{
                fontSize: windowWidth / 22,
                color: colors.black,
                fontFamily: fonts.secondary[600],
              }}>
              {user.nama_lengkap}
            </Text>
          </View>

          <TouchableOpacity
            onPress={() => navigation.navigate('Cart')}
            style={{
              padding: 20,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Icon
              type="ionicon"
              name="notifications-outline"
              color={colors.black}
            />
          </TouchableOpacity>
        </View>
        <View style={{flex: 1, padding: 10}}>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              padding: 10,
            }}>
            <Text
              style={{
                fontSize: windowWidth / 20,
                fontFamily: fonts.secondary[600],
                color: colors.primary,
              }}>
              E Material
            </Text>
          </View>
          <TouchableOpacity
            style={{
              backgroundColor: colors.secondary,
              padding: 20,
              marginVertical: 5,
              borderRadius: 10,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text
              style={{
                fontSize: windowWidth / 25,
                fontFamily: fonts.secondary[600],
              }}>
              Material Baru
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: colors.secondary,
              padding: 20,
              marginVertical: 5,
              borderRadius: 10,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text
              style={{
                fontSize: windowWidth / 25,
                fontFamily: fonts.secondary[600],
              }}>
              Material Return
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: colors.secondary,
              padding: 20,
              marginVertical: 5,
              borderRadius: 10,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text
              style={{
                fontSize: windowWidth / 25,
                fontFamily: fonts.secondary[600],
              }}>
              Material Keluar
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: colors.secondary,
              padding: 20,
              marginVertical: 5,
              borderRadius: 10,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text
              style={{
                fontSize: windowWidth / 25,
                fontFamily: fonts.secondary[600],
              }}>
              Report Data Material
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </ImageBackground>
  );
}
