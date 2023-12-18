import './BlockProgressBar.css';

const BlockProgressBar = () => {
  return (
  <div className='block_progress_bar'>
    <div className='block_progress_bar_c1'>
        <span className='black_text'>Application</span>
        <span className='gray_text'>27 Agu 2023</span>

        <div class="progress-bar">
        {/* <progress value="75" min="0" max="100" style="visibility:hidden;height:0;width:0;">75%</progress> */}
        </div>

    </div>

  </div>
  );
}

export default BlockProgressBar;