import GlobalFont from './styles/GlobalFont';
import GloabalStyle from './styles/GlobalStyle';
import Router from './routes/Router';
import { PostProvider } from './context/PostContext';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
function App() {
  const queryClient = new QueryClient();

  return (
    <PostProvider>
      <QueryClientProvider client={queryClient}>
        <GlobalFont />
        <GloabalStyle />
        <Router />
      </QueryClientProvider>
    </PostProvider>
  );
}

export default App;
