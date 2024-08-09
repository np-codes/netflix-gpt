import OpenAI from 'openai';
import { useDispatch } from 'react-redux';
import {addAPIKey} from '../utils/configSlice';
import { useCallback } from 'react';

const useUserAPIKey = () => {

    const dispatch = useDispatch()
    const validateAPIKey = useCallback(async (userapikey) => {
    
        try{
            const openai = new OpenAI({
                apiKey: userapikey,
                dangerouslyAllowBrowser: true // This is the default and can be omitted
            });
            const response = await openai.models.list()
            console.log("response",response);
            if (response.data && response.data.length > 0) {
                dispatch(addAPIKey(userapikey));
                return true;
            }else {
                return false;
            }
        }catch(error) {
            return false;
        }
    },[dispatch])
    return validateAPIKey;   
}

export default useUserAPIKey;