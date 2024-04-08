const React = require('react');
const DefaultLayout = require('../layout/Default.jsx');

class New extends React.Component {
    render() {
        return (
            <DefaultLayout title="Add a New Movie">
                <form action="/movies" method="POST">
                    Name: <input type="text" name="name" /><br />
                    Prince: <input type="text" name="prince" /><br />
                    Princess: <input type="text" name="princess" /><br />
                    Story: <input type="text" name="story" /><br />
                    Is Ready to Watch: <input type="checkbox" name="readyToWatch" /> <br/>
                    <input type="submit" value="Create Movie" />
                </form>
            </DefaultLayout>
        );
    }
}

module.exports = New;
