import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addInstructions } from '../actions/createRecipe';

class AddInstructions extends Component {
  state = {
    instructions: [],
    instruction: ''
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  submit = e => {
    e.preventDefault();
    const { instructions, instruction } = this.state;
    const newInstructions = instructions;

    console.log(newInstructions);
    if (instruction) {
      newInstructions.push(instruction);
      this.setState({
        instructions: newInstructions
      });
    }
    this.setState({
      instruction: ''
    });
  };
  submitInstructions = () => {
    const { instructions } = this.state;
    this.props.addInstructions(instructions);
    this.setState({
      instructions: []
    });
  };

  render() {
    const { instruction, instructions } = this.state;
    return (
      <div>
        {instructions && (
          <ol className="mt-2">
            {instructions.map(instruction => {
              return <li key={instruction}>{instruction}</li>;
            })}
          </ol>
        )}
        <div>
          <div className="input-group">
            <input
              className="form-control"
              type="text"
              value={instruction}
              onChange={this.onChange}
              name="instruction"
              id="instruction"
              placeholder="Add instructions"
            />
            <div className="input-group-append">
              <button
                className="btn btn-outline-secondary"
                type="button"
                onClick={this.submit}
              >
                Add instruction
              </button>
            </div>
          </div>
        </div>
        {instructions.length > 0 && (
          <button className="btn mb-3 mt-2" onClick={this.submitInstructions}>
            Submit instructions
          </button>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({});

export default connect(
  mapStateToProps,
  { addInstructions }
)(AddInstructions);
/*
   <input
              className="form-control"
              type="text"
              name="description"
              id="description"
              value={description}
              onChange={this.onChange}
              placeholder="Enter a description"
            />
*/
