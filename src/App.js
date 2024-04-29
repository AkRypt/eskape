import { useEffect } from 'react';
import './App.css';
import './firebase-messaging-sw';
// import { requestPermission } from './firebase-messaging-sw.mjs';

function App() {

  useEffect(() => {
    // if ('serviceWorker' in navigator) {
    //   navigator.serviceWorker.register('/messaging_init_in_sw.js')
    //     .then(function (registration) {
    //       console.log('Service Worker registered with scope:', registration.scope);
    //     }).catch(function (err) {
    //       console.log('Service Worker registration failed:', err);
    //     });
    // }
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        {/* <button onClick={requestPermission}>Request Permission</button> */}
        Hello
      </header>
    </div>
  );
}

export default App;
