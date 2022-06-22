// Tempoprary global storage for the buffer
document.file = {

  // Name of the file
  filename: null, 
  
  // Extension of the file
  extension: null, 

  // Size of the file uploaded
  size: null,

  // Type of the file uploaded
  type: null,

  // File contents buffer
  data: null
}

// If the data file is loaded, get the value at the 
// given offset in the file (default to little endian)
function getValueAt(offset, bytes, littleEndian = true)
{
  // If the document.data is defined
  if (document.file.data !== null)
  {
    switch(bytes)
    {
      case 1: // 8 bits
        // Return the uint32 value at the given offset and endianness
        return document.file.data.getUint8(offset, littleEndian);
      case 2: // 16 bits
        // Return the uint32 value at the given offset and endianness
        return document.file.data.getUint16(offset, littleEndian);
      case 4: // 32 bits
        // Return the uint32 value at the given offset and endianness
        return document.file.data.getUint32(offset, littleEndian);
      default:
        throw "InvalidByteCountException";
    }
  }
  else // Data not defined
  {
    // Null return
    return null;
  }
}

// If the data file is loaded, set the value at the 
// given offset in the file (default to little endian)
function setValueAt(offset, value, bytes, littleEndian = true)
{
  // If the document.data is defined
  if (document.file.data !== null)
  {
    switch(bytes)
    {
      case 1: // 8 bits
        // Set the uint32 value at the given offset and endianness
        document.file.data.setUint8(offset, value, littleEndian);
        break;
      case 2: // 16 bits
        // Set the uint32 value at the given offset and endianness
        document.file.data.setUint16(offset, value, littleEndian);
        break;
      case 4: // 32 bits
        // Set the uint32 value at the given offset and endianness
        document.file.data.setUint32(offset, value, littleEndian);
        break;
      default:
        throw "InvalidByteCountException";
    }
  }
}

// upload(file: File): Void
// Given a file, loads the contents
// of the file into the document.file 
// variable.
function upload(file, callback)
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

      // If the file extension is 'sav'
      if (document.file.extension == 'sav')
      {
        // Use the filename to determine filetype
        switch(document.file.filename)
        {
          // Settings
          case 'opensettings.sav':
            document.file.type = 'settings';
            break;

          // Story
          case 'openprogress.sav':
            document.file.type = 'story';
            break;

          // Mileage
          case 'openmileage.sav':
            document.file.type = 'miles';
            break;

          // Versus
          case 'openversus.sav':
            document.file.type = 'versus';
            break;
          default: // Unknown filename
            throw ("UnknownFileNameException: " + document.file.filename);
        }
      }
      else // File extension is not 'sav'
      {
        // Use the extension to determine filetype
        switch(document.file.extension)
        {
          // Car File
          case 'car': 
          document.file.type = 'car';
            break;
          // Custom GT Wing
          case 'gtwing': 
            document.file.type = 'gtwing';
            break;
          // Mini Sticker
          case 'ministicker':
            document.file.type = 'ministicker';
            break;
          default: // Unknown file extension
            throw ("UnknownExtensionException: " + document.file.extension);
        }
      }

      // Set the file size to the byte length of the file
      document.file.size = document.file.data.byteLength;

      // Run the callback function
      callback(null);
    }
    catch(err) // Failed to load object
    {
      // Pass the error to the callback
      callback(err);
    }
  };

  // Read the binary content from the file
  reader.readAsArrayBuffer(file);
}

// download(Void): Void
// If the document.file is 
// declared, 
function download(data = null, filename = null)
{
  // If data is not provided
  if (data == null)
  {
    // Use the document file data
    data = document.file.data;
  }

  // Filename is not provided
  if (filename == null)
  {
    // Use the document file filename
    filename = document.file.filename
  }

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
  if (data)
  {
    // Get the UINT8 array, convert to blob data and download the file
    downloadBlob(
      data, // Binary Values
      filename, // Filename of the uploaded file
      'application/octet-stream' // MIMETYPE for Binary Files
    );
  }
  else // No car uploaded
  {
    // Do nothing
    console.log("No data to download: Skipping ...");
  }
}