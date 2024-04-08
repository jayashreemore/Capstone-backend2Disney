const React = require('react');
const DefaultLayout = require('../layout/Default')


class Index extends React.Component {
    render() {
        const { users } = this.props;
        
        return (
            <DefaultLayout title={"Users Index Page"}>
                <nav>
                    <a href="/users/new">Create a New user</a>
                </nav>
                <ul>
                    {users.map((user, i) => {
                        return (
                            <li>
                                User name : {' '}
                                <a href={`/users/${user._id}`}>
                                    {user.name}
                                </a> <br></br> {' '}
                                email : {user.email} <br></br> {' '} 
                                phone : {user.phone} <br></br>
                            <a href={`/users/${user._id}/edit`}>Edit This user</a>
                            <form action={`/users/${user._id}?_method=DELETE`} method="POST">
                                <input type="submit" style = {{color:'red'}} value="DELETE"/>
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