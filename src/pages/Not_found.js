import React, { useEffect } from "react";

const Not_found = () => {
  useEffect(() => {
    document.title = "Not Foud - Instagram";
  }, []);

  return (
    <div className="bg-gray-background">
      <div className="mx-auth max-w-screen-lg">
        <p className="text-center text-2xl">Not Found!</p>
      </div>
    </div>
  );
};

export default Not_found;
