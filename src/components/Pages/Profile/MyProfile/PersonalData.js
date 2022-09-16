import React from "react";

const PersonalData = ({ myInfo, setUpPersonal }) => {
  const { DateOfBirth, Gander } = myInfo?.user;
  return (
    <div>
      {/* Personal Info  */}
      <div className=" border-[1px] my-4 rounded">
        <div className="bg-slate-200 flex justify-between items-center px-5 border-b-[1px]">
          <h1 className=" text-lg font-semibold">Personal Information:</h1>

          <div className="  ">
            <button
              onClick={() => setUpPersonal(true)}
              className=" border-[1px] px-2 py-[1px] m-[1px]"
            >
              <i class="fa-solid fa-pen text-sm"></i>
            </button>
          </div>
        </div>

        <div className=" px-4  py-2">
          <div className="  text-[15px]  my-[2px] font-semibold flex justify-between items-center ">
            <div>
              <span className=" mx-3">
                <i class="fa-solid fa-calendar-days"></i>
              </span>
              <span>Date Of Birth:</span>
            </div>
            <div>{DateOfBirth}</div>
          </div>

          <div className=" text-[15px]  my-[2px] font-semibold flex justify-between items-center ">
            <div>
              <span className="mx-2">
                <i class="fa-solid fa-venus-mars"></i>
              </span>
              Gander:
            </div>
            <div>{Gander}</div>
          </div>

          {/* <div className=" text-[15px]  my-[2px] font-semibold flex justify-between items-center ">
            <div>
              <span className="mx-2">
                <i class="fa-solid fa-venus-mars"></i>
              </span>
              Gander:
            </div>
            <div>{Gander}</div>
          </div> */}

          <div className="  text-[15px]  my-[2px] font-semibold flex justify-between items-center ">
            <div>
              <span className="mx-2">
                <i class="fa-solid fa-children"></i>
              </span>
              RelationShip:
            </div>
            <div>{myInfo.relationship || "None"}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalData;
