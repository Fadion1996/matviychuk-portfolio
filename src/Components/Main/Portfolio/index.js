import React from 'react';
import css from './portfolio.module.scss';
import {portfolio} from '../../../Data/portfolio';
import {images} from '../../../Images/Jobs/';
import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile';

const Portfolio = () => {

    return(
        <div className={css.portfolioList}>
            {
                portfolio.map(({id, url, name, img, read}, index) => {
                    return(
                        <a className={css.item} key={index} href={url ? url : read} target="_blank" rel="noopener noreferrer">
                            <p className={css.title}>{name}</p>
                            {img ? <img className={css.img} src={images[`img${img}`]}/>
                                : <InsertDriveFileIcon className={css.read} color={'primary'} fontSize="large"/>
                            }
                        </a>
                    )
                })
            }
        </div>
    )
};

export default Portfolio;