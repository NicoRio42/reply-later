export const messageTypes = {
	sms: 'sms',
	whatsapp: 'whatsapp',
	email: 'email',
	messenger: 'messenger'
} as const;

export type MessageTypesEnum = keyof typeof messageTypes;
