import React, { Component } from "react";
import editorCss from "./book_editor.css"

export default class BookEditor extends Component {
    state = {
        title: "",
        img: "",
        author: "",
        descr: "",
    }
    handleState = ({ target }) => {
        this.setState({
            [target.id]: target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.onSubmit(this.state)
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>

                <label htmlFor="title">
                    Title
                        <input
                        type="text"
                        id="title"
                        onChange={this.handleState}
                    />
                </label>

                <label htmlFor="link">
                    Image link
                        <input
                        type="text"
                        id="link"
                        onChange={this.handleState}
                    />
                </label>

                <label htmlFor="author">
                    Author Name
                        <input
                        type="text"
                        id="author"
                        onChange={this.handleState}
                    />
                </label>

                <label htmlFor="discription">
                    Discription
                        <textarea
                        type="text"
                        id="descr"
                        rows="10"
                        onChange={this.handleState}
                    />
                </label>
                <button className="add" onClick={this.addBook}>ADD BOOK</button>
            </form>
        )
    }
}