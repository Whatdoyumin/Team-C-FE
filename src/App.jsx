import GlobalFont from './styles/GlobalFont';
import GloabalStyle from './styles/GlobalStyle';
import Router from './routes/Router';
import { PostProvider } from './context/PostContext';

function App() {
  return (
    <PostProvider>
      <GlobalFont />
      <GloabalStyle />
      <Router />
    </PostProvider>
  );
}

export default App;
