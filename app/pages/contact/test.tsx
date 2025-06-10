"use client";
import './test.css';
export default function Test() {
  return <>
    <div id='mainCer'> 
      <div id='slider' style={{ ["--quantity"]: "8" } as React.CSSProperties & { [key: string]: string | number }} >
        <div className="item" style={{ ["--position"]: "1" } as React.CSSProperties & { [key: string]: string | number }}>
          <img src="certificates/AlgoExpert.png" alt='cer1'/>
        </div>

        <div className="item" style={{ ["--position"]: "2" } as React.CSSProperties & { [key: string]: string | number }}>
          <img src="certificates/Sql_postgres.jpg" alt='cer1'/>
        </div>

        <div className="item" style={{ ["--position"]: "3" } as React.CSSProperties & { [key: string]: string | number }}>
          <img src="certificates/c_c++.jpg" alt='cer1'/>
        </div>

        <div className="item" style={{ ["--position"]: "4" } as React.CSSProperties & { [key: string]: string | number }}>
          <img src="certificates/C++_Lco.png" alt='cer1'/>
        </div>

        <div className="item" style={{ ["--position"]: "5" } as React.CSSProperties & { [key: string]: string | number }}>
          <img src="certificates/MERN_Lco.jpg" alt='cer1'/>
        </div>

        <div className="item" style={{ ["--position"]: "6" } as React.CSSProperties & { [key: string]: string | number }}>
          <img src="certificates/DSA_c_c++.jpg" alt='cer1'/>
        </div>

        <div className="item" style={{ ["--position"]: "7" } as React.CSSProperties & { [key: string]: string | number }}>
          <img src="certificates/DSA_c_c++.jpg" alt='cer1'/>
        </div>

        <div className="item" style={{ ["--position"]: "8" } as React.CSSProperties & { [key: string]: string | number }}>
          <img src="certificates/DSA_c_c++.jpg" alt='cer1'/>
        </div>
      </div>
    </div>

    <div className="container">
        {/* <!-- First row - animate left --> */}
        <div className="marquee-container">
            <div className="marquee-content">
                {/* <!-- First set --> */}
                <div className="tech-item node">NODE</div>
                <div className="tech-item reactjs">REACTJS</div>
                <div className="tech-item angular">ANGULAR</div>
                <div className="tech-item postgres">POSTGRES</div>
                <div className="tech-item nextjs">NEXTJS</div>
                <div className="tech-item git">GIT</div>
                <div className="tech-item cpp">C++</div>
                <div className="tech-item js">JS</div>
                <div className="tech-item mongodb">MONGODB</div>
                
                {/* <!-- Second set (duplicate) --> */}
                <div className="tech-item node">NODE</div>
                <div className="tech-item reactjs">REACTJS</div>
                <div className="tech-item angular">ANGULAR</div>
                <div className="tech-item postgres">POSTGRES</div>
                <div className="tech-item nextjs">NEXTJS</div>
                <div className="tech-item git">GIT</div>
                <div className="tech-item cpp">C++</div>
                <div className="tech-item js">JS</div>
                <div className="tech-item mongodb">MONGODB</div>
                
                {/* <!-- Third set (duplicate) --> */}
                <div className="tech-item node">NODE</div>
                <div className="tech-item reactjs">REACTJS</div>
                <div className="tech-item angular">ANGULAR</div>
                <div className="tech-item postgres">POSTGRES</div>
                <div className="tech-item nextjs">NEXTJS</div>
                <div className="tech-item git">GIT</div>
                <div className="tech-item cpp">C++</div>
                <div className="tech-item js">JS</div>
                <div className="tech-item mongodb">MONGODB</div>
                
                {/* <!-- Fourth set (duplicate) --> */}
                <div className="tech-item node">NODE</div>
                <div className="tech-item reactjs">REACTJS</div>
                <div className="tech-item angular">ANGULAR</div>
                <div className="tech-item postgres">POSTGRES</div>
                <div className="tech-item nextjs">NEXTJS</div>
                <div className="tech-item git">GIT</div>
                <div className="tech-item cpp">C++</div>
                <div className="tech-item js">JS</div>
                <div className="tech-item mongodb">MONGODB</div>
            </div>
        </div>
{/* 
        <!-- Second row - animate right (different order) --> */}
        <div className="marquee-container-reverse">
            <div className="marquee-content-reverse">
                {/* <!-- First set (different order) --> */}
                <div className="tech-item mongodb">MONGODB</div>
                <div className="tech-item js">JS</div>
                <div className="tech-item cpp">C++</div>
                <div className="tech-item git">GIT</div>
                <div className="tech-item nextjs">NEXTJS</div>
                <div className="tech-item postgres">POSTGRES</div>
                <div className="tech-item angular">ANGULAR</div>
                <div className="tech-item reactjs">REACTJS</div>
                <div className="tech-item node">NODE</div>
                
                {/* <!-- Second set (duplicate, different order) --> */}
                <div className="tech-item mongodb">MONGODB</div>
                <div className="tech-item js">JS</div>
                <div className="tech-item cpp">C++</div>
                <div className="tech-item git">GIT</div>
                <div className="tech-item nextjs">NEXTJS</div>
                <div className="tech-item postgres">POSTGRES</div>
                <div className="tech-item angular">ANGULAR</div>
                <div className="tech-item reactjs">REACTJS</div>
                <div className="tech-item node">NODE</div>
                
                {/* <!-- Third set (duplicate, different order) --> */}
                <div className="tech-item mongodb">MONGODB</div>
                <div className="tech-item js">JS</div>
                <div className="tech-item cpp">C++</div>
                <div className="tech-item git">GIT</div>
                <div className="tech-item nextjs">NEXTJS</div>
                <div className="tech-item postgres">POSTGRES</div>
                <div className="tech-item angular">ANGULAR</div>
                <div className="tech-item reactjs">REACTJS</div>
                <div className="tech-item node">NODE</div>
                
                {/* <!-- Fourth set (duplicate, different order) --> */}
                <div className="tech-item mongodb">MONGODB</div>
                <div className="tech-item js">JS</div>
                <div className="tech-item cpp">C++</div>
                <div className="tech-item git">GIT</div>
                <div className="tech-item nextjs">NEXTJS</div>
                <div className="tech-item postgres">POSTGRES</div>
                <div className="tech-item angular">ANGULAR</div>
                <div className="tech-item reactjs">REACTJS</div>
                <div className="tech-item node">NODE</div>
            </div>
        </div>
    </div>
  </>
}
