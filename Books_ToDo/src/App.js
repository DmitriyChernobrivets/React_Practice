import React, { Component } from "react";
import BookEditor from "./components/book_editor/book_editor"
import { Books } from "./components/books/books"
import defaultBooks from "./default_books.json"
import AppCss from "./App.css"
import uuid from "uuid/v4";
import SearchBar from "./components/serach_bar/search"

export default class App extends Component {

    state = {
        books: defaultBooks || [],
        current_filter: "",
        isEmpty: false
    }
    currentFilter = (e) => {
        this.setState({
            current_filter: e.target.value
        })

    }
    addBook = ({ title, link, author, descr }) => {
        const newBooks = {
            id: uuid(),
            title,
            link,
            author,
            descr
        }
        this.setState(prevState => ({
            books: [newBooks, ...prevState.books]
        }))
    }
    deleteBook = (id) => {
        this.setState(prevState => ({
            books: prevState.books.filter(book => book.id !== id)
        }))
    }
    render() {
        const { books, current_filter } = this.state;
        const getVisibleNotes = (allnotes, filter) => allnotes.filter(note => note.title.toLowerCase().includes(filter.toLowerCase()))
        const visibleBooks = getVisibleNotes(books, current_filter);

        return (
            <div className="container">
                <div className="search">
                    <SearchBar value={current_filter} onChange={this.currentFilter} />
                    <BookEditor onSubmit={this.addBook} />
                </div>

                <Books addbooks={visibleBooks} deleteBooks={this.deleteBook} />
            </div>
        )
    }
}