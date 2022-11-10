import React from 'react'
import Button from '../../common/button';
import "./topfold.css";
import { NavLink } from "react-router-dom";

const TopFold = () => {
  return (
    <div className='topfold absolute-center'>
      <div className='tf-left'>
        <div className='tf-heading'>
          Discover, <br></br>collect & sell <span className='heading-gradient'>Extraordinary</span><br></br> NFTs
        </div>
        <div className='tf-description'>the leading NFT Marketplace on EthereumHome to the next generation of digital creators. Dicsover the best NFT collections.</div>
        <div className='tf-left-btns'>
          <NavLink to="/explore">
            <Button btnType="PRIMARY" btnText="Explore" btnOnClick="/explore" />
          </NavLink>
          <a href='https://opensea.io/asset/create'>
            <Button btnType="SECONDARY" btnText="CREATE" customClass='tf-left-secondary-btn' />
          </a>
        </div >
        <div className='tf-left-infoStats'>
          <div className='tf-is-infoItem absolute-center'>
            <div className='tf-infoItem-count'>200k+</div>
            <div className='tf-infoItem-label'>Collections</div>
          </div>

          <div className='tf-is-infoItem absolute-center'>
            <div className='tf-infoItem-count'>10k+</div>
            <div className='tf-infoItem-label'>Artists</div>
          </div>

          <div className='tf-is-infoItem absolute-center'>
            <div className='tf-infoItem-count'>423k+</div>
            <div className='tf-infoItem-label'>Community</div>
          </div>
        </div>
      </div>
      <div className='tf-right'>
        <div className='tf-r-bg-blob'></div>
        <div className='tf-right-diamond'>
          <div className='tf-r-diamond-item absolute-center'>
            <img className='tf-r-diamond-img' alt="diamond-banner" src='https://i.seadn.io/gae/274K7Uzl65mUiztzydqtgHAc9u2emv96pTrWdjlhSnHXoX6UtNUWZOFWB7XWRwBpVOS1D9dFhK5UOu2ksAOIgnKq?auto=format&w=1920' />
          </div>
          <div className='tf-r-diamond-item absolute-center'>
            {/* <img className='tf-r-diamond-img' alt="Emma Watson Painting" src='https://i.redd.it/m42x961dc8d61.jpg' /> */}
            <img className='tf-r-diamond2-img' alt="Jon Snow" src='https://i.redd.it/0crnklibsid61.jpg' />
          </div>
          <div className='tf-r-diamond-item absolute-center'>
            {/* <img className='tf-r-diamond-img' alt="diamond-banner" src='https://i.seadn.io/gae/2BihgegkfXaCPJB2j-RSTUx3sRxardTn_2l9A0GuGoOKLGim7MaS2FHACd2l5CIrBMAPARcILvwAtiFuQEInd2attqSUwIdke2Eekw?auto=format&w=1000'/> */}
            <img className='tf-r-diamond-img' alt="Arya Stark Painting" src='https://i.redd.it/kx7ajanna3d61.jpg' />

          </div>
          <div className='tf-r-diamond-item absolute-center'>
            <img className='tf-r-diamond-img' alt="diamond-banner" src='https://i.seadn.io/gae/wdVjF7r-ZSowbn70pz5a3M0StTP5vexl6zAxadXH89jFp8ljm3sZrmbKIloeox0U0c2tOeSzTtetOoif6EyN2MBKF0smL1pwA5VVjSg?auto=format&w=1000' />
            {/* <img className='tf-r-diamond-img' alt="diamond-banner" src='https://i.seadn.io/gae/IHOsvi8bW7h6hgc2m3NQ29RV1JBUlBEiSa2OV7-Gzi_vfP-MmB-CoixaIzdPyVH7UzPGokLyKvj05CF4ZY1GepD39pzabU0h4AOKnYk?auto=format&w=1000'/> */}


          </div>
        </div>
      </div>
    </div>
  )
}

export default TopFold;