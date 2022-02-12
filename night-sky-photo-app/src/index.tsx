import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { EventStreamProvider } from 'features/events/components';
import { GraphQLProvider } from './features/apollo/components/GraphQLProvider'; 
import { NightSkyPhoto } from './features/application/components/NightSkyPhoto';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <small>You are running this application in <b>{process.env.NODE_ENV}</b> mode. api url =<b>{process.env.REACT_APP_GRAPHQL_API_URL}</b></small>
    <EventStreamProvider url={process.env.REACT_APP_EVENT_STREAM_URL!}>
      <GraphQLProvider apiUrl={process.env.REACT_APP_GRAPHQL_API_URL!} wsApiUrl={process.env.REACT_APP_GRAPHQL_WS_API_URL!}>
        <NightSkyPhoto/>
      </GraphQLProvider>
    </EventStreamProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
