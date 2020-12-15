import React, {Component} from 'react';
import {connect} from 'react-redux';
import StripeCheckout from 'react-stripe-checkout';
import * as actions from '../../redux/actions';


class Payments extends Component {

    render() {
        return (
            <StripeCheckout
                name='Product'
                description="$5 for product"
                amount={500}
                token={token => this.props.handleToken(token)}
                stripeKey={process.env.REACT_APP_STRIPE_KEY}
            >
                <button className="btn">
                    Add Credits
                </button>
            </StripeCheckout>
        );
    }
}

export default connect(null, actions)(Payments);
