import React, {createContext, useContext, useState} from 'react';
import {ToastAndroid, Linking} from 'react-native';
import StaticServer from '@dr.pogodin/react-native-static-server';
import RNFS from 'react-native-fs';
import {Mixpanel} from 'mixpanel-react-native';

const showToast = message => {
  ToastAndroid.show(message, ToastAndroid.SHORT);
};

console.log('Mixpanel started...');
const trackAutomaticEvents = true;
export const AuthContext = createContext();
const mixpanel = new Mixpanel(
  '9d8dcfd7e803ece059c8ba44d9ac67a0',
  trackAutomaticEvents,
);

mixpanel.init();

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

  const trackM = title => {
    mixpanel.track(title);
  };

  const [close, setClose] = useState(false);
  const [close2, setClose2] = useState(false);

  let server = null;

  const startServer = async link => {
    await stopServer()
    const path = `${RNFS.CachesDirectoryPath}/engine`;
    server = new StaticServer(0, path, {localOnly: true});

    let address = '';
    try {
      address = await server.start();
      console.log(address);
    } catch (error) {
      console.error('Failed to start server:', error);
    }

    return link == 'main' ? `${address}/index.html` : `${address}/maps.html`;
  };

  const stopServer = async () => {
    let isRun = false;

    if (server != null) {
      isRun = await server.isRunning();
    } else isRun = false;

    if (isRun == true) server.stop();
  };

  const closeNow = value => {
    setClose(value);
  };

  const closeNow2 = value => {
    setClose2(value);
  };

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
        stopServer,
        openLinks,
        close,
        closeNow,
        close2,
        closeNow2,
        trackM,
      }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
