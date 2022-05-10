import axios from 'axios'
import { useState, useEffect } from 'react'
import { Channel } from "../types"

const channelList = () => {
  const [list, setList] = useState<Channel[]>();

  const fetchData = async () => {
    await axios
    .get('https://api.audioboom.com/channels?find[title]=Sports')
    .then((response) => {
      const data = response.data.body.channels
      const dataMaped = data.map((item:Channel) => ({
          id: item.id,
          title: item.title,
          urls: {
            logo_image: item.urls.logo_image
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

export default channelList