import { useState, useEffect } from "react";

function PostList() {
    const [list, setList] = useState([]);
    const [bodyText, setBodyText] = useState("")

    const postsData = async () => {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");

        const data = await response.json();
        setList(data);
        console.log(data)
        console.log(list)
    }

    const postItemData = async (itemId) => {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${itemId}`);

        const data = await response.json();
        setBodyText(data.body);
        
    }



    useEffect(() => {
        postsData();
    }, [])

    function showPost(itemId) {
            postItemData(itemId)
    }

    return (
        <div style={{ display: "flex", flexDirection: "row" }}>
       <div style={{ width: "50%" }}>
        <ul>
            {list.map((item) => (
                <li
                key={item.id}>
                    <p><b>
                        <button onClick={() => showPost(item.id)}>{item.title}</button></b></p>
                </li>
            ))}
        </ul>
        </div>
        <div style={{  width: "50%" }}>{bodyText}</div>
        </div>
    )
}

export default PostList

