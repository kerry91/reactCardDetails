import { connect } from "react-redux";

const CardBack = (props) => {
    return(
        <>
            <div id="card-back-container">
                <p id="cCvc">{props.cardData.Data
                      ? props.cardData.Data.cvc
                      : "123"}</p>
            </div>
        </>
    )
}

const mapStateToProps = (state) => ({
    cardData: state.Card,
  });
  
  export default connect(mapStateToProps, {})(CardBack);