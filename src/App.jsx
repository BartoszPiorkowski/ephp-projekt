import React from 'react';
import Navigation from './components/Navigation/Navigation';
import DataTable from './components/DataTable/DataTable';
import {links, dataTable} from './config';

export default class App extends React.PureComponent {
    render() {
      return (
        <div className="app">
          <Navigation
            links={links}
          />
          <div className="container">
            {
              dataTable.map((table) => <DataTable
                title={table.title}
                tableId={table.id}
                tables={table.tables}
              />)
            }
          </div>
        </div>
      )
    }
}
