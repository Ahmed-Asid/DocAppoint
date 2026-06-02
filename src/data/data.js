
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';

export const getDocData = async() => {
    'use server'
    const res = await fetch('http://localhost:8000/api/doctors');
    return await res.json()
}

export const getDocByID = async(docId) => {
    'use server'
    const res = await fetch(`http://localhost:8000/api/doctors/${docId}`);
    return await res.json();
}


export const getAppointments = async() => {

    const session = await auth.api.getSession({
        headers: await headers()
    });

    const userId = session.user.id;

    const res = await fetch(`http://localhost:8000/api/appointments/${userId}`);
    return await res.json();
}