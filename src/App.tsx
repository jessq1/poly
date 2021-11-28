import React, { useState } from 'react';
import FacebookLogin from 'react-facebook-login';
import config from "./config/FrontEndConfig";


const FACEBOOK_APP_ID = config.FACEBOOK_APP_ID

function App() {

  console.log(FACEBOOK_APP_ID)

  const [login, setLogin] = useState(false);
  const [data, setData] = useState({});
  const [picture, setPicture] = useState('');

  const responseFacebook = (response: any) => {
    console.log(response);
    setData(response);
    setPicture(response.picture.data.url);
    if (response.accessToken) {
    setLogin(true);
    } else {
    setLogin(false);
    }
    }
    

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <div>
          {/* {!login &&
            <FacebookLogin
            appId ={FACEBOOK_APP_ID}
            autoLoad={true}
            fields="name,email,picture"
            scope="public_profile,user_friends"
            callback={responseFacebook}
            icon="fa-facebook" />
            } */}
        </div>
      </header>
    </div>
  );
}

export default App;
