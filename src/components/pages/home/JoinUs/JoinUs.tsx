import Style from "./JoinUs.module.scss";
import Joinus from "../../../../../public/bg_web3.png";

const JoinUs = () => {
  return (
    <>
      <div className={Style.Wrapper}>
        <div className={Style.Wrapper_Width}>
          <div className={Style.bgc}>
            <img src={Joinus} alt="" />
          </div>
          <div className={Style.title}>
            <h3>Join us</h3>
            <p>
              By joining “Danaker”, you are becoming the part of a vibrant and
              inclusive community where every woman is empowered and which
              contributes to shaping a brighter future for all.
            </p>
            
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSdAgyQCffsStnxEEW9wQOFwSaHQwpRI8Ve6UAlKwg_xL1w3ew/viewform">become a member</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default JoinUs;
