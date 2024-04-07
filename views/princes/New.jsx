// views/princes/New.jsx

const React = require('react');
const DefaultLayout = require('../layout/Default.jsx');

class NewPrince extends React.Component {
    render() {
        return (
            <DefaultLayout title="Add a New Prince">
                <form action="/princes" method="POST">
                    Name: <input type="text" name="name" /><br />
                    Movie: <input type="text" name="movie" /><br />
                    Age: <input type="number" name="age" /><br />
                    Outfit Color: <input type="text" name="outfitColor" /><br />
                    Best Friend: <input type="text" name="bestFriend" /><br />
                    Is Ready to Watch: <input type="checkbox" name="readyToWatch" /> <br/>
                    <input type="submit" value="Create Prince" />
                </form>
            </DefaultLayout>
        );
    }
}

module.exports = New;
