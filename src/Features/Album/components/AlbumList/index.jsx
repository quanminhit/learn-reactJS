import React from 'react';
import Album from '../Album';
import './styles.scss';
import PropTypes from 'prop-types';

AlbumList.propTypes = {
    albumList: PropTypes.array.isRequired,
};


function AlbumList({ albumList }) {

    return (
        <ul className='album-list'>
            {albumList.map(album => (
                <li key={album.id}>
                    <Album album={album} />
                </li>
            ))}
        </ul>
    );
}

export default AlbumList;