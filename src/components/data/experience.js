export default {
  experiences: [
    {
      date: {
        start: new Date().setUTCFullYear(2018, 7, 1),
        end: new Date(),
      },
      position: "Software Engineer",
      company: "Veoneer Japan",
      summary:
        "My main role is to write scripts that could assign hundreds of servers to perform simultaneous processes on thousands of files. Worked as a full-stack developer of a scalable, distributed data management tool, used in making inventory of data recordings and selecting files to be used as input for various processes. The application is using a microservice architecture whose backend is written in NodeJS, GO, and Python. The following are the projects that I worked with.",
      projects: [
        {
          name: "Data Management Tool",
          date: {
            start: new Date().setUTCFullYear(2018, 8, 1),
            end: new Date().setUTCFullYear(2019, 7, 29),
          },
          bullets: [
            "In this project I worked as a frontend and backend developer of a system called Clarity, which is used to support Japan OEM projects' data visualization and data management.",
            "This tool is used mainly for searching data and provide cloud computing services using the recorded data.",
            "It is a multi-page web application using Gatsby, React, Material UI in the frontend. The backend microservices are written mainly in NodeJS, and other services are written in GO (Golang), and Python. The databases for each microservice use MongoDB.",
            "It can crawl all the files (data recordings) in the data center and store the locations of those data in a MongoDB database. The total capacity of the data center is in the petabytes scale, a single file ranges from 1 GB to 1TB of data recording containing videos, CAN Data (Radar), and Lidar packets.",
            "The data can be used as input for various processes like HIL, SIL, Simulations, Data extraction, etc. These processes are distributed across hundreds of servers, and the processes are trackable in the application’s UI.",
          ],
        },
        {
          name: "Lidar PCAP Decoder",
          date: {
            start: new Date().setUTCFullYear(2019, 8, 1),
            end: new Date().setUTCFullYear(2019, 9, 2),
          },
          bullets: [
            "The purpose of this tool is to extract the X, Y, Z, radius, azimuth, elevation angle, intensity (point cloud points) of the returned signal of each laser in a Velodyne Lidar. Some existing tools like Veloview can do this job through Python script, but it is slow and does not support multiple lidar PCAP file. So, I decided to write a compiled binary tool using the GO programming language.",
            "Through this project, I gained a deep understanding of the data structure of a Lidar PCAP file.",
            "This tool is now used in production across multiple countries in Veoneer.",
            "Performance-wise, this tool can extract a PCAP file’s point cloud 30 times faster than Veloview.",
            "This tool supports VLP16, VLP32, and VLS128 Velodyne lidars",
            "This project reinforced my understanding of the 7 layers of the Open System Interconnection (OSI) model.",
            "I also used most Wireshark to debug the visualize the hexadecimal bit-wise encoding of the PCAP file",
          ],
        },
        {
          name: "Machine Learning-Based Labelling Tool for Lidar and Camera",
          date: { start: Date("2019/8/30"), end: new Date() },
          bullets: [
            "The purpose of this project is to provide ML-based annotation tool for images, and lidar data, which will be used as a ground truth for the Radar CAN data labels.",
            "This tool consists of three pipelines namely, the Camera, Lidar and Radar Labelling pipelines. These three pipelines generate separate CSV files containing the detected objects per time frame/cycle. The Radar CSV file is compared against the Lidar and Camera CSV files. The objects are linked using the azimuth, object size information.",
            "Using the open-sourced Mask RCNN and Microsoft’s COCO dataset, I built a server whose purpose is to label images from the data recordings.",
            "The Lidar point cloud labelling algorithm is currently under development. Some open sourced libraries like PointNet and 3DmFV algorithms are also considered.",
            "The segmentation of the Lidar uses DBSCAN of Python’s Scikit-learn DBSCAN package.",
            "So far, the tool gives 70% accuracy labels. The incorrect and missed labels are going to be corrected using human effort",
          ],
        },
        {
          name: "Tools Inventory System",
          date: { start: Date("2020/1/30"), end: new Date() },
          bullets: [
            "As part of the 5S initiatives in the Product Assurance Department, I made a proposal to build an application that stores the information of all the tools in the department. This will lessen the time to search for a tool. It can also track the condition of each tool and prevent purchasing redundant tools.",
            "I built the backend using a microservice architecture, whose API is using GraphQL.",
            "The frontend is outsourced to a team in India.",
          ],
        },
      ],
    },
    {
      date: {
        start: new Date().setUTCFullYear(2017, 10, 23),
        end: new Date().setUTCFullYear(2018, 7, 26),
      },
      position: "LED Design and Development Engineer",
      company: "KOTO ELECTRIC CO. LTD.",
      summary:
        "My work here is developing LED fixtures for customer requirements in the field of Marine Lighting (Fishing lamps), Hospital specific LED lighting, lighting for trains.",
      bullets: [
        "Developed a Dimmer controller for LED lighting fixtures using an Arduino microcontroller.",
        "Developed a controller for 64 x 128 RGB dot matrix LED panels using Arduino.",
        "Created assembly and layout drawings using AutoCAD 2017.",
        "Coordinated with suppliers from China, sales representatives, and machine industries for aid in project completion.",
      ],
    },
    {
      date: {
        start: new Date().setUTCFullYear(2015, 7, 1),
        end: new Date().setUTCFullYear(2017, 10, 22),
      },
      position: "Electrical Engineeer",
      company: "Rokko & Associates",
      summary:
        "After graduating from the university, I worked In Rokko as an electrical engineer in the construction industry. Our project is a 35-floor twin tower building in Kokubunji, Tokyo. As a newcomer, I am in-charged mostly in creating the electrical layouts of each room in some floors of the building.",
      bullets: [
        "Used AutoCAD to draw electrical wiring plans.",
        "After improving my Japanese, I worked as a facilitator during the morning meetings (朝礼). I inspected the risk management plans of each subcontractor. I also attended coordination meetings with the general contractor.",
        "I inspected the quality of the wirings done by the subcontractors. The quality checks include incorrect mapping of the lighting and switch, unprotected crossing of high and low voltage wirings, short circuit connections, open circuit connection.",
        "Yearly, we have a technical examination to help us improve our skills in electrical wirings. I managed to pass those examinations although they are in Japanese.",
        "Overall, I learned the Japanese way of project management of a huge project while working here.",
      ],
    },
    {
      date: {
        start: Date("2013/7"),
        end: Date("2015/7"),
      },
      position: "Tutor",
      company: "MathHub Tutorials and Review Center",
      summary:
        "As a part-time tutor, I helped my students understand complicated concepts in Mathematics. I teach mainly high school and elementary students and sometimes freshmen college students.",
    },
  ],
  education: [
    {
      date: {
        start: Date("2008/6"),
        end: Date("2015/6"),
      },
      course: "BS Electronics and Communications Enginneering",
      school: "University of the Philippines, Diliman",
      bullets: [],
    },
  ],
}
