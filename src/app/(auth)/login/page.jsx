
import { Suspense } from 'react';
import SignIn from './SignIn';

export const metadata = {
    title: 'SkillSphere - Sign in',
    description: 'Login with your account',
};

const SignInPage = () => {
    return (
        <Suspense fallback={<div className='flex justify-center items-center w-full h-[60vh]'><span className="loading loading-dots loading-xl"></span></div>}>
            <SignIn></SignIn>
        </Suspense>
    );
};

export default SignInPage;