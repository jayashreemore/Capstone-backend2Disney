// views/princes/Edit.jsx

const React = require('react');
const DefaultLayout = require('../layout/Default.jsx');

class EditPrince extends React.Component {
    render() {
        return (
            <DefaultLayout title="Edit Prince">
                <form action={`/princes/${this.props.prince._id}?_method=PUT`} method="POST">
                    Name: <input type="text" name="name" defaultValue={this.props.prince.name} /><br />
                    Movie: <input type="text" name="movie" defaultValue={this.props.prince.movie} /><br />
                    Age: <input type="number" name="age" defaultValue={this.props.prince.age} /><br />
                    Outfit Color: <input type="text" name="outfitColor" defaultValue={this.props.prince.outfitColor} /><br />
                    Best Friend: <input type="text" name="bestFriend" defaultValue={this.props.prince.bestFriend} /><br />
                    <input type="submit" value="Submit Changes" />
                </form>
            </DefaultLayout>
        );
    }
}

module.exports = EditPrince;
