import React from "react";

const SocialData = ({ setUpSocial }) => {
  return (
    <div>
      {/*  */}
      <div className=" border-[1px] my-2">
        <div className=" bg-slate-200 flex justify-between items-center px-5 border-b-[1px]">
          <h1 className=" text-lg font-semibold">Social Links</h1>
          <div className="  ">
            <button
              onClick={() => setUpSocial(true)}
              className=" border-[1px] px-2 py-[1px] m-[1px]"
            >
              <i class="fa-solid fa-pen text-sm"></i>
            </button>
          </div>
        </div>
        <div className=" px-4 py-2 ">
          <div className=" text-[15px]  my-[2px] font-semibold flex justify-between items-center ">
            <div> Address: </div>
            <div>Ponut, Kalai, JoypurHat</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialData;
