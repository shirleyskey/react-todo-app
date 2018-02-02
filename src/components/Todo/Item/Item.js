import React, { Component } from 'react';
import './Item.css';

class Item extends Component {

    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this)
        this.removeItem = this.removeItem.bind(this)
    }

    handleChange(e) {
        this.props.itemClick(e.target.id)
    }

    removeItem(e) {
        this.props.itemRemove(e.target.id)
    }

    render() {
        return (
            <div className="card">
                <div className="card-content fix-card-content ">
                    <div className="row fix-row">
                        <p className="col s1">
                            <input
                                type="checkbox"
                                id={this.props.item.id}
                                checked={this.props.item.completed}
                                onChange={this.handleChange}/>
                            <label htmlFor={this.props.item.id}></label>
                        </p>
                        <p className="col s11 left-align">
                            {this.props.item.content}
                            <span className="right">
                                <i
                                    id={this.props.item.id}
                                    className="small material-icons hoverable"
                                    onClick={this.removeItem}>
                                    delete_forever
                                </i>
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Item;
