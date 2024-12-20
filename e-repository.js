document.addEventListener('DOMContentLoaded', function () {
    const fileInput = document.getElementById('fileInput');
    const uploadButton = document.getElementById('uploadButton');
    const filesContainer = document.getElementById('filesContainer');

    // Retrieve uploaded files from localStorage on page load
    let uploadedFiles = JSON.parse(localStorage.getItem('uploadedFiles')) || [];

    // Function to display all uploaded files
    function displayFiles() {
        filesContainer.innerHTML = ''; // Clear existing list
        uploadedFiles.forEach((fileData, index) => {
            const fileItem = document.createElement('li');
            const fileName = document.createElement('span');
            fileName.textContent = fileData.name;

            // Create download button
            const downloadButton = document.createElement('button');
            downloadButton.textContent = 'Download';
            downloadButton.addEventListener('click', function () {
                downloadFile(fileData);
            });

            // Create delete button
            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete';
            deleteButton.classList.add('btn-delete');
            deleteButton.addEventListener('click', function () {
                deleteFile(index);
            });

            // Append file name, download button, and delete button
            fileItem.appendChild(fileName);
            fileItem.appendChild(downloadButton);
            fileItem.appendChild(deleteButton);
            filesContainer.appendChild(fileItem);
        });
    }

    // Handle file upload
    uploadButton.addEventListener('click', function () {
        const file = fileInput.files[0];
        if (!file) {
            alert('Please select a file to upload.');
            return;
        }

        const reader = new FileReader();
        reader.onload = function (e) {
            const fileData = {
                name: file.name,
                content: e.target.result, // Store file content as Base64
            };
            uploadedFiles.push(fileData);
            localStorage.setItem('uploadedFiles', JSON.stringify(uploadedFiles)); // Save to localStorage
            displayFiles(); // Refresh file list
        };
        reader.readAsDataURL(file); // Convert file to Base64
        fileInput.value = ''; // Reset file input
    });

    // Function to download a file
    function downloadFile(fileData) {
        const link = document.createElement('a');
        link.href = fileData.content; // Use Base64 content
        link.download = fileData.name; // Set file name for download
        link.click();
    }

    // Function to delete a file
    function deleteFile(index) {
        uploadedFiles.splice(index, 1); // Remove file from array
        localStorage.setItem('uploadedFiles', JSON.stringify(uploadedFiles)); // Update localStorage
        displayFiles(); // Refresh file list
    }

    // Display files on page load
    displayFiles();
});
