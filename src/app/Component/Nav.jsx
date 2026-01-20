export default function Nav() {
  return (
    <>
     
        <div className="fixed bottom-0 left-0 right-0 z-50 h-20 bg-red-500/30 flex justify-center items-center gap-10 ">
            
           <a target="_blank" href="https://www.linkedin.com/in/sujal-sharma-7795a3241/?skipRedirect=true">
            <img src="/linkedin.png" alt="folder" className="max-w-16 hover:scale-110 " />  
          </a>
          <a target="_blank" href="https://github.com/Sujalsharma777">
            <img src="/github.png" alt="folder" className="max-w-16 hover:scale-110" />
          </a>
          <a target="_blank" href="">
            <img src="/instagram-logo.png" alt="folder" className="max-w-16 hover:scale-110" />
          </a>
          <a target="_blank" href="/jan2026.pdf">
            <img src="/cv.png" alt="folder" className="max-w-16 hover:scale-110" />
          </a> 
     
      </div>
    </>
  );
}
