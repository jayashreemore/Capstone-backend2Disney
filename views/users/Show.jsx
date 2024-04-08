const React = require('react');
const DefaultLayout = require('../layout/Default')

class Show extends React.Component {
    render() {
        const user = this.props.user;

        return (
            <DefaultLayout title="Updated User Details">
                <p>Name : {user.name} </p>
                <p>Email : {user.email} </p>
                <p>Phone : {user.phone} </p>
                <br />
                
                <a href="/users">Back to Index</a>
            </DefaultLayout >

        )
    }
}

module.exports = Show;