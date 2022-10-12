import React from 'react';
import { Box } from '@mui/material';
import Button from '@leafygreen-ui/button'
import Card from '@leafygreen-ui/card';

const DragnDrop = (props) => {
  
  // drag state
  const [dragActive, setDragActive] = React.useState(false);
  // ref
  const inputRef = React.useRef(null);

  // handle drag events
  const handleDrag = function(e) {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  // triggers when file is dropped
  const handleDrop = function(e) {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFiles(e.dataTransfer.files);
    }
  };

  // triggers when file is selected with click
  const handleChange = function(e) {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      handleFiles(e.target.files);
    }
  };

  // triggers the input when the button is clicked
  const onButtonClick = () => {
    inputRef.current.click();
  };

  const handleFiles = function(files) {
    let file = files[0]
    let reader = new FileReader(file)
  
    // await reader.readAsDataURL(file)
  
    reader.readAsText(file)
  
    reader.onload = async(e) => {
  
      let aaa = e.target.result
  
      let logs = await JSON.parse('[' + aaa.replace(/[\n]/g, ",").replace(/,,/g, ",").slice(0,-1) + ']')

      logs = logs.filter((log) => 
        log.msg === "Slow query"
      )

      console.log(logs)
  
      props.retFunction(logs)
    }
  }


  return (
    <Box>
      
        <form id="form-file-upload" onDragEnter={handleDrag} onSubmit={(e) => e.preventDefault()}>
        
          <Card>
          <label id="label-file-upload" htmlFor="input-file-upload" className={dragActive ? "drag-active" : "" }>
            <div>
              <p>Drag and drop your file here or</p>

              <input ref={inputRef} type="file" id="input-file-upload" accept="application/json" onChange={handleChange} />
            </div> 
          </label>
          
          { dragActive && <div id="drag-file-element" onDragEnter={handleDrag} onDragLeave={handleDrag} onDragOver={handleDrag} onDrop={handleDrop}></div> }
          </Card>
        </form>

    </Box>
  );
};

export default DragnDrop;