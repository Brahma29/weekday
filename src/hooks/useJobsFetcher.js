import { useEffect, useState } from "react";

export const useJobsFetcher = (offset, limit,) => {
    const [jobs, setJobs] = useState([]);
    const [totalCount, setTotalCount] = useState(0);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null)

    useEffect(() => {
        fetchJobs();
    }, [offset]);

    const fetchJobs = () => {
        setLoading(true);

        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const body = JSON.stringify({
            limit,
            offset,
        });

        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body,
        };

        fetch(
            "https://api.weekday.technology/adhoc/getSampleJdJSON",
            requestOptions
        )
            .then((response) => response.json())
            .then((result) => {
                setJobs(prev => [...prev, ...result.jdList]);
                setTotalCount(result.totalCount);
            })
            .catch((error) => setError(error.message || "Something went wrong!")).finally(() => setLoading(false))
    };

    return { jobs, totalCount, loading, error };
};
