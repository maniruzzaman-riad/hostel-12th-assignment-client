import { useEffect, useState } from "react"

const useAllMeal = () => {
    const [meals, setMeals] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch('https://hostel-12th-assignment-server.vercel.app/meals')
            .then(res => res.json())
            .then(data => {
                setMeals(data)
                setLoading(false)
            })
    }, [])
    return [meals,loading]
}

export default useAllMeal