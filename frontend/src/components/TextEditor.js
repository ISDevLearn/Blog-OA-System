import React, { Component } from 'react';

import { useState, useEffect } from 'react';
import {PageHeader, Button, message, Input} from 'antd';
import { marked } from 'marked';
import hljs from 'highlight.js';
import '../css/github-dark.css';
import '../css/textedit.css';
import BlogService from "../service/BlogService";
import {history} from "../utils/history";

const { TextArea } = Input;

const TextEditor = (props) => {
    const username = props.match.params.loginUsername
    const [text, setText] = useState('');
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    useEffect(() => {
        // 配置highlight
        hljs.configure({
            tabReplace: '',
            classPrefix: 'hljs-',
            languages: ['CSS', 'HTML', 'JavaScript', 'Python', 'TypeScript', 'Markdown'],
        });
        // 配置marked
        marked.setOptions({
            renderer: new marked.Renderer(),
            highlight: code => hljs.highlightAuto(code).value,
            gfm: true, //默认为true。 允许 Git Hub标准的markdown.
            tables: true, //默认为true。 允许支持表格语法。该选项要求 gfm 为true。
            breaks: true, //默认为false。 允许回车换行。该选项要求 gfm 为true。
        });
    }, []);

    const postBlog = () => {
      BlogService.postEdit(username, title, description, text).then(
          () => {
              message.success("发布成功！", 1)
          },
          error => {
              const resMessage = (error.response && error.response.data && error.response.data.message)
                  || error.message || error.toString();
              message.error(resMessage, 1)
              console.log(resMessage)
          })
    };

    const onChange1 = (e) => {
        setTitle(e.target.value);
    };

    const onChange2 = (e) => {
        setDescription(e.target.value);
    };

    return (
        <>
            <PageHeader
                className="site-page-header"
                onBack={() => history.goBack()}
                title="编辑博客"
                subTitle="尽情编写你的个人博客吧！"
                extra={[
                    <Button key="取消">取消</Button>,
                    <Button key="暂存">暂存</Button>,
                    <Button key="提交" type="primary" onClick={postBlog}>
                        提交
                    </Button>,
                ]}
            />

            <Input showCount maxLength={20} onChange={onChange1} placeholder="请输入标题"/>
            <br />
            <br />
            <TextArea showCount maxLength={100} onChange={onChange2} placeholder="请输入简介"/>

            <br />
            <br />

            <div className="marked">
                <div
                    className="input-region markdownStyle"
                    contentEditable="plaintext-only"
                    // suppressContentEditableWarning
                    onInput={e => {
                        setText(e.target.innerText);
                    }}
                >
                </div>

                <div
                    className="show-region markdownStyle"
                    dangerouslySetInnerHTML={{
                        __html: marked(text).replace(/<pre>/g, "<pre id='hljs'>"),
                    }}
                >
                </div>

            </div>
        </>
    );
};

export default TextEditor;