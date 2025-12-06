import React from "react";

const Card4 = () => {
  return (
    <div className="h-45 w-full rounded-2xl p-4 bg-[#15BC77] shadow mt-4">
      <div class=" text-white ">
        <p class="text-sm font-semibold uppercase tracking-wide opacity-80">
          What you'll get
        </p>
        <h3 class="text-[18px] font-bold mt-1">
          Friendly quiz with instant feedback
        </h3>
        <ul class="mt-4 space-y-2 text-sm">
          <li class="flex items-start gap-2 text-[13px]">
            <span class="mt-1 w-2 h-2 rounded-full bg-white"></span>Bite-sized
            explanations for every answer.
          </li>
          <li class="flex items-start gap-2 text-[13px]">
            <span class="mt-1 w-2 h-2 rounded-full bg-white"></span>Tone
            automatically matches the learner profile.
          </li>
          <li class="flex items-start gap-2 text-[13px]">
            <span class="mt-1 w-2 h-2 rounded-full bg-white"></span>
            Ready-to-play quiz inside the Learn tab.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Card4;
