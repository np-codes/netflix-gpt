import useOpenaiConfig from './useOpenaiConfig'
import Error from '../components/Error';
import { useCallback } from 'react';

// this is not a hook just an async function
export const useOpenai = () => {
        const openai = useOpenaiConfig();
        const Openai_Movies_Recommend = useCallback(async(search) => {
            const Query = `The user input is: "${search}". If the input is meaningful (e.g., a mood, theme, or genre), suggest exactly five related movies. If it is unclear or nonsensical, interpret it in the closest sensible way possible and still suggest five appropriate movies. Return the movie titles in a single line, separated by commas — with no numbers, descriptions, or extra text. Example format: "Superbad, Borat, The Hangover, Step Brothers, Bridesmaids."`;

            const gptResults = await openai.chat.completions.create({
                messages: [{ role: 'user', content: Query }],
                model: 'gpt-3.5-turbo',
            });
            if (!gptResults.choices){                
                <Error />
            }
            console.log(gptResults)
            const gptRecommends = gptResults?.choices[0]?.message?.content.split(",");
            return gptRecommends;
        },[openai]);

        return Openai_Movies_Recommend;  
    };
