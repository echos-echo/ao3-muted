import React, { useState, useEffect } from "react";
import styles from '@/styles/Home.module.css';
import Image from "next/image";
import compatability from '../../public/images/compatibility.png';
import cssStep1 from '../../public/images/css-step1.png';
import cssStep2 from '../../public/images/css-step2.png';
import cssStep3 from '../../public/images/css-step3.png';
import tagLink from '../../public/images/tagLink.png';

export const HowTo = () => {
  return (
      <div className={styles.center}>
        <div className={styles.howToDiv}>
          <h3 className={styles.centerHeader}>Important Things to Note [PLEASE READ!!!]</h3>
          <ul className={styles.instructions}>
            <li>
              This function does not fully block tags or fics. It will permamently keep fics with the tags from showing
              up in search results ONLY (so long as ao3&apos;s code does not drastically change), but if you are sent a link to a fic with the tag you will still be able
              to view/read it; the same applies to any fics you mute.
            </li>
            <li>
              Unfortunately you cannot upload a link to multiple tags at once (i.e. - the link for a tag
              with other tags in the filter options). You must grab the links to tags one at a time and
              enter them individually into the generator.
            </li>
            <li>
              Muting tags will not affect works that you have already bookmarked.
              (It should not be, and if it does, please let me know)
            </li>
            <li>
              The code to mute tags is compatible across most browsers, but not all. Please refer to the chart
              below to see if your browser and browser version will allow you to use this muting function.<br/>
              <Image src={compatability} width='' height='' alt='' className={styles.horizontalImages}/>
            </li>
          </ul>
        </div>
        <div className={styles.howToDiv}>
          <h3 className={styles.centerHeader}>How to Mute Tags/Specific Fics</h3>
          <ul className={styles.instructions}>
            <li>
              If you are here to mute tags, get the link of the tag by going to its page and grabbing the URL<br/>
              <Image src={tagLink} width='' height='' alt='' className={styles.horizontalImages}/><br/>
              Or you can just right click the tag you see on a work and copy the link from there
            </li>
            <li>
              If you are here to mute specific fics, it&apos;s as easy as grabbing the link to the fic.
            </li>
            <li>
              With your link (whether it be for a tag or a fic), put it into the respective generator.<br/>
              *Please do NOT put the links into the wrong code generator as this app currently does not support cross-link code generation*
            </li>
            <li>
              After submitting your links to the generator, there should have been a notification that the code has
              automatically been copied. If you do not get this alert or your code has not been copied, just make sure
              to grab it from the output shown in the red box.
            </li>
            <li>
              With this code, go onto your ao3 account profile and there should be a tab that says &apos;Skins&apos;.<br/>
              <Image src={cssStep1} width='' height='' alt='' className={styles.verticalImages}/><br/>
              Once you are there, find the button that says &apos;Create Site Skin&apos;.<br/>
              <Image src={cssStep2} width='' height='' alt='' className={styles.horizontalImages}/>
            </li>
            <li>
              That should bring you to this page (if it doesn&apos;t, find the button that says Custom CSS),
              where you can fill it out like the image below.<br/>
              <Image src={cssStep3} width='' height='' alt='' className={styles.horizontalImages}/>
            </li>
            <li>
              And now those tags/fics should be muted and not showing up in your search results anymore!
            </li>
          </ul>
        </div>
      </div>
  )
}