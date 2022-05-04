import {useState} from "react";
import {useToasts} from "react-toast-notifications";


export const useHttp = () => {
    const[loading, setLoading] = useState(false);
    const[error, setError] = useState(null);
    const { addToast } = useToasts();

    const request = async (url, method ='GET', data = null,) => {
        setLoading(true);
        const response = await fetch(url, {
            method,
            body: method === 'POST' ? JSON.stringify(data): null ,
            headers: {
                'Content-type': "application/json"
            }
        })
            .then(res => res.json())
            .catch(error => console.error(error))
        if(!response) {
            // throw new Error(response?.message || 'Error');
            addToast(response?.message, { appearance: 'error' })
        }

        setLoading(false);

        return response

    };

    const clearError = () => setError(null);

    return{loading, error, request, clearError}
}

export default useHttp;