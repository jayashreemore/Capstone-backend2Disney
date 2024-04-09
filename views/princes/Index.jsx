// views/princes/index.jsx

const React = require('react');
const DefaultLayout = require('../layout/Default.jsx');

class Index extends React.Component {
    render() {
        const { princes } = this.props;
        //const princes = this.props.princes;

        return (
            <DefaultLayout title="Princes Index Page">
                <nav>
                    <a href="/princes/new">Create a New Prince</a>
                </nav>
                <ul>
                    {princes.map((prince, i) => {
                        return (
                            <li key={i}>
                                The {' '}
                                <a href={`/princes/${prince._id}`}>
                                    {prince.name}
                                </a> {' '}
                                is {prince.movie} <br></br>
                                {prince.readyToWatch
                                    ? `It is ready to watch`
                                    : `It is NOT ready to watch`}
                                <br />
                                <a href={`/princes/${prince._id} /edit`}>Edit This Prince</a>
                                <form action={`/princes/${prince._id}?_method=DELETE`} method="POST">
                                    <input type="submit" value="DELETE" />
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
