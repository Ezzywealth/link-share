import React, { useEffect, useState } from 'react';
import ImgUploader from './ImageUploader';
import DetailsComponent from './DetailsComponent';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { updateUser } from '../../../Redux/slices/userSlice';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import { uploadFile } from '../../../utils/cloudinaryUploadHook';
import SaveSpinner from '../../LoadingSpinners/SaveSpinner';

const ProfilePage = () => {
	const { updateUserLoading, user } = useSelector((state) => state.user);
	const [imageUploading, setImageUploading] = useState(false);
	const [activateSave, setActivateSave] = useState(false);
	const [imageFormData, setImageFormData] = useState(null);
	const [file, setFile] = useState(null);
	const { data: session } = useSession();
	const {
		register,
		watch,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm();
	const dispatch = useDispatch();

	// a custom hook to watch all fields in the form for changes and set the activateSave state to true
	const watchAllFields = watch();

	// watch for changes in the form and set the activateSave state to true
	useEffect(() => {
		if (watchAllFields.firstName || watchAllFields.lastName || file) {
			setActivateSave(true);
		} else if (!watchAllFields.firstName && !watchAllFields.lastName) {
			setActivateSave(false);
		}
	}, [watchAllFields]);

	// a function to dispatch the updateUser action with the form data
	const handleUpdate = async (data) => {
		let imageUrl = '';

		// handle a case where there is a profile image to be updated
		if (file) {
			setImageUploading(true);
			const result = await uploadFile(file);

			// get the image url from the response and set the imageUploading state to false
			imageUrl = result?.secure_url;
			setFile(null);
			setImageUploading(false);
		}
		const resp = await dispatch(updateUser({ ...data, email: session?.user.email, image: imageUrl }));

		// if the response is successful, reset the form
		if (resp.type === 'user/updateUser/fulfilled') {
			reset();
		}
	};

	return (
		<form onSubmit={handleSubmit(handleUpdate)} className='col-span-7 lg:col-span-4 bg-primary-white-light rounded-md p-4 md:p-6  overflow-auto'>
			<div>
				<h2 className='text-dark-grey-color-light font-bold text-2xl mb-2'>Profile Details</h2>
				<p className='text-primary-text-color-light mb-6'>Add your details to create a personal touch to your profile.</p>
			</div>
			<article className='flex flex-col md:flex-row items-center justify-between text-primary-text-color-light  bg-light-Grey p-6 gap-8'>
				<p className='w-auto'>Profile Picture</p>

				<div className='flex flex-col md:flex-row items-center gap-6'>
					<div className=' h-[150px] w-[150px] flex flex-col relative rounded-lg justify-center items-center'>
						<div className={`absolute w-full  top-0 h-[150px] left-0 ${user?.image && !file ? 'block' : 'hidden'}`}>
							<Image src={user?.image} layout='fill' alt='profile-picture' className='rounded-lg' />
						</div>
						<ImgUploader setImageFormData={setImageFormData} setFile={setFile} file={file} user={user} />
					</div>
					<p className='text-xs w-full'>
						Image must be below 1024x1024px. <br /> Use PNG or JPG format.
					</p>
				</div>
			</article>
			<article>
				<DetailsComponent register={register} updateUserLoading={updateUserLoading} email={session?.user.email} />
			</article>
			<hr />
			<section className='flex justify-end pt-4 w-full'>
				<button disabled={updateUserLoading || !activateSave} type='submit' className={`bg-primary-button-bg w-full md:w-[100px] text-white px-6 py-2 rounded-md flex justify-center items-center ${activateSave ? 'opacity-100' : 'opacity-25'}`}>
					{updateUserLoading || imageUploading ? <SaveSpinner /> : 'Save'}
				</button>
			</section>
		</form>
	);
};

export default ProfilePage;
