import React from 'react';
import Followers from '../usersPage/userChartComponents/Followers';

const UserCarts = ({ follow ,repo_url}) => {
    

    // console.log(follow);
    // console.log(repo_url);

    return (
        <div>
            <Followers {...follow}/>
            CHARTS
        </div>
    );
}

export default UserCarts;
