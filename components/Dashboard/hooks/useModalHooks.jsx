import React from 'react';
import CopylinkAlert from '../../AlertModals/CopylinkAlert';

const useModalHooks = () => {
	const showCopyModal = () => {
		return <CopylinkAlert />;
	};
	return {
		showCopyModal,
	};
};

export default useModalHooks;
