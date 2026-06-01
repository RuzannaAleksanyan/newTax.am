// import { useState } from 'react'
// import './App.css'
// import AppRoutes from './routes/Routes.jsx'

// export default function App() {
//   return <AppRoutes />;
// }


import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import AppRoutes from "./routes/Routes";

export default function App() {

    useEffect(() => {
        AOS.init({
            duration: 800,
            once: true,
        });
    }, []);

    return <AppRoutes />;
}