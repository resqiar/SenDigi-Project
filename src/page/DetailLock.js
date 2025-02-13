import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import lockPic from "../assets/lockPic.jpg";
import lockPic1 from "../assets/lockPic1.png";
import lockPic2 from "../assets/lockPic2.png";
import dashboardPic from "../assets/dashboardPic.png";

function DetailLock() {
  return (
    <div>
      <Navbar />
      <div className="w-full bg-white py-16 px-4">
        <div className="max-w-[1240px] mx-auto">
          <h1 className="text-[#00df9a] font-bold text-center text-4xl mb-8">
            Lock App feature
          </h1>
          <div className="w-full bg-white py-16 px-4">
            <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
              <img className="w-[500PX] mx-auto my-4" src={lockPic} alt="/" />
              <div className="flex flex-col justify-center">
                <p className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
                  Lock App Feature in SenDigi
                </p>
                <p>
                  The Lock App feature in SenDigi empowers parents with the
                  ability to remotely lock specific applications on their
                  children's devices. This feature provides parents with
                  enhanced control over their children's digital activities,
                  allowing them to regulate access to certain apps, thereby
                  promoting a healthier balance between screen time and other
                  activities. With SenDigi, parents can ensure a safer and more
                  productive digital experience for their children
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-black py-16 px-4">
        <div className="max-w-[1240px] mx-auto">
          <h1 className="text-[#00df9a] font-bold text-center text-4xl mb-8">
            Benefit
          </h1>
          <div className="w-full bg-white py-16 px-4 rounded-lg">
            <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
              <p className="md:text-4xl sm:text-3xl text-2xl font-bold py-2 pt-8">
                Lock App Benefit
              </p>
              <ol className="list-decimal pt-8">
                <li>
                  <strong>Comprehensive Parental Monitoring:</strong> The Lock
                  App feature offers a comprehensive parental monitoring
                  solution. It provides a platform accessible via web and mobile
                  devices, empowering parents with robust tools to monitor and
                  control their children's online activities in real-time.
                </li>
                <li>
                  <strong>Flexibility:</strong> Parents gain flexibility with
                  the Lock App feature. They can monitor and control their
                  children's gadget usage across multiple devices, ensuring a
                  seamless experience regardless of the device being used.
                </li>
                <li>
                  <strong>Real-Time Monitoring and Control:</strong> With
                  real-time monitoring and control functionalities, parents can
                  promptly respond to any concerns or inappropriate activities,
                  fostering a safer digital environment for their children.
                </li>
                <li>
                  <strong>Customized Access Control:</strong> Parents can
                  personalize access control profiles for each child, tailoring
                  the restrictions to match their individual needs and
                  developmental stages, thereby ensuring a safer online
                  experience.
                </li>
                <li>
                  <strong>Insightful Usage Reports:</strong> The Lock App
                  feature enables parents to access comprehensive reports on
                  their children's online activities, providing valuable
                  insights into usage patterns and helping parents make informed
                  decisions about their children's digital habits.
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full py-[10rem] px-4 bg-white">
        <h1 className="text-[#00df9a] font-bold text-center text-4xl mb-20">
          Main Feature
        </h1>
        <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
          <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
            <img
              className="w-30 h-80 mx-auto mt-[-3rem] bg-white"
              src={dashboardPic}
              alt="#"
            />
            <h2 className="text-3xl font-bold text-center py-6">
              Option Dashboard
            </h2>
            <div className="text-center font-medium">
              <p className="mx-8 mt-8">
                1. Provides dashboard options that can be used
              </p>
              <p className="mx-8">2. Monitoring car data via the dashboard</p>
              <p className="mx-8">
                3. The dashboard also provides a menu of other features in the
                sidebarr
              </p>
            </div>
          </div>
          <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
            <img
              className="w-30 h-80 mx-auto mt-[-3rem] bg-white"
              src={lockPic1}
              alt="#"
            />
            <h2 className="text-3xl font-bold text-center py-6">
              Statistic Analyze Data
            </h2>
            <div className="text-center font-medium">
              <p className="mx-8 mt-8">
                1. Provides time analysis data for the number of times locks and
                unlocks occur
              </p>
              <p className="mx-8">2. soon...</p>
              <p className="mx-8">3. soon...</p>
            </div>
          </div>
          <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
            <img
              className="w-30 h-80 mx-auto mt-[-3rem] bg-white"
              src={lockPic2}
              alt="#"
            />
            <h2 className="text-3xl font-bold text-center py-6">
              App Lock monitoring
            </h2>
            <div className="text-center font-medium">
              <p className="mx-8 mt-8">
                1. Provides actions to lock and unlock
              </p>
              <p className="mx-8">
                2. Provides status data whether the application is in lock and
                unlock mode
              </p>
              <p className="mx-8">
                3. Provides statistical data on how many times the application
                is locked and unlocked
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* <Profil/> */}
      {/* <Features /> */}
      <Footer />
    </div>
  );
}

export default DetailLock;
