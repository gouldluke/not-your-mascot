import React, { Component } from 'react';

class Myth extends Component {
    render() {
        return (
            <div className="myth">
                <h2>{ this.props.meta.title }</h2>
                <div><img width="200" src={ this.props.meta.image } /></div>
                <p>{ this.props.meta.description }</p>
            </div>
        )
    }
}

export default Myth;
