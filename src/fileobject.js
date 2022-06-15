// Tempoprary global storage for the buffer
document.file = {

  // Name of the file
  filename: null, 
  
  // Extension of the file
  extension: null, 

  // Size of the file uploaded
  size: null,

  // File contents buffer
  data: null
}

// upload(file: File): Void
// Given a file, loads the contents
// of the file into the document.file 
// variable.
function upload(file)
{
  // Filename for the file
  document.file.filename = file.name;

  // Get the file extension from the filename
  document.file.extension = document.file.filename.split('.').pop();

  // File reader object for file
  const reader = new FileReader();

  // Code to run if reader succeeds
  reader.onload = function(e) {

    try
    {
      // Create a temporary buffer for the file contents
      let array = new Uint8Array(e.target.result);

      // Create the uint8array buffer
      document.file.data = new DataView(array.buffer);
    }
    catch(err) // Failed to load object
    {
      // Write error to terminal
      console.error("Error:",err);
    }
  };

  // Read the binary content from the file
  reader.readAsArrayBuffer(file);
}

// download(Void): Void
// If the document.file is 
// declared, 
function download()
{
  // downloadBlob(data: Uint8array, filename: String, mimetype: String)
  function downloadBlob(data, filename, mimetype) 
  {
    // downloadURL(data: Uint8array, filename: String): Void
    function downloadURL(data, filename) 
    {
      // Create link element
      const a = document.createElement('a')

      // Point link to the data
      a.href = data

      // Set the download name to the filename
      a.download = filename

      // Add the link to the document
      document.body.appendChild(a)

      // Hide the link
      a.style.display = 'none'

      // Click on the link
      a.click()

      // Remove the link
      a.remove()
    }

    // Create a new blob using the data
    const blob = new Blob([data], {
      // Use given mimetype for data write
      type: mimetype
    });
    
    // Create an object url for the blob data
    const url = window.URL.createObjectURL(blob)
    
    // Download the file
    downloadURL(url, filename)
    
    // Set a download timeout before the url is revoked
    setTimeout(() => window.URL.revokeObjectURL(url), 1000)
  }

  // If a car has been uploaded
  if (document.file.buffer)
  {
    // Get the UINT8 array, convert to blob data and download the file
    downloadBlob(
      document.file.buffer, // Binary Values
      document.file.filename, // Filename of the uploaded file
      'application/octet-stream' // MIMETYPE for Binary Files
    );
  }
  else // No car uploaded
  {
    // Do nothing
  }
}