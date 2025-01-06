import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import posthog from 'posthog-js'

posthog.init('phc_Qrp7ptIKesn46OFEFMgOS20jwq6EfeS3mzu1wkTTjPJ', {
  api_host: 'https://eu.i.posthog.com', 
  autocapture: false,
  loaded: (posthog) => {
      if (!posthog.has_opted_in_capturing() && !posthog.has_opted_out_capturing()) {
          posthog.opt_out_capturing()
      }
  }
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
