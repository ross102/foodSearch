import { useState, useEffect } from 'react';
import yelp from '../api/yelp'

export default () => {
    const [results, setResult] = useState([]);
 const [errorMessage, setErrorMessage] = useState('');
    
  const searchApi = async (searchTerm) => {
      try {
      const response = await yelp.get('/search', {
        params: {
            query: searchTerm,
            number: 10,
            apiKey: '3019f42662774f5bab06c67c982da737'
        }
    })

    setResult(response.data.results)   
      } catch (error) {
        setErrorMessage("Something went wrong");        
      }
  }

  useEffect(() => {
     searchApi('burger')
  }, [])

  return [searchApi, results, errorMessage];
}