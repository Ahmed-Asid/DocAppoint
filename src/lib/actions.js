import { revalidatePath } from "next/cache";
import { auth } from "./auth";
import { headers } from 'next/headers';

export const bookAppointment = async(formData) => {
    'use server'

    try {
        const newAppointment = Object.fromEntries(formData.entries());

        const session = await auth.api.getSession({
        headers: await headers()
        });

        const {token} = await auth.api.getToken({
            headers: await headers()
        })

        if (!session) {
        throw new Error("Unauthorized");
        }

        const appointmentData = {
        ...newAppointment,
        userId : session.user.id
        }

        const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/appointments`, {
            method: 'POST',
            headers: {
                'Content-type' : 'application/json',
                authorization: `${token}`
            },
            body: JSON.stringify(appointmentData)
        });
        const data = await res.json();
        // console.log(data)
        if (!res.ok) {
            return {
                success: false,
                message: data.message || "Booking failed"
            };
        }

        return {
            success: true,
            message: "Appointment booked successfully"
        };

        } catch (error) {
        return {
            success: false,
            message: error.message || "Something went wrong"
        };
    }
}

export const deleteAppointment = async(id) => {
    'use server'

    try{

    const {token} = await auth.api.getToken({
            headers: await headers()
        })
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/appointments/${id}`, {
        method: 'DELETE',
        headers: {
            authorization: `${token}`
        }
    })
    const data = await res.json();
    
    if (!res.ok) {
            return {
                success: false,
                message: data.message || "Update failed"
            };
        }
    if(data.deletedCount > 0){
        revalidatePath('/dashboard')
    }
        return {
            data: data,
            success: true,
            message: "Appointment deleted successfully"
        };
    } catch (error) {
        return {
            success: false,
            message: error.message || "Something went wrong"
        };
    }
}

export const updateAppointment = async(formdata, id) => {
    'use server'

    try {
    const {token} = await auth.api.getToken({
            headers: await headers()
        })

    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/appointments/${id}`, {
        method: 'PATCH',
            headers: {
                'Content-type' : 'application/json',
                authorization: `${token}`
            },
            body: JSON.stringify(formdata)
        });
    const data = await res.json();
    // console.log(data)

    if (!res.ok) {
            return {
                success: false,
                message: data.message || "Update failed"
            };
        }

        revalidatePath('/dashboard')
        return {
            data: data,
            success: true,
            message: "Appointment updated successfully"
        };
    } catch (error) {
        return {
            success: false,
            message: error.message || "Something went wrong"
        };
    }
}


export const updateProfile = async(updatedData, id) => {
    'use server'

    try {
        const {token} = await auth.api.getToken({
            headers: await headers()
        })
        
        const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/users/${id}`, {
        cache: 'no-store',
        method: 'PATCH',
            headers: {
                'Content-type' : 'application/json',
                authorization: `${token}`
            },
            body: JSON.stringify(updatedData)
        });
        const data = await res.json();
        // console.log(data)
        if (!res.ok) {
            return {
                success: false,
                message: data.message || "Update failed"
            };
        }

        revalidatePath('/dashboard/profile')
        return {
            data: data,
            success: true,
            message: "Profile updated successfully"
        };
    } catch (error) {
        return {
            success: false,
            message: error.message || "Something went wrong"
        };
    }
}

