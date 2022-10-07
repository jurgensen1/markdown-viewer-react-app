import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
    selectCount,
    updateMarkdown
} from './markdownSlice';
import styles from './Markdown.module.css';
import { marked } from 'marked';
import DOMPurify from 'dompurify';


marked.setOptions({
    breaks: true,
    gfm: true
  });

export function Markdown() {
    const count = useSelector(selectCount);
    const dispatch = useDispatch();

    return (
        <div>
            <div id={styles.header}>
            <h1>Markdown Editor With Realtime Preview</h1>
            <p>Edit the markdown text in the editor and watch it render as HTML in the previewer below.</p>
            </div>
            <div id={styles.markdownTextWrapper}>
                <div className={styles.toolbar}>Editor</div>
                <textarea
                    id="editor"
                    name="editor"
                    rows="30"
                    cols="127"
                    value={count}
                    onChange={(e) => dispatch(updateMarkdown(e.target.value))}
                >
                </textarea>
            </div>
            <div id={styles.previewerWrapper}>
                <div className={styles.toolbar}>Previewer</div>
                <div
                    id="preview"
                    className={styles.thePreview}
                    dangerouslySetInnerHTML={{
                        __html: DOMPurify.sanitize(marked(count))
                    }}
                />
            </div>
        </div>
    );
}
