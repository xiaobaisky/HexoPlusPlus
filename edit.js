!(function (e, t) {
  'object' == typeof exports && 'undefined' != typeof module
    ? (module.exports = t ())
    : 'function' == typeof define && define.amd
        ? define (t)
        : ((e = 'undefined' != typeof globalThis
            ? globalThis
            : e || self).marked = t ());
}) (this, function () {
  'use strict';
  function e (e, t) {
    for (var n = 0; n < t.length; n++) {
      var r = t[n];
      (r.enumerable =
        r.enumerable ||
        !1), (r.configurable = !0), 'value' in r && (r.writable = !0), Object.defineProperty (e, r.key, r);
    }
  }
  function t (e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var n = 0, r = new Array (t); n < t; n++) r[n] = e[n];
    return r;
  }
  function n (e, n) {
    var r;
    if ('undefined' != typeof Symbol && null != e[Symbol.iterator])
      return (r = e[Symbol.iterator] ()).next.bind (r);
    if (
      Array.isArray (e) ||
      (r = (function (e, n) {
        if (e) {
          if ('string' == typeof e) return t (e, n);
          var r = Object.prototype.toString.call (e).slice (8, -1);
          return 'Map' ===
            (r = 'Object' === r && e.constructor ? e.constructor.name : r) ||
            'Set' === r
            ? Array.from (e)
            : 'Arguments' === r ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test (r)
                ? t (e, n)
                : void 0;
        }
      }) (e)) ||
      (n && e && 'number' == typeof e.length)
    ) {
      r && (e = r);
      var i = 0;
      return function () {
        return i >= e.length ? {done: !0} : {done: !1, value: e[i++]};
      };
    }
    throw new TypeError (
      'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
    );
  }
  function r (e) {
    return p[e];
  }
  var i,
    s = ((function (e) {
      function t () {
        return {
          baseUrl: null,
          breaks: !1,
          gfm: !0,
          headerIds: !0,
          headerPrefix: '',
          highlight: null,
          langPrefix: 'language-',
          mangle: !0,
          pedantic: !1,
          renderer: null,
          sanitize: !1,
          sanitizer: null,
          silent: !1,
          smartLists: !1,
          smartypants: !1,
          tokenizer: null,
          walkTokens: null,
          xhtml: !1,
        };
      }
      e.exports = {
        defaults: {
          baseUrl: null,
          breaks: !1,
          gfm: !0,
          headerIds: !0,
          headerPrefix: '',
          highlight: null,
          langPrefix: 'language-',
          mangle: !0,
          pedantic: !1,
          renderer: null,
          sanitize: !1,
          sanitizer: null,
          silent: !1,
          smartLists: !1,
          smartypants: !1,
          tokenizer: null,
          walkTokens: null,
          xhtml: !1,
        },
        getDefaults: t,
        changeDefaults: function (t) {
          e.exports.defaults = t;
        },
      };
    }) ((i = {exports: {}})), i.exports),
    a = /[&<>"']/,
    l = /[&<>"']/g,
    o = /[<>"']|&(?!#?\w+;)/,
    c = /[<>"']|&(?!#?\w+;)/g,
    p = {'&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'},
    u = /&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/gi;
  function h (e) {
    return e.replace (u, function (e, t) {
      return 'colon' === (t = t.toLowerCase ())
        ? ':'
        : '#' === t.charAt (0)
            ? 'x' === t.charAt (1)
                ? String.fromCharCode (parseInt (t.substring (2), 16))
                : String.fromCharCode (+t.substring (1))
            : '';
    });
  }
  var d = /(^|[^\[])\^/g,
    g = /[^\w:]/g,
    f = /^$|^[a-z][a-z0-9+.-]*:|^[?#]/i,
    m = {},
    k = /^[^:]+:\/*[^/]*$/,
    b = /^([^:]+:)[\s\S]*$/,
    _ = /^([^:]+:\/*[^/]*)[\s\S]*$/;
  function x (e, t, n) {
    var r = e.length;
    if (0 === r) return '';
    for (var i = 0; i < r; ) {
      var s = e.charAt (r - i - 1);
      if (s !== t || n) {
        if (s === t || !n) break;
        i++;
      } else i++;
    }
    return e.substr (0, r - i);
  }
  var w = function (e, t) {
    if (t) {
      if (a.test (e)) return e.replace (l, r);
    } else if (o.test (e)) return e.replace (c, r);
    return e;
  },
    y = h,
    v = function (e, t) {
      (e = e.source || e), (t = t || '');
      var n = {
        replace: function (t, r) {
          return (r = (r = r.source || r).replace (d, '$1')), (e = e.replace (
            t,
            r
          )), n;
        },
        getRegex: function () {
          return new RegExp (e, t);
        },
      };
      return n;
    },
    $ = {exec: function () {}},
    S = function (e) {
      for (var t, n, r = 1; r < arguments.length; r++)
        for (n in (t = arguments[r]))
          Object.prototype.hasOwnProperty.call (t, n) && (e[n] = t[n]);
      return e;
    },
    O = function (e, t) {
      var n = e
        .replace (/\|/g, function (e, t, n) {
          for (var r = !1, i = t; 0 <= --i && '\\' === n[i]; ) r = !r;
          return r ? '|' : ' |';
        })
        .split (/ \|/),
        r = 0;
      if (n.length > t) n.splice (t);
      else for (; n.length < t; ) n.push ('');
      for (; r < n.length; r++)
        n[r] = n[r].trim ().replace (/\\\|/g, '|');
      return n;
    },
    z = function (e, t) {
      if (-1 === e.indexOf (t[1])) return -1;
      for (var n = e.length, r = 0, i = 0; i < n; i++)
        if ('\\' === e[i]) i++;
        else if (e[i] === t[0]) r++;
        else if (e[i] === t[1] && --r < 0) return i;
      return -1;
    },
    I = s.defaults,
    T = x,
    A = O,
    R = w,
    E = z;
  function C (e, t, n) {
    var r = t.href, i = t.title ? R (t.title) : null;
    t = e[1].replace (/\\([\[\]])/g, '$1');
    return '!' !== e[0].charAt (0)
      ? {type: 'link', raw: n, href: r, title: i, text: t}
      : {type: 'image', raw: n, href: r, title: i, text: R (t)};
  }
  var B = (function () {
    function e (e) {
      this.options = e || I;
    }
    var t = e.prototype;
    return (t.space = function (e) {
      if ((e = this.rules.block.newline.exec (e)))
        return 1 < e[0].length ? {type: 'space', raw: e[0]} : {raw: '\n'};
    }), (t.code = function (e, t) {
      if ((e = this.rules.block.code.exec (e)))
        return (t = t[t.length - 1]) && 'paragraph' === t.type
          ? {raw: e[0], text: e[0].trimRight ()}
          : ((t = e[0].replace (/^ {1,4}/gm, '')), {
              type: 'code',
              raw: e[0],
              codeBlockStyle: 'indented',
              text: this.options.pedantic ? t : T (t, '\n'),
            });
    }), (t.fences = function (e) {
      var t = this.rules.block.fences.exec (e);
      if (t) {
        var n = t[0];
        e = (function (e, t) {
          if (null === (e = e.match (/^(\s+)(?:```)/))) return t;
          var n = e[1];
          return t
            .split ('\n')
            .map (function (e) {
              var t = e.match (/^\s+/);
              return null !== t && t[0].length >= n.length
                ? e.slice (n.length)
                : e;
            })
            .join ('\n');
        }) (n, t[3] || '');
        return {type: 'code', raw: n, lang: t[2] && t[2].trim (), text: e};
      }
    }), (t.heading = function (e) {
      var t = this.rules.block.heading.exec (e);
      if (t) {
        var n = t[2].trim ();
        return /#$/.test (n) &&
          ((e = T (n, '#')), (!this.options.pedantic && e && !/ $/.test (e)) ||
            (n = e.trim ())), {
          type: 'heading',
          raw: t[0],
          depth: t[1].length,
          text: n,
        };
      }
    }), (t.nptable = function (e) {
      if ((e = this.rules.block.nptable.exec (e))) {
        var t = {
          type: 'table',
          header: A (e[1].replace (/^ *| *\| *$/g, '')),
          align: e[2].replace (/^ *|\| *$/g, '').split (/ *\| */),
          cells: e[3] ? e[3].replace (/\n$/, '').split ('\n') : [],
          raw: e[0],
        };
        if (t.header.length === t.align.length) {
          for (var n = t.align.length, r = 0; r < n; r++)
            /^ *-+: *$/.test (t.align[r])
              ? (t.align[r] = 'right')
              : /^ *:-+: *$/.test (t.align[r])
                  ? (t.align[r] = 'center')
                  : /^ *:-+ *$/.test (t.align[r])
                      ? (t.align[r] = 'left')
                      : (t.align[r] = null);
          for ((n = t.cells.length), (r = 0); r < n; r++)
            t.cells[r] = A (t.cells[r], t.header.length);
          return t;
        }
      }
    }), (t.hr = function (e) {
      if ((e = this.rules.block.hr.exec (e))) return {type: 'hr', raw: e[0]};
    }), (t.blockquote = function (e) {
      var t = this.rules.block.blockquote.exec (e);
      if (t)
        return (e = t[0].replace (/^ *> ?/gm, '')), {
          type: 'blockquote',
          raw: t[0],
          text: e,
        };
    }), (t.list = function (e) {
      if ((e = this.rules.block.list.exec (e))) {
        for (
          var t,
            n,
            r,
            i,
            s,
            a = e[0],
            l = e[2],
            o = 1 < l.length,
            c = {
              type: 'list',
              raw: a,
              ordered: o,
              start: o ? +l.slice (0, -1) : '',
              loose: !1,
              items: [],
            },
            p = e[0].match (this.rules.block.item),
            u = !1,
            h = p.length,
            d = this.rules.block.listItemStart.exec (p[0]),
            g = 0;
          g < h;
          g++
        ) {
          if (((a = t = p[g]), g !== h - 1)) {
            if (
              ((r = this.rules.block.listItemStart.exec (p[g + 1])), this
                .options.pedantic
                ? r[1].length > d[1].length
                : r[1].length > d[0].length || 3 < r[1].length)
            ) {
              p.splice (g, 2, p[g] + '\n' + p[g + 1]), g--, h--;
              continue;
            }
            (!this.options.pedantic || this.options.smartLists
              ? r[2][r[2].length - 1] !== l[l.length - 1]
              : o == (1 === r[2].length)) &&
              ((n = p.slice (g + 1).join ('\n')), (c.raw = c.raw.substring (
                0,
                c.raw.length - n.length
              )), (g = h - 1)), (d = r);
          }
          (r = t.length), ~(t = t.replace (
            /^ *([*+-]|\d+[.)]) ?/,
            ''
          )).indexOf ('\n ') &&
            ((r -= t.length), (t = this.options.pedantic
              ? t.replace (/^ {1,4}/gm, '')
              : t.replace (new RegExp ('^ {1,' + r + '}', 'gm'), ''))), (r =
            u || /\n\n(?!\s*$)/.test (t)), g !== h - 1 &&
            ((u = '\n' === t.charAt (t.length - 1)), (r = r || u)), r &&
            (c.loose = !0), this.options.gfm &&
            ((s = void 0), (i = /^\[[ xX]\] /.test (t)) &&
              ((s = ' ' !== t[1]), (t = t.replace (
                /^\[[ xX]\] +/,
                ''
              )))), c.items.push ({
            type: 'list_item',
            raw: a,
            task: i,
            checked: s,
            loose: r,
            text: t,
          });
        }
        return c;
      }
    }), (t.html = function (e) {
      if ((e = this.rules.block.html.exec (e)))
        return {
          type: this.options.sanitize ? 'paragraph' : 'html',
          raw: e[0],
          pre: !this.options.sanitizer &&
            ('pre' === e[1] || 'script' === e[1] || 'style' === e[1]),
          text: this.options.sanitize
            ? this.options.sanitizer ? this.options.sanitizer (e[0]) : R (e[0])
            : e[0],
        };
    }), (t.def = function (e) {
      if ((e = this.rules.block.def.exec (e)))
        return e[3] && (e[3] = e[3].substring (1, e[3].length - 1)), {
          tag: e[1].toLowerCase ().replace (/\s+/g, ' '),
          raw: e[0],
          href: e[2],
          title: e[3],
        };
    }), (t.table = function (e) {
      if ((e = this.rules.block.table.exec (e))) {
        var t = {
          type: 'table',
          header: A (e[1].replace (/^ *| *\| *$/g, '')),
          align: e[2].replace (/^ *|\| *$/g, '').split (/ *\| */),
          cells: e[3] ? e[3].replace (/\n$/, '').split ('\n') : [],
        };
        if (t.header.length === t.align.length) {
          t.raw = e[0];
          for (var n = t.align.length, r = 0; r < n; r++)
            /^ *-+: *$/.test (t.align[r])
              ? (t.align[r] = 'right')
              : /^ *:-+: *$/.test (t.align[r])
                  ? (t.align[r] = 'center')
                  : /^ *:-+ *$/.test (t.align[r])
                      ? (t.align[r] = 'left')
                      : (t.align[r] = null);
          for ((n = t.cells.length), (r = 0); r < n; r++)
            t.cells[r] = A (
              t.cells[r].replace (/^ *\| *| *\| *$/g, ''),
              t.header.length
            );
          return t;
        }
      }
    }), (t.lheading = function (e) {
      if ((e = this.rules.block.lheading.exec (e)))
        return {
          type: 'heading',
          raw: e[0],
          depth: '=' === e[2].charAt (0) ? 1 : 2,
          text: e[1],
        };
    }), (t.paragraph = function (e) {
      if ((e = this.rules.block.paragraph.exec (e)))
        return {
          type: 'paragraph',
          raw: e[0],
          text: '\n' === e[1].charAt (e[1].length - 1)
            ? e[1].slice (0, -1)
            : e[1],
        };
    }), (t.text = function (e, t) {
      if ((e = this.rules.block.text.exec (e)))
        return (t = t[t.length - 1]) && 'text' === t.type
          ? {raw: e[0], text: e[0]}
          : {type: 'text', raw: e[0], text: e[0]};
    }), (t.escape = function (e) {
      if ((e = this.rules.inline.escape.exec (e)))
        return {type: 'escape', raw: e[0], text: R (e[1])};
    }), (t.tag = function (e, t, n) {
      if ((e = this.rules.inline.tag.exec (e)))
        return !t && /^<a /i.test (e[0])
          ? (t = !0)
          : t && /^<\/a>/i.test (e[0]) && (t = !1), !n &&
          /^<(pre|code|kbd|script)(\s|>)/i.test (e[0])
          ? (n = !0)
          : n && /^<\/(pre|code|kbd|script)(\s|>)/i.test (e[0]) && (n = !1), {
          type: this.options.sanitize ? 'text' : 'html',
          raw: e[0],
          inLink: t,
          inRawBlock: n,
          text: this.options.sanitize
            ? this.options.sanitizer ? this.options.sanitizer (e[0]) : R (e[0])
            : e[0],
        };
    }), (t.link = function (e) {
      var t = this.rules.inline.link.exec (e);
      if (t) {
        var n = t[2].trim ();
        if (!this.options.pedantic && /^</.test (n)) {
          if (!/>$/.test (n)) return;
          if (((e = T (n.slice (0, -1), '\\')), (n.length - e.length) % 2 == 0))
            return;
        } else {
          -1 < (i = E (t[2], '()')) &&
            ((s =
              (0 === t[0].indexOf ('!') ? 5 : 4) +
              t[1].length +
              i), (t[2] = t[2].substring (0, i)), (t[0] = t[0]
              .substring (0, s)
              .trim ()), (t[3] = ''));
        }
        var r, i = t[2], s = '';
        return this.options.pedantic
          ? (r = /^([^'"]*[^\s])\s+(['"])(.*)\2/.exec (i)) &&
              ((i = r[1]), (s = r[3]))
          : (s = t[3] ? t[3].slice (1, -1) : ''), (i = i.trim ()), C (
          t,
          {
            href: (i = /^</.test (i)
              ? this.options.pedantic && !/>$/.test (n)
                  ? i.slice (1)
                  : i.slice (1, -1)
              : i) && i.replace (this.rules.inline._escapes, '$1'),
            title: s && s.replace (this.rules.inline._escapes, '$1'),
          },
          t[0]
        );
      }
    }), (t.reflink = function (e, t) {
      if (
        (n = this.rules.inline.reflink.exec (e)) ||
        (n = this.rules.inline.nolink.exec (e))
      ) {
        if (
          (e = t[(e = (n[2] || n[1]).replace (/\s+/g, ' ')).toLowerCase ()]) &&
          e.href
        )
          return C (n, e, n[0]);
        var n = n[0].charAt (0);
        return {type: 'text', raw: n, text: n};
      }
    }), (t.strong = function (e, t, n) {
      void 0 === n && (n = '');
      var r = this.rules.inline.strong.start.exec (e);
      if (
        r &&
        (!r[1] ||
          (r[1] && ('' === n || this.rules.inline.punctuation.exec (n))))
      ) {
        t = t.slice (-1 * e.length);
        var i,
          s = '**' === r[0]
            ? this.rules.inline.strong.endAst
            : this.rules.inline.strong.endUnd;
        for (s.lastIndex = 0; null != (r = s.exec (t)); )
          if (
            (i = this.rules.inline.strong.middle.exec (
              t.slice (0, r.index + 3)
            ))
          )
            return {
              type: 'strong',
              raw: e.slice (0, i[0].length),
              text: e.slice (2, i[0].length - 2),
            };
      }
    }), (t.em = function (e, t, n) {
      void 0 === n && (n = '');
      var r = this.rules.inline.em.start.exec (e);
      if (
        r &&
        (!r[1] ||
          (r[1] && ('' === n || this.rules.inline.punctuation.exec (n))))
      ) {
        t = t.slice (-1 * e.length);
        var i,
          s = '*' === r[0]
            ? this.rules.inline.em.endAst
            : this.rules.inline.em.endUnd;
        for (s.lastIndex = 0; null != (r = s.exec (t)); )
          if ((i = this.rules.inline.em.middle.exec (t.slice (0, r.index + 2))))
            return {
              type: 'em',
              raw: e.slice (0, i[0].length),
              text: e.slice (1, i[0].length - 1),
            };
      }
    }), (t.codespan = function (e) {
      var t = this.rules.inline.code.exec (e);
      if (t) {
        var n = t[2].replace (/\n/g, ' '), r = /[^ ]/.test (n);
        e = /^ /.test (n) && / $/.test (n);
        return r && e && (n = n.substring (1, n.length - 1)), (n = R (n, !0)), {
          type: 'codespan',
          raw: t[0],
          text: n,
        };
      }
    }), (t.br = function (e) {
      if ((e = this.rules.inline.br.exec (e))) return {type: 'br', raw: e[0]};
    }), (t.del = function (e) {
      if ((e = this.rules.inline.del.exec (e)))
        return {type: 'del', raw: e[0], text: e[2]};
    }), (t.autolink = function (e, t) {
      if ((e = this.rules.inline.autolink.exec (e))) {
        var n;
        t = '@' === e[2]
          ? 'mailto:' + (n = R (this.options.mangle ? t (e[1]) : e[1]))
          : (n = R (e[1]));
        return {
          type: 'link',
          raw: e[0],
          text: n,
          href: t,
          tokens: [{type: 'text', raw: n, text: n}],
        };
      }
    }), (t.url = function (e, t) {
      var n, r, i, s;
      if ((n = this.rules.inline.url.exec (e))) {
        if ('@' === n[2])
          i = 'mailto:' + (r = R (this.options.mangle ? t (n[0]) : n[0]));
        else {
          for (
            ;
            (s = n[0]), (n[0] = this.rules.inline._backpedal.exec (
              n[0]
            )[0]), s !== n[0];

          );
          (r = R (n[0])), (i = 'www.' === n[1] ? 'http://' + r : r);
        }
        return {
          type: 'link',
          raw: n[0],
          text: r,
          href: i,
          tokens: [{type: 'text', raw: r, text: r}],
        };
      }
    }), (t.inlineText = function (e, t, n) {
      if ((e = this.rules.inline.text.exec (e)))
        return (n = t
          ? this.options.sanitize
              ? this.options.sanitizer
                  ? this.options.sanitizer (e[0])
                  : R (e[0])
              : e[0]
          : R (this.options.smartypants ? n (e[0]) : e[0])), {
          type: 'text',
          raw: e[0],
          text: n,
        };
    }), e;
  }) ();
  (O = $), (z = v), ($ = S);
  ((v = {
    newline: /^(?: *(?:\n|$))+/,
    code: /^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/,
    fences: /^ {0,3}(`{3,}(?=[^`\n]*\n)|~{3,})([^\n]*)\n(?:|([\s\S]*?)\n)(?: {0,3}\1[~`]* *(?:\n+|$)|$)/,
    hr: /^ {0,3}((?:- *){3,}|(?:_ *){3,}|(?:\* *){3,})(?:\n+|$)/,
    heading: /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,
    blockquote: /^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,
    list: /^( {0,3})(bull) [\s\S]+?(?:hr|def|\n{2,}(?! )(?! {0,3}bull )\n*|\s*$)/,
    html: '^ {0,3}(?:<(script|pre|style)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:\\n{2,}|$)|<(?!script|pre|style)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:\\n{2,}|$)|</(?!script|pre|style)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:\\n{2,}|$))',
    def: /^ {0,3}\[(label)\]: *\n? *<?([^\s>]+)>?(?:(?: +\n? *| *\n *)(title))? *(?:\n+|$)/,
    nptable: O,
    table: O,
    lheading: /^([^\n]+)\n {0,3}(=+|-+) *(?:\n+|$)/,
    _paragraph: /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html| +\n)[^\n]+)*)/,
    text: /^[^\n]+/,
    _label: /(?!\s*\])(?:\\[\[\]]|[^\[\]])+/,
    _title: /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/,
  }).def = z (v.def)
    .replace ('label', v._label)
    .replace ('title', v._title)
    .getRegex ()), (v.bullet = /(?:[*+-]|\d{1,9}[.)])/), (v.item = /^( *)(bull) ?[^\n]*(?:\n(?! *bull ?)[^\n]*)*/), (v.item = z (v.item, 'gm').replace (/bull/g, v.bullet).getRegex ()), (v.listItemStart = z (/^( *)(bull)/).replace ('bull', v.bullet).getRegex ()), (v.list = z (v.list).replace (/bull/g, v.bullet).replace ('hr', '\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))').replace ('def', '\\n+(?=' + v.def.source + ')').getRegex ()), (v._tag = 'address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul'), (v._comment = /<!--(?!-?>)[\s\S]*?(?:-->|$)/), (v.html = z (v.html, 'i').replace ('comment', v._comment).replace ('tag', v._tag).replace ('attribute', / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex ()), (v.paragraph = z (v._paragraph).replace ('hr', v.hr).replace ('heading', ' {0,3}#{1,6} ').replace ('|lheading', '').replace ('blockquote', ' {0,3}>').replace ('fences', ' {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n').replace ('list', ' {0,3}(?:[*+-]|1[.)]) ').replace ('html', '</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|!--)').replace ('tag', v._tag).getRegex ()), (v.blockquote = z (v.blockquote).replace ('paragraph', v.paragraph).getRegex ()), (v.normal = $ ({}, v)), (v.gfm = $ ({}, v.normal, {nptable: '^ *([^|\\n ].*\\|.*)\\n {0,3}([-:]+ *\\|[-| :]*)(?:\\n((?:(?!\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)', table: '^ *\\|(.+)\\n {0,3}\\|?( *[-:]+[-| :]*)(?:\\n *((?:(?!\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)'})), (v.gfm.nptable = z (v.gfm.nptable).replace ('hr', v.hr).replace ('heading', ' {0,3}#{1,6} ').replace ('blockquote', ' {0,3}>').replace ('code', ' {4}[^\\n]').replace ('fences', ' {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n').replace ('list', ' {0,3}(?:[*+-]|1[.)]) ').replace ('html', '</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|!--)').replace ('tag', v._tag).getRegex ()), (v.gfm.table = z (v.gfm.table).replace ('hr', v.hr).replace ('heading', ' {0,3}#{1,6} ').replace ('blockquote', ' {0,3}>').replace ('code', ' {4}[^\\n]').replace ('fences', ' {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n').replace ('list', ' {0,3}(?:[*+-]|1[.)]) ').replace ('html', '</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|!--)').replace ('tag', v._tag).getRegex ()), (v.pedantic = $ ({}, v.normal, {html: z ('^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|\'[^\']*\'|\\s[^\'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))').replace ('comment', v._comment).replace (/tag/g, '(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b').getRegex (), def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/, heading: /^(#{1,6})(.*)(?:\n+|$)/, fences: O, paragraph: z (v.normal._paragraph).replace ('hr', v.hr).replace ('heading', ' *#{1,6} *[^\n]').replace ('lheading', v.lheading).replace ('blockquote', ' {0,3}>').replace ('|fences', '').replace ('|list', '').replace ('|html', '').getRegex ()})), ((O = {escape: /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/, autolink: /^<(scheme:[^\s\x00-\x1f<>]*|email)>/, url: O, tag: '^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>', link: /^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/, reflink: /^!?\[(label)\]\[(?!\s*\])((?:\\[\[\]]?|[^\[\]\\])+)\]/, nolink: /^!?\[(?!\s*\])((?:\[[^\[\]]*\]|\\[\[\]]|[^\[\]])*)\](?:\[\])?/, reflinkSearch: 'reflink|nolink(?!\\()', strong: {start: /^(?:(\*\*(?=[*punctuation]))|\*\*)(?![\s])|__/, middle: /^\*\*(?:(?:(?!overlapSkip)(?:[^*]|\\\*)|overlapSkip)|\*(?:(?!overlapSkip)(?:[^*]|\\\*)|overlapSkip)*?\*)+?\*\*$|^__(?![\s])((?:(?:(?!overlapSkip)(?:[^_]|\\_)|overlapSkip)|_(?:(?!overlapSkip)(?:[^_]|\\_)|overlapSkip)*?_)+?)__$/, endAst: /[^punctuation\s]\*\*(?!\*)|[punctuation]\*\*(?!\*)(?:(?=[punctuation_\s]|$))/, endUnd: /[^\s]__(?!_)(?:(?=[punctuation*\s])|$)/}, em: {start: /^(?:(\*(?=[punctuation]))|\*)(?![*\s])|_/, middle: /^\*(?:(?:(?!overlapSkip)(?:[^*]|\\\*)|overlapSkip)|\*(?:(?!overlapSkip)(?:[^*]|\\\*)|overlapSkip)*?\*)+?\*$|^_(?![_\s])(?:(?:(?!overlapSkip)(?:[^_]|\\_)|overlapSkip)|_(?:(?!overlapSkip)(?:[^_]|\\_)|overlapSkip)*?_)+?_$/, endAst: /[^punctuation\s]\*(?!\*)|[punctuation]\*(?!\*)(?:(?=[punctuation_\s]|$))/, endUnd: /[^\s]_(?!_)(?:(?=[punctuation*\s])|$)/}, code: /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/, br: /^( {2,}|\\)\n(?!\s*$)/, del: O, text: /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*]|\b_|$)|[^ ](?= {2,}\n)))/, punctuation: /^([\s*punctuation])/, _punctuation: '!"#$%&\'()+\\-.,/:;<=>?@\\[\\]`^{|}~'}).punctuation = z (O.punctuation).replace (/punctuation/g, O._punctuation).getRegex ()), (O._blockSkip = '\\[[^\\]]*?\\]\\([^\\)]*?\\)|`[^`]*?`|<[^>]*?>'), (O._overlapSkip = '__[^_]*?__|\\*\\*\\[^\\*\\]*?\\*\\*'), (O._comment = z (v._comment).replace ('(?:--\x3e|$)', '--\x3e').getRegex ()), (O.em.start = z (O.em.start).replace (/punctuation/g, O._punctuation).getRegex ()), (O.em.middle = z (O.em.middle).replace (/punctuation/g, O._punctuation).replace (/overlapSkip/g, O._overlapSkip).getRegex ()), (O.em.endAst = z (O.em.endAst, 'g').replace (/punctuation/g, O._punctuation).getRegex ()), (O.em.endUnd = z (O.em.endUnd, 'g').replace (/punctuation/g, O._punctuation).getRegex ()), (O.strong.start = z (O.strong.start).replace (/punctuation/g, O._punctuation).getRegex ()), (O.strong.middle = z (O.strong.middle).replace (/punctuation/g, O._punctuation).replace (/overlapSkip/g, O._overlapSkip).getRegex ()), (O.strong.endAst = z (O.strong.endAst, 'g').replace (/punctuation/g, O._punctuation).getRegex ()), (O.strong.endUnd = z (O.strong.endUnd, 'g').replace (/punctuation/g, O._punctuation).getRegex ()), (O.blockSkip = z (O._blockSkip, 'g').getRegex ()), (O.overlapSkip = z (O._overlapSkip, 'g').getRegex ()), (O._escapes = /\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/g), (O._scheme = /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/), (O._email = /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/), (O.autolink = z (O.autolink).replace ('scheme', O._scheme).replace ('email', O._email).getRegex ()), (O._attribute = /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/), (O.tag = z (O.tag).replace ('comment', O._comment).replace ('attribute', O._attribute).getRegex ()), (O._label = /(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/), (O._href = /<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/), (O._title = /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/), (O.link = z (O.link).replace ('label', O._label).replace ('href', O._href).replace ('title', O._title).getRegex ()), (O.reflink = z (O.reflink).replace ('label', O._label).getRegex ()), (O.reflinkSearch = z (O.reflinkSearch, 'g').replace ('reflink', O.reflink).replace ('nolink', O.nolink).getRegex ()), (O.normal = $ ({}, O)), (O.pedantic = $ ({}, O.normal, {strong: {start: /^__|\*\*/, middle: /^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/, endAst: /\*\*(?!\*)/g, endUnd: /__(?!_)/g}, em: {start: /^_|\*/, middle: /^()\*(?=\S)([\s\S]*?\S)\*(?!\*)|^_(?=\S)([\s\S]*?\S)_(?!_)/, endAst: /\*(?!\*)/g, endUnd: /_(?!_)/g}, link: z (/^!?\[(label)\]\((.*?)\)/).replace ('label', O._label).getRegex (), reflink: z (/^!?\[(label)\]\s*\[([^\]]*)\]/).replace ('label', O._label).getRegex ()})), (O.gfm = $ ({}, O.normal, {escape: z (O.escape).replace ('])', '~|])').getRegex (), _extended_email: /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/, url: /^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/, _backpedal: /(?:[^?!.,:;*_~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_~)]+(?!$))+/, del: /^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/, text: /^([`~]+|[^`~])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*~]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@))|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@))/})), (O.gfm.url = z (O.gfm.url, 'i').replace ('email', O.gfm._extended_email).getRegex ()), (O.breaks = $ ({}, O.gfm, {br: z (O.br).replace ('{2,}', '*').getRegex (), text: z (O.gfm.text).replace ('\\b_', '\\b_| {2,}\\n').replace (/\{2,\}/g, '*').getRegex ()}));
  O = {block: v, inline: O};
  var j = s.defaults,
    L = O.block,
    q = O.inline,
    N = function (e, t) {
      if (t < 1) return '';
      for (var n = ''; 1 < t; )
        1 & t && (n += e), (t >>= 1), (e += e);
      return n + e;
    };
  function H (e) {
    return e
      .replace (/---/g, '—')
      .replace (/--/g, '–')
      .replace (/(^|[-\u2014/(\[{"\s])'/g, '$1‘')
      .replace (/'/g, '’')
      .replace (/(^|[-\u2014/(\[{\u2018\s])"/g, '$1“')
      .replace (/"/g, '”')
      .replace (/\.{3}/g, '…');
  }
  function P (e) {
    for (
      var t, n = '', r = e.length, i = 0;
      i < r;
      i++
    ) (t = e.charCodeAt (i)), (n += '&#' + (t = 0.5 < Math.random () ? 'x' + t.toString (16) : t) + ';');
    return n;
  }
  var M = (function () {
    function t (e) {
      (this.tokens = []), (this.tokens.links = Object.create (
        null
      )), (this.options = e || j), (this.options.tokenizer =
        this.options.tokenizer ||
        new B ()), (this.tokenizer = this.options.tokenizer), (this.tokenizer.options = this.options), (e = {
        block: L.normal,
        inline: q.normal,
      }), this.options.pedantic
        ? ((e.block = L.pedantic), (e.inline = q.pedantic))
        : this.options.gfm &&
            ((e.block = L.gfm), this.options.breaks
              ? (e.inline = q.breaks)
              : (e.inline = q.gfm)), (this.tokenizer.rules = e);
    }
    (t.lex = function (e, n) {
      return new t (n).lex (e);
    }), (t.lexInline = function (e, n) {
      return new t (n).inlineTokens (e);
    });
    var n, r, i = t.prototype;
    return (i.lex = function (e) {
      return (e = e
        .replace (/\r\n|\r/g, '\n')
        .replace (/\t/g, '    ')), this.blockTokens (
        e,
        this.tokens,
        !0
      ), this.inline (this.tokens), this.tokens;
    }), (i.blockTokens = function (e, t, n) {
      var r, i, s, a;
      for (
        void 0 === t && (t = []), void 0 === n && (n = !0), this.options
          .pedantic && (e = e.replace (/^ +$/gm, ''));
        e;

      )
        if ((r = this.tokenizer.space (e)))
          (e = e.substring (r.raw.length)), r.type && t.push (r);
        else if ((r = this.tokenizer.code (e, t)))
          (e = e.substring (r.raw.length)), r.type
            ? t.push (r)
            : (((a = t[t.length - 1]).raw += '\n' + r.raw), (a.text +=
                '\n' + r.text));
        else if ((r = this.tokenizer.fences (e)))
          (e = e.substring (r.raw.length)), t.push (r);
        else if ((r = this.tokenizer.heading (e)))
          (e = e.substring (r.raw.length)), t.push (r);
        else if ((r = this.tokenizer.nptable (e)))
          (e = e.substring (r.raw.length)), t.push (r);
        else if ((r = this.tokenizer.hr (e)))
          (e = e.substring (r.raw.length)), t.push (r);
        else if ((r = this.tokenizer.blockquote (e)))
          (e = e.substring (r.raw.length)), (r.tokens = this.blockTokens (
            r.text,
            [],
            n
          )), t.push (r);
        else if ((r = this.tokenizer.list (e))) {
          for (
            (e = e.substring (r.raw.length)), (s = r.items.length), (i = 0);
            i < s;
            i++
          )
            r.items[i].tokens = this.blockTokens (r.items[i].text, [], !1);
          t.push (r);
        } else if ((r = this.tokenizer.html (e)))
          (e = e.substring (r.raw.length)), t.push (r);
        else if (n && (r = this.tokenizer.def (e)))
          (e = e.substring (r.raw.length)), this.tokens.links[r.tag] ||
            (this.tokens.links[r.tag] = {href: r.href, title: r.title});
        else if ((r = this.tokenizer.table (e)))
          (e = e.substring (r.raw.length)), t.push (r);
        else if ((r = this.tokenizer.lheading (e)))
          (e = e.substring (r.raw.length)), t.push (r);
        else if (n && (r = this.tokenizer.paragraph (e)))
          (e = e.substring (r.raw.length)), t.push (r);
        else if ((r = this.tokenizer.text (e, t)))
          (e = e.substring (r.raw.length)), r.type
            ? t.push (r)
            : (((a = t[t.length - 1]).raw += '\n' + r.raw), (a.text +=
                '\n' + r.text));
        else if (e) {
          var l = 'Infinite loop on byte: ' + e.charCodeAt (0);
          if (this.options.silent) {
            console.error (l);
            break;
          }
          throw new Error (l);
        }
      return t;
    }), (i.inline = function (e) {
      for (var t, n, r, i, s, a = e.length, l = 0; l < a; l++)
        switch ((s = e[l]).type) {
          case 'paragraph':
          case 'text':
          case 'heading':
            (s.tokens = []), this.inlineTokens (s.text, s.tokens);
            break;
          case 'table':
            for (
              (s.tokens = {header: [], cells: []}), (r =
                s.header.length), (t = 0);
              t < r;
              t++
            )
              (s.tokens.header[t] = []), this.inlineTokens (
                s.header[t],
                s.tokens.header[t]
              );
            for ((r = s.cells.length), (t = 0); t < r; t++)
              for (
                (i = s.cells[t]), (s.tokens.cells[t] = []), (n = 0);
                n < i.length;
                n++
              )
                (s.tokens.cells[t][n] = []), this.inlineTokens (
                  i[n],
                  s.tokens.cells[t][n]
                );
            break;
          case 'blockquote':
            this.inline (s.tokens);
            break;
          case 'list':
            for ((r = s.items.length), (t = 0); t < r; t++)
              this.inline (s.items[t].tokens);
        }
      return e;
    }), (i.inlineTokens = function (e, t, n, r) {
      var i;
      void 0 === t && (t = []), void 0 === n && (n = !1), void 0 === r &&
        (r = !1);
      var s, a, l, o = e;
      if (this.tokens.links) {
        var c = Object.keys (this.tokens.links);
        if (0 < c.length)
          for (
            ;
            null != (s = this.tokenizer.rules.inline.reflinkSearch.exec (o));

          )
            c.includes (s[0].slice (s[0].lastIndexOf ('[') + 1, -1)) &&
              (o =
                o.slice (0, s.index) +
                '[' +
                N ('a', s[0].length - 2) +
                ']' +
                o.slice (this.tokenizer.rules.inline.reflinkSearch.lastIndex));
      }
      for (; null != (s = this.tokenizer.rules.inline.blockSkip.exec (o)); )
        o =
          o.slice (0, s.index) +
          '[' +
          N ('a', s[0].length - 2) +
          ']' +
          o.slice (this.tokenizer.rules.inline.blockSkip.lastIndex);
      for (; e; )
        if ((a || (l = ''), (a = !1), (i = this.tokenizer.escape (e))))
          (e = e.substring (i.raw.length)), t.push (i);
        else if ((i = this.tokenizer.tag (e, n, r)))
          (e = e.substring (i.raw.length)), (n = i.inLink), (r =
            i.inRawBlock), t.push (i);
        else if ((i = this.tokenizer.link (e)))
          (e = e.substring (i.raw.length)), 'link' === i.type &&
            (i.tokens = this.inlineTokens (i.text, [], !0, r)), t.push (i);
        else if ((i = this.tokenizer.reflink (e, this.tokens.links)))
          (e = e.substring (i.raw.length)), 'link' === i.type &&
            (i.tokens = this.inlineTokens (i.text, [], !0, r)), t.push (i);
        else if ((i = this.tokenizer.strong (e, o, l)))
          (e = e.substring (i.raw.length)), (i.tokens = this.inlineTokens (
            i.text,
            [],
            n,
            r
          )), t.push (i);
        else if ((i = this.tokenizer.em (e, o, l)))
          (e = e.substring (i.raw.length)), (i.tokens = this.inlineTokens (
            i.text,
            [],
            n,
            r
          )), t.push (i);
        else if ((i = this.tokenizer.codespan (e)))
          (e = e.substring (i.raw.length)), t.push (i);
        else if ((i = this.tokenizer.br (e)))
          (e = e.substring (i.raw.length)), t.push (i);
        else if ((i = this.tokenizer.del (e)))
          (e = e.substring (i.raw.length)), (i.tokens = this.inlineTokens (
            i.text,
            [],
            n,
            r
          )), t.push (i);
        else if ((i = this.tokenizer.autolink (e, P)))
          (e = e.substring (i.raw.length)), t.push (i);
        else if (n || !(i = this.tokenizer.url (e, P))) {
          if ((i = this.tokenizer.inlineText (e, r, H)))
            (e = e.substring (i.raw.length)), (l = i.raw.slice (
              -1
            )), (a = !0), t.push (i);
          else if (e) {
            var p = 'Infinite loop on byte: ' + e.charCodeAt (0);
            if (this.options.silent) {
              console.error (p);
              break;
            }
            throw new Error (p);
          }
        } else (e = e.substring (i.raw.length)), t.push (i);
      return t;
    }), (n = t), (r = [
      {
        key: 'rules',
        get: function () {
          return {block: L, inline: q};
        },
      },
    ]), (i = null) && e (n.prototype, i), r && e (n, r), t;
  }) (),
    D = s.defaults,
    Z = function (e, t, n) {
      if (e) {
        var r;
        try {
          r = decodeURIComponent (h (n)).replace (g, '').toLowerCase ();
        } catch (e) {
          return null;
        }
        if (
          0 === r.indexOf ('javascript:') ||
          0 === r.indexOf ('vbscript:') ||
          0 === r.indexOf ('data:')
        )
          return null;
      }
      t &&
        !f.test (n) &&
        (n = (function (e, t) {
          m[' ' + e] ||
            (k.test (e)
              ? (m[' ' + e] = e + '/')
              : (m[' ' + e] = x (e, '/', !0)));
          var n = -1 === (e = m[' ' + e]).indexOf (':');
          return '//' === t.substring (0, 2)
            ? n ? t : e.replace (b, '$1') + t
            : '/' === t.charAt (0) ? (n ? t : e.replace (_, '$1') + t) : e + t;
        }) (t, n));
      try {
        n = encodeURI (n).replace (/%25/g, '%');
      } catch (e) {
        return null;
      }
      return n;
    },
    U = w,
    F = (function () {
      function e (e) {
        this.options = e || D;
      }
      var t = e.prototype;
      return (t.code = function (e, t, n) {
        var r = (t || '').match (/\S*/)[0];
        return !this.options.highlight ||
          (null != (t = this.options.highlight (e, r)) &&
            t !== e &&
            ((n = !0), (e = t))), (e = e.replace (/\n$/, '') + '\n'), r
          ? '<pre><code class="' +
              this.options.langPrefix +
              U (r, !0) +
              '">' +
              (n ? e : U (e, !0)) +
              '</code></pre>\n'
          : '<pre><code>' + (n ? e : U (e, !0)) + '</code></pre>\n';
      }), (t.blockquote = function (e) {
        return "<blockquote class='hpp_blockquote'>\n" + e + '</blockquote>\n';
      }), (t.html = function (e) {
        return e;
      }), (t.heading = function (e, t, n, r) {
        return this.options.headerIds
          ? '<h' +
              t +
              ' id="' +
              this.options.headerPrefix +
              r.slug (n) +
              '">' +
              e +
              '</h' +
              t +
              '>\n'
          : '<h' + t + '>' + e + '</h' + t + '>\n';
      }), (t.hr = function () {
        return this.options.xhtml ? '<hr/>\n' : '<hr>\n';
      }), (t.list = function (e, t, n) {
        var r = t ? 'ol' : 'ul';
        return (
          '<' +
          r +
          (t && 1 !== n ? ' start="' + n + '"' : '') +
          '>\n' +
          e +
          '</' +
          r +
          '>\n'
        );
      }), (t.listitem = function (e) {
        return '<li>' + e + '</li>\n';
      }), (t.checkbox = function (e) {
        return (
          '<input ' +
          (e ? 'checked="" ' : '') +
          'disabled="" type="checkbox"' +
          (this.options.xhtml ? ' /' : '') +
          '> '
        );
      }), (t.paragraph = function (e) {
        return '<p>' + e + '</p>\n';
      }), (t.table = function (e, t) {
        return (
          "<table class='table'>\n<thead>\n" +
          e +
          '</thead>\n' +
          (t = t && '<tbody>' + t + '</tbody>') +
          '</table>\n'
        );
      }), (t.tablerow = function (e) {
        return '<tr>\n' + e + '</tr>\n';
      }), (t.tablecell = function (e, t) {
        var n = t.header ? 'th' : 'td';
        return (
          (t.align ? '<' + n + ' align="' + t.align + '">' : '<' + n + '>') +
          e +
          '</' +
          n +
          '>\n'
        );
      }), (t.strong = function (e) {
        return '<strong>' + e + '</strong>';
      }), (t.em = function (e) {
        return '<em>' + e + '</em>';
      }), (t.codespan = function (e) {
        return '<code>' + e + '</code>';
      }), (t.br = function () {
        return this.options.xhtml ? '<br/>' : '<br>';
      }), (t.del = function (e) {
        return '<del>' + e + '</del>';
      }), (t.link = function (e, t, n) {
        return null === (e = Z (this.options.sanitize, this.options.baseUrl, e))
          ? n
          : ((e = '<a href="' + U (e) + '"'), t &&
              (e += ' title="' + t + '"'), e + '>' + n + '</a>');
      }), (t.image = function (e, t, n) {
        return null === (e = Z (this.options.sanitize, this.options.baseUrl, e))
          ? n
          : ((n =
              '<img referrerpolicy="no-referrer" class="hpp_pre" src="' +
              e +
              '" alt="' +
              n +
              '"'), t && (n += ' title="' + t + '"'), n +
              (this.options.xhtml ? '/>' : '>'));
      }), (t.text = function (e) {
        return e;
      }), e;
    }) (),
    J = (function () {
      function e () {}
      var t = e.prototype;
      return (t.strong = function (e) {
        return e;
      }), (t.em = function (e) {
        return e;
      }), (t.codespan = function (e) {
        return e;
      }), (t.del = function (e) {
        return e;
      }), (t.html = function (e) {
        return e;
      }), (t.text = function (e) {
        return e;
      }), (t.link = function (e, t, n) {
        return '' + n;
      }), (t.image = function (e, t, n) {
        return '' + n;
      }), (t.br = function () {
        return '';
      }), e;
    }) (),
    X = (function () {
      function e () {
        this.seen = {};
      }
      var t = e.prototype;
      return (t.serialize = function (e) {
        return e
          .toLowerCase ()
          .trim ()
          .replace (/<[!\/a-z].*?>/gi, '')
          .replace (
            /[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g,
            ''
          )
          .replace (/\s/g, '-');
      }), (t.getNextSafeSlug = function (e, t) {
        var n = e, r = 0;
        if (this.seen.hasOwnProperty (n))
          for (
            r = this.seen[e];
            (n = e + '-' + ++r), this.seen.hasOwnProperty (n);

          );
        return t || ((this.seen[e] = r), (this.seen[n] = 0)), n;
      }), (t.slug = function (e, t) {
        void 0 === t && (t = {});
        var n = this.serialize (e);
        return this.getNextSafeSlug (n, t.dryrun);
      }), e;
    }) (),
    G = s.defaults,
    V = y,
    Y = (function () {
      function e (e) {
        (this.options = e || G), (this.options.renderer =
          this.options.renderer ||
          new F ()), (this.renderer = this.options.renderer), (this.renderer.options = this.options), (this.textRenderer = new J ()), (this.slugger = new X ());
      }
      (e.parse = function (t, n) {
        return new e (n).parse (t);
      }), (e.parseInline = function (t, n) {
        return new e (n).parseInline (t);
      });
      var t = e.prototype;
      return (t.parse = function (e, t) {
        void 0 === t && (t = !0);
        for (
          var n,
            r,
            i,
            s,
            a,
            l,
            o,
            c,
            p,
            u,
            h,
            d,
            g,
            f,
            m,
            k = '',
            b = e.length,
            _ = 0;
          _ < b;
          _++
        )
          switch ((c = e[_]).type) {
            case 'space':
              continue;
            case 'hr':
              k += this.renderer.hr ();
              continue;
            case 'heading':
              k += this.renderer.heading (
                this.parseInline (c.tokens),
                c.depth,
                V (this.parseInline (c.tokens, this.textRenderer)),
                this.slugger
              );
              continue;
            case 'code':
              k += this.renderer.code (c.text, c.lang, c.escaped);
              continue;
            case 'table':
              for ((l = p = ''), (i = c.header.length), (n = 0); n < i; n++)
                l += this.renderer.tablecell (
                  this.parseInline (c.tokens.header[n]),
                  {header: !0, align: c.align[n]}
                );
              for (
                (p += this.renderer.tablerow (l)), (o = ''), (i =
                  c.cells.length), (n = 0);
                n < i;
                n++
              ) {
                for (
                  (l = ''), (s = (a = c.tokens.cells[n]).length), (r = 0);
                  r < s;
                  r++
                )
                  l += this.renderer.tablecell (this.parseInline (a[r]), {
                    header: !1,
                    align: c.align[r],
                  });
                o += this.renderer.tablerow (l);
              }
              k += this.renderer.table (p, o);
              continue;
            case 'blockquote':
              (o = this.parse (c.tokens)), (k += this.renderer.blockquote (o));
              continue;
            case 'list':
              for (
                (p = c.ordered), (x = c.start), (u = c.loose), (i =
                  c.items.length), (o = ''), (n = 0);
                n < i;
                n++
              )
                (g = (d = c.items[n]).checked), (f = d.task), (h =
                  ''), d.task &&
                  ((m = this.renderer.checkbox (g)), u
                    ? 0 < d.tokens.length && 'text' === d.tokens[0].type
                        ? ((d.tokens[0].text = m + ' ' + d.tokens[0].text), d
                            .tokens[0].tokens &&
                            0 < d.tokens[0].tokens.length &&
                            'text' === d.tokens[0].tokens[0].type &&
                            (d.tokens[0].tokens[0].text =
                              m + ' ' + d.tokens[0].tokens[0].text))
                        : d.tokens.unshift ({type: 'text', text: m})
                    : (h += m)), (h += this.parse (
                  d.tokens,
                  u
                )), (o += this.renderer.listitem (h, f, g));
              k += this.renderer.list (o, p, x);
              continue;
            case 'html':
              k += this.renderer.html (c.text);
              continue;
            case 'paragraph':
              k += this.renderer.paragraph (this.parseInline (c.tokens));
              continue;
            case 'text':
              for (
                o = c.tokens ? this.parseInline (c.tokens) : c.text;
                _ + 1 < b && 'text' === e[_ + 1].type;

              )
                o +=
                  '\n' +
                  ((c = e[++_]).tokens ? this.parseInline (c.tokens) : c.text);
              k += t ? this.renderer.paragraph (o) : o;
              continue;
            default:
              var x = 'Token with "' + c.type + '" type was not found.';
              if (this.options.silent) return void console.error (x);
              throw new Error (x);
          }
        return k;
      }), (t.parseInline = function (e, t) {
        t = t || this.renderer;
        for (var n, r = '', i = e.length, s = 0; s < i; s++)
          switch ((n = e[s]).type) {
            case 'escape':
              r += t.text (n.text);
              break;
            case 'html':
              r += t.html (n.text);
              break;
            case 'link':
              r += t.link (n.href, n.title, this.parseInline (n.tokens, t));
              break;
            case 'image':
              r += t.image (n.href, n.title, n.text);
              break;
            case 'strong':
              r += t.strong (this.parseInline (n.tokens, t));
              break;
            case 'em':
              r += t.em (this.parseInline (n.tokens, t));
              break;
            case 'codespan':
              r += t.codespan (n.text);
              break;
            case 'br':
              r += t.br ();
              break;
            case 'del':
              r += t.del (this.parseInline (n.tokens, t));
              break;
            case 'text':
              r += t.text (n.text);
              break;
            default:
              var a = 'Token with "' + n.type + '" type was not found.';
              if (this.options.silent) return void console.error (a);
              throw new Error (a);
          }
        return r;
      }), e;
    }) (),
    K = S,
    Q = function (e) {
      e &&
        e.sanitize &&
        !e.silent &&
        console.warn (
          'marked(): sanitize and sanitizer parameters are deprecated since version 0.7.0, should not be used and will be removed in the future. Read more here: https://marked.js.org/#/USING_ADVANCED.md#options'
        );
    },
    W = w,
    ee = ((w = s.getDefaults), s.changeDefaults);
  s = s.defaults;
  function te (e, t, n) {
    if (null == e)
      throw new Error ('marked(): input parameter is undefined or null');
    if ('string' != typeof e)
      throw new Error (
        'marked(): input parameter is of type ' +
          Object.prototype.toString.call (e) +
          ', string expected'
      );
    if (
      ('function' == typeof t && ((n = t), (t = null)), (t = K (
        {},
        te.defaults,
        t || {}
      )), Q (t), n)
    ) {
      var r, i = t.highlight;
      try {
        r = M.lex (e, t);
      } catch (e) {
        return n (e);
      }
      var s = function (e) {
        var s;
        if (!e)
          try {
            s = Y.parse (r, t);
          } catch (s) {
            e = s;
          }
        return (t.highlight = i), e ? n (e) : n (null, s);
      };
      if (!i || i.length < 3) return s ();
      if ((delete t.highlight, !r.length)) return s ();
      var a = 0;
      return te.walkTokens (r, function (e) {
        'code' === e.type &&
          (a++, setTimeout (function () {
            i (e.text, e.lang, function (t, n) {
              return t
                ? s (t)
                : (null != n &&
                    n !== e.text &&
                    ((e.text = n), (e.escaped = !0)), void (0 == --a && s ()));
            });
          }, 0));
      }), void (0 === a && s ());
    }
    try {
      var l = M.lex (e, t);
      return t.walkTokens && te.walkTokens (l, t.walkTokens), Y.parse (l, t);
    } catch (e) {
      if (
        ((e.message +=
          '\nPlease report this to https://github.com/markedjs/marked.'), t.silent)
      )
        return (
          '<p>An error occurred:</p><pre>' + W (e.message + '', !0) + '</pre>'
        );
      throw e;
    }
  }
  return (te.options = te.setOptions = function (e) {
    return K (te.defaults, e), ee (te.defaults), te;
  }), (te.getDefaults = w), (te.defaults = s), (te.use = function (e) {
    var t, n = K ({}, e);
    e.renderer &&
      (function () {
        var t, r = te.defaults.renderer || new F ();
        for (t in e.renderer)
          !(function (t) {
            var n = r[t];
            r[t] = function () {
              for (
                var i = arguments.length, s = new Array (i), a = 0;
                a < i;
                a++
              )
                s[a] = arguments[a];
              var l = e.renderer[t].apply (r, s);
              return !1 === l ? n.apply (r, s) : l;
            };
          }) (t);
        n.renderer = r;
      }) (), e.tokenizer &&
      (function () {
        var t, r = te.defaults.tokenizer || new B ();
        for (t in e.tokenizer)
          !(function (t) {
            var n = r[t];
            r[t] = function () {
              for (
                var i = arguments.length, s = new Array (i), a = 0;
                a < i;
                a++
              )
                s[a] = arguments[a];
              var l = e.tokenizer[t].apply (r, s);
              return !1 === l ? n.apply (r, s) : l;
            };
          }) (t);
        n.tokenizer = r;
      }) (), e.walkTokens &&
      ((t = te.defaults.walkTokens), (n.walkTokens = function (n) {
        e.walkTokens (n), t && t (n);
      })), te.setOptions (n);
  }), (te.walkTokens = function (e, t) {
    for (var r, i = n (e); !(r = i ()).done; ) {
      var s = r.value;
      switch ((t (s), s.type)) {
        case 'table':
          for (var a = n (s.tokens.header); !(l = a ()).done; ) {
            var l = l.value;
            te.walkTokens (l, t);
          }
          for (var o, c = n (s.tokens.cells); !(o = c ()).done; )
            for (var p = n (o.value); !(u = p ()).done; ) {
              var u = u.value;
              te.walkTokens (u, t);
            }
          break;
        case 'list':
          te.walkTokens (s.items, t);
          break;
        default:
          s.tokens && te.walkTokens (s.tokens, t);
      }
    }
  }), (te.parseInline = function (e, t) {
    if (null == e)
      throw new Error (
        'marked.parseInline(): input parameter is undefined or null'
      );
    if ('string' != typeof e)
      throw new Error (
        'marked.parseInline(): input parameter is of type ' +
          Object.prototype.toString.call (e) +
          ', string expected'
      );
    (t = K ({}, te.defaults, t || {})), Q (t);
    try {
      var n = M.lexInline (e, t);
      return t.walkTokens && te.walkTokens (n, t.walkTokens), Y.parseInline (
        n,
        t
      );
    } catch (e) {
      if (
        ((e.message +=
          '\nPlease report this to https://github.com/markedjs/marked.'), t.silent)
      )
        return (
          '<p>An error occurred:</p><pre>' + W (e.message + '', !0) + '</pre>'
        );
      throw e;
    }
  }), (te.Parser = Y), (te.parser = Y.parse), (te.Renderer = F), (te.TextRenderer = J), (te.Lexer = M), (te.lexer = M.lex), (te.Tokenizer = B), (te.Slugger = X), (te.parse = te);
}), (() => {
  class e {
    constructor (e) {
      const t = {
        logo: '<svg t="1612669041308" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2519" width="32" height="32"><path d="M512 512m-511.982387 0a511.982387 511.982387 0 1 0 1023.964774 0 511.982387 511.982387 0 1 0-1023.964774 0Z" fill="#F9C228" p-id="2520"></path><path d="M917.619539 199.639491C761.536154-3.082215 483.485105-56.554248 265.951152 62.930031a531.620502 531.620502 0 0 0-166.598142 387.161472c0 294.430822 238.686756 533.099966 533.099966 533.099966a535.424837 535.424837 0 0 0 101.219951-9.598899 514.289646 514.289646 0 0 0 90.705195-55.973031C1048.393533 745.138768 1090.223598 423.672515 917.619539 199.639491z" fill="#FCDC22" p-id="2521"></path><path d="M972.042656 550.272308c-111.329618 114.904988-252.600757 198.670795-415.482628 260.033299 0 0 55.867355 156.664603 207.829377 101.53698 250.628139-90.846096 207.653251-361.570279 207.653251-361.570279z" fill="#FC9B88" p-id="2522"></path><path d="M522.690884 570.08655a80.119986 64.145304 90 1 0 128.290609 0 80.119986 64.145304 90 1 0-128.290609 0Z" fill="#282828" p-id="2523"></path><path d="M860.519298 429.449467a80.119986 54.881046 90 1 0 109.762092 0 80.119986 54.881046 90 1 0-109.762092 0Z" fill="#282828" p-id="2524"></path><path d="M953.813553 724.584795a261.319023 261.319023 0 0 0-116.014585-59.988717C754.121225 723.616099 659.699759 771.434469 556.560028 810.305607c0 0 55.867355 156.664603 207.829377 101.53698 110.959752-40.209701 164.361335-115.64472 189.424148-187.257792z" fill="#EA0F1A" p-id="2525"></path></svg>',
        container: document.getElementsByClassName ('OwO')[0],
        position: 'down',
        width: '100%',
        maxHeight: '250px',
        api: 'https://api.anotherhome.net/OwO/OwO.json',
      };
      for (let n in t)
        t.hasOwnProperty (n) && !e.hasOwnProperty (n) && (e[n] = t[n]);
      (this.container = e.container), 'up' === e.position &&
        this.container.classList.add ('OwO-up');
      const n = new XMLHttpRequest ();
      (n.onreadystatechange = () => {
        4 === n.readyState &&
          ((n.status >= 200 && n.status < 300) || 304 === n.status
            ? ((this.odata = JSON.parse (n.responseText)), this.init (e))
            : console.log ('OwO data request was unsuccessful: ' + n.status));
      }), n.open ('get', e.api, !0), n.send (null);
    }
    init (e) {
      this.packages = Object.keys (this.odata);
      let t = `\n            <div class="OwO-logo"><span>${e.logo}</span></div>\n            <div class="OwO-body" style="width: ${e.width}">`,
        n = '',
        r = '';
      for (let i = 0; i < this.packages.length; i++) {
        t += `\n                <ul class="OwO-items OwO-items-${this.odata[this.packages[i]].type}" style="max-height: ${parseInt (e.maxHeight) - 53 + 'px'};">`;
        let s = this.odata[this.packages[i]].container;
        for (let e = 0; e < s.length; e++) {
          r = /src=[\'\"]?([^\'\"]*)[\'\"]?/.exec (s[e].icon);
          try {
            (r =
              r[1]), (n = `<img src="" data-src="${r}" class="hpp_emo_${this.packages[i]}">`);
          } catch (t) {
            n = s[e].icon;
          }
          t += `\n                    <li class="OwO-item" title="${s[e].text}">${n}</li>`;
        }
        t += '\n                </ul>';
      }
      t +=
        '\n                <div class="OwO-bar">\n                    <ul class="OwO-packages">';
      for (let e = 0; e < this.packages.length; e++)
        t += `\n                        <li><span>${this.packages[e]}</span></li>`;
      (t +=
        '\n                    </ul>\n                </div>\n            </div>\n            '), (this.container.innerHTML = t), (this.logo = this.container.getElementsByClassName (
        'OwO-logo'
      )[0]), this.logo.addEventListener ('click', () => {
        this.toggle ();
      });
      let i = '';
      this.container
        .getElementsByClassName ('OwO-body')[0]
        .addEventListener ('click', e => {
          let t = null;
          if (
            (e.target.classList.contains ('OwO-item')
              ? (t = e.target)
              : e.target.parentNode.classList.contains ('OwO-item') &&
                  (t = e.target.parentNode), t)
          ) {
            i = /src=[\'\"]?([^\'\"]*)[\'\"]?/.exec (t.innerHTML);
            try {
              (i = i[1]), (n = `![](${i})`);
            } catch (e) {
              (n = t.innerHTML), console.log (n + 'ERROR');
            }
            hpp_add_mark (n);
          }
        }), (this.packagesEle = this.container.getElementsByClassName (
        'OwO-packages'
      )[0]);
      for (let e = 0; e < this.packagesEle.children.length; e++)
        (t => {
          this.packagesEle.children[e].addEventListener ('click', () => {
            this.tab (t);
          });
        }) (e);
      this.tab (0);
    }
    toggle () {
      this.container.classList.contains ('OwO-open')
        ? this.container.classList.remove ('OwO-open')
        : this.container.classList.add ('OwO-open');
    }
    tab (e) {
      const t = this.container.getElementsByClassName ('OwO-items-show')[0];
      t &&
        t.classList.remove (
          'OwO-items-show'
        ), this.container
        .getElementsByClassName ('OwO-items')[e]
        .classList.add ('OwO-items-show');
      const n = this.container.getElementsByClassName ('OwO-package-active')[0];
      $ (`.hpp_emo_${this.packages[e]}`).Lazy (), n &&
        n.classList.remove (
          'OwO-package-active'
        ), this.packagesEle
        .getElementsByTagName ('li')[e]
        .classList.add ('OwO-package-active');
    }
  }
  'undefined' != typeof module && void 0 !== module.exports
    ? (module.exports = e)
    : (window.OwO = e);
}) ();
var getFileContent = function (e, t) {
  if (e.files && e.files.length > 0 && e.files[0].size > 0) {
    var n = e.files[0];
    if (window.FileReader) {
      var r = new FileReader ();
      (r.onloadend = function (e) {
        e.target.readyState == FileReader.DONE && t (e.target.result);
      }), r.readAsText (n, 'UTF-8');
    }
  }
};
function hpp_md_editor({ele: e, data_name: t, owo: n, backuptime: r}) {
  new Notyf ();
  null == e && (console.log ('ERROR:No ID'), (e = 'edit')), null == t &&
    (console.log ('ERROR:No data_name'), (t = 'hpp_editor')), null == n &&
    (console.log ('ERROR:No owo'), (n =
      'https://cdn.jsdelivr.net/gh/ChenYFan/CDN@master/assets/list.json')), (document.getElementById (
    e
  ).innerHTML = `\n<div class="black2">\n\t<button onclick="hpp_start_or_stop_backup()" class="btn btn-primary"><i class="fa fa-clock-o fa-2x"></i></button> \n    <button onclick="$('#input').click();" class="btn btn-primary"><i class="fa fa-photo fa-2x"></i></button>\n    <button onclick="$('#upload_md').click();" class="btn btn-primary"><i class="fa fa-file fa-2x"></i></button>\n    <button onclick="hpp_preview('${e}','${t}')" id="hpp_eye_${e}" class="btn btn-primary"><i class="fa fa-eye fa-2x"></i></button>						<button type="submit" class="btn btn-normal pull-right" onclick="javascript:hpp_upload_draft()">发布艹稿</button>
                        <button type="submit" class="btn btn-primary pull-right" onclick="javascript:hpp_upload_md()">发布文件</button>\n\t\n</div>   \n<textarea style="border:0;border-radius:5px;background-color:#90939920;width: 100%;min-height: 400px;padding: 10px;resize: none;display:block" id="text_${e}"></textarea><div style="border:0;border-radius:5px;background-color:#90939920;max-width: 100%;min-height: 70%;padding: 10px;resize: none;display: none;" id="div_${e}" class="hpp_pre_div"></div><div class="OwO"></div>`), (document.getElementById (
    `text_${e}`
  ).value = localStorage.getItem (`hpp_${t}_backup`)), setInterval (
    `hpp_backup('${t}','${e}')`,
    r
  );
  new OwO ({
    container: document.getElementsByClassName ('OwO')[0],
    api: hpp_OwO,
    position: 'down',
    maxHeight: '250px',
  });
}
function hpp_add_mark (e) {
  document.getElementById ('text_hpp_doc_editor').value += e;
}
function hpp_replace_mark (e) {
  document.getElementById ('text_hpp_doc_editor').value = e;
}
function hpp_backup (e, t) {
  if ('1' == localStorage.getItem ('hpp_editor_autobackup')) {
    var n = new Notyf ();
    localStorage.setItem (
      `hpp_${e}_backup`,
      document.getElementById (`text_${t}`).value
    ), localStorage.setItem (
      `hpp_${e}_choo_backup`,
      document.getElementById ('choo').value
    ), n.success ('自动备份成功！');
  } else
    '2' == localStorage.getItem ('hpp_editor_autobackup') &&
      (localStorage.setItem (
        `hpp_${e}_backup`,
        document.getElementById (`text_${t}`).value
      ), localStorage.setItem (
        `hpp_${e}_choo_backup`,
        document.getElementById ('choo').value
      ));
}
function hpp_start_or_stop_backup () {
  var e = new Notyf ();
  '2' == localStorage.getItem ('hpp_editor_autobackup')
    ? (localStorage.setItem ('hpp_editor_autobackup', '0'), e.error (
        '嘿！你关闭了自动备份！注意数据安全！'
      ))
    : '0' == localStorage.getItem ('hpp_editor_autobackup')
        ? (localStorage.setItem ('hpp_editor_autobackup', '1'), e.success (
            '自动备份打开成功！自动备份提醒打开成功！'
          ))
        : (localStorage.setItem ('hpp_editor_autobackup', '2'), e.success (
            '自动备份打开成功！自动备份提醒关闭成功！'
          ));
}
function hpp_upload_photo () {}
function hpp_upload_file () {}
function hpp_preview (e, t) {
  'none' != document.getElementById (`text_${e}`).style.display
    ? ((document.getElementById (`div_${e}`).style.display =
        'block'), (document.getElementById (`text_${e}`).style.display =
        'block'), (document.getElementById (`hpp_eye_${e}`).innerHTML =
        '<i class="fa fa-eye-slash fa-2x"></i>'), (document.getElementById (
        `div_${e}`
      ).innerHTML =
        '正在渲染markdown文本中...'), (document.getElementById (
        `div_${e}`
      ).innerHTML = marked (document.getElementById (`text_${e}`).value)))
    : ((document.getElementById (`div_${e}`).style.display =
        'none'), (document.getElementById (`text_${e}`).style.display =
        'block'), (document.getElementById (`hpp_eye_${e}`).innerHTML =
        '<i class="fa fa-eye fa-2x"></i>'));
}
function base64Encode (e) {
  var t;
  return (t = encodeURIComponent (e)), (t = unescape (t)), (t = window.btoa (
    t
  ));
}
function hpp_get_list () {
  function e (e) {
    var t = 0;
    for (var n in e)
      t++;
    return t;
  }
  function t (e) {
    for (n = 0; n < e.length - 1; n++)
      for (i = n + 1; i < e.length; i++)
        e[n] == e[i] && e.splice (i--, 1);
    console.log (e);
  }
  let r = [],
    s = '',
    a = hpp_githubdocpath.substr (1, hpp_githubdocpath.length - 1),
    l = hpp_githubdocdraftpath.substr (1, hpp_githubdocdraftpath.length - 1);
  var o = ajaxObject ();
  o.open ('post', '/hpp/admin/api/getlist', !0), o.setRequestHeader (
    'Content-Type',
    'text/plain'
  ), (o.onreadystatechange = function () {
    if (4 == o.readyState)
      if (200 == o.status) {
        for (var n = 0; n < e (JSON.parse (o.responseText)); n++)
          try {
            (s = JSON.parse (o.responseText)[n].path), (s = s.split (
              a
            )[1]), null != s && r.push (s);
          } catch (e) {}
        var i = ajaxObject ();
        i.open (
          'post',
          '/hpp/admin/api/get_draftlist',
          !0
        ), i.setRequestHeader (
          'Content-Type',
          'text/plain'
        ), (i.onreadystatechange = function () {
          if (4 == i.readyState)
            if (200 == i.status) {
              for (var n = 0; n < e (JSON.parse (i.responseText)); n++)
                try {
                  (s = JSON.parse (i.responseText)[n].path), (s = s.split (
                    l
                  )[1]), null != s && r.push (s);
                } catch (e) {}
              t (r);
              for (var a = 0; a < e (r); a++)
                document.getElementById (
                  'choo'
                ).innerHTML += `<option>${r[a]}</option>`;
              $ ('#choo').editableSelect (), (choo.placeholder =
                '选择一个文件或直接新增一个文件'), (choo.value = localStorage.getItem (
                'hpp_hpp_docs_choo_backup'
              ));
            } else sweetAlert ('糟糕', '拉取文件失败！', 'error');
        }), i.send (new Date ().getTime ());
      } else sweetAlert ('糟糕', '拉取文件失败！', 'error');
  }), o.send (new Date ().getTime ());
}
document.getElementById ('upload_md').onchange = function () {
  var e = document.getElementById ('text_hpp_doc_editor');
  getFileContent (this, function (t) {
    e.value = t;
  });
};
var input = document.getElementById ('input');
function copyToClip (content, message) {
  var aux = document.createElement ('input');
  aux.setAttribute ('value', content), document.body.appendChild (
    aux
  ), aux.select (), document.execCommand ('copy'), document.body.removeChild (
    aux
  ), null == message ? sweetAlert ('复制成功') : eval (message);
}
function readFile () {
  swal ({
    title: '\n上传中...',
    icon: 'https://cdn.jsdelivr.net/gh/HexoPlusPlus/CDN@db63c79/loading.gif',
    text: '\n',
    button: !1,
    closeModal: !1,
  });
  var e = this.files[0],
    t = e.name.substring (e.name.lastIndexOf ('.') + 1),
    n = new FileReader ();
  n.readAsDataURL (e), (n.onloadstart = function (
    e
  ) {}), (n.onprogress = function (e) {}), (n.onload = function (e) {
    hpp_uploadimage (this.result.substring (this.result.indexOf (',') + 1), t);
  }), (n.onloadend = function (e) {});
}
function hpp_uploadimage (e, t) {
  var n = ajaxObject ();
  n.open ('post', '/hpp/admin/api/addimage/' + t, !0), n.setRequestHeader (
    'Content-Type',
    'text/plain'
  ), (n.onreadystatechange = function () {
    4 == n.readyState &&
      (200 == n.status
        ? (swal.close (), hpp_add_mark (`![](${n.responseText})`), sweetAlert (
            '成功',
            '图片已更新',
            'success'
          ))
        : 201 == n.status
            ? (swal.close (), hpp_add_mark (
                `![](${n.responseText})`
              ), sweetAlert ('成功', '图片已上传', 'success'))
            : (swal.close (), sweetAlert ('糟糕', '上传图片失败!', 'error')));
  }), n.send (e);
}
function hpp_upload_md () {
  swal ({
    title: '\n上传中...',
    icon: 'https://cdn.jsdelivr.net/gh/HexoPlusPlus/CDN@db63c79/loading.gif',
    text: '\n',
    button: !1,
    closeModal: !1,
  });
  var e = ajaxObject ();
  e.open (
    'post',
    '/hpp/admin/api/adddoc/' + choo.value,
    !0
  ), e.setRequestHeader (
    'Content-Type',
    'text/plain'
  ), (e.onreadystatechange = function () {
    4 == e.readyState &&
      (200 == e.status
        ? (swal.close (), sweetAlert (
            '成功',
            '文件已上传',
            'success'
          ), localStorage.setItem (
            'hpp_hpp_docs_backup',
            ''
          ), localStorage.setItem ('hpp_hpp_docs_choo_backup', ''))
        : 201 == e.status
            ? (swal.close (), sweetAlert ('成功', '文件已新建', 'success'))
            : (swal.close (), sweetAlert ('糟糕', '上传文件失败!', 'error')));
  }), e.send (
    base64Encode (document.getElementById ('text_hpp_doc_editor').value)
  );
}
function hpp_get_md () {
  swal ({
    title: '\n加载中...',
    icon: 'https://cdn.jsdelivr.net/gh/HexoPlusPlus/CDN@db63c79/loading.gif',
    text: '\n',
    button: !1,
    closeModal: !1,
  }), (document.getElementById ('div_hpp_doc_editor').style.display =
    'none'), (document.getElementById ('text_hpp_doc_editor').style.display =
    'block'), (document.getElementById ('hpp_eye_hpp_doc_editor').innerHTML =
    '<i class="fa fa-eye fa-2x"></i>'), hpp_replace_mark (
    '# 正在获取' + choo.value + '中'
  );
  var e = ajaxObject ();
  e.open (
    'post',
    '/hpp/admin/api/getdoc/' + choo.value,
    !0
  ), e.setRequestHeader (
    'Content-Type',
    'text/plain'
  ), (e.onreadystatechange = function () {
    4 == e.readyState &&
      (200 == e.status
        ? (swal.close (), hpp_replace_mark (e.responseText))
        : (swal.close (), hpp_get_scaffolds ()));
  }), e.send (new Date ().getTime ());
}
function hpp_get_scaffolds () {
  swal ({
    title: '\n加载模板中...',
    icon: 'https://cdn.jsdelivr.net/gh/HexoPlusPlus/CDN@db63c79/loading.gif',
    text: '\n',
    button: !1,
    closeModal: !1,
  }), (document.getElementById ('div_hpp_doc_editor').style.display =
    'none'), (document.getElementById ('text_hpp_doc_editor').style.display =
    'block'), (document.getElementById ('hpp_eye_hpp_doc_editor').innerHTML =
    '<i class="fa fa-eye fa-2x"></i>'), hpp_replace_mark ('# 正在获取模板文件中');
  var e = ajaxObject ();
  e.open ('post', '/hpp/admin/api/getscaffolds', !0), e.setRequestHeader (
    'Content-Type',
    'text/plain'
  ), (e.onreadystatechange = function () {
    4 == e.readyState &&
      (200 == e.status
        ? (swal.close (), hpp_replace_mark (e.responseText))
        : (swal.close (), sweetAlert (
            '糟糕',
            '拉取模板文件失败，请检查其是否存在',
            'error'
          ), hpp_replace_mark ('# 拉取模板文件失败，请检查其是否存在')));
  }), e.send (new Date ().getTime ());
}
function hpp_upload_draft () {
  swal ({
    title: '\n上传中...',
    icon: 'https://cdn.jsdelivr.net/gh/HexoPlusPlus/CDN@db63c79/loading.gif',
    text: '\n',
    button: !1,
    closeModal: !1,
  });
  var e = ajaxObject ();
  e.open (
    'post',
    '/hpp/admin/api/adddraft/' + choo.value,
    !0
  ), e.setRequestHeader (
    'Content-Type',
    'text/plain'
  ), (e.onreadystatechange = function () {
    4 == e.readyState &&
      (200 == e.status
        ? (swal.close (), sweetAlert (
            '成功',
            '文件已上传',
            'success'
          ), localStorage.setItem (
            'hpp_hpp_docs_backup',
            ''
          ), localStorage.setItem ('hpp_hpp_docs_choo_backup', ''))
        : 201 == e.status
            ? (swal.close (), sweetAlert ('成功', '文件已新建', 'success'))
            : (swal.close (), sweetAlert ('糟糕', '上传文件失败!', 'error')));
  }), e.send (
    base64Encode (document.getElementById ('text_hpp_doc_editor').value)
  );
}
function hpp_get_draft () {
  swal ({
    title: '\n加载中...',
    icon: 'https://cdn.jsdelivr.net/gh/HexoPlusPlus/CDN@db63c79/loading.gif',
    text: '\n',
    button: !1,
    closeModal: !1,
  }), (document.getElementById ('div_hpp_doc_editor').style.display =
    'none'), (document.getElementById ('text_hpp_doc_editor').style.display =
    'block'), (document.getElementById ('hpp_eye_hpp_doc_editor').innerHTML =
    '<i class="fa fa-eye fa-2x"></i>'), hpp_replace_mark (
    '正在获取' + choo.value + '中'
  );
  var e = ajaxObject ();
  e.open (
    'post',
    '/hpp/admin/api/getdraft/' + choo.value,
    !0
  ), e.setRequestHeader (
    'Content-Type',
    'text/plain'
  ), (e.onreadystatechange = function () {
    4 == e.readyState &&
      (200 == e.status
        ? (swal.close (), hpp_replace_mark (e.responseText))
        : (swal.close (), hpp_get_scaffolds ()));
  }), e.send (new Date ().getTime ());
}
function hpp_del_index () {
  swal ({
    title: '\n加载中...',
    icon: 'https://cdn.jsdelivr.net/gh/HexoPlusPlus/CDN@db63c79/loading.gif',
    text: '\n',
    button: !1,
    closeModal: !1,
  });
  var e = ajaxObject ();
  e.open ('post', '/hpp/admin/api/index_del', !0), e.setRequestHeader (
    'Content-Type',
    'text/plain'
  ), (e.onreadystatechange = function () {
    4 == e.readyState &&
      (200 == e.status
        ? (swal.close (), sweetAlert ('成功', '索引已清除！', 'success'))
        : (swal.close (), sweetAlert ('糟糕', '索引清除失败！', 'error')));
  }), e.send (new Date ().getTime ());
}
input.addEventListener (
  'change',
  readFile,
  !1
), hpp_get_list (), marked.setOptions ({
  renderer: new marked.Renderer (),
  gfm: !0,
  tables: !0,
  breaks: !1,
  pedantic: !1,
  sanitize: !1,
  smartLists: !0,
  smartypants: !1,
  highlight: function (e) {
    return hljs.highlightAuto (e).value;
  },
}), new hpp_md_editor ({
  ele: 'hpp_doc_editor',
  data_name: 'hpp_docs',
  owo: hpp_OwO,
  backuptime: 6e4,
});
