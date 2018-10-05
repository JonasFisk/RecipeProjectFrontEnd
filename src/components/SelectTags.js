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
  onChange = async (newValue, actionMeta) => {
    const { options } = this.state;

    newValue.forEach(value => {
      const index = options.findIndex(option => option.value === value.value);
      if (index === -1) {
        this.props.createTag(value);
        this.setState({
          options: [...options, value]
        });
      }
    });

    const values = newValue.map(value => value.value);
    this.props.setTags(values);
  };
  render() {
    const { options } = this.state;
    return (
      <div className="mt-2">
        <CreatableSelect
          onChange={this.onChange}
          isMulti
          options={options}
          placeholder={'Välj taggar'}
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
