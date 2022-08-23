import '../../assets/styles/account/MyNFT.css'

function MyNFT({ nft }) {
    return (
      <div className="MyNFT card col-4">
            <div className="card">
            <img src={nft.img_url} className="card-img-top" alt="..." />
            {/* <div className="card-body">
                <h5 className="card-title">{tokenMetadata.name}</h5>
                {isItemOnSale()? <p className="card-text">
                    <img width={10} src="https://static.opensea.io/general/ETH.svg" />
                    {itemsOnSale[tokenId].price}
                </p>: null}
            </div> */}
            </div>
      </div>
    );
}

export default MyNFT;