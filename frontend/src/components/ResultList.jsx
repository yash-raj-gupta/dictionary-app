import { useContext, useEffect, useState } from 'react'
import axios from "axios"
import { InputContext } from '../App';
import MeaningList from './MeaningList';
import Example from './Example';
import Synonym from './Synonym';
import Antonym from './Antonym';
import { baseUrl } from '../config';

axios.defaults.baseURL = baseUrl

function ResultList() {
    const [response, setResponse] = useState(null);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const { inputValue } = useContext(InputContext)

    const fetchData = async (param) => {
        try {
            setLoading(true);
            const res = await axios(`/${param}`)
            setResponse(res.data);
            setError(null);
        } catch (err) {
            setError(err);

        } finally {
            setLoading(false);
        }

    }

    useEffect(() => {
        if (inputValue.length) {
            fetchData(inputValue)
        }
        setResponse(null);
    }, [inputValue]);

    if (loading) {
        return (<div className="flex flex-col space-y-3 animate-pulse p-4 container mx-auto max-w-2xl">
            <div className="h-6 bg-gray-300 rounded-md "></div>
            <div className="h-40 bg-gray-300 rounded-md "></div>
            <div className="h-8 bg-gray-300 rounded-md "></div>
            <div className="h-40 bg-gray-300 rounded-md "></div>

        </div>
        )
    }

    if (error) {
        return <h3 className='text-center mt-10 font-semibold text-gray-500 '> No Definitions Found 😢</h3>

    }

    return (
        <div className='container mx-auto p-4 max-w-3xl'>
            {response && (
                <div>
                    <div className='bg-gray-300 rounded-xl p-8 shadow-2xl mt-4 mb-10 transition-transform transform hover:scale-105 hover:z-10'>
                        <h3 className='text-2xl font-bold mb-2'>Meaning & Definition:</h3>
                        <MeaningList mean={response} />
                    </div>
                    <div className="p-8 rounded-xl shadow-2xl bg-gray-300 mb-10 transition-transform transform hover:scale-105 hover:z-10">
                        <h3 className='text-2xl font-bold mb-2' >Example:</h3>
                        <Example mean={response} />
                    </div>
                    <div className="p-8 rounded-xl shadow-2xl bg-gray-300 mb-10 transition-transform transform hover:scale-105 hover:z-10">
                        <h3 className='text-2xl font-bold mb-2'>Synonym:</h3>
                        <Synonym mean={response} />
                    </div>
                    <div className="p-8 rounded-xl shadow-2xl bg-gray-300 mb-8 transition-transform transform hover:scale-105 hover:z-10">
                        <h3 className='text-2xl font-bold mb-2'>Antonym:</h3>
                        <Antonym mean={response} />
                    </div>
                </div>
            )}

        </div>
    )
}

export default ResultList
