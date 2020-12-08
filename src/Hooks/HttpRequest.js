import React, {useState, useEffect} from 'react'
import axios from 'axios'


export function useAxiosGet(url){
    const[request, setRequest] = useState({
        loading: true,
        data: null
    });
    useEffect(() => {
        setRequest({
            loading: true,
            data: null
        })
        axios.get(url)
        .then(result => {
            setRequest({
                loading: false,
                data: result.data
            })
        })
    }, [url])
    return request
}