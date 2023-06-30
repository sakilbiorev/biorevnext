import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import CountUp from 'react-countup';

function StatasticsSection() {
  const bYear = new Date().getFullYear() - 2010;
  return (
    <div className="grid grid-cols-2 items-center justify-center gap-10 bg-countup px-5 py-[66px] text-center text-[30px] font-[600] md:px-[15%] lg:grid-cols-4 lg:px-[20%]">
      <CountUp
        start={0}
        prefix="["
        suffix="+]"
        enableScrollSpy
        scrollSpyOnce
        end={400}
        delay={0}
      >
        {({ countUpRef }) => (
          <div>
            <span
              className="font-josefin text-[42px] font-normal leading-[1] text-black-4"
              ref={countUpRef}
            />
            <p className="my-2 font-titillium text-[16px] font-normal uppercase text-[#606060]">
              Happy Clients
            </p>
          </div>
        )}
      </CountUp>
      <CountUp
        start={0}
        prefix="["
        suffix="+]"
        enableScrollSpy
        scrollSpyOnce
        end={bYear}
        delay={0}
      >
        {({ countUpRef }) => (
          <div>
            <span
              className="font-josefin text-[42px] font-normal leading-[1] text-black-4"
              ref={countUpRef}
            />
            <p className="my-2 font-titillium text-[16px] font-normal uppercase text-[#606060]">
              Years of Experience
            </p>
          </div>
        )}
      </CountUp>
      <CountUp
        start={0}
        prefix="["
        suffix="+]"
        enableScrollSpy
        scrollSpyOnce
        end={9000}
        delay={0}
      >
        {({ countUpRef }) => (
          <div>
            <span
              className="font-josefin text-[42px] font-normal leading-[1] text-black-4"
              ref={countUpRef}
            />
            <p className="my-2 font-titillium text-[16px] font-normal uppercase text-[#606060]">
              Projects Delivered
            </p>
          </div>
        )}
      </CountUp>
      <CountUp
        start={0}
        prefix="["
        suffix="]"
        enableScrollSpy
        scrollSpyOnce
        end={4}
        delay={0}
      >
        {({ countUpRef }) => (
          <div>
            <span
              className="font-josefin text-[42px] font-normal leading-[1] text-black-4"
              ref={countUpRef}
            />
            <p className="my-2 font-titillium text-[16px] font-normal uppercase text-[#606060]">
              Offices
            </p>
          </div>
        )}
      </CountUp>
    </div>
  );
}

export default StatasticsSection;
