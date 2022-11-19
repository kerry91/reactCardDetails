import completeLogo from './images/icon-complete.svg';

const complete = () => {
    return (
      <>
      <div class="complete-wrapper">
    <div class="successPanel col col-lg-3 col-md-4 col-sm-12 col-12 text-center" id="successPanel">
    <img class="complete" src={completeLogo} alt="Tick" />
    <p class="thanks">Thank You!</p>
    <p class="added">We've added your card details</p>
    <button class="subBtn btn btn-dark">Done</button>
    </div>
    </div>

      </>
    )
}

export default complete