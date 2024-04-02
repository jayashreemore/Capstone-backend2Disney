// views/princes/index.jsx

const React = require('react');
const DefaultLayout = require('../layout/Default.jsx');

class IndexPrince extends React.Component {
    render() {
        const { princes } = this.props;

        return (
            <DefaultLayout title="Prince Index Page">
                <nav>
                    <a href="/princes/new">Create a New Prince</a>
                </nav>
                <ul>
                    {princes.map((prince, i) => (
                        <li key={i}>
                            <a href={`/princes/${prince._id}`}>
                                {prince.name}
                            </a>
                            , from {prince.movie}, is {prince.age} years old, wears {prince.outfitColor} outfit, and his best friend is {prince.bestFriend}.
                            <br />
                            <a href={`/princes/${prince._id}/edit`}>Edit This Prince</a>
                            <form action={`/princes/${prince._id}?_method=DELETE`} method="POST">
                                <input type="submit" value="DELETE"/>
                            </form>
                        </li>
                    ))}
                </ul>
            </DefaultLayout>
        );
    }
}

module.exports = IndexPrince;
