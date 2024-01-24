import React, { useState } from 'react';
import ImageUploader from 'react-image-upload';
import 'react-image-upload/dist/index.css';
import UploadIcon from '../../svgs/Dashboard/UploadIcon';

const ImgUploader = () => {
	const [imageLoaded, setImageLoaded] = useState(false);
	const [uploadText, setUploadText] = useState('+ Upload Image');

	// This function is run after the image is gotten from the file input
	function getImageFileObject(imageFile) {
		console.log({ imageFile });
		setImageLoaded(true);
		setUploadText('Change Image');
	}

	function runAfterImageDelete(file) {
		console.log({ file });
	}
	return (
		<ImageUploader
			onFileAdded={(img) => getImageFileObject(img)}
			onFileRemoved={(img) => runAfterImageDelete(img)}
			style={{ height: 175, width: 185, background: 'rgba(0,0,0,0.1)', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', borderRadius: '10px' }}
			deleteIcon={<div></div>}
			uploadIcon={
				<span className={`flex flex-col items-center justify-center text-xs w-[185px] ${imageLoaded ? 'text-primary-white-light bg-[rgba(0,0,0,0.3)]' : 'text-primary-button-bg'} font-semibold  h-[175px] bg-cntain`}>
					<UploadIcon color={imageLoaded ? '#fff' : '#633cff'} />
					{uploadText}
				</span>
			}
		/>
	);
};

export default ImgUploader;