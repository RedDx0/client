function playVersion(version) {
    // Define the folder paths for each version
    const versionPaths = {
        '1.12': '1.12/', // Path to the 1.12 folder
        '1.8': '1.8/',   // Path to the 1.8 folder (if it exists)
        '1.5': '1.5/'    // Path to the 1.5 folder (if it exists)
    };

    const path = versionPaths[version];
    if (path) {
        window.location.href = path; // Redirect to the specified folder
    } else {
        alert('Version not available.');
    }
}
