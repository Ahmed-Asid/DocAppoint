import React from 'react';
import ProfilePage from './ProfilePage';
import { updateProfile } from '@/lib/actions';
import { getUser } from '@/data/data';


export const metadata = {
    title: 'Profile',
    description: 'Your profile information',
};

const ProfileMain = async () => {

    const userArray = await getUser();
    const user = userArray[0];

    return (
        <ProfilePage updateProfile={updateProfile} user={user} />
    );
};

export default ProfileMain;