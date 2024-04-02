// views/princesses/Edit.jsx

const React = require('react');
const DefaultLayout = require('../layout/Default.jsx');

class EditPrincess extends React.Component {
    render() {
        return (
            <DefaultLayout title="Edit Princess">
                <form action={`/princesses/${this.props.princess._id}?_method=PUT`} method="POST">
                    Name: <input type="text" name="name" defaultValue={this.props.princess.name} /><br />
                    Movie: <input type="text" name="movie" defaultValue={this.props.princess.movie} /><br />
                    Age: <input type="number" name="age" defaultValue={this.props.princess.age} /><br />
                    Dress Color: <input type="text" name="dressColor" defaultValue={this.props.princess.dressColor} /><br />
                    Best Friend: <input type="text" name="bestFriend" defaultValue={this.props.princess.bestFriend} /><br />
                    <input type="submit" value="Submit Changes" />
                </form>
            </DefaultLayout>
        );
    }
}

module.exports = EditPrincess;
