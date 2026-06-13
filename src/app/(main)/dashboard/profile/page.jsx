import React from 'react';
import ProfilePage from './ProfilePage';
import { updateProfile } from '@/lib/actions';

const ProfileMain = () => {
    return (
        <ProfilePage updateProfile={updateProfile} />
    );
};

export default ProfileMain;