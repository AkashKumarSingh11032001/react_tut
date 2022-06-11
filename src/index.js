import React from 'react';
import ReactDom from 'react-dom';
import './index.css'

const BookList = () => {
    return (
        <div className="booklist">
            <Book title="See you soon"/>
            <Book title="The taste of Life."/>
            <Book title="Happy world"/>
        </div>
    );
}

const Book = (props) => {
    return (
        <div className="book">
            <Image />
            <Title title={props.title} />
            <Author />
        </div>
    );
}

const Image = () => {
    return <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVzbKcUuxCtRDgrOphFFV9koAIh9iSyy13BtuvtVgxdNKjJhfF1X1v6V1IwpX8zmH-R0c&usqp=CAU" alt="APG" />
};
const Title = (props) => {
    return <h1>{props.title}</h1>
};

const Author = () => {
    return <h4>APG Abdul Klam sir</h4>
}



ReactDom.render(<BookList />, document.getElementById('root'));