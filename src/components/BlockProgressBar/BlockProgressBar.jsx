import './BlockProgressBar.css';
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const BlockProgressBar = () => {
  return (
  <div className='block_progress_bar'>
    <div className='block_progress_bar_c1'>
        <span className='black_text'>Application</span>
        <span className='gray_text'>27 Agu 2023</span>
    </div>
        
        <div class="progress-bar">
        <CircularProgressbar trail="#f0f"  strokeWidth={10} value={20} text={`${20}%`} />
        </div>

  </div>
  );
}

export default BlockProgressBar;