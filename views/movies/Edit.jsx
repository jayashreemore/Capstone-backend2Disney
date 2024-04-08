const React = require('react');
const DefaultLayout = require('../layout/Default.jsx');

class Edit extends React.Component {
    render() {
        return (
            <DefaultLayout title="Edit Page">
                <form action={`/movies/${this.props.movie._id}?_method=PUT`} method="POST">
                    Name: <input type="text" name="name" defaultValue={this.props.movie.name} /><br />
                    Prince: <input type="text" name="prince" defaultValue={this.props.movie.prince} /><br />
                    Princess: <input type="text" name="princess" defaultValue={this.props.movie.princess} /><br />
                    Story: <input type="text" name="story" defaultValue={this.props.movie.story} /><br />
                    Is Ready to Watch: 
                    {this.props.movie.readyToWatch ? <input type="checkbox" name="readyToWatch" defaultChecked /> : <input type="checkbox" name="readyToWatch" />}
                    <br/>
                    <input type="submit" value="Submit Changes" />
                </form>
            </DefaultLayout>
        );
    }
}

module.exports = Edit;
