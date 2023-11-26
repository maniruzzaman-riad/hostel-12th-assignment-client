import { useEffect, useState } from "react"

const useAllMeal = () => {
    const [meals, setMeals] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch('meals.json')
            .then(res => res.json())
            .then(data => {
                setMeals(data)
                setLoading(false)
            })
    }, [])
    return [meals,loading]
}

export default useAllMeal