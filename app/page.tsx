"use client";

import { useEffect, useState } from "react";
import Loader from "../components/Loader";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const isLoaderShown = localStorage.getItem("loaderShown");

      localStorage.setItem("loaderShown", "true");

      const timer=setTimeout(() => {
        setLoading(false);
      }, 5000);

      return () => clearTimeout(timer);


  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="grid place-content-center w-screen h-screen text-3xl">
          This is going to be the best portfolio I've created. I hope you like it too.</div>
      )}

      {/* <Loader/> */}

    </>
  );
}
