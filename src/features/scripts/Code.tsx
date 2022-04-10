import Prism from "prismjs";
import { useEffect } from "react";
import styles from "./code.module.css"

interface CodeInterface {
    code: string;
    language: string;
  }
  

  function Code({ code, language }:CodeInterface) {
    useEffect(() => {
      Prism.highlightAll();
    }, []);
    return (
      <div className={styles.code}>
        <pre>
          <code className={`language-${language}`}>{code}</code>
        </pre>
      </div>
    );
  }
  
  export default Code;