import React, {Component} from 'react';
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import {HOME_ROUTE, PRIMARY_APP_PAGE} from "../../routes/constants";
import './index.scss';


class Header extends Component {

    renderContent() {
        switch (this.props.auth) {
            case null:
                return;
            case false:
                return <li><a className='nav-link-item' href="/auth/google">Login With Google</a></li>;
            default:
                return <li><a className='nav-link-item' href="/api/logout">Logout</a></li>

        }
    }

    render() {
        return (
            <nav>
                <div className="nav-wrapper">
                    <Link
                        to={this.props.auth ? PRIMARY_APP_PAGE : HOME_ROUTE}
                        className="left brand-logo nav-link-item"
                    >
                        Romeo
                    </Link>
                    <ul className="right">

                        {this.renderContent()}
                    </ul>
                </div>
            </nav>
        )
    }
}

function mapStateToProps({auth}) {
    return {auth};
}

export default connect(mapStateToProps)(Header);
