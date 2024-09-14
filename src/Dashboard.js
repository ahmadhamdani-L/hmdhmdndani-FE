import React, { useState } from 'react';
import axios from 'axios';

export default function Dashboard() {
    const [selectedFile, setSelectedFile] = useState(null);
    const [directory, setDirectory] = useState('');

    // Fungsi untuk menangani perubahan input file
    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
    };

    // Fungsi untuk menangani submit form
    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!selectedFile) {
            alert("Please select a file to upload.");
            return;
        }

        // Membuat form data
        const formData = new FormData();
        formData.append('file', selectedFile);
        formData.append('directory', directory);

        try {
            // Mengirimkan file ke backend
            const response = await axios.post('http://localhost:5000/upload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });

            alert('File uploaded successfully');
        } catch (error) {
            console.error("Error uploading file:", error);
            alert('Error uploading file');
        }
    };

    return (
        <div className="dashboard">
            <h2>Upload File</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Directory:</label>
                    <input
                        type="text"
                        value={directory}
                        onChange={(e) => setDirectory(e.target.value)}
                        placeholder="Enter directory name"
                    />
                </div>
                <div>
                    <label>Choose file:</label>
                    <input type="file" onChange={handleFileChange} />
                </div>
                <button type="submit">Upload</button>
            </form>
        </div>
    );
}
