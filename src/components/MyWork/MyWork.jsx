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
                  return (
                    <div key={index} className="work-item">
                      <img src={work.w_img} alt={work.w_name} />
                      <div className="work-overlay">
                        <h3>{work.w_name}</h3>
                        <p>Creative Project</p>
                      </div>
                    </div>
                  )
                })}
            </div>
        </div>
        <div className="mywork-showmore">
          <p>View All Projects</p>
        </div>
    </div>
  )
}

export default MyWork