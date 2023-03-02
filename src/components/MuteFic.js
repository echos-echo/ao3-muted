import React, { useState, useEffect } from "react";
import styles from '@/styles/Home.module.css'

export const MuteFic = () => {
  const [links, setLinks] = useState(['']);     // array of links with tags to filter
  const [ficsCSS, setFicsCSS] = useState(``); // the formatted CSS

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
   * @name getFicId
   * gets the id of a fic given a link to the fic
   * 
   * @param link      string: the link of the fic to mute 
   * @returns         string: the formatted CSS to mute the fic
   */
  const getFicID = link => {
    if (link.length < 1) {
      return;
    }
    // scrapes the url from where the work id begins
    let subpages = link.slice(link.indexOf('works/') + 6);
    // checking the end index of the work id in case there are more paths i.e. chapters
    let endIndex = subpages.indexOf('/');
    // if there was no other paths, then the work id was the end of the url
    if (endIndex === -1) endIndex = subpages.length;
    let id = subpages.slice(0, endIndex);
    // format the id into a CSS class selector and return it
    return `.work-${id}`;
  };

  const generateListBlockedFics = links => {
    return links.map(link => getFicID(link)).join(', \n') + ` { display: none !important; }`;
  }

  const handleSubmitForm = e => {
    e.preventDefault();
    setFicsCSS(generateListBlockedFics(links));
  }

  useEffect(() => {
    let text = document.getElementById('mutedFicsCSS').innerHTML;
    const copyContent = async () => {
      try {
        await navigator.clipboard.writeText(text);
        alert('Content copied to clipboard');
      } catch (err) {
        console.error('Failed to copy: ', err);
      }
    }
    if (text.length > 0) copyContent();
  }, [ficsCSS]);

  return (
    <div className={styles.center}>
        <div>
          <h4 className={styles.centerHeader}>paste link(s) for the <i>fic(s)</i> you&apos;d like muted</h4>
          <form onSubmit={handleSubmitForm} className={styles.center}>
            {links.map((link, ind) => <input className={styles.addLink} key={ind} id={ind} type='text' value={link} onChange={handleChange}/>)}
            <div className={styles.buttons}>
              <input onClick={addLine} type='button' value='add another link +'/>
              <input type="submit"/>
            </div>
          </form>
        </div>
        <div>
          <h4 className={styles.centerHeader}>here is your CSS:</h4>
          <p id="mutedFicsCSS" className={styles.code}>{ficsCSS}</p>
        </div>
      </div>
  )
}