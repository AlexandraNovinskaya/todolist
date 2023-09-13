import { Component } from 'react';

export default class TasksFilterItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ul className="filters">
        <li>
          {/* <button onClick={() => this.props.filterAll()}>All</button> */}
          <input type="radio" onClick={() => this.props.filterAll()}>All</input>
          {/* className="selected" */}
        </li>
        <li>
          {/* <button onClick={() => this.props.filterActive()}>Active</button> */}
          <input type="radio" onClick={() => this.props.filterActive()}>Active</input>

        </li>
        <li>
          {/* <button onClick={() => this.props.filterCompleted()}>Completed</button> */}
          <input type="radio" onClick={() => this.props.filterCompleted()}>Completed</input>

        </li>
      </ul>
    );
  }
}
