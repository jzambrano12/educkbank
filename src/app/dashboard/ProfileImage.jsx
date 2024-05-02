import React from "react";

const ProfileImage = () => {
  return (
    <section className="mr-4">
      <div class="flex space-x-2">
        {/* <div class="relative w-16 h-16">
          <img
            class="rounded-full border border-gray-100 shadow-sm"
            src="https://randomuser.me/api/portraits/women/81.jpg"
            alt="user image"
          />
          <div class="absolute top-0 right-0 h-4 w-4 my-1 border-2 border-white rounded-full bg-green-400 z-2"></div>
        </div> */}

        <div class="relative w-24 h-24">
          <img
            class="rounded-full border border-gray-100 shadow-sm"
            src="https://randomuser.me/api/portraits/women/81.jpg"
            alt="user image"
          />
          <div class="absolute top-0 right-0 h-6 w-6 my-1 border-4 border-white rounded-full bg-green-400 z-2"></div>
        </div>
      </div>
    </section>
  );
};

export default ProfileImage;