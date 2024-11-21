import React from "react";

const Map = () => {
  return (
    <div className="h-96  w-full mt-20 ">
      <iframe
       src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d193992.35872064374!2d-74.291758!3d40.560793!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c3b432add1331f%3A0x2d1a351044b6974e!2sDuctDudes%20LLC!5e0!3m2!1sen!2sus!4v1732083151624!5m2!1sen!2sus"
        width="100%"
        height="100%"
        style={{ border: "white" }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default Map;

