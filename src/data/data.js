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