const React = require('react');
const classNames = require('classnames');

const Form = React.createClass({
    propTypes: {
        children: React.PropTypes.node
    },

    submit() {
        this.refs.form.submit();
    },

    render() {
        return (
            <form ref="form" {...this.props}>
                {this.props.children}
            </form>
        );
    }
});

const FormGroup = React.createClass({
    propTypes: {
        error: React.PropTypes.bool,
        className: React.PropTypes.string,
        children: React.PropTypes.node
    },

    getDefaulProps() {
        return {
            error: false
        };
    },

    render() {
        let className = classNames('form-group', {
            'has-error': this.props.error
        }, this.props.className);

        return (
            <div className={className}>
                {this.props.children}
            </div>
        );
    }
});

const FormHelpBlock = React.createClass({
    propTypes: {
        children: React.PropTypes.node
    },

    render() {
        return (
            <p className="help-block">
                {this.props.children}
            </p>
        );
    }
});

module.exports           = Form;
module.exports.Group     = FormGroup;
module.exports.HelpBlock = FormHelpBlock;
