import { instanceV3, instanceV4Post } from './api'
export default function useSearchApi() {

    const search = async (keyword) => {
        const { data } = await instanceV3.get("/search/multi", {
            params: {
                query: keyword
            }
        })

        return data;
    }

    const addToList = async (id, movieId, type) => {
        try {
            await instanceV4Post.post(`/list/${id}/items`, {
                items: [
                    {
                        "media_type": type,
                        "media_id": movieId,
                    }
                ]
            })

            return true;
        } catch (error) {
            console.error(error.message)
            return false;
        }
    }

    return { search, addToList }
}