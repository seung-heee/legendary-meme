import {Link} from 'react-router-dom';

const RouteTest = () => {
    return (
        <div><br/>
        <Link to={'/'}>Home</Link><br/>
        <Link to={'/edit'}>Edit</Link><br/>
        <Link to={'/diary'}>Diary</Link><br/>
        <Link to={'/new'}>New</Link>
        </div>
    );
};

export default RouteTest;