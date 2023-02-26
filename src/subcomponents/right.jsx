import React, { useEffect } from "react";
import { useState } from "react";
import codeImg from "../utils/code.png";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import upwork from "../utils/upwork.png";
import fiverr from "../utils/fiverr.png";
import { db } from "../firebaseConfig";
import { collection, getDocs } from "firebase/firestore";

export const Right = () => {
  const alldata = [
    {
      name: "First project",
      image: codeImg,
      category: "Frontend",
      description: "God is able ",
    },
    {
      name: "Third project",
      image: codeImg,
      category: "Frontend",
      description: "God is able d",
    },
    {
      name: "Second project",
      image: codeImg,
      category: "Backend",
      description: "God is able d",
    },
  ];

  const [categories, setCategories] = useState([]);
  const [dataToBeDisplayed, setDataToBeDisplayed] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const handleClose = () => setShowModal(false);
  const [modalData, setModalData] = useState({});
  const [projects, setProjects] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const getProjects = () => {
    const allProjects = collection(db, "projects");
    getDocs(allProjects)
      .then((response) => {
        console.log(response);
        const projects = response.docs.map((item) => {
          return { data: item.data(), id: item.id };
        });
        setProjects(projects);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getProjects();
  }, []);

  useEffect(() => {
    console.log(projects);
  }, [projects]);

  useEffect(() => {
    const newList = [];
    projects.map((item) => {
      if (!newList.includes(item.data.category)) {
        newList.push(item.data.category);
      }
    });

    setCategories(["All", ...newList]);
    fetchCategory("All");
  }, [projects.length > 0]);

  const fetchCategory = (category) => {
    if (category === "All") {
      setDataToBeDisplayed(projects);
    } else {
      setDataToBeDisplayed(
        projects.filter((item) => item.data.category === category)
      );
    }
  };

  return (
    <div className="mt-8 ">
      <div className="grid lg:grid-cols-3 gap-x-4 gap-y-5">
        <div className=" rounded-xl flex flex-col items-center justify-center  bg-blue-600 text-white p-3">
          <i className="bi bi-pc-display-horizontal text-[70px]"></i>
          <h3 className="text-xl my-2 text-center">Web Design</h3>
          <p className="text-center text-base lg:text-[0.9rem]">
            In this service, You will get only design of a website with static
            content. I will use HTML, CSS, Tailwind CSS & Sass to complete Web
            Design project.
          </p>
        </div>
        <div className=" rounded-xl flex flex-col items-center justify-center  bg-blue-600 text-white p-3">
          <i className="bi bi-cpu-fill text-[70px]"></i>
          <h3 className="text-xl my-2 text-center">Backend</h3>
          <p className="text-center text-base lg:text-[0.9rem] ">
            You'll get Restful API, custom functions, authentication,
            authorization, verification, increasing application security, API
            optimization
          </p>
        </div>
        <div className=" rounded-xl flex flex-col items-center justify-center  bg-blue-600 text-white p-3">
          <i className="bi bi-motherboard-fill text-[70px]"></i>
          <h3 className="text-xl my-2 text-center">Frontend Development</h3>
          <p className="text-base lg:text-[0.9rem] text-center">
            I'll develop frontend of a webiste, integrate Restful API and create
            custom functions for applications with JavaScript and React or Next
            Js.
          </p>
        </div>
      </div>

      <div className="bg-white mt-8 text-slate-600" id="about">
        <div className="pt-[100px] w-[35%]">
          <div
            className="bg-blue-600 text-center  flex items-center justify-center"
            style={{ borderRadius: "0px 0% 20%  0px" }}
          >
            <p className="text-white  text-base mb-0 py-2">About me</p>
          </div>
        </div>
        <div className="my-4 px-6 text-slate-600">
          <p>
            Hello, I'm Ajayi Oluwatamilore a passionate Web Developer. I develop
            web applications and REST API in MERN Stack. Mainly I work with
            development frameworks like React Js for frontend and Node & Express
            Js for backend. I'm working hard to improve my skills in
            programming. I have developed a mindset of deep study and hard work
            and I think, I have acquired the ability to learn any programming
            language, development framework, new techniques and methods at
            anytime.{" "}
          </p>
        </div>
        <div className="pt-[10px] w-[35%]">
          <div
            className="bg-blue-600 text-center  flex items-center justify-center"
            style={{ borderRadius: "0px 0% 20%  0px" }}
          >
            <p className="text-white  text-base mb-0 py-2">Expertise in</p>
          </div>
        </div>
        <div id="services" className="mt-4 mb-4 px-6 text-slate-600">
          <h6 className="text-xl">Web Design</h6>
          <p className="text-sm">HTML/HTML5, CSS/CSS3, Tailwind CSS</p>
        </div>
        <div className="mt-4 mb-4 px-6 text-slate-600">
          <h6 className="text-xl">Frontend Development</h6>
          <p className="text-sm">JavaScript, React Js, Next Js</p>
        </div>
        <div className="mt-4 mb-4 px-6 text-slate-600">
          <h6 className="text-xl">Backend Development</h6>
          <p className="text-sm">Node Js, Express Js, JWT Token, Cors</p>
        </div>
        <div className="mt-4 mb-4 px-6 text-slate-600">
          <h6 className="text-xl">State Management</h6>
          <p className="text-sm">Redux(React Redux, ToolKit)</p>
        </div>
        <div className="mt-4 mb-4 px-6 text-slate-600">
          <h6 className="text-xl">Database</h6>
          <p className="text-sm">MongoDB</p>
        </div>
        <div className="mt-4 mb-4 px-6 text-slate-600">
          <h6 className="text-xl">Version Control</h6>
          <p className="text-sm">Git & GitHub</p>
        </div>
        <div className="mt-4 mb-4  pb-4 px-6 text-slate-600">
          <h6 className="text-xl">Application Deployment</h6>
          <p className="text-sm">Live Server, Heroku, Vercel, Netlify</p>
        </div>
      </div>

      {/* Experience  */}

      <div className="bg-white mt-8 text-slate-600" id="experience">
        <div className="pt-[38px] w-[35%]">
          <div
            className="bg-blue-600 text-center  flex items-center justify-center"
            style={{ borderRadius: "0px 0% 20%  0px" }}
          >
            <p className="text-white  text-base  mb-0 py-1">Experience</p>
          </div>
        </div>
        <div className="mt-9 mb-4 px-6 text-slate-600">
          <h6 className="text-xl">1. JUNIOR FRONTEND DEVELOPER (INTERN)</h6>
          <div className="flex ">
            <i className="bi bi-envelope mr-4"></i>
            <p className="text-sm mt-1">
              BAB MORGAN NIGERIA LIMITED | Jun,2022 - Sep, 2022
            </p>
          </div>
          <ul>
            <li>
              Assisted in gathering and refining specifications and requirements
              based on technical needs.
            </li>
            <li>
              Assisted in integrating data from various back-end services and
              databases.
            </li>
            <li>Assisted in creating website layout.</li>
          </ul>
        </div>
        <div className="mt-9 mb-4 px-6 text-slate-600">
          <h6 className="text-xl">2. WEB DEVELOPER (INTERN)</h6>
          <div className="flex ">
            <i className="bi bi-envelope mr-4"></i>
            <p className="text-sm mt-1">NBI INSTITUTE | Apr,2021 - Jul, 2021</p>
          </div>
          <ul>
            <li>
              Assisted in writing well designed, testable, efficient code by
              using best software development practices.
            </li>
            <li>
              Assisted in creating website layout/user interface by using
              standard HTML/CSS practices.
            </li>
          </ul>
        </div>
        <div className="mt-9 mb-4 px-6 text-slate-600 pb-5">
          <h6 className="text-xl">3. GRAPHIC DESIGN (INTERN)</h6>
          <div className="flex ">
            <i className="bi bi-envelope mr-4"></i>
            <p className="text-sm mt-1">NBI INSTITUTE | Apr,2020 - Jul, 2020</p>
          </div>
          <ul>
            <li>
              Utilized crucial design software skills to assist with projects
            </li>
            <li>
              Assisted with a wide range of design projects and met tight
              deadlines.
            </li>
            <li>Created social media design for clients.</li>
            <li>
              Successfully completed several freelance Graphic Design jobs with
              a strong customer satisfaction rate.
            </li>
          </ul>
        </div>
      </div>

      {/* Projects */}

      <div className="bg-white mt-8 text-slate-600" id="projects">
        <div className="pt-[38px] w-[35%]">
          <div
            className="bg-blue-600 text-center  flex items-center justify-center"
            style={{ borderRadius: "0px 0% 20%  0px" }}
          >
            <p className="text-white pr-2 text-base  mb-0 py-2">
              Explore my previous work
            </p>
          </div>
        </div>
        <div className="pt-10 pb-4 flex justify-center">
          {categories.map((item) => (
            <button
              class="button-90 mr-4"
              role="button"
              onClick={() => {
                fetchCategory(item);
              }}
            >
              {item}
            </button>
          ))}
        </div>
        <div className="mt-6 grid lg:grid-cols-2 gap-5">
          {dataToBeDisplayed.map((item) => {
            return (
              <div
                onClick={() => {
                  setShowModal(true);
                  setModalData(item.data);
                }}
                className="flex justify-center shadow-2xl p-4 lg:shadow-none"
              >
                <img
                  src={item.data.image}
                  className="h-[300px] w-[100%] object-cover hover:scale-110 transition-transform "
                  alt=""
                />
              </div>
            );
          })}
        </div>
      </div>
      <div className="grid lg:grid-cols-2 gap-x-4 gap-y-4">
        <div className="bg-white mt-8 text-slate-600">
          <div className="pt-[38px] w-[35%]">
            <div
              className="bg-blue-600 text-center  flex items-center justify-center"
              style={{ borderRadius: "0px 0% 20%  0px" }}
            >
              <p className="text-white  text-base  mb-0 py-1">Get in touch</p>
            </div>
          </div>
          <div className="mt-5 mx-5 lg:mx-1">
            <InputGroup className="mb-3 ">
              <InputGroup.Text id="basic-addon1">
                <i className="bi bi-person-lines-fill"></i>
              </InputGroup.Text>
              <Form.Control
                placeholder="Name"
                aria-label="Username"
                onChange={(e) => setName(e.target.value())}
                aria-describedby="basic-addon1"
              />
            </InputGroup>
          </div>
          <div className="mt-4 mx-5 lg:mx-2">
            <InputGroup className="mb-3 ">
              <InputGroup.Text id="basic-addon1">
                <i className="bi bi-envelope"></i>
              </InputGroup.Text>
              <Form.Control
                placeholder="Email"
                aria-label="Email"
                aria-describedby="basic-addon1"
                onChange={(e) => setEmail(e.target.value())}
              />
            </InputGroup>
          </div>
          <div className="mt-4 mx-5 lg:mx-2">
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
              onChange={(e) => {
                setMessage(e.target.value);
                console.log(message);
              }}
            >
              <Form.Label>Write Message</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
          </div>
          <div className="flex justify-center cursor-pointer  ">
            <button className="button-26 text-lg"> Submit</button>
          </div>
        </div>
        <div>
          <div className="bg-white mt-8 text-slate-600" id="contact">
            <div className="pt-[38px] w-[35%]">
              <div
                className="bg-blue-600 text-center  flex items-center justify-center"
                style={{ borderRadius: "0px 0% 20%  0px" }}
              >
                <p className="text-white  text-base  mb-0 py-1">
                  Contact me on
                </p>
              </div>
            </div>
            <div className="mt-3">
              <div className="grid lg:grid-cols-2 cursor-pointer">
                <div className="flex items-center ml-2">
                  <icon className="bi bi-facebook text-blue-600"></icon>
                  <h3 className="text-lg mt-2 ml-3">Facebook</h3>
                </div>
                <div className="flex items-center ml-2">
                  <icon className="bi bi-linkedin text-blue-600"></icon>
                  <h3 className="text-lg mt-2 ml-3">Linkedin</h3>
                </div>
                <div className="flex items-center ml-2">
                  <icon className="bi bi-twitter text-blue-600"></icon>
                  <h3 className="text-lg mt-2 ml-3">Twitter</h3>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white mt-8 text-slate-600 h-[]">
            <div className="pt-[38px] w-[35%] ">
              <div
                className="bg-blue-600 text-center flex "
                style={{ borderRadius: "0px 0% 20%  0px" }}
              >
                <p className="text-white  text-base pl-2 mb-0 py-1">
                  Available on
                </p>
              </div>
            </div>
            <div className="grid ">
              <img src={upwork} alt="" className="h-[100px]" />
              <img src={fiverr} alt="" className="h-[200px] ml-7" />
            </div>
          </div>
        </div>
      </div>

      {/* Modal  */}

      <Modal show={showModal} onHide={handleClose}>
        <img src={modalData.image} className="h-[250px] object-cover" alt="" />
        <Modal.Header>
          <Modal.Title>{modalData.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{modalData?.description}</Modal.Body>

        <Modal.Footer>
          <Button variant="primary">
            <a
              href={modalData.link}
              className=""
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Preview
            </a>
          </Button>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};
