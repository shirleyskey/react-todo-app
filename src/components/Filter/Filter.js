import React, { Component } from 'react';
import './Filter.css';

class Filter extends Component {
    constructor(props) {
        super(props)

        this.onChangeHandler = this.onChangeHandler.bind(this);
    }

    onChangeHandler = (e) => {
        this.props.onFilterChange(e.target.value);
    }

    render() {
        return (
            <div className="col s5 push-s2 center-align fix-margin">
                <span>
                    <input
                        className="with-gap"
                        name="group1"
                        type="radio"
                        value="default"
                        id="default"
                        onClick={this.onChangeHandler}/>
                    <label
                        htmlFor="default"
                        value="default"
                        onClick={this.onChangeHandler}>All
                    </label>
                </span>
                <span>
                    <input
                        className="with-gap"
                        name="group1"
                        type="radio"
                        value="completed"
                        id="completed"
                        onClick={this.onChangeHandler}/>
                    <label
                        htmlFor="completed"
                        value="default"
                        onClick={this.onChangeHandler}>Completed
                    </label>
                </span>
                <span>
                    <input
                        className="with-gap"
                        name="group1"
                        type="radio"
                        value="uncompleted"
                        id="uncompleted"
                        onClick={this.onChangeHandler}/>
                    <label
                        htmlFor="uncompleted"
                        value="uncompleted"
                        onClick={this.onChangeHandler}>Uncompleted
                    </label>
                </span>
            </div>
        )
    }
}

export default Filter;
