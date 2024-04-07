// views/princesses/New.jsx

const React = require('react');
const DefaultLayout = require('../layout/Default.jsx');

class NewPrincess extends React.Component {
    render() {
        return (
            <DefaultLayout title="Add a New Princess">
                <form action="/princesses" method="POST">
                    Name: <input type="text" name="name" /><br />
                    Movie: <input type="text" name="movie" /><br />
                    Age: <input type="number" name="age" /><br />
                    Dress Color: <input type="text" name="dressColor" /><br />
                    Best Friend: <input type="text" name="bestFriend" /><br />
                    Is Ready to Watch: <input type="checkbox" name="readyToWatch" /> <br/>
                    <input type="submit" value="Create Princess" />
                </form>
            </DefaultLayout>
        );
    }
}

module.exports = New;
