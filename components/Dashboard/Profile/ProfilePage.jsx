import React, { useEffect, useState } from 'react';
import ImgUploader from './ImageUploader';
import DetailsComponent from './DetailsComponent';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { updateUser } from '../../../Redux/slices/userSlice';
import { RotatingLines } from 'react-loader-spinner';
import { useSession } from 'next-auth/react';
import Image from 'next/image';

const ProfilePage = () => {
	const { updateUserLoading } = useSelector((state) => state.user);
	const [activateSave, setActivateSave] = useState(false);
	const [imageUrl, setImageUrl] = useState('');
	const { data: session } = useSession();
	console.log(session);
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
		if (watchAllFields.firstName || watchAllFields.lastName) {
			setActivateSave(true);
		} else if (!watchAllFields.firstName && !watchAllFields.lastName) {
			setActivateSave(false);
		}
	}, [watchAllFields]);

	// a function to dispatch the updateUser action with the form data
	const handleUpdate = async (data) => {
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
					<div className='bg-light-Purple flex flex-col rounded-lg justify-center items-center  w-auto'>
						{imageUrl ? (
							<div className=''>
								<Image src={imageUrl} height={150} width={150} alt='profile picture' className='rounded-lg h-[200px] w-[200px]' />
							</div>
						) : (
							<ImgUploader setImageUrl={setImageUrl} />
						)}
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
					{updateUserLoading ? (
						<div>
							<RotatingLines visible={true} height='25' width='25' color='#fff' strokeWidth='5' animationDuration='0.75' ariaLabel='rotating-lines-loading' wrapperStyle={{}} wrapperClass='' />{' '}
						</div>
					) : (
						'Save'
					)}
				</button>
			</section>
		</form>
	);
};

export default ProfilePage;
