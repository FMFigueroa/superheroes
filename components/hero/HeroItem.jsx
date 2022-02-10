import Image from "next/image";


const HeroItem = ({ hero }) => {
  return (
    <div className="card m-2 card__face--front" style={{ width: 270 }}>
      <h2 className="d-flex justify-content-center pt-2">
        {hero.name}
      </h2>
      <Image
        src={hero.image.url}
        className="card-img-top"
        alt="imagen de supeheroe"
        width={270}
        height={300}
      />
      <div className="card-body">
        <p className="card-title">Powerstats  </p>
        <div className="conatiner ms-3">
          <div className="row ">
            <Image
              src="https://img.icons8.com/ios-glyphs/90/000000/for-experienced.png"
              alt="icon"
              width={24}
              height={24}

            />
            {hero.powerstats.intelligence}
          </div>
        </div>

        {/* <button
          type="button"
          className="btn btn-primary mt-3"
           onClick={handleChange} 
        >
          View &rarr;
        </button> 
        
        */}
      </div>
    </div>
  );
};

export default HeroItem;
