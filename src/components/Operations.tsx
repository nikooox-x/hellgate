import React from 'react';
import OperationBookmark from './OperationBookmark';
import { ShieldCheck } from 'lucide-react';

const Operations: React.FC = () => {
  const operations = [
    {
      title: "Hound company patrol",
      description: "Patrols that shall be executed by Hound Company members from time to time.",
      operationCode: "HC-1",
      media: [
        {
          url: "https://i.imgur.com/aVBqcgQ.png",
          designation: "image A-1",
          description: "Outside patrol region",
          type: "image"
        },
        {
          url: "https://i.imgur.com/QGuNhaq.jpeg",
          designation: "image A-2",
          description: "Example of a hiding spot(s)",
          type: "image"
        },
        {
          url: "https://i.imgur.com/yQYl4Qx.jpeg",
          designation: "image A-3",
          description: "Example of a hiding spot(s)",
          type: "image"
        },
        {
          url: "https://i.imgur.com/R1YVUZV.png",
          designation: "image A-4",
          description: "Example of a hiding spot(s)",
          type: "image"
        },
        {
          url: "https://i.imgur.com/ghvG6Rx.jpeg",
          designation: "image A-5",
          description: "Prison cells",
          type: "image"
        }
      ],
      steps: [
        {
          title: "Reconnaissance",
          description: "Quick check around the outside of the facility [refer to image A-1]. Nothing special.",
          designation: "RE-1",
          relatedMedia: ["image A-1"]
        },
        {
          title: "Sweeping corners",
          description: "Regular common corners to check while going trough the facility [refer to images A-2,3,4 as examples].",
          designation: "RE-2",
          relatedMedia: ["image A-2", "image A-3", "image A-4"]
        },
        {
          title: "Cell checks",
          description: "Quick checks if the cells are all closed [refer to image A-5].",
          designation: "RE-3",
          relatedMedia: ["image A-5"]
        },
        {
          title: "The great roam",
          description: "Go trough the facility from the entrance, to the cells and back outside again. Basic routine check.",
          designation: "RE-4"
        },
        {
          title: "THIS PATROL SHOULD BE EXECUTED AT LEAST ONCE IN 1H. REST OF YOUR DUTY IS FREE ROAM AROUND THE FACILITY",
          designation: "INF-1"
        }
      ]
    },
    {
      title: "Riot company guarding duty",
      description: "Stages of a guarding walk trough the facility.",
      operationCode: "RC-2",
      media: [
        {
          url: "https://i.imgur.com/IwA6NTM.png",
          designation: "image B-1",
          description: "Booth guarding spots.",
          type: "image"
        },
        {
          url: "https://i.imgur.com/mW8j8SP.jpeg",
          designation: "image B-2",
          description: "Booth guarding spots.",
          type: "image"
        },
        {
          url: "https://i.imgur.com/cSbQYI7.jpeg",
          designation: "image B-3",
          description: "Caffeteria guarding spots.",
          type: "image"
        },
        {
          url: "https://i.imgur.com/rsuhJn6.jpeg",
          designation: "image B-4",
          description: "Cell block guarding spots.",
          type: "image"
        },
        {
          url: "https://i.imgur.com/HKnoz9w.jpeg",
          designation: "image B-5",
          description: "RI Room guarding spots.",
          type: "image"
        }
      ],
      steps: [
        {
          title: "Booth savior",
          description: "Guard the visitor entrances [refer to images B-1,2].",
          designation: "GU-1",
          relatedMedia: ["image B-1", "image B-2"]
        },
        {
          title: "The walking yard sheriff.",
          description: "Guard entrances of the caffeteria/Watch the caffeteria from the balcony [refer to image B-3].",
          designation: "GU-2",
          relatedMedia: ["image B-3"]
        },
        {
          title: "Cell point.",
          description: "Guard start of the corridor or the control room [refer to image B-4].",
          designation: "GU-3",
          relatedMedia: ["image B-4"]
        },
        {
          title: "Shower time! [OPTIONAL]",
          description: "Guard the shower room when the prisoners are in there.",
          designation: "GU-4"
        },
        {
          title: "Protect the manager! [WHEN MAJOR HELLGATE IS PRESENT]",
          description: "Guard Major Hellgate",
          designation: "GU-5"
        },
        {
          title: "Keep the secrets... [ONLY WHEN CLEARLY REQUESTED BY RI]",
          description: "Guard the RI room [refer to image B-5].",
          designation: "GU-6",
          relatedMedia: ["image B-5"]
        },
        {
          title: "RIOT COMPANY SHOULD GUARD THESE SPOTS WHEN SOMEONE IS AROUND THEM. REST IS FREE ROAM.",
          designation: "INF-2"
        }
      ]
    },
    {
      title: "Shock company managment",
      description: "Shock troopers are responsible for managment of the facility. Here are all things they should operate.",
      operationCode: "SC-3",
      steps: [
        {
          title: "Booth operator.",
          description: "Operate the visitation booths.",
          designation: "OP-1"
        },
        {
          title: "Time for a walk!",
          description: "Shock troopers are responsible for taking care of prisoners. They must let them go for walks, take showers, visit the caffeteria etc.",
          designation: "OP-2"
        },
        {
          title: "Cell control.",
          description: "Operate the cell control room.",
          designation: "OP-3"
        },
        {
          title: "Visitation.",
          description: "Control the visitation room and manage the visitors.",
          designation: "OP-4"
        },
        {
          title: "SHOCK COMPANY SHOULD ALWAYS BE IN CONTROL OF THESE SPOTS! IF THE PRISON ISN'T ACTIVE YOU MAY FREE ROAM!",
          designation: "INF-3"
        }
      ]
    },
    {
      title: "Hellgate opening",
      description: "If the breakout begins from the cells, troopers operating the cell control room are our first line of defense, here is what should they do.",
      operationCode: "HP-3",
      media: [
        {
          url: "https://i.imgur.com/tphwfj5.jpeg",
          designation: "image D-1",
          description: "Lockdown trigger.",
          type: "image"
        },
        {
          url: "https://i.imgur.com/8Sgwj39.png",
          designation: "image D-2",
          description: "Escape route out of the cell control room.",
          type: "image"
        },
        {
          url: "https://i.imgur.com/nQwAXc7.jpeg",
          designation: "image D-3",
          description: "Defensive position.",
          type: "image"
        }
      ],
      steps: [
        {
          title: "INFORM",
          description: "When you realize that a breakout is happening, you should immediately trigger the prison lockdown [refer to image D-1].",
          designation: "HG-1",
          relatedMedia: ["image D-1"]
        },
        {
          title: "FIND A DEFENSIVE POSITION",
          description: "There is a good position that the control room operators can take when a breakout happens. Go out of the room as shown on the image [refer to image D-2]. And afterwards take the position like shown on the 2nd image [refer to image D-3]",
          designation: "HG-2",
          relatedMedia: ["image D-2", "image D-3"]
        },
        {
          title: "SACRIFICE",
          description: "If you are being over-run by the prisoners, before you die count how many of them are there and inform others.",
          designation: "HG-3"
        },
        {
          title: "THESE STEPS MATTER ONLY WHEN THE BREAKOUT STARTS IN THE CELL BLOCK.",
          designation: "INF-4"
        }
      ]
    },
    {
      title: "Red Right Hand",
      description: "When the breakout reaches the caffeteria area, everyone entering it should follow the Red Right Hand rule, doesn't matter if you are on the bottom or on the balcony.",
      operationCode: "ALPH-1",
      media: [
        {
          url: "https://i.imgur.com/AhaOsjm.mp4",
          designation: "video E-1",
          description: "Cell block monitoring systems",
          type: "video"
        },
        {
          url: "https://i.imgur.com/p5hyEAI_d.webp?maxwidth=760&fidelity=grand",
          designation: "image E-1",
          description: "Holy placeholder.",
          type: "image"
        },
        {
          url: "https://i.imgur.com/VBJrGHx.jpeg",
          designation: "image E-2",
          description: "Cell block entrance.",
          type: "image"
        }
      ],
      steps: [
        {
          title: "RRH Rule",
          description: "When entering the caffeteria during a breakout, it's recommended to use the RRH Rule. In the caffeteria there isn't much space to hide behind. The best way to take the place over would be going around the target and surround it like shown on the video [refer to video E-1].",
          designation: "RH-1",
          relatedMedia: ["video E-1"]
        },
        {
          title: "Balcony [WIP]",
          description: "WIP",
          designation: "RH-2",
          relatedMedia: ["image E-1"]
        },
        {
          title: "Secure.",
          description: "Secure the cell block entrance [refer to image E-2].",
          designation: "RH-3",
          relatedMedia: ["image E-2"]
        }
      ]
    },
    {
      title: "Mole rats",
      description: "When the outbreak reaches the elevator area, this is when the things start to get heated. At this point we really have to somehow counter the escape.",
      operationCode: "ZETA-9",
      media: [
        {
          url: "https://i.imgur.com/IhL03ek.jpeg",
          designation: "image F-1",
          description: "Defensive position.",
          type: "image"
        },
        {
          url: "https://i.imgur.com/ZcBf6sC.mp4",
          designation: "video F-1",
          description: "Ambush.",
          type: "video"
        },
        {
          url: "https://i.imgur.com/LPGJz5D.mp4",
          designation: "video F-2",
          description: "Defensive position.",
          type: "video"
        }
      ],
      steps: [
        {
          title: "Sentinel",
          description: "Try to hold the corridor so the prisoners running out of the caffeteria wouldn't reach the elevator [refer to image F-1].",
          designation: "LCK-1",
          relatedMedia: ["image F-1"]
        },
        {
          title: "Ambush",
          description: "To protect the elevator hallway, you can also make a ambush coming out of the visitation room like on the video [refer to video F-1].",
          designation: "LCK-2",
          relatedMedia: ["video F-1"]
        },
        {
          title: "Slow em down!",
          description: "Make the elevator go up to slow the prisoners from escaping [refer to video F-2]!",
          designation: "LCK-3",
          relatedMedia: ["video F-2"]
        }
      ]
    },
    {
      title: "See No Evil",
      description: "This the last hope to stop the breakout, make the best of it.",
      operationCode: "ETA-10",
      media: [
        {
          url: "https://i.imgur.com/ycXOv35.jpeg",
          designation: "image G-1",
          description: "Camp spot behind the elevator.",
          type: "image"
        },
        {
          url: "https://i.imgur.com/bzdySae.jpeg",
          designation: "image G-2",
          description: "Hide spot behind the chairs.",
          type: "image"
        },
        {
          url: "https://i.imgur.com/V62mIsA.png",
          designation: "image G-3",
          description: "Spots to shoot from.",
          type: "image"
        },
        {
          url: "https://i.imgur.com/SuPWBbm.png",
          designation: "image G-4",
          description: "Defensive spot reference.",
          type: "image"
        },
        {
          url: "https://i.imgur.com/tBRTKzS.jpeg",
          designation: "image G-5",
          description: "Defensive spot reference.",
          type: "image"
        },
        {
          url: "https://i.imgur.com/INkzFoS.jpeg",
          designation: "image G-6",
          description: "Defensive spot reference.",
          type: "image"
        }
      ],
      steps: [
        {
          title: "Holy rat",
          description: "Camp behind the elevator [refer to image G-1]!",
          designation: "SNE-1",
          relatedMedia: ["image G-1"]
        },
        {
          title: "The chair god",
          description: "Try to take a defensive spot behind the chairs [refer to image G-2].",
          designation: "SNE-2",
          relatedMedia: ["image G-2"]
        },
        {
          title: "You are surrounded!",
          description: "Absolutely surround the outside of the prison, don't let ANYONE out [refer to images G-3,4,5,6].",
          designation: "SNE-3",
          relatedMedia: ["image G-3","image G-4","image G-5","image G-6"]
        },
        {
          title: "IF TO THIS POINT THE BREAKOUT HAVEN'T BEEN STOPPED, DON'T BLAME YOURSELF. YOU FAUGHT WELL.",
          designation: "INF-5"
        }
      ]
    }
  ];

const processDescription = (description) => {
  if (!description) return description;
  
  const regex = /(\[refer to (?:image|video|images) [^\]]*\])/gi;
  
  return description.split(regex).map((part, index) => {
    if (part.match(regex)) {
      return <span key={index} className="text-red-500">{part}</span>;
    }
    return part;
  });
};

  const processedOperations = operations.map(op => ({
    ...op,
    steps: op.steps.map(step => ({
      ...step,
      description: processDescription(step.description)
    }))
  }));

  const firstCategory = processedOperations.slice(0, 3);
  const secondCategory = processedOperations.slice(3, 7);

  return (
    <section id="operations" className="py-16 px-6 bg-black">
      <div className="container mx-auto">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white flex items-center">
            <ShieldCheck className="mr-3 text-red-500" size={32} />
            Regular duties
          </h2>
          <p className="text-gray-400 max-w-3xl mb-6">
            Duties that shall be followed by Coruscant Guard company members if they are in the Hellgate platoon.
          </p>
          <div className="grid grid-cols-1 gap-6">
            {firstCategory.map((op, index) => (
              <OperationBookmark
                key={`first-${index}`}
                title={op.title}
                description={op.description}
                operationCode={op.operationCode}
                steps={op.steps}
                media={op.media}
              />
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white flex items-center">
            <ShieldCheck className="mr-3 text-red-500" size={32} />
            Breakout emergency operations
          </h2>
          <p className="text-gray-400 max-w-3xl mb-6">
            Codes for operations that MUST be executed when ordered during a prison breakout.
          </p>
          <div className="grid grid-cols-1 gap-6">
            {secondCategory.map((op, index) => (
              <OperationBookmark
                key={`second-${index}`}
                title={op.title}
                description={op.description}
                operationCode={op.operationCode}
                steps={op.steps}
                media={op.media}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Operations;