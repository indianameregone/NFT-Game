import React from 'react';
import './gallery.css';
import {Link} from "react-router-dom";

function Gallery(){
    return(
        <div className='gallery'>
            <div className='gallery-1'>
            <h1>Choose one of our exclusive NFT</h1>
            <a href='https://testnets.opensea.io/assets/0x5239ce62ceed3c5a69bacca7a824a8e127d907ac/0'>
            <img className='img-gal' src='https://lh3.googleusercontent.com/WRaPt_7g31HE10CWRxVEcUQ7dgcTwshRdcRR8PRuqLQ_-26umv-v2Klpzb1WAjbgSUDarekEEYpqCUsSej2Uc9me-kjM6PnlvaKgLg=w600' alt=''/>
            </a>
            <a href='https://testnets.opensea.io/assets/0x5239ce62ceed3c5a69bacca7a824a8e127d907ac/1'>
            <img className='img-gal img2' src='https://lh3.googleusercontent.com/dPNOpN41sOKhK6dN0tEJgNADrzs3pLGUoUlIvGvlw3Ehl2ob9WIcHx50LECe1C57hWHtHsZESR4iUQu62ChHuNJ1kcL01MRM_Y4z=w271' alt=''/>
            </a>
            <a href='https://testnets.opensea.io/assets/0x5239ce62ceed3c5a69bacca7a824a8e127d907ac/3'>
            <img className='img-gal' src='https://lh3.googleusercontent.com/noGS1lDaxzTHLChj9uu_d8wbjSlTNOSQbjqEEkLjSO9wQ2pQ0334Goh42AmSQPhkdYDD_WahvUdVo15Wr2Jim4HDU2mKBvHn-2NRFA=w271' alt=''/>
            </a>
            <a href='https://testnets.opensea.io/assets/0x5239ce62ceed3c5a69bacca7a824a8e127d907ac/2'>
            <img className='img-gal' src='https://lh3.googleusercontent.com/p3rMBFgRu9AeLmfll-cA46b898xdF2_eFzMQoiCqMQ1zfQZCdcvhCB-HqbnvKld5c_l9Cpzm9B1r3GQu3ygNNVQZ7DZMWxj74P0m=w271' alt=''/>
            </a>
            </div>
            <div className='backBTN'>
            <Link to='/' className='btn-link'>HOME</Link>
            </div>
            
        </div>
    )
}

export default Gallery