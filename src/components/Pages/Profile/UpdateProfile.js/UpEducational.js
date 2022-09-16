import React from "react";

const UpEducational = ({ setUpEducation }) => {
  return (
    <div>
      {/*  */}
      <div className=" border-[1px] my-2">
        <div className="bg-slate-200 flex justify-between items-center px-5 border-b-[1px]">
          <h1 className=" text-lg font-semibold">Update Education</h1>
          <div className="  ">
            <button
              onClick={() => setUpEducation(false)}
              className=" border-[1px] px-2 py-[1px] m-[1px]"
            >
              <i class="fa-solid fa-check"></i>
            </button>
          </div>
        </div>
        <div className=" px-4 py-2 ">
          <div className=" text-[15px]  my-[2px] font-semibold  ">
            <form>
              <div
                className=" 
            flex flex-wrap sm:flex-row justify-around gap-1 items-center"
              >
                <select className=" w-full  md:w-32  text-sm input-bordered border-[1px] focus:outline-none px-0 mx-2">
                  <option value="FaceBook"> Education Level</option>
                  <option value="FaceBook"> FaceBook</option>
                  <option value="Instagram"> Instagram</option>
                  <option value="Twitter"> Twitter</option>
                  <option value="Snapchat"> Snapchat</option>
                  <option value="LinkedIn"> LinkedIn</option>
                  <option value="YouTube"> YouTube</option>
                </select>

                <input
                  type="text"
                  placeholder="Subject"
                  className=" w-full  md:w-32  input-bordered border-[1px] focus:outline-none px-2 mx-2"
                />

                <input
                  type="text"
                  placeholder="GPA/CGPA"
                  className=" w-full  md:w-32   input-bordered border-[1px] focus:outline-none px-2 mx-2"
                />

                <input
                  type="text"
                  placeholder="Institute Name"
                  className=" w-full  md:w-9/12 md:my-2 lg:my-0  lg:w-32   input-bordered border-[1px] focus:outline-none px-2 mx-2"
                />

                <button type="submit" className=" w-16 border-[1px] px-2 mx-2">
                  Add
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpEducational;
