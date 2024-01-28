// Set your cloud name and unsigned upload preset here:
const CLOUD_NAME = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
const UPLOAD_PRESET = process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET;

export const uploadFile = async (file) => {
	// check if a file is selected for upload and return an error if not
	if (!file) {
		console.error('Please select a file.');
		return;
	}
	// set the initial cloud response to null
	let cloudResponse = null;

	// generate a unique upload id
	const uniqueUploadId = generateUniqueUploadId();

	// set the chunk size to 1MB
	const chunkSize = 1 * 1024 * 1024;

	// get the total number of chunks
	const totalChunks = Math.ceil(file.size / chunkSize);

	// set the current chunk to 0
	let currentChunk = 0;

	// a function to upload a chunk of the file
	const uploadChunk = async (start, end) => {
		// create a new form data object
		const formData = new FormData();

		// append the file, cloud name and upload preset to the form data
		formData.append('file', file.slice(start, end));
		formData.append('cloud_name', CLOUD_NAME);
		formData.append('upload_preset', UPLOAD_PRESET);

		// set the content range header
		const contentRange = `bytes ${start}-${end - 1}/${file.size}`;

		try {
			// make a request to cloudinary to upload the chunk
			const response = await fetch(`https://api.cloudinary.com/v1_1/${CLOUD_NAME}/auto/upload`, {
				method: 'POST',
				body: formData,
				headers: {
					'X-Unique-Upload-Id': uniqueUploadId,
					'Content-Range': contentRange,
				},
			});

			// throw an error if the response is not ok
			if (!response.ok) {
				throw new Error('Chunk upload failed.');
			}

			// increment the current chunk
			currentChunk++;

			// check if there are more chunks to upload
			if (currentChunk < totalChunks) {
				// if there are more chunks, upload the next chunk
				const nextStart = currentChunk * chunkSize;
				// get the next end
				const nextEnd = Math.min(nextStart + chunkSize, file.size);
				// call the uploadChunk function recursively
				uploadChunk(nextStart, nextEnd);
			} else {
				// if there are no more chunks, set the uploading state to false
				const fetchResponse = await response.json();
				// set the cloud response to the fetch response
				cloudResponse = fetchResponse;
				return cloudResponse;
			}
		} catch (error) {
			console.error('Error uploading chunk:', error);
			setUploading(false);
		}
	};

	const start = 0;
	// get the end of the first chunk
	const end = Math.min(chunkSize, file.size);
	// call the uploadChunk function
	const result = await uploadChunk(start, end);
	// return the result
	return result;
};

const generateUniqueUploadId = () => {
	return `uqid-${Date.now()}`;
};
