import React from 'react';
import ImageUploader from 'react-image-upload';
import 'react-image-upload/dist/index.css';
import UploadIcon from '../../svgs/Dashboard/UploadIcon';

const ImgUploader = () => {
	function getImageFileObject(imageFile) {
		console.log({ imageFile });
	}

	function runAfterImageDelete(file) {
		console.log({ file });
	}
	return (
		<ImageUploader
			onFileAdded={(img) => getImageFileObject(img)}
			onFileRemoved={(img) => runAfterImageDelete(img)}
			style={{ height: 175, width: 185, background: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', borderRadius: '10px' }}
			deleteIcon={<div></div>}
			uploadIcon={
				<span className='flex flex-col items-center text-xs w-full text-primary-button-bg font-semibold'>
					<UploadIcon />+ Upload Image
				</span>
			}
		/>
	);
};

export default ImgUploader;
