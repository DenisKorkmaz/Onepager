import React from 'react';

function Blog() {
  return (
    <div className="flex flex-col items-center w-full px-4 pt-10 gap-4">
      <h2 className="text-[#4B4B4B] text-center font-inter text-2xl font-normal leading-10">
        Blog
      </h2>
      <p className="text-[#4B4B4B] text-center font-inter text-base font-normal leading-6 lg:hidden">
        Diam enim suscipit habitant ac nunc arcu <br />
        commodo pulvinar massa. <br />
        Odio pellentesque fusce elit facilisi risus blandit <br />
        dictum turpis erat. A vestibulum sed scelerisque <br />
        quis in.
      </p>
      <p className="text-[#4B4B4B] text-center font-inter text-base font-normal leading-6 hidden lg:block">
        Diam enim suscipit habitant ac nunc arcu commodo pulvinar massa. <br />
        Odio pellentesque fusce elit facilisi risus blandit dictum turpis erat. A vestibulum sed scelerisque quis in.
      </p>
    </div>
  );
}

export default Blog;
