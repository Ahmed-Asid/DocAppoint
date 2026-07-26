'use client'

export default function Error({ error, unstable_retry }) {
    return (
        <div className="flex flex-col gap-3 justify-center items-center h-screen">
            <h2>Something went wrong!</h2>
            <button onClick={() => unstable_retry()} className="hover:bg-gray-400 hover:text-white rounded-2xl px-3 py-2 active:scale-95">Try again</button>
        </div>
    )
}