import graphs from "../assets/graphs.png"
import chatbot from "../assets/Chatbot.png"
import aws from "../assets/ci-cd.png"
import digitRec from "../assets/digitRec.jpg"

export const INTRO = {
  Intro: "I am a Full Stack Developer with over 2 years of hands-on experience in developing scalable websites and applications. My expertise spans across front-end technologies like React and Tailwind CSS, as well as back-end frameworks such as Django and Node.js. In addition to my development skills, I am well-versed in machine learning techniques and advanced ML libraries, including TensorFlow and Keras, and have experience working with vector stores. My goal is to leverage my diverse skill set and technical proficiency to drive innovative business solutions that contribute to growth and success.",
  TechnicalSkills: ["React.js" ,"NodesJs","TailwindCSS","Docker","kubernetes","Django","Langchain"," Jenkins","Data Structures & Algorithms","EC2","ML" , "OOPs"],
  SoftSkills: ["Prioritizing Tasks","Solution Oriented","Effective Communication","Challenging","Collaborative"],
  SeniorSecEducation:"D.S.B International Public School",
  Graduation:"Graphic Era Hill University(Dehradun)",
  AboutText:"I am a dedicated and versatile full stack web developer with the passion the creating versatile and User-friendly web Applications. I thrive in collaborative Environment and enjoy solving complex problmes to deliver high-quality Solutions. Outside coding I enjoy playing soccer, vollyball and also practice yoga to improve my flexibility, I enjoy staying active, exploring new technologies and implementing them to provide solutions."
}

export const PROJECTS = [
    {
      title: "Advanced Graph Algorithms Library",
      image: graphs,
      description:
        " The Advanced Graph Algorithms Library includes shortest path algorithms (Dijkstra, Bellman-Ford, Floyd-Warshall), graph search methods (DFS, BFS), distance calculations, topological sorting, and minimum spanning trees."+
        " Designed for efficiency, it supports adjacency matrix and list representations, ensuring scalability for large graphs.",
      technologies: ["C++", "Object Oriented Programming", "Graphs"],
    },
    {
      title: "Chat With PDFs",
      image: chatbot,
      description:
        "Developed a robust chat application capable of interacting with multiple PDFs simultaneously. The application leverages"+
          " large language models (LLMs) for natural language understanding and processing. • It runs seamlessly on local machines without requiring external API calls, ensuring data privacy and security. Utilizes"+
          " word embeddings and a vectorstore to efficiently search and retrieve information from multiple PDFs.",
      technologies: ["Langchain", "VectorStore", "Streamlit", "Ollama"],
    },
    {
      title: "Handwritten Digit Recognition",
      image: digitRec,
      description:
        "The Handwritten Digit Recognition project, developed in a Jupyter Notebook, leveraging Pandas for data handling and"+
        " TensorFlow with Keras for building and training the neural network, the project showcases a robust approach to image classification."+
        " It includes steps for data preprocessing, model architecture design, training, and evaluation. Achieving classification accuracies of 97.65% .",
      technologies: ["Tensorflow", "keras", "Pandas", "Machine learning"],
    },
    {
      title: "Automated To-Do List App",
      image: aws,
      description:
        "The To-Do List App is developed using the Django framework and deployed on a remote AWS EC2 instance. This project employs automation tools like Jenkins for CI/CD, Docker for containerization, Kubernetes for orchestration, and Ansible for configuration management"+
        " It provides users with an intuitive interface to manage tasks efficiently, featuring managing to-do items and also showcase of modern DevOps practices in application deployment.",
      technologies: ["Django", "Jenkins", "Kubernetes", "EC2", "Docker","Github"],
    },
  ];
  
  export const CONTACT = {
    address: "Block B-104, Shyampur Visthapit, Rishikesh, Dehradun ",
    phoneNo: "+91 8630469916",
    email: "ashusinghrana1038@gmail.com",
  };

  export const ABOUT = {
    About:"",
    Education:"",
    Skills: []
  }