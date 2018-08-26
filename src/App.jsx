import React from 'react';
import Navigation from './components/Navigation/Navigation';
import DataTable from './components/DataTable/DataTable';
import {links} from './config';

export default class App extends React.PureComponent {
    render() {
      return (
        <div className="app">
          <Navigation
            links={links}
          />
          <div className="container">
            <DataTable
            /*  table={table}*/
            />
            <DataTable
              /*  table={table}*/
            />
            <DataTable
              /*  table={table}*/
            />
            <DataTable
              /*  table={table}*/
            />
            <DataTable
              /*  table={table}*/
            />
          </div>
        </div>
      )
    }
}
