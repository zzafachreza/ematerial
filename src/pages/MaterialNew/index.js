import React, {useState} from 'react';
import {StyleSheet, Text, View, SafeAreaView} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {MyInput, MyGap, MyButton} from '../../components';
import {colors} from '../../utils/colors';
import DatePicker from 'react-native-date-picker';
import {Icon} from 'react-native-elements';
import {fonts} from '../../utils/fonts';

export default function MaterialNew() {
  const [date, setDate] = useState(new Date());

  return (
    <SafeAreaView
      style={{
        backgroundColor: colors.white,
      }}>
      <ScrollView>
        <View style={{padding: 10, flex: 1}}>
          <MyInput label="Nama Penerima" iconname="person-outline" />
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
            <DatePicker mode="date" date={date} onDateChange={setDate} />
          </View>
          <MyGap jarak={10} />
          <MyInput label="Nama Material" iconname="cube-outline" />
          <MyGap jarak={10} />
          <MyInput label="Jenis Material" iconname="grid-outline" />
          <MyGap jarak={10} />
          <MyInput label="Kode Material" iconname="barcode-outline" />
          <MyGap jarak={10} />
          <MyInput
            label="Kondisi Material"
            iconname="shield-checkmark-outline"
          />

          <MyGap jarak={10} />
          <MyInput label="Jumlah Material" iconname="server-outline" />
          <MyGap jarak={10} />
          <MyButton
            title="INPUT"
            warna={colors.secondary}
            colorText={colors.black}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
