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
          <img src="certificates/Angular_Maximilian.jpg" alt='cer1'/>
        </div>

        <div className="item" style={{ ["--position"]: "3" } as React.CSSProperties & { [key: string]: string | number }}>
          <img src="certificates/c_c++.jpg" alt='cer1'/>
        </div>

        <div className="item" style={{ ["--position"]: "4" } as React.CSSProperties & { [key: string]: string | number }}>
          <img src="certificates/C++_Lco.png" alt='cer1'/>
        </div>

        <div className="item" style={{ ["--position"]: "5" } as React.CSSProperties & { [key: string]: string | number }}>
          <img src="certificates/MERN_LCO.jpg" alt='cer1'/>
        </div>

        <div className="item" style={{ ["--position"]: "6" } as React.CSSProperties & { [key: string]: string | number }}>
          <img src="certificates/Full_stack_Angela.jpg" alt='cer1'/>
        </div>

        <div className="item" style={{ ["--position"]: "7" } as React.CSSProperties & { [key: string]: string | number }}>
          <img src="certificates/Nodejs_jonas.jpg" alt='cer1'/>
        </div>

        <div className="item" style={{ ["--position"]: "8" } as React.CSSProperties & { [key: string]: string | number }}>
          <img src="certificates/DSA_c_c++.jpg" alt='cer1'/>
        </div>

        <div className="item" style={{ ["--position"]: "8" } as React.CSSProperties & { [key: string]: string | number }}>
          <img src="certificates/Sql_postgres.jpg" alt='cer1'/>
        </div>

        <div className="item" style={{ ["--position"]: "8" } as React.CSSProperties & { [key: string]: string | number }}>
          <img src="certificates/Web_development_coursera.jpg" alt='cer1'/>
        </div>
      </div>
    </div>

    <div className="container">
        {/* <!-- First row - animate left --> */}
        <div className="marquee-container">
            <div className="marquee-content">
                {/* <!-- First set --> */}
                <div className="tech-item "><img src="icons/c.png"/></div>
                <div className="tech-item "><img src="icons/angular.png"/></div>
                <div className="tech-item "><img src="icons/css.png"/></div>
                <div className="tech-item "><img src="icons/git.png"/></div>
                <div className="tech-item "><img src="icons/github.png"/></div>
                <div className="tech-item "><img src="icons/html.png"/></div>
                <div className="tech-item "><img src="icons/js.png"/></div>
                <div className="tech-item "><img src="icons/nextjs.png"/></div>
                <div className="tech-item "><img src="icons/node.png"/></div>
                <div className="tech-item "><img src="icons/postgres.png"/></div>
                <div className="tech-item "><img src="icons/react.png"/></div>

                <div className="tech-item "><img src="icons/c.png"/></div>
                <div className="tech-item "><img src="icons/angular.png"/></div>
                <div className="tech-item "><img src="icons/css.png"/></div>
                <div className="tech-item "><img src="icons/git.png"/></div>
                <div className="tech-item "><img src="icons/github.png"/></div>
                <div className="tech-item "><img src="icons/html.png"/></div>
                <div className="tech-item "><img src="icons/js.png"/></div>
                <div className="tech-item "><img src="icons/nextjs.png"/></div>
                <div className="tech-item "><img src="icons/node.png"/></div>
                <div className="tech-item "><img src="icons/postgres.png"/></div>
                <div className="tech-item "><img src="icons/react.png"/></div>

                <div className="tech-item "><img src="icons/c.png"/></div>
                <div className="tech-item "><img src="icons/angular.png"/></div>
                <div className="tech-item "><img src="icons/css.png"/></div>
                <div className="tech-item "><img src="icons/git.png"/></div>
                <div className="tech-item "><img src="icons/github.png"/></div>
                <div className="tech-item "><img src="icons/html.png"/></div>
                <div className="tech-item "><img src="icons/js.png"/></div>
                <div className="tech-item "><img src="icons/nextjs.png"/></div>
                <div className="tech-item "><img src="icons/node.png"/></div>
                <div className="tech-item "><img src="icons/postgres.png"/></div>
                <div className="tech-item "><img src="icons/react.png"/></div>

                <div className="tech-item "><img src="icons/c.png"/></div>
                <div className="tech-item "><img src="icons/angular.png"/></div>
                <div className="tech-item "><img src="icons/css.png"/></div>
                <div className="tech-item "><img src="icons/git.png"/></div>
                <div className="tech-item "><img src="icons/github.png"/></div>
                <div className="tech-item "><img src="icons/html.png"/></div>
                <div className="tech-item "><img src="icons/js.png"/></div>
                <div className="tech-item "><img src="icons/nextjs.png"/></div>
                <div className="tech-item "><img src="icons/node.png"/></div>
                <div className="tech-item "><img src="icons/postgres.png"/></div>
                <div className="tech-item "><img src="icons/react.png"/></div>
              
            </div>
        </div>
{/* 
        <!-- Second row - animate right (different order) --> */}
        <div className="marquee-container-reverse">
            <div className="marquee-content-reverse">
                {/* <!-- First set (different order) --> */}
                <div className="tech-item "><img src="icons/c.png"/></div>
                <div className="tech-item "><img src="icons/angular.png"/></div>
                <div className="tech-item "><img src="icons/css.png"/></div>
                <div className="tech-item "><img src="icons/git.png"/></div>
                <div className="tech-item git"><img src="icons/github.png"/></div>
                <div className="tech-item "><img src="icons/html.png"/></div>
                <div className="tech-item "><img src="icons/js.png"/></div>
                <div className="tech-item "><img src="icons/nextjs.png"/></div>
                <div className="tech-item "><img src="icons/node.png"/></div>
                <div className="tech-item "><img src="icons/postgres.png"/></div>
                <div className="tech-item "><img src="icons/react.png"/></div>

                <div className="tech-item "><img src="icons/c.png"/></div>
                <div className="tech-item "><img src="icons/angular.png"/></div>
                <div className="tech-item "><img src="icons/css.png"/></div>
                <div className="tech-item "><img src="icons/git.png"/></div>
                <div className="tech-item git "><img src="icons/github.png"/></div>
                <div className="tech-item "><img src="icons/html.png"/></div>
                <div className="tech-item "><img src="icons/js.png"/></div>
                <div className="tech-item "><img src="icons/nextjs.png"/></div>
                <div className="tech-item "><img src="icons/node.png"/></div>
                <div className="tech-item "><img src="icons/postgres.png"/></div>
                <div className="tech-item "><img src="icons/react.png"/></div>

                <div className="tech-item "><img src="icons/c.png"/></div>
                <div className="tech-item "><img src="icons/angular.png"/></div>
                <div className="tech-item "><img src="icons/css.png"/></div>
                <div className="tech-item "><img src="icons/git.png"/></div>
                <div className="tech-item git "><img src="icons/github.png"/></div>
                <div className="tech-item "><img src="icons/html.png"/></div>
                <div className="tech-item "><img src="icons/js.png"/></div>
                <div className="tech-item "><img src="icons/nextjs.png"/></div>
                <div className="tech-item "><img src="icons/node.png"/></div>
                <div className="tech-item "><img src="icons/postgres.png"/></div>
                <div className="tech-item "><img src="icons/react.png"/></div>

                <div className="tech-item "><img src="icons/c.png"/></div>
                <div className="tech-item "><img src="icons/angular.png"/></div>
                <div className="tech-item "><img src="icons/css.png"/></div>
                <div className="tech-item "><img src="icons/git.png"/></div>
                <div className="tech-item git "><img src="icons/github.png"/></div>
                <div className="tech-item "><img src="icons/html.png"/></div>
                <div className="tech-item "><img src="icons/js.png"/></div>
                <div className="tech-item "><img src="icons/nextjs.png"/></div>
                <div className="tech-item "><img src="icons/node.png"/></div>
                <div className="tech-item "><img src="icons/postgres.png"/></div>
                <div className="tech-item "><img src="icons/react.png"/></div>
            </div>
        </div>
    </div>
  </>
}
