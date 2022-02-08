// App.tsx

import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { NetworkProvider } from "react-native-offline";
import { Text } from "react-native";

import LoginScreen from "./src/screens/LoginScreen";
import { TermsScreen } from "./src/screens/TermsScreen";
import { FeedScreen } from "./src/screens/FeedScreen";
import Offline from "./src/screens/Offline";

// Queries
//  const query = useQuery('todos', getTodos)

const queryClient = new QueryClient();

const App = () => {
  // return <NetworkProvider><Offline text={"offline"}/></NetworkProvider>
  return (
    <QueryClientProvider client={queryClient}>
      <FeedScreen />
    </QueryClientProvider>
  );
};

export default App;
