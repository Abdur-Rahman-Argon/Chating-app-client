import React from "react";
import { useState } from "react";

const UpPersonal = ({ myInfo, setUpPersonal }) => {
  const { DateOfBirth, Gander, relationship } = myInfo?.user;
  const [relation, setRelation] = useState(relationship);

  const updateRelationship = (e) => {
    e.preventDefault();
    fetch(`${process.env.REACT_APP_PRO_URL}/relationship/${myInfo._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ relationship: relation }),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        setUpPersonal(false);
      });
    // console.log(relation);
  };

  return (
    <div>
      {/* Personal Info  */}
      <div className=" border-[1px] my-4 rounded">
        <div className="bg-slate-200 flex justify-between items-center px-5 border-b-[1px]">
          <h1 className=" text-lg font-semibold">
            {" "}
            Update Personal Information:
          </h1>

          <div className="  ">
            <button
              onClick={() => setUpPersonal(false)}
              className=" border-[1px] px-2 py-[1px] m-[1px]"
            >
              x
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

          <div className="  text-[15px]  my-[2px] font-semibold flex justify-between items-center ">
            <div>
              <span className="mx-2">
                <i class="fa-solid fa-children"></i>
              </span>
              RelationShip:
            </div>
            <form>
              <div className=" my-2 flex gap-0 items-center">
                <select
                  onChange={(e) => setRelation(e.target.value)}
                  className=" input-bordered border-[1px] focus:outline-none px-2"
                >
                  <option value="None"> None</option>
                  <option value="Single"> Single</option>
                  <option value="Married"> Married</option>
                  <option value="In a RelationShip"> In a RelationShip</option>
                </select>
                <button
                  onClick={updateRelationship}
                  className="border-[1px] px-2"
                >
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

export default UpPersonal;
