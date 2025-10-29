import { createContext, useState } from "react";


export const videoContext = createContext()

const VideoProvider = ({children}) => {
const baseUrl = import.meta.env.VITE_BASE_URL

const [ generatingVideo, setGeneratingVideo ] =  useState(false)
const [datas,setData] = useState(false)
const [userVideos, setUserVideos] = useState([])
const [ getVideos,setGetVideos] = useState(false)
const generateVideo = async (data) => {
    try {
        setGeneratingVideo(true)

        const response = await fetch(`${baseUrl}/aivideo/generate-video`,{
            method:"POST",
            body:JSON.stringify(data),
            headers:{
                authorization:`Bearer ${localStorage.getItem("token")}`,
                "Content-Type": "application/json"
            },
        })
        const res = await response.json()
        setData(res)
        console.log(res)

    } catch (error) {
        console.log(error);
        
    } finally {
        setGeneratingVideo(false)
    }
}
const getUserVideos = async () => {
    
    try {
        setGetVideos(true)
        const response = await fetch(`${baseUrl}/aivideo/user-video`,{
            method:"GET",
            headers:{
                authorization:`Bearer ${localStorage.getItem("token")}`,
                "Content-Type": "application/json"
            },
        })
        const res = await response.json()
        setUserVideos(res)
        console.log(res)

    } catch (error) {
        console.log(error);

    } finally {
        setGetVideos(false)
    }
}
const value = {
    generateVideo,
    getUserVideos,
    generatingVideo,
    datas,
    userVideos,
    getVideos
}
    return <videoContext.Provider value={value}>{children}</videoContext.Provider>
}

export default VideoProvider