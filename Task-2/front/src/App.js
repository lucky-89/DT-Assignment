import React, { useEffect, useState } from "react";
import './App.css';

// *** This code for when we used api for fetching data from backend ***//

// const ProjectManagement = () => {
//   const [projectData, setProjectData] = useState(null);

//   useEffect(() => {
    
//     fetch("http://localhost:5000/api/project")
//       .then((response) => response.json())
//       .then((data) => setProjectData(data))
//       .catch((error) => console.error("Error fetching project data:", error));
//   }, []);

//   if (!projectData) {
//     return <div>Loading...</div>;
//   }
//   let right = document.querySelector('#right');

//   let left = document.querySelector('#left');
//   let two=document.querySelector('#two');
//   let one = document.querySelector('#one');
  
//   const add=()=>{
//     one.classList.add('disabled');
//     two.classList.remove('disabled');
//   }
//   const remove=()=>{
//     two.classList.add('disabled');
//     one.classList.remove('disabled');
//   }
//   return (
//     <div>
//       <nav className="nav">
//         <img
//           className="img"
//           src="https://deepthought.education/assets/images/logo/logo.svg"
//           alt="logo"
//         />
//         <div className="nav_child">
//           <i className="fa-solid fa-house temp"></i>
//           <i className="fa-solid fa-screwdriver-wrench temp"></i>
//           <i className="fa-solid fa-bell temp"></i>
//           <div className="dot"></div>
//           <img
//             src="https://i.pinimg.com/originals/9f/b1/66/9fb16658f36a36a580c3fa0c56c910db.jpg"
//             alt=""
//           />
//           <i className="fa-solid fa-ellipsis-vertical temp1 "></i>
//         </div>
//       </nav>

//       <div className="flex1">
        
//       <div id="one" className="right">
//           <div className="right1">
//             <i id="right" className="fa-solid fa-arrow-right" onClick={add}></i>
//           </div>
//           <div className="one">1</div>
//         </div>

//         <div id="two" className="right right2 disabled">
//           <div className="tw">
//             <h5>Journey Board</h5>
//             <i id="left" className="fa-solid fa-arrow-left" onClick={remove}></i>
//           </div>
//           <strong>
//             <li id="taskTitle">{projectData.tasks[0].task_title}</li>
//           </strong>
//           <ul id="taskList">
//             {/* Add more task items if needed */}
//           </ul>
//         </div>

//         <div className="setWid">
//           <div className="setWid1">
//             <p className="p1" id="projectTitle">
//               {projectData.title}
//             </p>
//             <p className="p2">Submit Task</p>
//           </div>

//           <div className="setWid2">
//             <p className="p1" id="shortDescription">
//               {projectData.short_description}
//             </p>
//             <div
//               id="taskDescription"
//               dangerouslySetInnerHTML={{ __html: projectData.description }}
//             ></div>
//           </div>
// {/* //// */}

// <div className="cart_child" id="assetsContainer">
//             {projectData.tasks[0].assets.map((asset) => (
//               <div key={asset.asset_id} className="asset">
//                 <h3>{asset.asset_title}</h3>
//                 <p>{asset.asset_description}</p>
//                 {asset.asset_content_type === "video" && (
//                   <iframe
//                     width="380"
//                     height="300"
//                     src={asset.asset_content}
//                     frameBorder="0"
//                     allowFullScreen
//                     title={asset.asset_title}
//                   ></iframe>
             
//                 )}
//                 <br/>
//                 <br/>
//                 <br/>
//                 <br/>
//                 <br/>
//                 <br/>
//                 </div>
            
//             ))}
        
//         </div>
//         </div>
   
//       <div class="setwid">
//             <div class="setwid1">
//                 <i class="fa-solid fa-xmark"></i>
//                 <h4>N</h4>
//                 <h4>o</h4>
//                 <h4>t</h4>
//                 <h4>i</h4>
//                 <h4>c</h4>
//                 <h4>e</h4>
//                 <br/>
//                 <h4>B</h4>
//                 <h4>o</h4>
//                 <h4>a</h4>
//                 <h4>r</h4>
//                 <h4>d</h4>
//             </div>
//             <div class="nflex">
//                 <i class="fa-solid fa-question"></i>
//                 <i class="fa-solid fa-people-group"></i>
//                 <i class="fa-solid fa-calendar"></i>
//             </div>
//             </div>

//       </div>
// </div>
       
    
//   );
// };

// export default ProjectManagement;



// **** This is for direct accesing to the assest using variable ***** //

const ProjectManagement = () => {
  
  const jsonData = {
    title: "Technical Project Management",
    description:
      "<p>Have you ever thought, Pareto's Law can be applied to cooking? Your thinking starts when you start thinking beyond your thinking.</p>\n<p>Let's prepare Sandwiches, we will use Pareto’s Law. That’s an 80-20 approach.<br>80% of the time in researching, and planning and 20% of the time in implementation.</p>\n<p>So for preparing sandwiches, we need vegetables, bread, cheese, butter and much more. So initially we collect all the stuff and then chop the vegetables, grate the cheese, and make a mash of potato. So this all comes in 80% and then comes 20% where we will roast the bread, spread the sauce, place the mash put some cheese, and heat it for a while and our sandwich is ready.</p>\n<p>Similarly while creating any functionality 80% of the time is spent on consequences that might appear, some parameters we have to take care of, the scope of the variable, and some dependent functions, and then 20% comes from implementation.</p>\n<p>Let's start thinking together, and search for how you can get the essence of project management.</p>",
    short_description:
      "You can learn project management by applying the simple methods of project management. How you can apply project management in each and every step of your deliverables? Let's figure it out together",
    tasks: [
      {
        task_id: 18882,
        task_title: "Explore the world of management",
        task_description:
          "As a project manager, you play an important role in leading a project through initiation, planning, execution, monitoring, controlling and completion. How? Do you want to manage each and every step of your life?",
        assets: [
          {
            asset_id: 18883,
            asset_title: "Technical Project Management",
            asset_description:
              "Story of Alignment\r\nScope of Agility\r\nSpecific Accountable \r\nStaggering Approach\r\n",
            asset_content: "https://www.youtube.com/embed/TiMRwri1xJ8",
            asset_content_type: "video",
          },
          {
            asset_id: 18884,
            asset_title: "Threadbuild",
            asset_description:
              "Watch the video and thread build, and jot out key threads while watching that video.",
            asset_content_type: "threadbuilder",
          },
          {
            asset_id: 18885,
            asset_title: "Structure your pointers",
            asset_description:
              "Write a 400-500 word article, from your thread. Publish your understanding, and showcase your learning to the entire world.",
            asset_content_type: "article",
          },
          {
            asset_id: 18886,
            asset_title: "4SA Method",
            asset_description: "To explore more read more",
            asset_content:
              "https://dtthon.deepthought.education/sharer?id=01aa3cff-db8e-8d9d-afc0-1671715937878",
            asset_content_type: "article",
          },
        ],
      },
    ],
    project_image:
      "https://bs-uploads.toptal.io/blackfish-uploads/components/seo/content/og_image_file/og_image/1114276/0413_What_is_a_Technical_Project_Manager_Luke_Social-21e35c2d76465934c0f844c396db762a.png",
  };

  let two=document.querySelector('#two');
  let one = document.querySelector('#one');
  
  const add=()=>{
    one.classList.add('disabled');
    two.classList.remove('disabled');
  }
  const remove=()=>{
    two.classList.add('disabled');
    one.classList.remove('disabled');
  }

  return (
    <div>
      <nav className="nav">
        <img
          className="img"
          src="https://deepthought.education/assets/images/logo/logo.svg"
          alt="logo"
        />
        <div className="nav_child">
          <i className="fa-solid fa-house temp"></i>
          <i className="fa-solid fa-screwdriver-wrench temp"></i>
          <i className="fa-solid fa-bell temp"></i>
          <div className="dot"></div>
          <img
            src="https://i.pinimg.com/originals/9f/b1/66/9fb16658f36a36a580c3fa0c56c910db.jpg"
            alt=""
          />
          <i className="fa-solid fa-ellipsis-vertical temp1 "></i>
        </div>
      </nav>

      <div className="flex">
        <div id="one" className="right">
          <div className="right1">
            <i id="right" className="fa-solid fa-arrow-right" onClick={add}></i>
          </div>
          <div className="one">1</div>
        </div>

        <div id="two" className="right right2 disabled">
          <div className="tw">
            <h5>Journey Board</h5>
            <i id="left" className="fa-solid fa-arrow-left" onClick={remove}></i>
          </div>
          <strong>
            <li id="taskTitle">{jsonData.tasks[0].task_title}</li>
          </strong>
          <ul id="taskList">
            {/* Add more task items if needed */}
          </ul>
        </div>

        <div className="setWid">
          <div className="setWid1">
            <p className="p1" id="projectTitle">
              {jsonData.title}
            </p>
            <p className="p2">Submit Task</p>
          </div>

          <div className="setWid2">
            <p className="p1" id="shortDescription">
              {jsonData.short_description}
            </p>
            <div
              id="taskDescription"
              dangerouslySetInnerHTML={{ __html: jsonData.description }}
            ></div>
          </div>

          <div className="cart" id="assetsContainer">
            {jsonData.tasks[0].assets.map((asset) => (
              <div key={asset.asset_id} className="asset">
                <h3>{asset.asset_title}</h3>
                <p>{asset.asset_description}</p>
                {asset.asset_content_type === "video" && (
                  <iframe
                    width="560"
                    height="315"
                    src={asset.asset_content}
                    frameBorder="0"
                    allowFullScreen
                    title={asset.asset_title}
                  ></iframe>
                )}
                {asset.asset_content_type === "article" && (
                  <a href={asset.asset_content} target="_blank" rel="noopener noreferrer">
                    Read more
                  </a>
                )}
                {asset.asset_content_type === "threadbuilder" && (
                  <p>{asset.asset_description}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectManagement;
