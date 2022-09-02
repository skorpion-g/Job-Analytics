import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import $ from 'jquery';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

document.addEventListener("DOMContentLoaded", () => {
  console.log('DOM Loaded')
  $("industries tr td:first-child").each(function(){
          console.log(this)
          var textval = "<div class='bg' style='width:"+$(this).html()+"'>&nbsp;</div>";        
          $(this).html(textval);
      });
})