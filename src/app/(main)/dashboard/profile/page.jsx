import React from 'react';
import ProfilePage from './ProfilePage';
import { updateProfile } from '@/lib/actions';
import { getUser } from '@/data/data';

const ProfileMain = async () => {

    const userArray = await getUser();
    const user = userArray[0];

    return (
        <ProfilePage updateProfile={updateProfile} user={user} />
    );
};

export default ProfileMain;