import { EventBuilder } from 'structures';

export default new EventBuilder('ready', true).setCallback(async client => {
	console.log(`Logged in as ${client.user!.tag}`);
});
