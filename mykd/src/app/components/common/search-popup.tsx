import React from "react";

// prop type 
type IProps = {
  isSearchOpen: boolean;
  setIsSearchOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const SearchPopup = ({ isSearchOpen, setIsSearchOpen }: IProps) => {
  // handle close search
  const handleCloseSearch = (audioPath: string) => {
    setIsSearchOpen(false)
    const audio = new Audio(audioPath);
    audio.play();
  };
  return (
    <div className={`${isSearchOpen ? 'search__active' : ''}`}>
      <div className={`search__popup-wrap`}>
        <div className="search__layer"></div>
        <div className="search__close" onClick={() => handleCloseSearch('/assets/audio/remove.wav')}>
          <span>
            <i className="flaticon-swords-in-cross-arrangement"></i>
          </span>
        </div>
        <div className="search__wrap text-center">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <h2 className="title">
                  ... <span>Search Here</span> ...
                </h2>
                <div className="search__form">
                  <form action="#">
                    <input
                      type="text"
                      name="search"
                      placeholder="Type keywords here"
                      required
                    />
                    <button className="search-btn">
                      <i className="flaticon-loupe"></i>
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchPopup;
