import React from 'react';
import './SingleTable.scss';
import PropTypes from 'prop-types';

export default class SingleTable extends React.PureComponent {
  constructor(props) {
    super(props)

    this.renderSingleRow = this.renderSingleRow.bind(this);
  }

  renderSingleRow() {
    const tables = this.props.data;

    return tables.map((singleTable) => (
      <tr>
        <th scope="row"><span className="badge badge-pill badge-primary">{this.props.id}</span></th>
        {
          singleTable.map((value) => <td>{value.value1}<sup>o</sup><span className="badge badge-info">{value.value2}</span>
              <div>{value.value3}</div>
            </td>
          )
        }
      </tr>
      )
    )
  }

  render() {
    const renderTableNumber = () => {
      let renderElements = [];
      for(let i=0; i<13; i++){
        renderElements.push(<th key={i} scope="col">{i}</th>)
      }
      return renderElements;
    }
    return (
        <table className="single-table table table-dark">
          <thead>
          <tr>
            <th scope="col"></th>
            {
              renderTableNumber()
            }
          </tr>
          </thead>
          <tbody>
          {
            this.renderSingleRow()
          }
          </tbody>
        </table>
    )
  }
}

SingleTable.propTypes = {
  data: PropTypes.array,
  id: PropTypes.string,
};