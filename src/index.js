import React from 'react';
import ReactDom from 'react-dom';


const BookList = () => {
    return (
        <div>
            <Book />
        </div>
    );
}

const Book = () => {
    return (
        <div>
            <Image />
            <Title />
            <Author />
        </div>
    );
}

const Image = () => {
    return <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVzbKcUuxCtRDgrOphFFV9koAIh9iSyy13BtuvtVgxdNKjJhfF1X1v6V1IwpX8zmH-R0c&usqp=CAU" alt="APG" />
};
const Title = () => {
    return <h2>The taste of Life.</h2>
};

const Author = () => {
    return <h4>APG Abdul Klam sir</h4>
}



ReactDom.render(<BookList />, document.getElementById('root'));