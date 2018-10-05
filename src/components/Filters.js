import React, { Component } from 'react';
import Select from 'react-select';
import {
  setNameFilter,
  setDescriptionFilter,
  setTagFilter
} from '../actions/filters';
import { connect } from 'react-redux';
import { getTags } from '../actions/createRecipe';

class Filters extends Component {
  state = {
    options: []
  };
  async componentDidMount() {
    await this.props.getTags();
    const { allTags } = this.props;

    this.setState({
      options: allTags
    });
  }
  onChange = (newValue, actionMeta) => {
    const values = newValue.map(value => value.value);
    this.props.setTagFilter(values);
  };
  render() {
    return (
      <div className="container">
        <div className="d-flex justify-content-around">
          <input
            className="form-control"
            style={{ width: 200 }}
            type="text"
            placeholder="Filtrera på namn"
            value={this.props.filters.name}
            onChange={e => {
              this.props.setNameFilter(e.target.value);
            }}
          />
          <input
            className="form-control"
            style={{ width: 200 }}
            type="text"
            placeholder="Filtrera på beskrivning"
            value={this.props.filters.description}
            onChange={e => {
              this.props.setDescriptionFilter(e.target.value);
            }}
          />
        </div>
        <Select
          style={{ width: 200 }}
          options={this.state.options}
          onChange={this.onChange}
          isMulti
          placeholder={'Filtrera på taggar'}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  filters: state.filters,
  allTags: state.createRecipe.allTags
});

export default connect(
  mapStateToProps,
  { setNameFilter, setDescriptionFilter, setTagFilter, getTags }
)(Filters);
