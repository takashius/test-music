import axios from 'axios'
import { useState, useEffect } from 'react'
import { Audio } from "../types"

const audioList = (id:string) => {
  const [list, setList] = useState<Audio[]>();

  const fetchData = async () => {
    await axios
    .get(`https://api.audioboom.com/channels/${id}/audio_clips`)
    .then((response) => {
      const data = response.data.body.audio_clips
      const dataMaped = data.map((item:Audio) => ({
          id: item.id,
          title: item.title,
          urls: {
            wave_img: item.urls.wave_img,
            high_mp3: item.urls.high_mp3
          }
        })
      )
      setList(dataMaped);
    })
    .catch((err) => {
      console.log('Error list', err);
    })
  }

  useEffect(() => {
    fetchData();
  }, []);

  return list;
}

export default audioList