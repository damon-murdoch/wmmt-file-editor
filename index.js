function handleUpload()
{
    // Get the file content from the provided element
    let file = document.getElementById('i_file').files[0];

    // If a file has been uploaded
    if (file !== undefined)
    {
      // Get the file contents
      upload(file);
  
      // Success
      return true;
    }
    else // No file uploaded
    {
      // Failure
      return false;
    }
}

function handleDownload()
{
  // Call the download function
  download();
}