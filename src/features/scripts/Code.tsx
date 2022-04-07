import Prism from "prismjs";
import { useEffect } from "react";


interface CodeInterface {
    code: string;
    language: string;
  }
  

  function Code({ code, language }:CodeInterface) {
    useEffect(() => {
      Prism.highlightAll();
    }, []);
    return (
      <div className="Code">
        <pre>
          <code className={`language-${language}`}>{code}</code>
        </pre>
      </div>
    );
  }
  
  export default Code;