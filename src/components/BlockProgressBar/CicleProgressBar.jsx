import './CicleProgressBar.css';

const CicleProgressBar = () => {
  return (
    <div class="container d-flex justify-content-center padding">
    <div class="row">
        <div class="col-md-9 col-sm-6">
            <div class="progress blue">
                <span class="progress-left">
                    <span class="progress-bar"></span>
                </span>
                <span class="progress-right">
                    <span class="progress-bar"></span>
                </span>
                <div class="progress-value">100%</div>
            </div>
        </div>
    </div>
</div>
  );
}

export default CicleProgressBar;