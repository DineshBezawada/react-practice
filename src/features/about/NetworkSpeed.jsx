import React, { useState, useEffect } from "react";

const NetworkSpeed = () => {
  const [speed, setSpeed] = useState(0);

  const measureSpeed = async () => {
    const imageUrl = "https://cors-anywhere.herokuapp.com/https://speed.hetzner.de/10MB.binhttps://file-examples.com/wp-content/uploads/2017/10/file-sample_150kB.pdf"; // Known image
    const startTime = performance.now();

    try {
      const response = await fetch(imageUrl, { cache: "no-cache" });
      const blob = await response.blob();
      const endTime = performance.now();

      const duration = (endTime - startTime) / 1000; // seconds
      const bitsLoaded = blob.size * 8; // convert bytes to bits
      const speedMbps = (bitsLoaded / duration / 1_000_000).toFixed(2);

      setSpeed(speedMbps);
    } catch (error) {
      console.error("Error measuring network speed", error);
    }
  };

  useEffect(() => {
    // Measure every 5 seconds
    const interval = setInterval(measureSpeed, 5000);
    measureSpeed(); // initial measurement

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h3>Network Speed</h3>
      <p>{speed} Mbps</p>
    </div>
  );
};

export default NetworkSpeed;
