export type Action = (...param: any) => { type: string };

export const EMPTY_ACTION = () => ({
	type: '',
});
