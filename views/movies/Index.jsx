const React = require('react');
const DefaultLayout = require('../layout/Default.jsx');

class Index extends React.Component {
    render() {
        const { movies } = this.props;
        //const movies = this.props.movies;

        return (
            <DefaultLayout title="Movies Index Page">
                <nav>
                    <a href="/movies/new">Create a New Movie</a>
                </nav>
                <ul>
                    {movies.map((movie, i) => {
                        return ( 
                            <li key={i}> 
                                The {' '}
                                <a href={`/movies/${movie._id}`}>
                                    {movie.name}
                                </a> {' '}
                                is {movie.prince} <br></br>
                                {movie.readyToWatch
                                ? `It is ready to watch`
                                : `It is NOT ready to watch`}
                                <br/>
                                <a href={`/movies/${movie._id}/edit`}>Edit This Movie</a>
                                <form action={`/movies/${movie._id}?_method=DELETE`} method="POST">
                                    <input type="submit"  value="DELETE"/>
                                </form>   
                            </li>
                        )
                    })
                    
                    }
                </ul>
            </DefaultLayout>
        )
    }
}

module.exports = Index;
