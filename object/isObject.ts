export default function isObject(object: any) {
	return typeof object === 'object' && !(object instanceof Array);
}