import React from 'react'
// import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import { CircularProgressbarWithChildren } from 'react-circular-progressbar';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';

const percentage = 66;





const CircularProgressBar = ({percentage,text,red,blue,green}) => {
    
    
    return (
        <>
            <CircularProgressbarWithChildren 
                className='cir-progress-bar'
                value={percentage}
                // text={`${percentage}%`}
                styles={buildStyles({
                    // Rotation of path and trail, in number of turns (0-1)
                    rotation: 0.25,

                    // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                    strokeLinecap: 'round',

                    // Text size
                    textSize: '16px',

                    // How long animation takes to go from one percentage to another, in seconds
                    pathTransitionDuration: .50,

                    // Can specify path transition in more detail, or remove it entirely
                    // pathTransition: 'none',

                    // Colors
                    pathColor: `rgba(${red}, ${green}, ${blue}, ${percentage / 100})`,
                    textColor: '#f88',
                    trailColor: '',
                    backgroundColor: '#3e98c7',
                })}>

                <div className='inside-circular-bar ' >
                <h4 className="circular-bar-text" >{text}</h4>
                <div className="circular-bar-percentage">{percentage}%</div>
                
                </div>
                </CircularProgressbarWithChildren>
        </>
    )
}






const TestCircularProgressBar = ({percentage,text,red,blue,green})=>{
  return(
    <>

<CircularProgressbar
  value={percentage}
  text={`${percentage}%`}
  styles={buildStyles({
    // Rotation of path and trail, in number of turns (0-1)
    rotation: 0.25,

    // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
    strokeLinecap: 'butt',

    // Text size
    textSize: '16px',

    // How long animation takes to go from one percentage to another, in seconds
    pathTransitionDuration: 0.5,

    // Can specify path transition in more detail, or remove it entirely
    // pathTransition: 'none',

    // Colors
    pathColor: `rgba(${red}, ${green}, ${blue}, ${percentage / 100})`,
    
    textColor: '#f88',
    trailColor: '#d6d6d6',
    backgroundColor: '#3e98c7',
  })}
/>;
    </>
  );

}



export default CircularProgressBar;
export {TestCircularProgressBar};










{/* <>
  // Put any JSX content in here that you'd like. It'll be vertically and horizonally centered. 
  <img style={{ width: 40, marginTop: -5 }} src="https://i.imgur.com/b9NyUGm.png" alt="doge" />
  <div style={{ fontSize: 12, marginTop: -5 }}>
    <strong>66%</strong> mate
  </div>
</>; */}