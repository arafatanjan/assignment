import React from 'react';

const Accordian = () => {
    return (
      <div>
      <h1 className="text-3xl font text-center my-8 text-black bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent shadow-md transition duration-300 ease-in-out transform hover:scale-105">Faqs</h1>
        <div className="join join-vertical w-full">
          
  <div className="collapse collapse-arrow join-item border border-base-300">
    <input type="radio" name="my-accordion-4" defaultChecked /> 
    <div className="collapse-title text-xl font-medium">
      Who can take these courses?
    </div>
    <div className="collapse-content"> 
      <p>Anyone</p>
    </div>
  </div>
  <div className="collapse collapse-arrow join-item border border-base-300">
    <input type="radio" name="my-accordion-4" /> 
    <div className="collapse-title text-xl font-medium">
      Is there any prerequisition?
    </div>
    <div className="collapse-content"> 
      <p>No</p>
    </div>
  </div>
  <div className="collapse collapse-arrow join-item border border-base-300">
    <input type="radio" name="my-accordion-4" /> 
    <div className="collapse-title text-xl font-medium">
      In which origin is it available?
    </div>
    <div className="collapse-content"> 
      <p>Anywhere</p>
    </div>
  </div>
</div>
</div>
    );
};

export default Accordian;