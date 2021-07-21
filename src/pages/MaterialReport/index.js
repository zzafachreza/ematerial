import React, {useState} from 'react';
import {StyleSheet, Text, View, SafeAreaView} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {MyInput, MyGap, MyButton, MyPicker} from '../../components';
import {colors} from '../../utils/colors';
import DatePicker from 'react-native-date-picker';
import {Icon} from 'react-native-elements';
import {fonts} from '../../utils/fonts';
import RNFetchBlob from 'rn-fetch-blob';

export default function MaterialReport() {
  const Today = new Date();
  const dd = String(Today.getDate()).padStart(2, '0');
  const mm = String(Today.getMonth() + 1).padStart(2, '0'); //January is 0!
  const yyyy = Today.getFullYear();
  const today = `${yyyy}-${mm}-${dd}`;

  const [kirim, setKirim] = useState({
    awal: today,
    akhir: today,
  });

  const sendServer = () => {
    console.log('kirim', kirim);
    RNFetchBlob.config({
      // add this option that makes response data to be stored as a file,
      // this is much more performant.
      fileCache: true,
    })
      .fetch('GET', 'https://zavalabs.com/ematerial/pdf/index.php', {
        //some headers ..
      })
      .then(res => {
        // the temp file path
        console.log('The file saved to ', res.path());
      });
  };

  const [date, setDate] = useState(Today);
  const [date2, setDate2] = useState(Today);
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={{padding: 10, flex: 1}}>
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
                Tanggal (From)
              </Text>
            </View>
            <DatePicker
              size="small"
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
                  awal: today,
                });
              }}
            />
          </View>

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
                Tanggal (To)
              </Text>
            </View>
            <DatePicker
              mode="date"
              date={date2}
              onDateChange={val => {
                const Today = val;
                const dd = String(Today.getDate()).padStart(2, '0');
                const mm = String(Today.getMonth() + 1).padStart(2, '0'); //January is 0!
                const yyyy = Today.getFullYear();
                const today = `${yyyy}-${mm}-${dd}`;

                setKirim({
                  ...kirim,
                  akhir: today,
                });
              }}
            />
          </View>

          <MyGap jarak={10} />
          <MyPicker
            value={kirim.kondisi_material}
            onValueChange={val =>
              setKirim({
                ...kirim,
                kondisi_material: val,
              })
            }
            iconname="shield-checkmark-outline"
            label="Kondisi Material"
            data={[
              {
                label: 'Pilih Kondisi',
                value: 0,
              },
              {
                label: 'BARU',
                value: 'BARU',
              },
              {
                label: 'RETURN',
                value: 'RETURN',
              },
              {
                label: 'KELUAR',
                value: 'KELUAR',
              },
              {
                label: 'SEMUA',
                value: 'SEMUA',
              },
            ]}
          />
          <MyGap jarak={10} />

          <MyButton
            title="PRINT"
            warna={colors.secondary}
            colorText={colors.black}
            onPress={sendServer}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
