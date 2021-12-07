import React, { useState, useEffect } from 'react';
import axios from 'axios';

// axios.defaults.baseURL = 'https://api.openweathermap.org/data/2.5';

const APIKEY = '587d77d8f52a05375709a6e598b6a28c';

const useAxios = ({ url, method, body = null, headers = null }) => {
  const [response, setResponse] = useState(null);

  const [error, setError] = useState('');

  const [loading, setLoading] = useState(true);

  const fetchData = () => {
    let uri =
      'https://api.openweathermap.org/data/2.5' +
      url +
      '&appid=' +
      APIKEY +
      '&lang=fr&units=metric';

    axios
      .get(uri)
      .then((res) => {
        console.log(res.status);
        setResponse(res.data);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    fetchData();
  }, [method, url, body, headers]);

  return { response, error, loading };
};

export default useAxios;
