// src/components/SnakeGame.js
import React, { useState, useEffect } from 'react';
import Board from './Board';

const SnakeGame = () => {
    const [snake, setSnake] = useState([{ x: 10, y: 10 }]);
    const [food, setFood] = useState({ x: 5, y: 5 });
    const [direction, setDirection] = useState('RIGHT');

    useEffect(() => {
        const handleKeyDown = (e) => {
            switch (e.key) {
                case 'ArrowUp':
                    setDirection('UP');
                    break;
                case 'ArrowDown':
                    setDirection('DOWN');
                    break;
                case 'ArrowLeft':
                    setDirection('LEFT');
                    break;
                case 'ArrowRight':
                    setDirection('RIGHT');
                    break;
                default:
                    break;
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    useEffect(() => {
        const moveSnake = () => {
            setSnake(prevSnake => {
                const newSnake = [...prevSnake];
                const head = { ...newSnake[0] };

                switch (direction) {
                    case 'UP':
                        head.y -= 1;
                        break;
                    case 'DOWN':
                        head.y += 1;
                        break;
                    case 'LEFT':
                        head.x -= 1;
                        break;
                    case 'RIGHT':
                        head.x += 1;
                        break;
                    default:
                        break;
                }

                newSnake.unshift(head);
                newSnake.pop();
                return newSnake;
            });
        };

        const interval = setInterval(moveSnake, 200);
        return () => clearInterval(interval);
    }, [direction]);

    return <Board snake={snake} food={food} />;
};

export default SnakeGame;
