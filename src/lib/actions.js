
export const bookAppointment = async(formData) => {
    'use server'
    const newAppointment = Object.fromEntries(formData.entries());

    const res = await fetch('http://localhost:8000/api/appointments', {
            method: 'POST',
            headers: {
                'Content-type' : 'application/json'
            },
            body: JSON.stringify(newAppointment)
        });
    const data = await res.json();
    console.log(data)
    return data;
}