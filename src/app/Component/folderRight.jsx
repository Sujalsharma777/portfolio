import { Mail } from "lucide-react";
import { CircleUser } from "lucide-react";
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
export default function FolderRight() {
  return (
    <>
      <div className="fixed  sm:top-1/3 top-0  right-0 mx-20 my-20">
        <div className="flex flex-col gap-14">
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
                    <a
                      href=""
                      className="text-lg font-Quintessential flex gap-1"
                    >
                      <CircleUser /> +91 8717904827
                    </a>
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
    </>
  );
}
