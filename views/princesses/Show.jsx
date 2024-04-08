// views/princesses/Show.jsx

const React = require('react');
const DefaultLayout = require('../layout/Default.jsx');

class Show extends React.Component {
    render() {
        const princess = this.props.princess;

        return (
            <DefaultLayout title="Show an Individual Princess">
                <p>{princess.name}, from {princess.movie}, is {princess.age} years old, wears a {princess.outfitColor} outfit, and her best friend is {princess.bestFriend}.</p>
                {princess.readyToWatch ? 'It is ready to watch': "NOT READY!"}
                <br></br>
                <a href={`/princesses/${princess._id}/edit`}>Edit This Princess</a>
                <form action={`/princesses/${princess._id}?_method=DELETE`} method="POST">
                    <input type="submit" value="DELETE" />
                </form>
                <a href="/princesses">Back to Index</a>
            </DefaultLayout>
        );
    }
}

module.exports = Show;
