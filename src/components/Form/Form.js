import React, { Component } from 'react';
import './Form.css';

class Form extends Component {
    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
        this.onItemCreate = this.onItemCreate.bind(this);
    }

    handleChange = (e) => {
        this.props.onValueChange(e.target.value);
    }

    onItemCreate = () => {
        this.props.onItemCreate();
    }

    render() {
        return (
            <div className="col s3 push-s2">
                <div className="input-field">
                    <input
                        type="text"
                        className="validate no-margin "
                        placeholder="New todo job..."
                        value={this.props.value}
                        onChange={this.handleChange}/>
                    <p className="error-helper">
                        {this.props.validation}
                    </p>
                </div>
                <a
                    className="waves-effect waves-light btn right margin-top-10"
                    onClick={this.onItemCreate}>
                    Create
                </a>
            </div>
        )
    }
}

export default Form;
