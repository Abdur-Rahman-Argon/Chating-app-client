import React from "react";
import { useState } from "react";
import pic from "./../../../Images/149071.png";
import ContactData from "./MyProfile/ContactData";
import EducationalData from "./MyProfile/EducationalData";
import PersonalData from "./MyProfile/PersonalData";
import ProfileData from "./MyProfile/ProfileData";
import SocialData from "./MyProfile/SocialData";
import UpdateContact from "./UpdateProfile.js/UpContact";
import UpEducational from "./UpdateProfile.js/UpEducational";
import UpPersonal from "./UpdateProfile.js/UpPersonal";
import UpProfile from "./UpdateProfile.js/UpProfile";
import UpdateSocial from "./UpdateProfile.js/UpSocial";

const Profile = ({ myInfo }) => {
  const [upProfile, setUpProfile] = useState(false);
  const [upPersonal, setUpPersonal] = useState(false);
  const [upEducation, setUpEducation] = useState(false);
  const [upSocial, setUpSocial] = useState(false);
  const [upAddress, setUpAddress] = useState(false);

  // const {
  //   photoURL,
  //   displayName,
  //   profileHeading,
  //   profileBio,
  //   DateOfBirth,
  //   Gander,
  //   relationShip,
  // } = myInfo?.user;

  // const personal = {};
  // const educational = {};
  // const Contact = {};
  // const Social = {};
  // // const personal = {}

  return (
    <div className=" W-full">
      <div className=" shadow-sm py-2 px-5 font-semibold border-[1px] ">
        <h1 className=" text-lg flex items-center gap-5">
          <span>
            <i class="fa-regular fa-user"></i>
          </span>
          <span>My Profile</span>
        </h1>
      </div>
      <div>{/* banner Image */}</div>
      {/* Heading Information*/}
      {upProfile ? (
        <UpProfile myInfo={myInfo} setUpProfile={setUpProfile}></UpProfile>
      ) : (
        <ProfileData myInfo={myInfo} setUpProfile={setUpProfile}></ProfileData>
      )}
      {/* Personal Info  */}
      {upPersonal ? (
        <UpPersonal setUpPersonal={setUpPersonal} myInfo={myInfo} />
      ) : (
        <PersonalData
          setUpPersonal={setUpPersonal}
          myInfo={myInfo}
        ></PersonalData>
      )}
      {/* contact  */}
      {upAddress ? (
        <UpdateContact
          myInfo={myInfo}
          setUpAddress={setUpAddress}
        ></UpdateContact>
      ) : (
        <ContactData myInfo={myInfo} setUpAddress={setUpAddress}></ContactData>
      )}
      {/* Education */}
      {upEducation ? (
        <UpEducational setUpEducation={setUpEducation} />
      ) : (
        <EducationalData setUpEducation={setUpEducation}></EducationalData>
      )}
      {/* Social Data  */}
      {upSocial ? (
        <UpdateSocial setUpSocial={setUpSocial} />
      ) : (
        <SocialData setUpSocial={setUpSocial}></SocialData>
      )}
      <></>
      <></>
      <></>
      <></>
      {/* 
      <div className=" border-[1px] my-4 rounded">
        <div className=" flex justify-between items-center px-5 border-b-[1px]">
          <h1 className=" text-lg font-semibold">Personal Information:</h1>

          <div className="  ">
            <button className=" border-[1px] px-2 py-[1px] m-[1px]">
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

      {/* Contact nfo  */}{" "}
      {/* 
      <div className=" border-[1px] my-2">
        <div className=" flex justify-between items-center px-5 border-b-[1px]">
          <h1 className=" text-lg font-semibold">Contact Information:</h1>
          <div className="  ">
            <button className=" border-[1px] px-2 py-[1px] m-[1px]">
              <i class="fa-solid fa-pen text-sm"></i>
            </button>
          </div>
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
    </div> */}
      {/*
      <div className=" border-[1px] my-2">
        <div className=" flex justify-between items-center px-5 border-b-[1px]">
          <h1 className=" text-lg font-semibold">Social Links</h1>
          <div className="  ">
            <button className=" border-[1px] px-2 py-[1px] m-[1px]">
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

      {/*
      <div className=" border-[1px] my-2">
        <div className=" flex justify-between items-center px-5 border-b-[1px]">
          <h1 className=" text-lg font-semibold">Social Links</h1>
          <div className="  ">
            <button className=" border-[1px] px-2 py-[1px] m-[1px]">
              <i class="fa-solid fa-pen text-sm"></i>
            </button>
          </div>
        </div>
        <div className=" px-4 py-2 ">
          <div className=" text-[15px]  my-[2px] font-semibold flex justify-between items-center ">
            <div> Address: </div>
            <div>Ponut, Kalai, JoypurHat</div>
          </div>
        </div> */}
      {/* </div> */}
    </div>
  );
};

export default Profile;
