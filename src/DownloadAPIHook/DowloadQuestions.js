import { useCallback, useState } from "react"

export const DownloadQuestions =  () => {
    const [questions, setQuestions] = useState([]);

    const fetchQuestions = useCallback(async () => {
        try {
            const baseUrl = import.meta.env.VITE_BASE_URL || "/api";
            const response = await fetch(`${baseUrl}/questions`);
            const data = await response.json();
            setQuestions(data)
        } catch (error) {
            console.error("Error fetching questions:", error)
        }
    }, [])

    return { questions, setQuestions, fetchQuestions };
}