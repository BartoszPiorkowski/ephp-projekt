import React from 'react';
import PropTypes from 'prop-types';
import './DataTable.scss';
import SingleTable from '../SingleTable/SingleTable';
import TableTitle from '../TableTitle/TableTitle';

export default class DataTable extends React.PureComponent {
  render() {
    return (
      <div className="data-table">
        <TableTitle
          title={this.props.title}
        />
        <SingleTable
          data={this.props.tables}
          id={this.props.tableId}
        />
      </div>
    )
  }
}

DataTable.propTypes = {
  title: PropTypes.string,
  tables: PropTypes.array,
  tableId: PropTypes.string,
};
