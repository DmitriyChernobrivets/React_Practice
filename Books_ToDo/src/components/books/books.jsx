import React from "react";
import styles from "./books.css"

const Books = ({ addbooks, deleteBooks }) =>
    (<ul>
        {addbooks.map(({ id, img, title, author, descr }) => {
            return (
                <li key={id}>
                    <img src={img} alt="img" />
                    <div className="book">
                        <h2>{title}</h2>
                        <h4>{author}</h4>
                        <p>{descr}</p>
                    </div>
                    <button className="delete"onClick={() => deleteBooks(id)}>delete</button>
                </li>

            )
        })}
    </ul>)

export {
    Books
}