import { files } from "./data";
import SubFolder from "./SubFolder";

const Folder = () => {
 
 return(
    <div>
        <SubFolder name={files.name} childrenData={files.children}/>
    </div>
 )
};

export default Folder;
