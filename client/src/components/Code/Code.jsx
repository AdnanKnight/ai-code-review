import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import Editor from 'react-simple-code-editor';
import Prism from 'prismjs';
import { marked } from 'marked';
import hljs from 'highlight.js';
import 'prismjs/themes/prism-tomorrow.css';
import 'highlight.js/styles/github-dark.css';
import './Code.css';

const dummyCode = `function sum(a, b) {
  return a + b;
}`;

marked.setOptions({
    highlight: function (code, lang) {
        return hljs.highlightAuto(code, [lang]).value;
    },
});

const Code = () => {
    const [loading, setLoading] = useState(false);
    const [left, setLeft] = useState(dummyCode);
    const [right, setRight] = useState('');
    const markdownRef = useRef(null);

    const submitHandler = async (e) => {
        e.preventDefault();
        setLoading(true);
        setRight('');
        try {
            const { data } = await axios.post('http://localhost:3000/ai/get-review', {
                code: left,
            });
            setRight(marked.parse(data));
        } catch (err) {
            console.error('Review failed:', err.message);
            setRight('<p>Error generating review.</p>');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (markdownRef.current) {
            const blocks = markdownRef.current.querySelectorAll('pre code');
            blocks.forEach((block) => {
                hljs.highlightElement(block);
            });
        }
    }, [right]);

    return (
        <div className="code-container">
            <form className="left" onSubmit={submitHandler}>
                <Editor
                    className="code-editor"
                    value={left}
                    onValueChange={setLeft}
                    highlight={(code) => Prism.highlight(code, Prism.languages.js, 'javascript')}
                    padding={25}
                    spellCheck={false}
                />
                <button type="submit">Review code</button>
            </form>

            <div className="right">
                {loading ? (
                    <p className="loading-text">Generating review…</p>
                ) : (
                    <div
                        ref={markdownRef}
                        className="markdown-preview"
                        dangerouslySetInnerHTML={{ __html: right }}
                    />
                )}
                <button type="button">Use code</button>
            </div>
        </div>
    );
};

export default Code;
