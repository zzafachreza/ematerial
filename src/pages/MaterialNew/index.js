import React, {useState} from 'react';
import {StyleSheet, Text, View, SafeAreaView} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {MyInput, MyGap, MyButton} from '../../components';
import {colors} from '../../utils/colors';
import DatePicker from 'react-native-date-picker';
import {Icon} from 'react-native-elements';
import {fonts} from '../../utils/fonts';
import axios from 'axios';
import {showMessage} from 'react-native-flash-message';
import LottieView from 'lottie-react-native';

export default function MaterialNew({navigation}) {
  const Today = new Date();
  const dd = String(Today.getDate()).padStart(2, '0');
  const mm = String(Today.getMonth() + 1).padStart(2, '0'); //January is 0!
  const yyyy = Today.getFullYear();
  const today = `${yyyy}-${mm}-${dd}`;

  const [date, setDate] = useState(Today);
  const [loading, setLoading] = useState(false);
  const [kirim, setKirim] = useState({
    tanggal: date,
    nama_penerima: null,
    jenis_material: null,
    kode_material: null,
    kondisi_material: null,
    jumlah_material: null,
  });

  const sendServer = () => {
    console.log('krim', kirim);
    setLoading(true);

    console.log(kirim);
    axios
      .post('https://zavalabs.com/ematerial/api/material_new.php', kirim)
      .then(res => {
        console.log(res);
        setTimeout(() => {
          setLoading(false);
          navigation.replace('MainApp');
        }, 1000);
        showMessage({
          type: 'success',
          message: 'Data berhasil disimpan !',
        });
      });
  };

  return (
    <SafeAreaView
      style={{
        backgroundColor: colors.white,
      }}>
      <ScrollView>
        <View style={{padding: 10, flex: 1}}>
          <MyInput
            label="Nama Penerima"
            iconname="person-outline"
            value={kirim.nama_penerima}
            onChangeText={val =>
              setKirim({
                ...kirim,
                nama_penerima: val,
              })
            }
          />
          <MyGap jarak={10} />
          <View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                paddingVertical: 5,
              }}>
              <Icon
                type="ionicon"
                name="calendar-outline"
                color={colors.primary}
                size={16}
              />
              <Text
                style={{
                  fontFamily: fonts.secondary[600],
                  color: colors.primary,
                  left: 10,
                  fontSize: 16,
                }}>
                Tanggal
              </Text>
            </View>
            <DatePicker
              mode="date"
              date={date}
              onDateChange={val => {
                const Today = val;
                const dd = String(Today.getDate()).padStart(2, '0');
                const mm = String(Today.getMonth() + 1).padStart(2, '0'); //January is 0!
                const yyyy = Today.getFullYear();
                const today = `${yyyy}-${mm}-${dd}`;

                setKirim({
                  ...kirim,
                  tanggal: today,
                });
              }}
            />
          </View>
          <MyGap jarak={10} />
          <MyInput
            label="Nama Material"
            iconname="cube-outline"
            value={kirim.nama_material}
            onChangeText={val =>
              setKirim({
                ...kirim,
                nama_material: val,
              })
            }
          />
          <MyGap jarak={10} />
          <MyInput
            label="Jenis Material"
            iconname="grid-outline"
            value={kirim.jenis_material}
            onChangeText={val =>
              setKirim({
                ...kirim,
                jenis_material: val,
              })
            }
          />
          <MyGap jarak={10} />
          <MyInput
            label="Kode Material"
            iconname="barcode-outline"
            value={kirim.kode_material}
            onChangeText={val =>
              setKirim({
                ...kirim,
                kode_material: val,
              })
            }
          />
          <MyGap jarak={10} />
          <MyInput
            label="Kondisi Material"
            iconname="shield-checkmark-outline"
            value={kirim.kondisi_material}
            onChangeText={val =>
              setKirim({
                ...kirim,
                kondisi_material: val,
              })
            }
          />

          <MyGap jarak={10} />
          <MyInput
            label="Jumlah Material"
            iconname="server-outline"
            value={kirim.jumlah_material}
            onChangeText={val =>
              setKirim({
                ...kirim,
                jumlah_material: val,
              })
            }
          />
          <MyGap jarak={10} />
          <MyButton
            title="INPUT"
            warna={colors.secondary}
            colorText={colors.black}
            onPress={sendServer}
          />
        </View>
      </ScrollView>
      {loading && (
        <LottieView
          source={require('../../assets/animation.json')}
          autoPlay
          loop
          style={{
            flex: 1,
            backgroundColor: colors.primary,
          }}
        />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
