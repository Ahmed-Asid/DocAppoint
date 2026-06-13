import { revalidatePath } from "next/cache";
import { auth } from "./auth";
import { headers } from 'next/headers';

export const bookAppointment = async(formData) => {
    'use server'

    const newAppointment = Object.fromEntries(formData.entries());

    const session = await auth.api.getSession({
        headers: await headers()
    });

    if (!session) {
        throw new Error("Unauthorized");
    }

    const appointmentData = {
        ...newAppointment,
        userId : session.user.id
    }

    const res = await fetch('http://localhost:8000/api/appointments', {
            method: 'POST',
            headers: {
                'Content-type' : 'application/json'
            },
            body: JSON.stringify(appointmentData)
        });
    const data = await res.json();
    console.log(data)
    return data;
}

export const deleteAppointment = async(id) => {
    'use server'
    const res = await fetch(`http://localhost:8000/api/appointments/${id}`, {
        method: 'DELETE'
    })
    const data = await res.json();
    if(data.deletedCount > 0){
        revalidatePath('/dashboard')
    }
    return data;
}

export const updateAppointment = async(formdata, id) => {
    'use server'
    const res = await fetch(`http://localhost:8000/api/appointments/${id}`, {
        method: 'PATCH',
            headers: {
                'Content-type' : 'application/json'
            },
            body: JSON.stringify(formdata)
        });
    const data = await res.json();
    console.log(data)
    revalidatePath('/dashboard')
    return data;
}


export const updateProfile = async(updatedData, id) => {
    'use server'

    const res = await fetch(`http://localhost:8000/api/users/${id}`, {
        method: 'PATCH',
            headers: {
                'Content-type' : 'application/json'
            },
            body: JSON.stringify(updatedData)
        });
    const data = await res.json();
    console.log(data)
    return data;
}

