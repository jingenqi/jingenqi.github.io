import React from 'react'

const Backend = () => {
  return (
    <div className="skills__content">
            <h3 className="skills__title">BackEnd Skills</h3>

            <div className="skills__box">
                <div className="skills__group">

                    {/* 1. */}
                    <div className="skills__data">
                        <i className="bx bx-badge-check"> </i>
                    <div>
                        <h3 className="skills__name">Python</h3>
                        <span className="skills__level">Advanced</span>
                    </div>
                    </div> 

                    {/* 2. */}
                    <div className="skills__data">
                        <i className="bx bx-badge-check"> </i>
                    <div>
                        <h3 className="skills__name">Machine Learning</h3>
                        <span className="skills__level">Advanced</span>
                    </div>
                    </div> 

                    {/* 3. */}
                    <div className="skills__data">
                        <i className="bx bx-badge-check"> </i>
                    <div>
                        <h3 className="skills__name">PostgraSQL</h3>
                        <span className="skills__level">Intermediate</span>
                    </div>
                    </div> 

                     

                </div>


                <div className="skills__group">
                    {/* 4. */}
                    <div className="skills__data">
                        <i className="bx bx-badge-check"> </i>

                    <div>
                        <h3 className="skills__name">Java</h3>
                        <span className="skills__level">Intermediate</span>
                    </div>
                    </div> 

                    {/* 5. */}
                    <div className="skills__data">
                        <i className="bx bx-badge-check"> </i>

                    <div>
                        <h3 className="skills__name">Deep Learning</h3>
                        <span className="skills__level">Intermediate</span>
                    </div>
                    </div> 

                    {/* 6. */}
                    <div className="skills__data">
                        <i className="bx bx-badge-check"> </i>

                    <div>
                        <h3 className="skills__name">SpringBoot</h3>
                        <span className="skills__level">Basic</span>
                    </div>
                    </div> 

 

                     
                    
                </div>
            </div>
    </div>
  )
}

export default Backend