import React from 'react'
import './MyWork.css'
import mywork_data from '../../assets/mywork_data'

const MyWork = () => {
  return (
    <div className='mywork'>
        <div className="mywork-title">
            <h1>My Latest Work</h1>
        </div>
        <div className="mywork-container">
            <div className="mywork-content">
                {mywork_data.map((work,index) => {
                  return <img key={index} src={work.w_img} alt="" />
                })}
            </div>
            </div>
            <div className="mywork-showmore">
              <p>showmore</p>
        </div>
    </div>
  )
}

export default MyWork