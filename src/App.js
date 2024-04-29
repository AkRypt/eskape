import { useEffect, useState } from 'react';
import './App.css';
import './firebase-messaging-sw';
import { getCurToken } from './firebase-messaging-sw';
// import { requestPermission } from './firebase-messaging-sw.mjs';

function App() {
  const [token, setToken] = useState(null);

  useEffect(() => {
    setToken(getCurToken());
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        {/* <button onClick={requestPermission}>Request Permission</button> */}
        {token}
      </header>
    </div>
  );
}

export default App;
