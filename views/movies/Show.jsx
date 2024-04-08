const React = require('react');
const DefaultLayout = require('../layout/Default.jsx');

class Show extends React.Component {
    render() {
        const movie = this.props.movie;

        return (
            <DefaultLayout title="Show an Individual Movie">
                <p>{movie.name}, starring {movie.prince} and {movie.princess}, is a story about {movie.story}.</p>
                {movie.readyToWatch ? 'It is ready to watch' : 'It is not ready to watch'}
                <br />
                <a href={`/movies/${movie._id}/edit`}>Edit This Movie</a>
                <form action={`/movies/${movie._id}?_method=DELETE`} method="POST">
                    <input type="submit" value="DELETE" />
                </form>
                <a href="/movies">Back to Index</a>
            </DefaultLayout>
        );
    }
}

module.exports = Show;
