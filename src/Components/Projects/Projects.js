import React from "react";

function Projects(props) {
  return (
    <div id="projects" className="mt-5">
      <div className="container">
        <h2 style={{ color: "white" }}>Projects</h2>
        <div className="row mt-3 ">
          <div className="col-md-6 my-3 ">
            <div class="card h-100">
              <img
                class="card-img-top"
                src="project2.png"
                height={"200px"}
                width={"400px"}
                alt="project1"
              />
              <div class="card-body">
                <h5 class="card-title">Ticket Query Resolving System</h5>
                <p class="card-text" style={{ color: "black" }}>
                  Developed a robust Ticket Query Resolution System using the
                  MERN stack (MongoDB, Express.js, React, Node.js) to streamline
                  customer support processes. Implemented features for ticket
                  creation, real-time updates, and comprehensive reporting,
                  enhancing efficiency and customer satisfaction.
                </p>
                <div className="d-flex flex-column justify-content-center align-items-center">
                  <div className="my-2">
                    <a
                      href="https://master--tubular-cassata-0e3c44.netlify.app/"
                      target="blank"
                    >
                      <button className="btn btn-warning">Live</button>
                    </a>
                  </div>
                  <div className="my-2">
                    <a
                      href="https://github.com/yokesh-code/front-ticket"
                      target="blank"
                    >
                      <button className="btn btn-primary">Font-end code</button>
                    </a>
                  </div>
                  <div className="my-2">
                    <a
                      href="https://github.com/yokesh-code/back"
                      target="blank"
                    >
                      <button className="btn btn-primary">Back-end code</button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 my-3 ">
            <div class="card h-100 ">
              <div class="card-body">
                <h5 class="card-title">Rys Cart - E-commerce Website</h5>
                <p class="card-text" style={{ color: "black" }}>
                  'Rys Cart,' a dynamic e-commerce website using the MERN stack
                  (MongoDB, Express.js, React, Node.js). Designed an intuitive
                  user interface, integrated secure payment gateways, and
                  implemented features like product browsing, cart management,
                  and order tracking, resulting in a seamless online shopping
                  experience.
                </p>
                <div className="d-flex flex-column justify-content-center align-items-center">
                  <img
                    class="card-img-top"
                    src="project1.png"
                    height={"300px"}
                    width={"300px"}
                    alt="project3"
                  />
                  <div className="my-2">
                    <a
                      href="https://main--symphonious-malabi-7106a9.netlify.app/login"
                      target="blank"
                    >
                      <button className="btn btn-warning">Live</button>
                    </a>
                  </div>
                  <div className="my-2">
                    <a
                      href="https://github.com/yokesh-code/frontend-cart"
                      target="blank"
                    >
                      <button className="btn btn-primary">Font-end code</button>
                    </a>
                  </div>
                  <div className="my-2">
                    <a
                      href="https://github.com/yokesh-code/back-end-cart"
                      target="blank"
                    >
                      <button className="btn btn-primary">Back-end code</button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-md-6 my-3">
            <div class="card h-100">
              <img
                class="card-img-top"
                src="project3.PNG"
                height={"300px"}
                width={"300px"}
                alt="project3"
              />
              <div class="card-body">
                <h5 class="card-title">Web Scraping</h5>
                <p class="card-text" style={{ color: "black" }}>
                  Developed a Web Scraping Application using the MERN stack
                  (MongoDB, Express.js, React, Node.js) to gather and analyze
                  data from various online sources. Designed an intuitive user
                  interface, implemented robust data extraction algorithms, and
                  provided real-time insights through dynamic visualizations,
                  enhancing data-driven decision-making.
                </p>
                <div className="d-flex flex-column justify-content-center align-items-center">
                  <div className="my-2">
                    <a
                      href="https://stupendous-panda-79161c.netlify.app/"
                      target="blank"
                    >
                      <button className="btn btn-warning">Live</button>
                    </a>
                  </div>
                  <div className="my-2">
                    <a
                      href="https://github.com/yokesh-code/react/tree/master"
                      target="blank"
                    >
                      <button className="btn btn-primary">Font-end code</button>
                    </a>
                  </div>
                  <div className="my-2">
                    <a
                      href="https://github.com/yokesh-code/node"
                      target="blank"
                    >
                      <button className="btn btn-primary">Back-end code</button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
