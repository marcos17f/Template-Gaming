import React from 'react';
import nft_data from '@/data/nft-data';
import NftItemBox from './nft-item-box';

const NftItemArea = () => {
  return (
    <section className="nft-item__area">
      <div className="container custom-container">
        <div className="row justify-content-center">
          {nft_data.slice(0, 3).map((item) => (
            <div key={item.id} className="col-xxl-4 col-xl-5 col-lg-6 col-md-9">
              <NftItemBox item={item} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NftItemArea;