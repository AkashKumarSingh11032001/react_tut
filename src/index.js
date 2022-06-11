import React from 'react';
import ReactDom from 'react-dom';
import './index.css'

// // accesing data from list of items.
// const names = ['akash','kumar','singh']
// const newName = names.map(x => {return <h1>{x}</h1>})
// console.log(newName);

// accessing data using list of objects
const BooksDetails = [
    {
        img: "https://www.thebalancecareers.com/the-parts-of-book-content-2799968",
        title: "Happy World",
        author: "Akash Singh"
    },
    {
        img: "https://collins.co.uk/pages/times-books",
        title: "Thinkk before you speak",
        author: "Ak Singh"
    },
    {
        img: "https://www.thespruce.com/how-to-sell-used-books-1388970",
        title: "Dont lie to me",
        author: "Akash"
    }
];

const firstBook = {
    img: "https://www.thebalancecareers.com/the-parts-of-book-content-2799968",
    title: "Happy World",
    author: "Akash Singh"
}
const secondBook = {
    img: "https://collins.co.uk/pages/times-books",
    title: "Thinkk before you speak",
    author: "Ak Singh"
}
const thirdBook = {
    img: "https://www.thespruce.com/how-to-sell-used-books-1388970",
    title: "Dont lie to me",
    author: "Akash"
}

const BookList = (props) => {
    return (
        <div className="booklist">
            <Book img={firstBook.img} title={firstBook.title} author={firstBook.author} />
            <Book img={secondBook.img} title={secondBook.title} author={secondBook.author} />
            <Book img={thirdBook.img} title={thirdBook.title} author={thirdBook.author} />
        </div>
    );
}

const Book = (props) => {
    return (
        <div className="book">
            <Image img={props.img} />
            <Title title={props.title} />
            <Author author={props.author} />
        </div>
    );
}

const Image = (props) => {
    return <img src={props.img} alt="APG" />
};
const Title = (props) => {
    return <h1>{props.title}</h1>
};

const Author = (props) => {
    return <h4>{props.author}</h4>
}



ReactDom.render(<BookList />, document.getElementById('root'));