import React, { useState, useEffect } from "react";
import styles from '@/styles/Home.module.css'

export const MuteTag = () => {
  const [links, setLinks] = useState(['']);     // array of links with tags to filter
  const [tagsCSS, setTagsCSS] = useState(``); // the formatted CSS

  const handleChange = e => {
    const newLinks = [...links];
    newLinks[e.target.id] = e.target.value
    setLinks(newLinks);
  }

  const addLine = e => {
    e.preventDefault();
    const oldLinks = [...links];
    oldLinks.push('');
    setLinks(oldLinks);
  }

  /**
   * @name getTagSelector
   * gets the href of a tag given a link
   * 
   * @param link      string: the link for the page of the tag
   * @returns         string: the formatted CSS to mute the tag
   */
  const getTagSelector = link => {
    let tag = link.slice(link.indexOf('/tags'));
    let cssFormattedTag = `.work.blurb.group:has(a[href^="${tag}"])`;
    return cssFormattedTag;
  }

  const generateListBlockedTags = links => {
    return links.map(link => getTagSelector(link)).join(', \n') + ` { display: none !important; }`;
  }

  const handleSubmitForm = e => {
    e.preventDefault();
    setTagsCSS(generateListBlockedTags(links));
  }

  useEffect(() => {
    let text = document.getElementById('mutedTagsCSS').innerHTML;
    const copyContent = async () => {
      try {
        await navigator.clipboard.writeText(text);
        alert('Content copied to clipboard');
      } catch (err) {
        console.error('Failed to copy: ', err);
      }
    }
    if (text.length > 0) copyContent();
  }, [tagsCSS]);

  return (
      <div className={styles.center}>
        <div>
          <h4>paste link(s) for the tag(s) you&apos;d like muted</h4>
          <form onSubmit={handleSubmitForm}>
            {links.map((link, ind) => <input className={styles.addLink} key={ind} id={ind} type='text' value={link} onChange={handleChange}/>)}
            <button onClick={addLine}>add another link +</button>
            <input type="submit"/>
          </form>
        </div>
        <div>
          <h4>here is your CSS:</h4>
          <p id="mutedTagsCSS">{tagsCSS}</p>
        </div>
      </div>
  )
}