import React from 'react';

const FacebookIcon = ({ color = '#737373' }) => {
	return (
		<svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 16 16' fill='none'>
			<g clipPath='url(#clip0_86_26141)'>
				<path d='M16 8.04902C16 3.60302 12.418 -0.000976562 8.00005 -0.000976562C3.58005 2.34375e-05 -0.00195312 3.60302 -0.00195312 8.05002C-0.00195312 12.067 2.92405 15.397 6.74805 16.001V10.376H4.71805V8.05002H6.75005V6.27502C6.75005 4.25802 7.94505 3.14402 9.77205 3.14402C10.648 3.14402 11.563 3.30102 11.563 3.30102V5.28102H10.554C9.56105 5.28102 9.25105 5.90202 9.25105 6.53902V8.04902H11.469L11.115 10.375H9.25005V16C13.074 15.396 16 12.066 16 8.04902Z' fill={color} />
			</g>
			<defs>
				<clipPath id='clip0_86_26141'>
					<rect width='16' height='16' fill='white' />
				</clipPath>
			</defs>
		</svg>
	);
};

export default FacebookIcon;
