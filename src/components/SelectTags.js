import React, { Component } from 'react';
import CreatableSelect from 'react-select/lib/Creatable';
import { connect } from 'react-redux';
import { setTags, getTags, createTag } from '../actions/createRecipe';

class SelectTags extends Component {
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
    newValue.forEach(item => {
      if (item.__isNew__) {
        this.props.createTag(item);
      }
    });
    this.props.setTags(newValue);
  };
  render() {
    const { options } = this.state;
    return (
      <div className="mt-2">
        <CreatableSelect
          onChange={this.onChange}
          isMulti
          options={options}
          placeholder={'Enter tags'}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  allTags: state.createRecipe.allTags
});

export default connect(
  mapStateToProps,
  { setTags, getTags, createTag }
)(SelectTags);
