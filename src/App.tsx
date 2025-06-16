import { useEffect, useState } from 'react';
import './App.css'
import TitleDispComponent, { type TitleData } from './TitleDispComponent'
import axios from 'axios';
import axiosJsonpAdapter from 'axios-jsonp'
import { Typography } from '@material-tailwind/react';

// import * require 'https://maps.gsi.go.jp/js/muni.js'
import dayjs from 'dayjs';
import ja from 'dayjs/locale/ja';
dayjs.locale(ja);


function App() {
  const [titleData, setTitleData] = useState<TitleData[]|undefined>()
  const [position, setPosition] = useState<{ latitude: number|null, longitude: number|null }>({ latitude: null, longitude: null });
  const [addr, setAddr] = useState<{ prefecture: string, city: string, other: string }>({ prefecture: '', city: '', other:'' });
  const [weather, setWeather] = useState<{ dt: string, rf: number }>({ dt: '', rf: 0 });


  useEffect(()=>{
    // const title_item_json = '[{"title":"AAA"},{"title":"BBB"},{"title":"寿限無"}]'
    axios.get('https://4c21c39b-b4e4-4805-b4b7-f9485fa19b7a.mock.pstmn.io/title_list')
      .then(response => {

        // json オブジェクトからタイトルを抽出
        const _tmpTitleList:TitleData[] = []
        for(let v of response.data){
          _tmpTitleList.push({
              id: v.id,
              title: v.title,
              description: v.description
          })
        }

        // 参照用配列に入れる
        setTitleData(_tmpTitleList)

      })
      .catch(error => {
        console.error('データ取得エラー:', error);
      });

    // 現在位置の取得
    navigator.geolocation.getCurrentPosition(position => {
      const { latitude, longitude } = position.coords;
      setPosition({ latitude, longitude });
    });

    // Yahooのキー
    // dj00aiZpPWJnakRjMXZwNjNYUSZzPWNvbnN1bWVyc2VjcmV0Jng9ZGM-
  },[])
  

  useEffect(()=>{
    console.log(position)
    if(position.latitude != null && position.longitude != null){
      // 緯度経度がわかる場合はYahooから天気を取得
      axios.get('https://map.yahooapis.jp/weather/V1/place', {
        adapter: axiosJsonpAdapter,
        params:{
          // coordinates:"132.022705,34.427302",
          coordinates:position.longitude + ',' + position.latitude,
          appid:'dj00aiZpPWJnakRjMXZwNjNYUSZzPWNvbnN1bWVyc2VjcmV0Jng9ZGM-',
          output:'json'
        }
      }).then(response => {
        console.log(response.data.Feature[0].Name)
        const weathers = response.data.Feature[0].Property.WeatherList.Weather
        const w = weathers[weathers.length-1]
        
        setWeather({
          dt: dayjs(w.Date).format('YYYY年MM月DD日 HH時mm分'),
          rf: w.Rainfall,
        })

      })
      .catch(error => {
        console.error('天気データ取得エラー:', error);
      });
    }

    if(position.latitude != null && position.longitude != null){
      // 緯度経度がわかる場合はYahooから天気を取得
      
      // 43.0686718333333,141.35117369444
      axios.get('https://mreversegeocoder.gsi.go.jp/reverse-geocoder/LonLatToAddress', {
        params:{
          lat:position.latitude,
          lon:position.longitude
        }
      }).then(response => {
        console.log(response.data.results.muniCd,response.data.results.lv01Nm)
        const muni_cd_str = GSI.MUNI_ARRAY[response.data.results.muniCd]
        const muni_cd_spl = muni_cd_str.split(',')

        console.log(muni_cd_spl[1],muni_cd_spl[3])
        setAddr({
            prefecture: muni_cd_spl[1],
            city: muni_cd_spl[3],
            other: response.data.results.lv01Nm
          }
        )

      })
      .catch(error => {
        console.error('住所データ取得エラー:', error);
      });
    }

    

  },[position.latitude,position.longitude])
  


  return (
    <>
      <Typography>{addr.prefecture + addr.city + addr.other}の {weather.dt} の降水量は {weather.rf}mm です </Typography>

      <TitleDispComponent fontSize='text-2xl' fontColor='text-blue-500' titles={titleData} key={0}>
        <div>
          <span className='text-green-500 ml-4'>外部から与えた要素</span>
        </div>
      </TitleDispComponent>

      <TitleDispComponent  titles={titleData}  key={1}>
        <div>
          <span className='text-yellow-500 ml-4'>外部から与えた要素2</span>
        </div>
      </TitleDispComponent>

    </>
  )
}

export default App
