import { Link, useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

const BlogDetails = () => {
    const params = useParams();
    const {data,error,loading} = useFetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
    if(loading)return <p>Loading...</p>
    if(error) return <p>Error...</p>  
    return(
        <>
        <h3>{data.title}</h3>
        <p>{data.body}</p>
        <Link to="/blog">Volver</Link>
        </>
    )
}

export default BlogDetails;