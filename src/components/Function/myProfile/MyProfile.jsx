import MyPosts from "./MyPosts";



const MyProfile = () => {
    
    return (
      <div>
        <div className="py-6 ">
          <a
            href="#"
            class="flex flex-col lg:gap-12 items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row p-12 "
          >
            <img
              class="object-cover w-32 h-32 rounded-full   border-2 border-purple-600   "
              src="https://i.ibb.co/F3zLwZJ/wallpaperflare-com-wallpaper.jpg"
              alt=""
            />
            <h1 className="text-2xl font-bold">Salwa_jahan560</h1>
            <div class="flex flex-col justify-between gap-12 p-4 leading-normal">
              <div className="lg:text-3xl flex gap-12">
                <div className="text-center">
                  <h1>1.5M</h1>
                  <h1 className="font-bold logo">Flowers</h1>
                </div>
                <div className="text-center">
                  <h1>5</h1>
                  <h1 className="font-bold logo">Flowing</h1>
                </div>
                <div className="text-center">
                  <h1>30</h1>
                  <h1 className="font-bold logo">Post</h1>
                </div>
              </div>
            </div>
          </a>
        </div>
        <div className="">
          <h1 className="text-2xl font-bold logo">Let's_see_my_post</h1>
          <MyPosts/>
        </div>
      </div>
    );
};

export default MyProfile;