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
import {MyButton, MyGap} from '../../components';

export default function Home({navigation}) {
  const monthNames = [
    'Januari',
    'Februari',
    'Maret',
    'April',
    'Mei',
    'Juni',
    'Juli',
    'Agustus',
    'September',
    'Oktober',
    'November',
    'Desember',
  ];

  var days = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];

  const Today = new Date();
  const hari = String(days[Today.getDay()]);
  const dd = String(Today.getDate()).padStart(2, '0');
  const mm = String(monthNames[Today.getMonth()]); //January is 0!
  const yyyy = Today.getFullYear();
  const jam = Today.getHours();
  const menit = Today.getMinutes();
  const detik = Today.getUTCSeconds();
  const today = `${hari}, ${dd} ${mm} ${yyyy}`;

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
          <View style={{flex: 1, flexDirection: 'row'}}>
            <View>
              <Image
                source={require('../../assets/logo.png')}
                style={{width: 150, resizeMode: 'contain'}}
              />
            </View>
            <View
              style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'flex-end',
              }}>
              <Icon
                type="ionicon"
                name="calendar-outline"
                color={colors.black}
              />
              <Text
                style={{
                  fontSize: windowWidth / 27,
                  fontFamily: fonts.secondary[600],
                  color: colors.primary,
                }}>
                {today}
              </Text>
            </View>
          </View>
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
              Hallo , Selamat Bekerja
            </Text>

            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Icon
                type="ionicon"
                size={windowWidth / 22}
                name="person"
                color={colors.black}
              />
              <Text
                style={{
                  left: 10,
                  fontSize: windowWidth / 22,
                  color: colors.black,
                  fontFamily: fonts.secondary[600],
                }}>
                {user.nama_lengkap}
              </Text>
            </View>
          </View>
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
              <Icon
                type="ionicon"
                size={windowWidth / 22}
                name="cube-outline"
                color={colors.black}
              />{' '}
              E Material{' '}
              <Icon
                type="ionicon"
                size={windowWidth / 22}
                name="cube-outline"
                color={colors.black}
              />
            </Text>
          </View>
          <View
            style={{
              flex: 1,
            }}>
            <MyButton
              onPress={() => navigation.navigate('MaterialNew')}
              title="Material Baru"
              colorText={colors.black}
              warna={colors.secondary}
              iconColor={colors.black}
              Icons="newspaper-outline"
            />
            <MyGap jarak={15} />
            <MyButton
              onPress={() => navigation.navigate('MaterialReturn')}
              title="Material Return"
              colorText={colors.black}
              warna={colors.secondary}
              iconColor={colors.black}
              Icons="arrow-undo-outline"
            />
            <MyGap jarak={15} />
            <MyButton
              onPress={() => navigation.navigate('MaterialKeluar')}
              title="Material Keluar"
              colorText={colors.black}
              warna={colors.secondary}
              iconColor={colors.black}
              Icons="exit-outline"
            />
            <MyGap jarak={15} />
            <MyButton
              onPress={() => navigation.navigate('MaterialReport')}
              title="Report Data Material"
              colorText={colors.black}
              warna={colors.secondary}
              iconColor={colors.black}
              Icons="bar-chart-outline"
            />
          </View>
        </View>
      </ScrollView>
    </ImageBackground>
  );
}
