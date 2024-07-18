import React, {createContext, useContext, useState} from 'react';
import {ToastAndroid, Linking} from 'react-native';
import StaticServer from '@dr.pogodin/react-native-static-server';
import RNFS from 'react-native-fs';

const showToast = message => {
  ToastAndroid.show(message, ToastAndroid.SHORT);
};

console.log('Mixpanel started...');
const trackAutomaticEvents = true;
export const AuthContext = createContext();
// const mixpanel = new Mixpanel(
//   "95cfb96d46f0484f9fa7fc4768f39577",
//   trackAutomaticEvents
// );

// mixpanel.init();

// Sentry.init({
//   dsn: "https://ec1b21c2b930c93a3877302c172b5d15@o4507044218732544.ingest.us.sentry.io/4507044491427840",
// });

export const AuthProvider = ({children}) => {
  // const exceptionReporting = (error) => {
  //   let report = JSON.stringify(error)
  //   Sentry.captureException(
  //     new Error(report)
  //   );
  // };

  // const trackM = (title, payload) => {
  //   mixpanel.track(title, payload);
  // };

  const [close, setClose] = useState(false);
  const [close2, setClose2] = useState(false);

  let server = null;

  const startServer = async link => {
    let isRun = false;

    if (server != null) {
      isRun = await server.isRunning();
    } else isRun = false;

    if (isRun == true) server.stop();

    const path = `${RNFS.CachesDirectoryPath}/build`;
    server = new StaticServer(9090, path, {localOnly: true});

    let address = '';
    try {
      address = await server.start();
      console.log(address);
    } catch (error) {
      console.error('Failed to start server:', error);
    }

    return link == 'main' ? `${address}/index.html` : `${address}/maps.html`;
  };

  const closeNow = (value)=> {
    setClose(value)
  }

  const closeNow2 = (value)=> {
    setClose2(value)
  }

  const openLinks = link => {
    Linking.openURL(link)
      .then(responsive => {
        console.log(responsive);
      })
      .catch(err => console.log(err));
  };

  return (
    <AuthContext.Provider
      value={{
        startServer,
        openLinks,
        close, 
        closeNow,
        close2, 
        closeNow2
      }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
