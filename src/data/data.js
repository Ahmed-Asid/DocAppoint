
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
 
export const getDocData = async() => {
    'use server'
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/doctors`);
    return await res.json()
}

export const getDocByID = async(docId) => {
    'use server'

    const {token} = await auth.api.getToken({
        headers: await headers()
    })
    
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/doctors/${docId}`,{
        headers: {
            authorization: `${token}`
        }
    });
    return await res.json();
}


export const getAppointments = async() => {
    'use server'
    
    const {token} = await auth.api.getToken({
        headers: await headers()
    })

    const session = await auth.api.getSession({
        headers: await headers()
    });

    const userId = session?.user.id;

    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/appointments/${userId}`,{
        headers: {
            authorization: `${token}`
        }
    });
    return await res.json();
}

export const getUser = async() => {

    const {token} = await auth.api.getToken({
        headers: await headers()
    })

    const session = await auth.api.getSession({
        headers: await headers()
    });

    const userId = session?.user.id;

    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/users/${userId}`,{
        headers: {
            authorization: `${token}`
        }
    });
    return await res.json();
}