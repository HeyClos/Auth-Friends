import React from 'react';
import { axiosWithAuth } from './axiosWithAuth'

const FriendsList = () => {
    const [friends, setFriends] = useState([])

    useEffect(() => {
        axiosWithAuth().get('http://localhost:5000/api/friends')
            .then(res => setFriends(res.data))
            .catch(err => console.log(err))
    }, [])
    return (
        <div className="FriendsList">
            {friends.map(friend => {
                return (
                    <div className="friend">
                        {friend.name}
                        {friend.age}
                        {friend.email}
                    </div>
                )
            })}
            <AddFriend {...props} setFriends={setFriends}/>
        </div>
    )
}

export default FriendsList;
