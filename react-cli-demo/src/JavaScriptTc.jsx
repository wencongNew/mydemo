import React, { Component } from 'react';
import { injectIntl, FormattedMessage, defineMessages } from 'react-intl';
import PropTypes from 'prop-types';
const messages = defineMessages({
    description: {
        id: 'InjectExample.description'
    },
    alert: {
        id: 'InjectExample.alert',
        defaultMessage: '我是提醒',
    },
    button: {
        id: 'InjectExample.button',
        defaultMessage: '弹窗',
    },
});
class JavaScriptTc extends Component {

    constructor(props) {
        super(props);
        let s = this.props;

    }
    componentDidMount() {

    }
    componentWillUnmount() {

    }
    render() {
        let s = this.props;
        return (
            <>

                {this.props.intl.formatMessage(messages.description)}



            </>
        );
    }
}
const propTypes = {
    intl: PropTypes.object.isRequired,
};
JavaScriptTc.propTypes = propTypes;
export default injectIntl(JavaScriptTc, {
    withRef: true,
});