import Head from "./Component/Head";
import Nav from "./Component/Nav";
import Folder from "./Component/folder";
import FolderRight from "./Component/folderRight";
export default function Home() {
  return (
    <>
      <div className="bg-amber-200 z-0 fixed inset-0 h-full overflow-hidden  bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[48px_48px]">
        <Folder/>
        <Head/>
        <FolderRight/>
        <Nav />
      </div>
    </>
  );
}
