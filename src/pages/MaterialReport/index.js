import React, {useState} from 'react';
import {StyleSheet, Text, View, SafeAreaView} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {MyInput, MyGap, MyButton, MyPicker} from '../../components';
import {colors} from '../../utils/colors';
import DatePicker from 'react-native-date-picker';
import {Icon} from 'react-native-elements';
import {fonts} from '../../utils/fonts';

export default function MaterialReport() {
  const [date, setDate] = useState(new Date());
  const [date2, setDate2] = useState(new Date());
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
              onDateChange={setDate}
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
            <DatePicker mode="date" date={date2} onDateChange={setDate2} />
          </View>

          <MyGap jarak={10} />
          <MyPicker
            iconname="shield-checkmark-outline"
            label="Kondisi Material"
            data={[
              {
                label: 'Pilih Kondisi',
                value: 0,
              },
            ]}
          />
          <MyGap jarak={10} />

          <MyButton
            title="PRINT"
            warna={colors.secondary}
            colorText={colors.black}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
