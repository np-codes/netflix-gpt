import OpenAI from 'openai';
import { useSelector } from 'react-redux';

const useOpenaiConfig = () => {
    const API_KEY = useSelector(store => store.config.userapikey)
    if (!API_KEY) return;
    return new OpenAI({
    apiKey: API_KEY,
    dangerouslyAllowBrowser: true // This is the default and can be omitted
  });
}
export default useOpenaiConfig;