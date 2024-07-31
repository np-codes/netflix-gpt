import openai from '../utils/openai'
import Error from '../components/Error';

// this is not a hook just an async function
export const Openai = async(search) => {
        
        const Query = `Suggest 5 movies for ${search}. Name them in a single line, separated by commas. Ex:"Superbad, Borat.."`;

        /*
        const gptResults = await openai.chat.completions.create({
            messages: [{ role: 'user', content: Query }],
            model: 'gpt-3.5-turbo',
        });
        if (!gptResults.choices){                
            {<Error />}
        }
        console.log(gptResults)
        const gptRecommends = gptResults?.choices[0]?.message?.content.split(",");
    */
        const gptRecommends = ["Anchorman", "Step Brothers", "The Hangover", "Bridesmaids", "Super Troopers"]
        return gptRecommends;
    }