const INFO = {
  main: {
    title: "Ishita Kundaliya",
    name: "Ishita Kundaliya",
    email: "ishitakundaliya986@gmail.com",
    logo: process.env.PUBLIC_URL + "/images/as.png",
  },
  homepage: {
    detail: `I am Ishita Kundaliya, an aspiring software developer/ Machine Learning Engineer. 
	I possess a solid grounding in web application development (Frontend and backend), Machine Learning which is validated by my 
	projects and industry experiences. I am well versed with Data Structures and Algorithms and receive joy in solving complicated 
	problems. Currently, I am pursuing my Masters in Computer Science with a specialization in Machine Learning and Data Science to
	 delve into data and the numerous things that can be done with it.`,
    detail2: `I believe that to grow you constantly need to learn and any skill can be learnt upon giving time and deligence.
	Apart from the technical aspect of my life, I love to dance, sketch and enjoy the nature.`,
  },
  socials: {
    github: "https://github.com/ishita2411",
    linkedin: "https://www.linkedin.com/in/ishita-kundaliya/",
    // leetcode: "https://leetcode.com/avisinghal6/",
  },
  about: {
    title: "Here's a litte bit more about me!",
    subtitle: "MCS at Rice University",
    description: `
			I am currently pursuing my masters in Computer Science with a specialization in Machine Learning and Data Science at Rice 
			University. During my time here I have had the chance to take multiple courses that have enhanced my technical skills which 
			have been tested by working on multiple projects and assignments during the course period. I love to code in Python and I am comfortable 
			in coding in Java and C as well. I am well versed in Data Structures and Algorithms and enjoy challenges on Leetcode which helps 
			in testing my coding abilities. I have experience in developing full stack applications. I had the opportunity to develop one during 
			my internship at Hewlett Packard Enterprise. I also won the 'People's Choice Award' for the most liked and well 
			presented project. I have also worked on various Machine Learning, Deep Learning, Natural Language Processing related projects wherein 
			I have developed models and built pipelines to output a fully functional project. 
		`,
    description2: ` One of the reasons why I enjoy what I do is that I like the idea of power and self satisfaction I receive upon the successful
	completion of a task. I believe that it is necessary to learn new skills to be an active part of the industry. Although I might not possess every 
	skill out there, I am always eager to learn more. I like to challenge myself. I am confident and a great team player. 
	`,

    description3: `I am now looking for opportunities where I can leverage my skills and deliver value to the company
		and at the same time have a continuous growth by acquiring new skills. I believe I have the skills and the positive attitude required 
		for excelling in the software/ML domain, I am quick at acquiring new skills and can adapt to a dynamically changing 
		environment.
		`,
  },
  education: {
    title: "My Education History",
    description: `
		I am currently pursuing a Masters in Computer Science with specialization in Machine Learning and Data Science at Rice University. 
		I am expected to graduate in December 2023. I have completed my undergrad in Computer Science Engineering at Sreenidhi 
		Institute Of Science and Technology. I have worked in multiple projects which have helped me develop my technical and 
		interpersonal skills.`,
    coursework1: `Software Engineering Methodology, Web Development, Machine Learning, Deep Learning for Vision and Language, 
	Information Retrieval, Design and Analysis of Algorithms, Tools and Models for Data Science, Project Management, Internet Of Things`,
    coursework2: `Programming languages- Python, Java, C, C++; Data Structures and Algorithms, Object Oriented Programming, 
	Theory of Computation, Operating Systems`,
  },

  experience: {
    title: "My Work Experience",
    description: `My industry experience gave me the opportunity to work on various projects and in different roles which helped me 
			improve and increase my skillset. I got the opportunity to drive my projects and deliver value to the company. I have worked
			with different teams and across countries to deliver my projects and it helped me strength my collaboration and time
			management skills. `,
  },
  projects: [
    {
      title:
        "Adaptive Learning with Dynamic Batch Creation Using Near-Neighbors",
      description: `Created new batches using near neighbors of samples with highest gradients similar to the paper from ICLR 2016. Achieved faster train/val convergence compared to random batches for convex cases.`,
      logo: "https://miro.medium.com/v2/resize:fit:846/1*und5wL5DogTb8zkyOaFmrA.png",
      linkText: "View Project",
      link: "https://github.com/strankid/580-Project",
    },
    {
      title: "Graph Based Recommender System",
      description: `Performed comparative analysis based on scalability, precision, latency on Youtube dataset using: Pixie Random
			Walk(PRW), Random walk based embeddings and link prediction without GNN with the latter outperforming all methods.`,
      logo: "https://www.joinideas.org/wp-content/uploads/2017/06/image001-1.png",
      linkText: "View Project",
      link: "https://github.com/avisinghal6/Graph-based-Recommender-System",
    },
    {
      title: "Mechanistic Interpretability of Transformers",
      description: `Built and trained a decoder only transformer inspired by Chatgpt, from scratch with only attention layers. Plotted attention
			scores of keys and queries using heatmaps, observed some copying mechanism, skip gram behavior in a few attention heads.`,
      logo: "https://static1.colliderimages.com/wordpress/wp-content/uploads/2022/12/the-transformers-the-movie.jpg",
      linkText: "View Project",
      link: "https://github.com/avisinghal6/Transformer-Training",
    },
    {
      title: "Recipe Generation from Videos ",
      description: `Built a recipe generation pipeline leveraging pretrained models. Implemented parallel dense video 
	  captioning for event proposals, reduced redundancy with cosine similarity. Enhanced the frames using YOLO, 
	  harnessed BLIP for image captioning, Resnet for frame-to-feature conversion. Employed BARD,Chatgpt for concise caption
		summarization.`,
      logo: "https://repository-images.githubusercontent.com/388517773/326b4c61-e461-4356-a537-b4a2aa61b5d7",
      linkText: "View Project",
      link: "https://github.com/avisinghal6/VIDEO_CAPTIONING_PIPELINE",
    },
	{
		title: "Video Conferencing Application ",
		description: `Designed a video conferencing application using React.js for the front-end and Express.js for the 
		backend using Socket.io and WebRTC. Incorporated functionality for audio muting, disabling video, screen sharing, 
		and more features being added`,
		logo: "https://builtin.com/sites/www.builtin.com/files/styles/og/public/video-conferencing-software.jpg",
		linkText: "View Project",
		link: "https://github.com/avisinghal6/Video-Conference-WebApp",
	  },
	  ,
	{
		title: "Social Media Website ",
		description: `Developed social media platform using MERN stack and HTML, CSS. Implemented authentication using
		multiple strategies from passport.js. Incorporated creation, deletion of posts, comments, likes, friend requests and
		personal real-time chat rooms`,
		logo: "https://wpcom.files.wordpress.com/2021/06/924330_featured-image-for-wordpress-com_121820.png",
		linkText: "View Project",
		link: "https://github.com/avisinghal6/Social-media-website",
	  },
	  {
		title: "Personal Website ",
		description: `My personal website(this website) built using React and deployed with Github pages.`,
		logo: "https://static.vecteezy.com/system/resources/previews/009/317/397/original/personal-website-icon-logo-illustration-portfolio-symbol-template-for-graphic-and-web-design-collection-free-vector.jpg",
		linkText: "View Project",
		link: "https://github.com/avisinghal6/avisinghal.github.io",
	  },
	  {
		title: "URL Shortener ",
		description: `Shortening a URL, adding a browser extension, QR code for url shortening and other features. Project under
		development.`,
		logo: "https://www.clickslice.co.uk/wp-content/uploads/2022/07/1_Pdw7h5X6vQQNVopIzHBG6A.jpeg",
		linkText: "View Project",
		link: "https://github.com/avisinghal6/URL_Shortener",
	  },
	  {
		title: "Meta-heuristic Optimization for DC motor position control",
		description: `Optimization of DC motor position control using meta-heuristic algorithms. I present a comparative analysis
		of various algorithms and methods, work is published at Springer.`,
		logo: "https://www.electronics-lab.com/wp-content/uploads/2021/10/003-2.jpg",
		linkText: "View Project",
		link: "https://github.com/avisinghal6/Meta-Heuristic-Optimization-for-DC-motor-position-control",
	  },	
	  {
		title: "Meta-heuristic Optimization for cruise control",
		description: `Optimization of cruise control using meta-heuristic algorithms. My work beats prior work and is published 
		at IEEE.`,
		logo: "https://d2m3nfprmhqjvd.cloudfront.net/blog/20220512171944/Cruise-control-1-1160x653.jpg",
		linkText: "View Project",
		link: "https://github.com/avisinghal6/Meta-Heuristic-Optimization-for-Cruise-Control",
	  },	
  ],
  publications: {
    title: "My Publications",
    description: `My research during my undergrad lead to publications in IEEE and Springer. I have worked extensively on meta-
	heuristic optimization. `,
  },
  opensource: {
    title: "Open Source",
    description: `I have made open source contributions to various libraries, it helped me get used to large code base
	and get into the open source community.`,
  },
};

export default INFO;
