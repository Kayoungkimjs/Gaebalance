import React from 'react';
import './SizePicker.scss';

class SizePicker extends React.Component {
  onClick = e => {
    const value = e.target.value;
    this.props.addSelected(value);
  };
  render() {
    return (
      <button
        onClick={this.onClick}
        value={this.props.sizeName}
        className={this.props.class}
      >
        {this.props.sizeName}
      </button>
    );
  }
}

export default SizePicker;
