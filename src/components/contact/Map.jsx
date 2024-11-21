import React from "react";

const Map = () => {
  return (
    <div className="h-96  w-full mt-20 ">
      <iframe
       src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13414708.03382457!2d-96.16077686801664!3d34.82920165228016!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2577433a1dc15%3A0xb92978f2a3dc208d!2sDuct%20Buddy!5e0!3m2!1sen!2s!4v1732214114310!5m2!1sen!2s" width="100%"
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
