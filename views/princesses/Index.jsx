// views/princess/index.cjsx

const React = require('react');
const DefaultLayout = require('../layout/Default.jsx');

class IndexPrincess extends React.Component {
    render() {
        const { princesses } = this.props;

        return (
            <DefaultLayout title="Princess Index Page">
                <nav>
                    <a href="/princesses/new">Create a New Princess</a>
                </nav>
                <ul>
                    {princesses.map((princess, i) => (
                        <li key={i}>
                            <a href={`/princesses/${princess._id}`}>
                                {princess.name}
                            </a>
                            , from {princess.movie}, is {princess.age} years old, wears {princess.dressColor} dress, and her best friend is {princess.bestFriend}.
                            <br />
                            <a href={`/princesses/${princess._id}/edit`}>Edit This Princess</a>
                            <form action={`/princesses/${princess._id}?_method=DELETE`} method="POST">
                                <input type="submit" value="DELETE"/>
                            </form>
                        </li>
                    ))}
                </ul>
            </DefaultLayout>
        );
    }
}

module.exports = IndexPrincess;
