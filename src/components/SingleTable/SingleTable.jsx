import React from 'react';
import './SingleTable.scss';

export default class SingleTable extends React.PureComponent {
  render() {
    return (
        <table className="single-table table table-dark">
          <thead>
          <tr>
            <th scope="col"></th>
            <th scope="col">0</th>
            <th scope="col">1</th>
            <th scope="col">2</th>
            <th scope="col">3</th>
            <th scope="col">4</th>
            <th scope="col">5</th>
            <th scope="col">6</th>
            <th scope="col">7</th>
            <th scope="col">8</th>
            <th scope="col">9</th>
            <th scope="col">10</th>
            <th scope="col">11</th>
            <th scope="col">12</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <th scope="row"><span className="badge badge-pill badge-primary">1</span></th>
            <td><span className="badge badge-info">67%</span></td>
            <td><span className="badge badge-info">67%</span></td>
            <td><span className="badge badge-info">67%</span></td>
            <td><span className="badge badge-info">67%</span></td>
            <td><span className="badge badge-info">67%</span></td>
            <td><span className="badge badge-info">67%</span></td>
            <td><span className="badge badge-info">67%</span></td>
            <td><span className="badge badge-info">67%</span></td>
            <td><span className="badge badge-info">67%</span></td>
            <td><span className="badge badge-info">67%</span></td>
            <td><span className="badge badge-info">67%</span></td>
            <td><span className="badge badge-info">67%</span></td>
            <td><span className="badge badge-info">67%</span></td>
          </tr>
          <tr>
            <th scope="row"><span className="badge badge-pill badge-primary">2</span></th>
            <td><span className="badge badge-info">67%</span></td>
            <td><span className="badge badge-info">67%</span></td>
            <td><span className="badge badge-info">67%</span></td>
            <td><span className="badge badge-info">67%</span></td>
            <td><span className="badge badge-info">67%</span></td>
            <td><span className="badge badge-info">67%</span></td>
            <td><span className="badge badge-info">67%</span></td>
            <td><span className="badge badge-info">67%</span></td>
            <td><span className="badge badge-info">67%</span></td>
            <td><span className="badge badge-info">67%</span></td>
            <td><span className="badge badge-info">67%</span></td>
            <td><span className="badge badge-info">67%</span></td>
            <td><span className="badge badge-info">67%</span></td>
          </tr>
          <tr>
            <th scope="row"><span className="badge badge-pill badge-primary">3</span></th>
            <td><span className="badge badge-info">67%</span></td>
            <td><span className="badge badge-info">67%</span></td>
            <td><span className="badge badge-info">67%</span></td>
            <td><span className="badge badge-info">67%</span></td>
            <td><span className="badge badge-info">67%</span></td>
            <td><span className="badge badge-info">67%</span></td>
            <td><span className="badge badge-info">67%</span></td>
            <td><span className="badge badge-info">67%</span></td>
            <td><span className="badge badge-info">67%</span></td>
            <td><span className="badge badge-info">67%</span></td>
            <td><span className="badge badge-info">67%</span></td>
            <td><span className="badge badge-info">67%</span></td>
            <td><span className="badge badge-info">67%</span></td>
          </tr>
          </tbody>
        </table>
    )
  }
}