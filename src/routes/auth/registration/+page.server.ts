import { authApi, getFlowInitUrl } from '$lib/auth/api';
import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

interface HttpError {
	response?: {
		status: number;
	};
}

export const load: PageServerLoad = async ({ url, request }) => {
	const flow = url.searchParams.get('flow');
	const aal = url.searchParams.get('aal') ?? '';
	const refresh = url.searchParams.get('refresh') ?? '';
	const returnTo = url.searchParams.get('return_to') ?? '';

	const flowUrl = getFlowInitUrl(
		'registration',
		new URLSearchParams({
			aal,
			refresh,
			return_to: returnTo
		})
	);

	if (!flow) {
		throw redirect(303, flowUrl);
	}

	try {
		const { data: flowData } = await authApi.getSelfServiceRegistrationFlow(
			flow,
			request.headers.get('cookie') ?? ''
		);

		console.log('flowData', flowData);

		return {
			flow: flowData
		};
	} catch (err) {
		const error = err as HttpError;

		if (!error.response) {
			throw error;
		}
		if (
			error.response.status === 404 ||
			error.response.status === 410 ||
			error.response.status === 403
		) {
			throw redirect(303, flowUrl);
		}
		throw err;
	}
};