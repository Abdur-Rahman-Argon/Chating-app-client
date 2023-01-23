import React from "react";

import pic from "./../../../Images/149071.png";
import UseMyConversion from "../../Utilites/UseMyConversion";
import useMyInformation from "../../Utilites/useMyInformation";
import { useNavigate, useParams } from "react-router-dom";

const UserData = ({ userInfo }) => {
  const {
    photoURL,
    displayName,
    profileHeading,
    profileBio,
    DateOfBirth,
    Gander,
    relationShip,
  } = userInfo?.user;

  const [myConversion] = UseMyConversion();
  const [myData] = useMyInformation();

  const navigate = useNavigate();

  const existConversion = myConversion?.filter((con) =>
    con.member.find((id) => id === userInfo?._id)
  );

  const createConversion = () => {
    const member = { senderId: myData._id, receiverId: userInfo._id };
    if (existConversion.length < 1) {
      //
      fetch(`${process.env.REACT_APP_PRO_URL}/createConversation`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(member),
      })
        .then((res) => res.json())
        .then((result) => {
          // console.log(result);
          navigate(`/messages/messageBox/${result.insertedId}`);
        });
    } else {
      navigate(`/messages/messageBox/${existConversion[0]._id}`);
    }
  };

  return (
    <div>
      <div className="mt-1 shadow-sm bg-slate-100 py-2 px-5 font-semibold border-[1px] ">
        <h1 className=" text-lg flex items-center gap-5">
          <span>
            <i class="fa-solid fa-eye"></i>
          </span>
          <span>View Profile</span>
        </h1>
      </div>

      <div>{/* banner Image */}</div>

      {/* Personal Info */}
      <div className=" relative border-[1px] px-3 py-3 grid grid-cols-1 md:grid-cols-2 gap-2 items-center">
        {/* profile img */}
        <div className=" w-32 mx-auto ">
          <a href="/my-profile">
            <img
              src={photoURL || pic}
              alt=""
              className="rounded-full border-[1px] "
            />
          </a>
        </div>

        {/* my info */}
        <div className=" ">
          <h1 className=" text-xl font-bold md:text-left text-center">
            {displayName}
          </h1>
          <h1 className=" text-[16px] font-semibold md:text-left text-center">
            {profileHeading || "Profile Heading None"}
          </h1>
          <div>
            <p
              className=" my-2 text-sm font-[400] md:text-left text-center
              "
            ></p>
            <p
              className=" my-2 text-sm font-[400] md:text-left text-center
              "
            >
              {profileBio || "No any Bio"}
            </p>
          </div>

          <div className=" flex justify-around items-center gap-5">
            <button class="border-2 font-medium py-[6px] hover:border-gray-500  hover:bg-gray-200  text-black px-2 my-1 rounded-lg border-gray-400 w-full focus:outline-0">
              <i class="fa-solid fa-plus"></i> <span> Follow</span>
            </button>
            <button
              onClick={createConversion}
              class="border-2 font-medium py-[6px] rounded-lg border-gray-500 bg-gray-600 hover:bg-gray-700  text-white  w-full "
            >
              <i class="fa-solid fa-paper-plane"></i> <span>Message</span>
            </button>
          </div>
        </div>
      </div>

      {/* Personal Info  */}
      <div className=" border-[1px] my-4 rounded">
        <div className=" bg-slate-100 flex justify-between items-center px-5 border-b-[1px]">
          <h1 className=" text-lg font-semibold">Personal Information:</h1>
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
            <div>{relationShip || "None"}</div>
          </div>
        </div>
      </div>

      {/* Contact nfo  */}
      <div className=" border-[1px] my-2">
        <div className="bg-slate-100 flex justify-between items-center px-5 border-b-[1px]">
          <h1 className=" text-lg font-semibold">Contact Information:</h1>
          <div className="  "></div>
        </div>
        <div className=" px-4  py-2">
          <div className="  text-[15px]  my-[2px] font-semibold flex justify-between items-center ">
            <div>
              <span className=" mx-[6px]">
                <i class="fa-solid fa-location-dot"></i>
              </span>
              <span>Address:</span>
            </div>
            <div>Ponut, Kalai, JoypurHat</div>
          </div>
          <div className=" text-[15px]  my-[2px] font-semibold flex justify-between items-center ">
            <div>
              <span className="mx-1">
                <i class="fa-solid fa-phone"></i>
              </span>
              Phone:
            </div>
            <div>+880175464</div>
          </div>
          <div className="  text-[15px]  my-[2px] font-semibold flex justify-between items-center ">
            <div>
              <span className="mx-1">
                <i class="fa-solid fa-envelope"></i>
              </span>{" "}
              Email:
            </div>
            <div>abdur@gmail.com</div>
          </div>
        </div>
      </div>

      {/* Social Links  */}
      <div className=" border-[1px] my-2">
        <div className="bg-slate-100 flex justify-between items-center px-5 border-b-[1px]">
          <h1 className=" text-lg font-semibold">Social Links</h1>
          <div className="  "></div>
        </div>
        <div className=" px-4 py-2 ">
          <div className=" text-[15px]  my-[2px] font-semibold flex justify-between items-center ">
            <div> Address: </div>
            <div>Ponut, Kalai, JoypurHat</div>
          </div>
        </div>
      </div>

      {/* Education Info  */}
      <div className=" border-[1px] my-2">
        <div className="bg-slate-100 flex justify-between items-center px-5 border-b-[1px]">
          <h1 className=" text-lg font-semibold">Education Information</h1>
          <div className="  "></div>
        </div>
        <div className=" px-4 py-2 ">
          <div className=" text-[15px]  my-[2px] font-semibold flex justify-between items-center ">
            <div> Address: </div>
            <div>Ponut, Kalai, JoypurHat</div>
          </div>
        </div>
      </div>

      {/*  */}
      <div className=" border-[1px] my-2">
        <div className="bg-slate-100 flex justify-between items-center px-5 border-b-[1px]">
          <h1 className=" text-lg font-semibold">Social Links</h1>
          <div className="  "></div>
        </div>
        <div className=" px-4 py-2 ">
          <div className=" text-[15px]  my-[2px] font-semibold flex justify-between items-center ">
            <div> Address: </div>
            <div>Ponut, Kalai, JoypurHat</div>
          </div>
        </div>
      </div>

      {/*  */}
      <div className=" border-[1px] my-2">
        <div className="bg-slate-100 flex justify-between items-center px-5 border-b-[1px]">
          <h1 className=" text-lg font-semibold">Social Links</h1>
          <div className="  "></div>
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

export default UserData;
