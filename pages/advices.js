import { useCallback, useState, useMemo } from 'react';
import { Box, Typography, FormControl, InputLabel, Input, FormHelperText, Button, CircularProgress, Link } from '@mui/material';
import { useUserContext } from '../src/contexts/UserContext'
import styless from "../styles/advices.module.scss";
import styles from "../styles/Home.module.css";

import Header from '../src/components/Header';
import LinearBuffer from "./download.jsx";
import Stack from "@mui/material/Stack";
import Avatar from "@mui/material/Avatar";

const defaultQuery = 'How to '



const Advice = () => {
  const { user } = useUserContext();
  const [query, setQuery] = useState(defaultQuery);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);

  const handleChange = useCallback(({ target }) => {
    setQuery(target?.value || '');
  }, [setQuery])

  const handleOnFocus = useCallback((e) => {
    if (query !== defaultQuery) {
      e.target.select();
    }
  }, [query])

  const handleSubmit = useCallback(async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      const { results: { results: { organic } } } = await fetch('https://api.serphouse.com/serp/live', {
        "headers": {
          "accept": "application/json",
          "content-type": "application/json",
          "authorization": `Bearer ${process.env.NEXT_PUBLIC_SEARCH_ENGINE_TOKEN}`
        },
        "method": "POST",
        body: JSON.stringify({
          data: {
            "q": query,
            "domain": "google.com",
            "loc": "Dnipro,Dnipropetrovsk Oblast,Ukraine",
            "lang": "uk",
            "device": "desktop",
            "serp_type": "web",
            "page": "1",
            "verbatim": "0"
          }
        })
      }).then(async data => await data.json())

      setData(organic.slice(0, 20))
    } catch (e) {
      console.warn(e)
    } finally {
      setLoading(false)
    }

  }, [query, setLoading, setData])

  const isBtnDisabled = useMemo(() => {
    return !query || loading || query === defaultQuery || !user
  }, [loading, query])

  return (
    <>
       
      <Header keywords={Advice} />
      <div className={styles.maincontainer}>
      <div className={styless.container}>
        <div className={styless.userBlock}>
                  <div className={styless.name}>
                      {user ? (
                          <Typography variant="h3">{user?.name}</Typography>
                      ) : (
                          <LinearBuffer />
                      )}
                  </div>
                  <div>
                      <Stack direction="row" spacing={2}>
                          <Avatar
                              className={styless.photo}
                              alt="User"
                              src={user?.picture}
                          />
                      </Stack>
                  </div>
              </div>
        <Box display='flex' alignItems='stretch' justifyContent='center' p={2} flexDirection='column'>
          <Box mb={2}>
            <Typography variant='h3' className={styless.typography}>INTERESTING THINKS</Typography>
          </Box>
          <form onSubmit={handleSubmit}>
            <Box display='flex' alignItems='center' justifyContent='center'>
              <FormControl fullWidth>
                <InputLabel htmlFor="search">find best advice</InputLabel>
                <Input disabled={loading || !user} value={query} id="search" aria-describedby="search-helper-text" onChange={handleChange} onFocus={handleOnFocus} />
                <FormHelperText id="search-helper-text">Search for advices or ask your question here</FormHelperText>
              </FormControl>
              <Box ml={2}>
                <Button type='submit' disabled={isBtnDisabled}>Search</Button>
              </Box>
            </Box>
          </form>
          {loading && (<CircularProgress />)}
          <Box>
            {data?.map((item) => {
              return (
                <Box py={2} key={item.position}>
                  <Link target='_blank' href={item.link}>{item.snippet}</Link>
                </Box>
              )
            })}
          </Box>
        </Box>
        </div>
      </div>
      
    </>
  );
};

export default Advice;