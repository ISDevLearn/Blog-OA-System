import { marked } from 'marked'
import xss from 'xss'
import hljs from "highlight.js";

// 转化md 为html
export const translateMarkdown2html = plainText => {
    const marked_render = new marked.Renderer()
    const isGuardXss = false
    marked_render.old_paragraph = marked_render.paragraph
    // 重写`paragraph()`方法
    marked_render.paragraph = function (text) {
        // isTeXInline - 该文本是否有行内公式
        var isTeXInline = /\$(.*)\$/g.test(text)
        // isTeXLine - 该文本是否有行间公式
        var isTeXLine = /^\$\$(\s*.*\s*)\$\$$/.test(text)

        if (!isTeXLine && isTeXInline) {
            // 如果不是行间公式，但是行内公式，则使用<span class="marked_inline_tex">包裹公式内容，消除$定界符
            text = text.replace(/(\$([^\$]*)\$)+/g, function ($1, $2) {
                // 避免和行内代码冲突
                if ($2.indexOf('<code>') >= 0 || $2.indexOf('</code>') >= 0) {
                    return $2
                } else {
                    return "<span class='marked_inline_tex'>" + $2.replace(/\$/g, '') + '</span>'
                }
            })
        } else {
            // 如果是行间公式，则使用<div class='marked_tex'>包裹公式内容，消除$$定界符
            // 如果不是LaTex公式，则直接返回原文本
            text = isTeXLine ? "<div class='marked_tex'>" + text.replace(/\$/g, '') + '</div>' : text
        }
        // 使用渲染器原有的`paragraph()`方法渲染整段文本
        text = this.old_paragraph(text)
        return text
    }
    // 配置marked.js的渲染器为marked_render，使用highlight.js来自动高亮MarkDown中的代码
    return marked(isGuardXss ? xss(plainText) : plainText, {
        renderer: marked_render,
        pedantic: false,
        gfm: true,
        tables: true,
        breaks: false,
        sanitize: false,
        smartLists: true,
        smartypants: false,
        xhtml: false,
        highlight: function (code) {
            /*eslint no-undef: "off"*/
            return hljs.highlightAuto(code).value
        },
    })
}



