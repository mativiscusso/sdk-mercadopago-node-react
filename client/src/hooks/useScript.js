import { useState, useEffect } from 'react'

export default function useScript(url, name) {
    const [lib, setLib] = useState({})

    useEffect(() => {
        const script = document.createElement('script')

        script.src = url
        script.async = true
        script.onload = () => setLib({ [name]: window[name] })

        document.body.appendChild(script)

        return () => {
            document.body.removeChild(script)
        }
    }, [url])

    return lib
}
