
// components
import { GoogleOAuthProvider } from '@react-oauth/google';
import Messenger from './Components/Messenger';
import AccountProvider from './context/AccountProvider';

function App() {
  const clientId = '542158445366-lur2fmcnnm8vj0njtu0qnrilu9cr2pel.apps.googleusercontent.com'

  return (
    <GoogleOAuthProvider clientId={clientId}>
      <AccountProvider>
        <Messenger />
      </AccountProvider>
    </GoogleOAuthProvider>
  );
}

export default App;
