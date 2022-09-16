import React from "react";

const UpdateSocial = ({ setUpSocial }) => {
  return (
    <div>
      {" "}
      {/*  */}
      <div className=" border-[1px] my-2">
        <div className=" bg-slate-200 flex justify-between items-center px-5 border-b-[1px]">
          <h1 className=" text-lg font-semibold">Social Links</h1>
          <div className="  ">
            <button
              onClick={() => setUpSocial(false)}
              className=" border-[1px] px-2 py-[1px] m-[1px]"
            >
              {" "}
              <i class="fa-solid fa-check"></i>
            </button>
          </div>
        </div>
        <div className=" px-4 py-2 ">
          <form>
            <div className=" text-[15px]  my-[2px] font-semibold flex justify-between items-center  gap-2 ">
              <select className=" input-bordered border-[1px] focus:outline-none px-2">
                <option value="FaceBook"> FaceBook</option>
                <option value="Instagram"> Instagram</option>
                <option value="Twitter"> Twitter</option>
                <option value="Snapchat"> Snapchat</option>
                <option value="LinkedIn"> LinkedIn</option>
                <option value="YouTube"> YouTube</option>
              </select>

              <input
                type="text"
                placeholder="Social Links"
                className=" w-36 md:w-full input-bordered border-[1px] focus:outline-none px-2"
              />
              <input type="submit" value="Add" className="border-[1px] px-2" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateSocial;
