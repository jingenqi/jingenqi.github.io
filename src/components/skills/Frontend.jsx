import React from 'react'


const Frontend = () => {
  return (
    <div className="skills__content">
            <h3 className="skills__title">Frontend Skills</h3>

            <div className="skills__box">
                <div className="skills__group">
                    {/* 1. */}
                    <div className="skills__data">
                        <i class="bx bx-badge-check"> </i>

                    <div>
                        <h3 className="skills__name">HTML</h3>
                        <span className="skills__level">Intermediate</span>
                    </div>
                    </div> 
                    
                    {/* 2. */}
                    <div className="skills__data">
                        <i class="bx bx-badge-check"> </i>

                    <div>
                        <h3 className="skills__name">CSS</h3>
                        <span className="skills__level">Intermediate</span>
                    </div>
                    </div> 

                    {/* 3. */}
                    <div className="skills__data">
                        <i class="bx bx-badge-check"> </i>
                    <div>
                        <h3 className="skills__name">Git</h3>
                        <span className="skills__level">Intermediate</span>
                    </div>
                    </div> 

                     
                </div>

                {/* 4. */}
                <div className="skills__group">
                    <div className="skills__data">
                        <i class="bx bx-badge-check"> </i>
                    <div>
                        <h3 className="skills__name">Bootstrap</h3>
                        <span className="skills__level">Basic</span>
                    </div>
                    </div> 

                    {/* 5. */}
                    <div className="skills__data">
                        <i class="bx bx-badge-check"> </i>
                    <div>
                        <h3 className="skills__name">JavaScript</h3>
                        <span className="skills__level">Basic</span>
                    </div>
                    </div> 

                    {/* 6. */}
                    <div className="skills__data">
                        <i class="bx bx-badge-check"> </i>

                    <div>
                        <h3 className="skills__name">React</h3>
                        <span className="skills__level">Basic</span>
                    </div>
                    </div> 
                    
                </div>
            </div>
    </div>
  )
}

export default Frontend