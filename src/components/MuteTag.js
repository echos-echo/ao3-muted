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

  return (
      <div className={styles.center}>
        <div>
          <h4>paste link(s) for the tag(s) you&apos;d like muted</h4>
          <form>
            {links.map((link, ind) => <input className={styles.addLink} key={ind} id={ind} type='text' value={link} onChange={handleChange}/>)}
            <button onClick={addLine}>add another link +</button>
          </form>
        </div>
      </div>
  )
}