// views/princes/Show.jsx

const React = require('react');
const DefaultLayout = require('../layout/Default.jsx');

class Show extends React.Component {
    render() {
        const prince = this.props.prince;

        return (
            <DefaultLayout title="Show an Individual Prince">
                <p>{prince.name}, from {prince.movie}, is {prince.age} years old, wears {prince.outfitColor} outfit, and his best friend is {prince.bestFriend}.</p>
                {prince.readyToWatch ? 'It is ready to watch': "NOT READY!"}
                <br></br>
                <a href={`/princes/${prince._id}/edit`}>Edit This Prince</a>
                <form action={`/princes/${prince._id}?_method=DELETE`} method="POST">
                    <input type="submit" value="DELETE" />
                </form>
                <a href="/princes">Back to Index</a>
            </DefaultLayout>
        );
    }
}

module.exports = Show;
