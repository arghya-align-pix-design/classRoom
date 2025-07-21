// app/playground/page.tsx
// "use client";
// import React, { useRef } from "react";
// import { motion, useMotionValue, useSpring } from "framer-motion";
// import "./styles.css";

// const Card = ({ mouseX, mouseY }) => {
//   const cardRef = useRef(null);

//   return (
//     <motion.div
//       ref={cardRef}
//       className="card"
//       style={{
//         "--mouse-x": mouseX,
//         "--mouse-y": mouseY
//       }}
//     >
//       <p>Card</p>
//     </motion.div>
//   );
// };

// export default function PlaygroundPage() {
//     const containerRef = useRef(null);
//   const mouseX = useMotionValue(0);
//   const mouseY = useMotionValue(0);

//   const springX = useSpring(mouseX, { stiffness: 300, damping: 50 });
//   const springY = useSpring(mouseY, { stiffness: 300, damping: 50 });

//   function handleMouseMove(e) {
//     const rect = containerRef.current.getBoundingClientRect();
//     mouseX.set(e.clientX - rect.left);
//     mouseY.set(e.clientY - rect.top);
//   }

//   return (
//     <main className="min-h-screen w-full bg-white flex flex-col items-center justify-center p-8">
//       <h1 className="text-2xl font-semibold mb-4">Playground</h1>
//       {/* Your experiments go below */}
//       <div className="w-full flex flex-wrap gap-4 justify-center">
//         {/* Try out components here */}
//         <div
//       ref={containerRef}
//       className="container"
//       onMouseMove={handleMouseMove}
//     >
//       <Card mouseX={springX} mouseY={springY} />
//       <Card mouseX={springX} mouseY={springY} />
//       <Card mouseX={springX} mouseY={springY} />
//       <Card mouseX={springX} mouseY={springY} />
//     </div>
//       </div>
//     </main>
//   );
// }




// "use client"

// import { motion } from "motion/react"

// const draw = {
//     hidden: { pathLength: 0, opacity: 0 },
//     visible: (i: number) => {
//         const delay = i * 0.5
//         return {
//             pathLength: 1,
//             opacity: 1,
//             transition: {
//                 pathLength: { delay, type: "spring", duration: 1.5, bounce: 0 },
//                 opacity: { delay, duration: 0.01 },
//             },
//         }
//     },
// }

// export default function PathDrawing() {
//     return (
//         <motion.svg
//             width="600"
//             height="600"
//             viewBox="0 0 600 600"
//             initial="hidden"
//             animate="visible"
//             style={image}
//         >
//             <motion.circle
//                 className="circle-path"
//                 cx="100"
//                 cy="100"
//                 r="80"
//                 stroke="#ff0088"
//                 variants={draw}
//                 custom={1}
//                 style={shape}
                
//             />
//             <motion.line
//                 x1="220"
//                 y1="30"
//                 x2="360"
//                 y2="170"
//                 stroke="#8df0cc"
//                 variants={draw}
//                 custom={2}
//                 style={shape}
//             />
//             <motion.line
//                 x1="220"
//                 y1="170"
//                 x2="360"
//                 y2="30"
//                 stroke="#8df0cc"
//                 variants={draw}
//                 custom={2.5}
//                 style={shape}
//             />
//             <motion.rect
//                 width="140"
//                 height="140"
//                 x="410"
//                 y="30"
//                 rx="20"
//                 stroke="#0d63f8"
//                 variants={draw}
//                 custom={3}
//                 style={shape}
//             />
//             <motion.circle
//                 cx="100"
//                 cy="300"
//                 r="80"
//                 stroke="#0d63f8"
//                 variants={draw}
//                 custom={2}
//                 style={shape}
//             />
//             <motion.line
//                 x1="220"
//                 y1="230"
//                 x2="360"
//                 y2="370"
//                 stroke="#ff0088"
//                 custom={3}
//                 variants={draw}
//                 style={shape}
//             />
//             <motion.line
//                 x1="220"
//                 y1="370"
//                 x2="360"
//                 y2="230"
//                 stroke="#ff0088"
//                 custom={3.5}
//                 variants={draw}
//                 style={shape}
//             />
//             <motion.rect
//                 width="140"
//                 height="140"
//                 x="410"
//                 y="230"
//                 rx="20"
//                 stroke="#8df0cc"
//                 custom={4}
//                 variants={draw}
//                 style={shape}
//             />
//             <motion.circle
//                 cx="100"
//                 cy="500"
//                 r="80"
//                 stroke="#8df0cc"
//                 variants={draw}
//                 custom={3}
//                 style={shape}
//             />
//             <motion.line
//                 x1="220"
//                 y1="430"
//                 x2="360"
//                 y2="570"
//                 stroke="#0d63f8"
//                 variants={draw}
//                 custom={4}
//                 style={shape}
//             />
//             <motion.line
//                 x1="220"
//                 y1="570"
//                 x2="360"
//                 y2="430"
//                 stroke="#0d63f8"
//                 variants={draw}
//                 custom={4.5}
//                 style={shape}
//             />
//             <motion.rect
//                 width="140"
//                 height="140"
//                 x="410"
//                 y="430"
//                 rx="20"
//                 stroke="#ff0088"
//                 variants={draw}
//                 custom={5}
//                 style={shape}
//             />
//         </motion.svg>
//     )
// }

// /**
//  * ==============   Styles   ================
//  */

// const image: React.CSSProperties = {
//     maxWidth: "80vw",
// }


"use client";

import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (i: number) => {
        const delay = i * 0.5
        return {
            pathLength: 1,
            opacity: 1,
            transition: {
                pathLength: { delay, type: "spring", duration: 1.5, bounce: 0 },
                opacity: { delay, duration: 0.01 },
            },
        }
    },
}


export default function Loader() {
  const controls = useAnimation();

  useEffect(() => {
    async function sequence() {
      while (true) {
        // Show circle
        await controls.start("circle");
        // Hide all
        await controls.start("hidden");

        // Show cross
        await controls.start("cross");
        await controls.start("hidden");

        // Show rectangle
        await controls.start("rectangle");
        await controls.start("hidden");
      }
    }
    sequence();
  }, [controls]);

  const variants = {
    hidden: { opacity: 0 },
    circle: { opacity: 1 },
    cross: { opacity: 1 },
    rectangle: { opacity: 1 },
  };

  return (
    <motion.svg
      width="600"
      height="600"
      viewBox="0 0 600 600"
      initial="hidden"
      animate={controls}
      style={ shape }  //background: "white"
    >
      {/* Circle */}
      <motion.circle
        cx="100"
        cy="100"
        r="80"
        stroke="#ff0088"
        strokeWidth="4"
        variants={variants}
        transition={{ duration: 0.6 }}
      />

      {/* Cross - line 1 */}
      <motion.line
        x1="30"
        y1="30"
        x2="170"
        y2="170"
        stroke="#8df0cc"
        strokeWidth="4"
        variants={variants}
        custom="cross"
        transition={{ duration: 0.6 }}
      />

      {/* Cross - line 2 */}
      <motion.line
        x1="30"
        y1="170"
        x2="170"
        y2="30"
        stroke="#8df0cc"
        strokeWidth="4"
        variants={variants}
        custom="cross"
        transition={{ duration: 0.6 }}
      />

      {/* Rectangle */}
      <motion.rect
        width="140"
        height="140"
        x="30"
        y="30"
        rx="20"
        stroke="#0d63f8"
        strokeWidth="4"
        variants={variants}
        transition={{ duration: 0.6 }}
      />
    </motion.svg>
  );
}

const shape: React.CSSProperties = {
    strokeWidth: 10,
    strokeLinecap: "round",
    fill: "transparent",
}