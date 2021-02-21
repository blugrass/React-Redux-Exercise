
//The getAll Tags api sometimes returns tags with hidden characters, this will sanitize the tags and remove any hidden characters, then return a new array of tags.
const sanitizeTags = (tags) => {
    let regex = new RegExp('[^\x20-\x7E]', 'g');
    let sanitizedTags = tags.map((item, index) => {
        const newTag = item.replace(regex, '');
        return newTag.length > 0 ? newTag : null;
      })

    return sanitizedTags.filter(x => x !== null);
}


export { sanitizeTags }