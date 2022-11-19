import React from "react";
import { connect } from "react-redux";
import { SaveCardData} from "../Actions";


const Card = (props) => {

  // Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }

      form.classList.add('was-validated')
    }, false)
  })
})()
  
    const { cardData } = props;
  
    const handleChange = (event) => {
      const { name, value } = event.target;
      const prevdata = cardData.Data;
  
      if (name === "url") {
        if (event.target.files.length > 0) {
          prevdata[name] = URL.createObjectURL(event.target.files[0]);
          prevdata["FileName"] = event.target.files[0].name;
        }
      } else {
        prevdata[name] = value;
      }
      props.SaveCardData(prevdata);
      localStorage.setItem('cardData', JSON.stringify(prevdata));
    };


return(
        <div class="form-wrapper">
        <div class="col-xl-8 col-lg-12 col-md-12 col-sm-12">
        <form autoComplete="off" novalidate>
            <div class="col-lg-8 col-md-12 col-sm-12">
              <label for="validationCustom01" class="form-label">
                CARD HOLDER NAME
              </label>
              <div class="input">
                <input
                  type="text"
                  class="form-control"
                  name="cardholderName"
                  defaultValue={cardData.Data ? cardData.Data.cardholderName : "Jane Appleseed"}
                  onChange={handleChange}
                  required
                />
              </div>
              <div class="invalid-feedback">
                Card Holder Name can not be empty
              </div>
            </div>
            <div class="col-lg-8 col-md-12 col-sm-12">
              <label for="validationCustom02" class="form-label">
                CARD NUMBER
              </label>
              <div class="input">
                <input
                  type="tel"
                  class="form-control"
                  name="cardNumber"
                  defaultValue={cardData.Data ? cardData.Data.cardNumber : "0000 0000 0000 0000"}
                  onChange={handleChange}
                  pattern="[0-9]{4} [0-9]{4} [0-9]{4} [0-9]{4}"
                  required
                />
              </div>
              <div class="invalid-feedback"> </div>
            </div>
            <div className="row">
              <div className="col-lg-4 col-md-6 col-sm-6">
                <label for="validationCustom03" class="form-label">
                  EXP. DATE(MM/YY)
                </label>
                <div class="input">
                  <div class="input-group">
                    <input
                      type="tel"
                      class="form-control"
                      name="month"
                      defaultValue={cardData.Data ? cardData.Data.month : "00"}
                      onChange={handleChange}
                      pattern="[0-9]{2}"
                      required
                    />
                    <input
                      type="tel"
                      class="form-control"
                      name="year"
                      defaultValue={cardData.Data ? cardData.Data.year : "00"}
                      onChange={handleChange}
                      pattern="[0-9]{2}"
                      required
                    />
                  </div>
                  <div class="invalid-feedback"> </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 col-sm-6">
                <label for="validationCustom05" class="form-label">
                  CVC
                </label>
                <div class="input">
                  <input
                    type="tel"
                    class="form-control"
                    name="cvc"
                    defaultValue={cardData.Data ? cardData.Data.cvc : "123"}
                    onChange={handleChange}
                    pattern="[0-9]{3}"
                    required
                  />
                </div>
                <div class="invalid-feedback"> </div>
              </div>
            </div>

            <br />
            <div class="col-12">
              <div class="d-grid gap-2 col-lg-8 col-md-12 col-sm-12 ">
                <button class="btn btn-primary" type="submit">
                  Confirm
                </button>
                <br />
              </div>
            </div>
            </form>
        </div>
      </div>
    );
  }


const mapStateToProps = (state) => ({
  cardData: state.Card,
});

export default connect(mapStateToProps, { SaveCardData })(Card);
