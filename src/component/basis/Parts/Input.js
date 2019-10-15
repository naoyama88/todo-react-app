import React from 'react';

class Input extends React.Component {
    render() {
        return (
            <input
                type={this.props.type}
                id={this.props.id}
                className={this.props.className}
                name={this.props.name}
                maxLength={this.props.maxLength}
                minLength={this.props.minLength}
                value={this.props.value}
                onBlur={this.props.onBlur}
                >
            </input>
        );
    }
}

export { Input };