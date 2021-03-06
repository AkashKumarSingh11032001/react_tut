import React from 'react';
import ReactDom from 'react-dom';
import './index.css'

// // accesing data from list of items.
// const names = ['akash','kumar','singh']
// const newName = names.map(x => {return <h1>{x}</h1>})
// console.log(newName);

// accessing data using list of objects []list of books details
const BooksDetails = [
    {
        id: 1,
        img: "https://www.thebalancecareers.com/the-parts-of-book-content-2799968",
        title: "Happy World",
        author: "Akash Singh"
    },
    {
        id: 2,
        img: "https://collins.co.uk/pages/times-books",
        title: "Thinkk before you speak",
        author: "Ak Singh"
    },
    {
        id: 3,
        img: "https://www.thespruce.com/how-to-sell-used-books-1388970",
        title: "Dont lie to me",
        author: "Akash"
    }
];

// init phase 1. {seprate books contents}
// const firstBook = {
//     img: "https://www.thebalancecareers.com/the-parts-of-book-content-2799968",
//     title: "Happy World",
//     author: "Akash Singh"
// }
// const secondBook = {
//     img: "https://collins.co.uk/pages/times-books",
//     title: "Thinkk before you speak",
//     author: "Ak Singh"
// }
// const thirdBook = {
//     img: "https://www.thespruce.com/how-to-sell-used-books-1388970",
//     title: "Dont lie to me",
//     author: "Akash"
// }

const BookList = (props) => {
    return (
        <div className="booklist">
            {/* old ways */}
            {/* <Book img={firstBook.img} title={firstBook.title} author={firstBook.author} />
            <Book img={secondBook.img} title={secondBook.title} author={secondBook.author} />
            <Book img={thirdBook.img} title={thirdBook.title} author={thirdBook.author} /> */}
            
            {/* new ways using ES6 properties*/}
            {BooksDetails.map(x => { // x is single object from Booksdetails
                return <Book key={x.id} book={x} /> // key is just for react to identify each object uniquely
            })}
        </div>
    );
}

// eventHandlers
// 1-> onClick={() => console.log(title)}
// 2-> by refrence/function  =>> 
const Refhandler = () => {
    alert("hi!")
}
// 3-> Refrence function with some paramenter
const RefWithPara = (author) => {
    console.log(author)
}
const Book = (props) => { // props will recive an object 'book' and inside that main containe aviable.
    const {img, title, author} = props.book;
    return (
        <div className="book">
            <Image img={img} />
            <Title title={title} />
            <Author author={author} />
            <button type="button" onClick={() => console.log(title)} >Press Me!</button>
            <button type="button" onClick={Refhandler} >Refrence/function Press Me!</button>
            <button type="button" onClick={() => RefWithPara(author)} >With Parameter!</button>
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