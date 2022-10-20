import React from 'react';
import ReactDOM from 'react-dom/client';

import MySection from "./MySection";
import MyButton from :./MyButton;

const root = ReactDOM.createRoot(document.GetElementById("root"));

root.render(
  <MySection>
   <MyButton>My Button Text</MyButton>
  </MySection>
);  
