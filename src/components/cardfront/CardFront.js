import { connect } from "react-redux";
import cardLogo from './images/cardLogo.svg';

const CardFront = (props) => {
    return (
      <>
        <div id="card-front-container">
          <img class="cardLogo" src={cardLogo} alt="Card Logo" />
          <p id="cName">{props.cardData.Data
                      ? props.cardData.Data.cardholderName
                      : "Jane Appleseed"}</p>
          <p id="cNumber">{props.cardData.Data
                      ? props.cardData.Data.cardNumber
                      : "0000 0000 0000 0000"}</p>
          <p id="cMM">{props.cardData.Data
                      ? props.cardData.Data.month
                      : "00"}</p>
          <p id="slash">/</p>
          <p id="cYY">{props.cardData.Data
                      ? props.cardData.Data.year
                      : "00"}</p>
        </div>
      </>
    );
  };

  const mapStateToProps = (state) => ({
    cardData: state.Card,
  });
  
  export default connect(mapStateToProps, {})(CardFront);
  