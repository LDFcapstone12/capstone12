import Image from "next/image";
import React from "react";

export const metadata = {
  title: 'Application Forms : BSA Senior Citizens Association',
};

export default function BSA() {
  return (
    <div className="flex flex-wrap lg:items-center mt-5 p-12">
      <div className="w-full lg:w-1/2">
        <img
          src="/assets/benefits/Midyear.png"
          width="600"
          height="300"
          alt=""
          className="mx-auto mb-4 lg:mb-0"
        />
      </div>
      <div className="w-full lg:w-1/2">
        <h1 className="lg:ml-1 text-2xl font-bold uppercase text-green-600 py-2">
          MID-YEAR BONUS
        </h1>
        <p className="text-justify text-lg">
          The association allocated a budget of one million pesos for senior
          citizens, leading to the introduction of a mid-year bonus program,
          which grants senior citizen members a P1,000 bonus. This project was
          launched in 2019 and has been embraced as a collaborative effort
          between the association and the council, under the leadership of the
          current Barangay Captain, Thomas Raymond Lising.
        </p>
        <p className="mt-4 text-justify text-lg">
          The heartwarming part of this initiative is witnessing the joy on our
          members' faces every time they receive their monthly bonuses,
          reinforcing how valued and important they are to us.
        </p>
      </div>

      <div className="w-full lg:w-1/2">
        <h1 className="lg:ml-1 text-2xl font-bold uppercase text-green-600 py-2">
          Birthday Celebrations
        </h1>
        <p className="text-justify text-lg">
          We take special care to ensure that our seniors feel truly cherished
          on their special day. We provide a sugar-free cake along with Quaker
          oats and biscuits as birthday treats for our senior members.
          Additionally, for those who prefer a different option, we are more
          than happy to arrange a fruit basket. Our commitment is to fulfill
          our members' needs and make their special day truly extraordinary.
        </p>
      </div>
      <div className="w-full lg:w-1/2">
        <img
          src="/assets/benefits/cake.png"
          width="500"
          height="200"
          alt=""
          className="mx-auto mb-4 lg:mb-0"
        />
      </div>

      <div className="w-full lg:w-1/2">
        <img
          src="/assets/benefits/Pensioner.png"
          width="600"
          height="300"
          alt=""
          className="mx-auto mb-4 lg:mb-0"
        />
      </div>
      <div className="w-full lg:w-1/2 p-12">
        <h1 className="lg:ml-1 text-2xl font-bold uppercase text-green-600 py-2">
          Financial Assistance Program
        </h1>
        <p className="text-justify text-lg">
          There are indeed people who are financially struggling in life, which
          is why the association decided to create a project for senior members
          who are less fortunate. This is a project where the association
          provides monthly financial assistance to indigent members. This project
          has also been adopted by the current Barangay Captain, Thomas Raymond
          Lising. He may have recognized the needs of impoverished senior
          citizens, including their necessities. While the amount given to them
          each month may not be substantial, what's important is that there are
          people willing to help meet their needs.
        </p>
      </div>

      <div className="w-full lg:w-1/2">
        <h1 className="lg:ml-1 text-2xl font-bold uppercase text-green-600 py-2">
        Christmas Celebrations
        </h1>
        <p className="text-justify text-lg">
          Due to the pandemic, we couldn't have our usual gatherings, so our
          senior members missed their cherished Christmas party. However, this
          challenge sparked a heartwarming solution: we turned the party budget
          into 500-peso cash gifts for each senior member every December. This
          gesture aimed to ensure they didn't miss out on holiday joy, turning
          this project into an annual tradition of spreading happiness during
          Christmas, even in tough times.
        </p>
      </div>
      <div className="w-full lg:w-1/2 mt-16">
        <img
          src="/assets/benefits/Christmas.png"
          width="600"
          height="300"
          alt=""
          className="mx-auto mb-4 lg:mb-0"
        />
      </div>
    </div>
  );
}
