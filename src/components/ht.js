import React from 'react';
import { HotTable } from '@handsontable/react';


class Demo7 extends React.Component {
  constructor(props) {
    super(props);
    this.data = [
      ["", "Ford", "Volvo", "Toyota", "Honda"],
      ["2016", 10, 11, 12, 13],
      ["2017", 20, 11, 14, 13],
      ["2018", 30, 15, 12, 13]
    ];
  }

  componentDidMount() {
  }

  render() {

    return (
      <div id="hot-app">
        <h3>Demo7</h3>
        <HotTable data={this.data} colHeaders={true} rowHeaders={true} width="500" height="200"
            bindRowsWithHeaders = 'strict'
          licenseKey="non-commercial-and-evaluation"/>
        <HotTable data={this.data} colHeaders={true} rowHeaders={true} width="500" height="200"
            licenseKey="non-commercial-and-evaluation"/>
      </div>
    );
  }
}

export default Demo7