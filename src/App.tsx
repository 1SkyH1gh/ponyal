import React from 'react';

import {Header} from "./Header/Header";
import {Main} from "./Main/Main";
import {NewsNew} from "./News/NewsNew";


const App: React.FC = () => {
  return (
   <div>
     <Header/>
     <NewsNew/>
     <Main/>
   </div>
  );
}

export default App;
