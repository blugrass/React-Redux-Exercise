import React, {useEffect, useState} from 'react';
import agent from '../../agent';
import { sanitizeTags } from '../../helpers';

const Tags = props => {
  const [tags, setTags] = useState(null);

  useEffect(() => {
    if(props.tags !== undefined){
      // let regex = new RegExp('[^\x20-\x7E]', 'g');
      // let newTags = props.tags.map((item, index) => {
      //   return item.replace(regex, '')
      // })
      setTags(sanitizeTags(props.tags));
      // let newTags = props.tags.replace(regex, " "‌‌‌‌);
      // console.log(props.tags.length)
      // for(let i = 0; i < props.tags.length; i++){
      //   let newString = props.tags[i];
      //   console.log(/[^\x20-\x7E]/g.test(newString));
      // }
      // console.log(JSON.stringify(props.tags))
    }
    // props.tags != undefined && setTags(props.tags.filter(x => /[^\x20-\x7E]/g.test(x)));
    // props.tags != undefined && console.log(JSON.stringify(props.tags.filter(x => x.length > 0)))
  }, [props.tags])


  if (tags) {
    return (
      <div className="tag-list">
        {
          tags.map(tag => {
            const handleClick = ev => {
              ev.preventDefault();
              props.onClickTag(tag, page => agent.Articles.byTag(tag, page), agent.Articles.byTag(tag));
            };

            return (
              <a
                href=""
                className="tag-default tag-pill"
                key={tag}
                onClick={handleClick}>
                {tag}
              </a>
            );
          })
        }
      </div>
    );
  } else {
    return (
      <div>Loading Tags...</div>
    );
  }
};

export default Tags;
