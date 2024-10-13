import React from "react";
import './Board.css';

const Board = ({ snake = [], food = {} }) => {
    const createBoard = () => {
        const board = [];
        for (let i = 0; i < 20; i++) {
            for (let j = 0; j < 20; j++) {
                const isSnake = snake.some(segment => segment.x === j && segment.y === i);
                const isFood = food.x === j && food.y === i;
                board.push(
                    <div
                        key={`${i}-${j}`}
                        className={`cell ${isSnake ? 'snake' : ''} ${isFood ? 'food' : ''}`}
                    />
                );
            }
        }
        return board;
    };
    return <div className="board">{createBoard()}</div>;
};

export default Board;

// import axios from "axios";
// import { useEffect, useState } from "react";
// import { Link, useNavigate } from "react-router-dom"

// const Board = ({ board, onMove }) => {
//     const [aX, setAx] = useState('');
//     const navigate = useNavigate();
//     const HandelNevigate = () => {
//         navigate('/newPage')
//     }
//     useEffect(() => {
//         const callApi = async () => {
//             const axiosss = await axios.get('http://localhost:3001/user/getUser')
//             setAx(axiosss.data);
//         }
//         callApi()
//     }, [])
//     return (
//         <div>
//             <h1>{aX}</h1>
//             <button onClick={HandelNevigate}>Nevigate button</button>
//             <Link to='/NewPage'>Nevigate Link</Link>
//         </div >
//     )
// }

// export default Board