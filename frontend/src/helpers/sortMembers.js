export const sortMembers = (str) => {
    return str.split(',').sort((a,b) => a-b).join(',');
}