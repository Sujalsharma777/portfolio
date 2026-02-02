import { Link, Mail } from "lucide-react";
import { CircleUser } from "lucide-react";
import { Earth } from "lucide-react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
export default function Folder() {
  return (
    <>
    <div className="flex sm:justify-around items-center sm:flex-row flex-col py-10">
      <div className="">
        <div className="flex flex-row sm:flex-col gap-14 ">
          <AlertDialog className="" >
            <AlertDialogTrigger asChild>
              <button>
                <img src="folder.png" className="w-20" alt="" />
                <span className="font-Quintessential font-bold">Profile</span>
              </button>
            </AlertDialogTrigger>
            <AlertDialogContent className="overflow-hidden ">
              <AlertDialogHeader>
                <div className="    flex justify-between px-10  h-12   items-center bg-red-500 absolute top-0 w-full right-0 ">
                  <div className="">C:\Hello\Profile</div>
                  <div>
                    <AlertDialogCancel className="w-10 bg-red-600">
                      x
                    </AlertDialogCancel>
                  </div>
                </div>
                <div className="py-20 px-20 grid sm:grid-cols-[250px_1fr] gap-y-2 gap-x-4 justify-center items-center">
                  <div className="w-52 ">
                    <img
                      src="profileimg.jpeg"
                      alt="Profile Image "
                      className="rounded-full"
                    />
                  </div>
                  <div className="flex  flex-col justify-center gap-2 font-sans float-left">
                    <span className="text-2xl font-bold text-neutral-600">
                      Hey, I'm
                    </span>
                    <span className="text-orange-700 font-bold sm:text-3xl text-2xl">
                      Sujal Sharma{" "}
                    </span>
                    <span className="text-black font-semibold text-[12px] italic">
                      MERN Stack Web developer
                    </span>
                    <span className="font-bold text-md">
                      Think, Build, Deployed,{" "}
                    </span>
                  </div>
                </div>
              </AlertDialogHeader>
            </AlertDialogContent>
          </AlertDialog>

          <AlertDialog className="fixed inset-0">
            <AlertDialogTrigger asChild>
              <button>
                <img src="/folder.png" className="w-20" alt="" />
                <span className="font-Quintessential font-bold">Work</span>
              </button>
            </AlertDialogTrigger>
            <AlertDialogContent className="overflow-hidden">
              <AlertDialogHeader>
                <div className="flex justify-between px-10  h-12   items-center bg-red-500 absolute top-0 w-full right-0 ">
                  <div className="">C:\Hello\Work</div>
                  <div>
                    <AlertDialogCancel className="w-10 bg-red-600">
                      x
                    </AlertDialogCancel>
                  </div>
                </div>
                <div className="py-20 flex justify-center items-center flex-col gap-3">
                  <AlertDialogTitle className="text-2xl">
                    Projects
                  </AlertDialogTitle>
                  <div className="flex flex-col gap-1.5">
                    <span className="text-lg font-semibold flex gap-2 items-center sm:flex-row flex-col">
                      {" "}
                      <Earth className="text-orange-700  font-bold  text-4xl" /> Plant
                      Store (E-Commerce Platform){" "}
                      <span className="text-sm italic font-light">
                        Tech: React.js, Express.js, MongoDB, Vercel, Github
                      </span>
                    </span>
                    <div className="text-orange-500 font-bold pl-10 flex gap-2 justify-center" >
                      {" "}
                      <Link className="" /> <a href="https://plant-shopping-website.onrender.com/" target="_blank">Live</a>
                    </div>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <span className="text-lg font-semibold flex gap-2 items-center sm:flex-row flex-col">
                      {" "}
                      <Earth className="text-orange-700  font-bold" /> Mali
                      Dekho (Appointment Booking Platform){" "}
                      <span className="text-sm italic font-light">
                        Tech: React.js, Express.js, MongoDB, Cloudinary, Vercel, Github
                      </span>
                    </span>
                    <div className="text-orange-500 font-bold pl-10 flex gap-2 justify-center">
                      {" "}
                      <Link /> <a href="https://malii-dekhoo.vercel.app/" target="_blank">Live</a>
                    </div>
                  </div>
                </div>
              </AlertDialogHeader>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      </div>
       <div className="flex justify-center sm:items-center items-end py-50 mx-20 h-full">
      
       <h1 className="sm:text-9xl text-7xl font-Quintessential font-extrabold">Portfolio</h1>
    
      </div>
         <div className="  ">
        <div className="flex  flex-row sm:flex-col gap-14">
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <button>
                <img src="folder.png" className="w-20" alt="" />
                <span className="font-Quintessential font-bold">Contact</span>
              </button>
            </AlertDialogTrigger>
            <AlertDialogContent className=" overflow-hidden">
              <AlertDialogHeader>
                <div className="flex justify-between px-10  h-12   items-center bg-red-500  absolute top-0 w-full right-0 ">
                  <div className="">C:\Hello\contact</div>
                  <div>
                    <AlertDialogCancel className="w-10 bg-red-600">
                      x
                    </AlertDialogCancel>
                  </div>
                </div>
                <div className="py-20 flex justify-center items-center flex-col gap-3">
                  <AlertDialogTitle className="text-4xl font-Quintessential">
                    Let's get in touched{" "}
                  </AlertDialogTitle>
                  <AlertDialogDescription>
                   
                    <br />
                    <a
                      href=""
                      className="text-lg font-Quintessential flex gap-1"
                    >
                      <Mail />
                      Sujalsharma226777@gmail.com
                    </a>
                  </AlertDialogDescription>
                </div>
              </AlertDialogHeader>
            </AlertDialogContent>
          </AlertDialog>

          <AlertDialog className="fixed inset-0">
            <AlertDialogTrigger asChild>
              <button>
                <img src="folder.png" className="w-20" alt="" />
                <span className="font-Quintessential font-bold">Skills</span>
              </button>
            </AlertDialogTrigger>
            <AlertDialogContent className="overflow-hidden">
              <AlertDialogHeader>
                <div className="flex justify-between px-10  h-12   items-center bg-red-500 absolute top-0 w-full right-0 ">
                  <div className="">C:\Hello\contact</div>
                  <div>
                    <AlertDialogCancel className="w-10 bg-red-600">
                      x
                    </AlertDialogCancel>
                  </div>
                </div>
                <div className="py-20 flex justify-center items-center flex-col gap-3">
                  <AlertDialogTitle className="text-4xl font-Quintessential">
                    Skills{" "}
                  </AlertDialogTitle>
                  <AlertDialogDescription className="grid grid-cols-[140px_1fr] gap-y-2 gap-x-4 font-mono text-[15px]">
                    <span className="text-right font-semibold opacity-80">
                      Frontend
                    </span>
                    <span>
                      HTML, CSS, React.js, Tailwind CSS, DaisyUI, JavaScript
                    </span>

                    <span className="text-right font-semibold opacity-80">
                      Backend
                    </span>
                    <span>Node.js, Express.js</span>

                    <span className="text-right font-semibold opacity-80">
                      Database
                    </span>
                    <span>MongoDB</span>

                    <span className="text-right font-semibold opacity-80">
                      Tools
                    </span>
                    <span>Git, GitHub, Postman, VS Code</span>

                    <span className="text-right font-semibold opacity-80">
                      Core Concepts
                    </span>
                    <span>RESTful APIs, MVC Architecture</span>
                  </AlertDialogDescription>
                </div>
              </AlertDialogHeader>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      </div>
</div>
    </>
  );
}
