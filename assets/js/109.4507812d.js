(window.webpackJsonp=window.webpackJsonp||[]).push([[109],{208:function(t,s,n){"use strict";n.r(s);var a=n(0),e=Object(a.a)({},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"content"},[t._m(0),t._v(" "),n("p",[t._v("从 "),n("router-link",{attrs:{to:"./../concepts-and-designs/oal.html#scope"}},[t._v("OAL 域介绍")]),t._v("一文中你应该已经了解到什么是域了.\n现在, 如果你想做更多扩展, 你需要深入了解什么是 "),n("strong",[t._v("源")]),t._v(".")],1),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._m(4),t._v(" "),t._m(5),t._v(" "),t._m(6),n("ol",{attrs:{start:"3"}},[t._m(7),t._v(" "),n("li",[n("p",[t._v("方法 "),n("code",[t._v("Source#getEntityId()")]),t._v(" 返回代表和域相关的唯一实体的值.\n比如说, 在这个 "),n("code",[t._v("Service")]),t._v(" 域中, id 就是 Service id, 代表某个特定的服务, 如 "),n("strong",[t._v("订单服务")]),t._v(".\n该值在 "),n("router-link",{attrs:{to:"./../concepts-and-designs/oal.html#group"}},[t._v("OAL 分组机制")]),t._v(" 中使用.")],1)]),t._v(" "),t._m(8),t._v(" "),t._m(9),t._v(" "),t._m(10)]),t._v(" "),n("hr"),t._v(" "),n("p",[t._v("做完以上步骤之后, 你就可以构建一个接收器了, 通常你需要:")]),t._v(" "),t._m(11)])},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"为新指标提供源和域"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#为新指标提供源和域","aria-hidden":"true"}},[this._v("#")]),this._v(" 为新指标提供源和域")])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("p",[n("strong",[t._v("源")]),t._v(" 和 "),n("strong",[t._v("域")]),t._v(" 是相互绑定的概念. "),n("strong",[t._v("域")]),t._v(" 声明了唯一标志(id)和名称(name), "),n("strong",[t._v("源")]),t._v(" 声明了属性.\n请按照以下步骤来新建源和域.")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ol",[s("li",[this._v("在 OAP 核心模块中, 提供了 "),s("strong",[this._v("SourceReceiver")]),this._v(" 内部服务.")])])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"language-java extra-class"},[n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("interface")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SourceReceiver")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Service")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("receive")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Source")]),t._v(" source"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ol",{attrs:{start:"2"}},[s("li",[this._v("所有分析数据必须是 "),s("strong",[this._v("org.apache.skywalking.oap.server.core.source.Source")]),this._v(" 的子类,\n并带有 "),s("code",[this._v("@SourceType")]),this._v(" 注解, 且在 "),s("code",[this._v("org.apache.skywalking")]),this._v(" 包下,\n此时它就可以被 OAL 脚本和 OAP 内核支持了.")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("比如对于已经存在的源, "),s("strong",[this._v("Service")]),this._v(".")])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"language-java extra-class"},[n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",[n("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@ScopeDeclaration")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("id "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" SERVICE"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" name "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Service"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Service")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Source")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Override")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("scope")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("DefaultScopeDefine")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("SERVICE"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Override")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("getEntityId")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("valueOf")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("id"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Getter")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Setter")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" id"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Getter")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Setter")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" name"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Getter")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Setter")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" serviceInstanceName"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Getter")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Setter")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" endpointName"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Getter")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Setter")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" latency"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Getter")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Setter")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("boolean")]),t._v(" status"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Getter")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Setter")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" responseCode"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Getter")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Setter")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("RequestType")]),t._v(" type"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("li",[n("p",[n("code",[t._v("Source#scope()")]),t._v(" 方法返回了一个 ID, 这并非一个随意的值, 这个 ID 也必须在 "),n("code",[t._v("@ScopeDeclaration")]),t._v(" 注解中声明.\n对于同一个源, "),n("code",[t._v("@ScopeDeclaration")]),t._v(" 和 "),n("code",[t._v("scope()")]),t._v(" 方法中的 ID 必须一致.")])])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("li",[n("p",[t._v("将域名称添加到 "),n("code",[t._v("OALLexer.g4")]),t._v(" 语法定义文件中作为关键字. "),n("code",[t._v("OALLexer.g4")]),t._v(" 文件位于 "),n("code",[t._v("generate-tool-grammar")]),t._v(" 模块下的 "),n("code",[t._v("antlr4")]),t._v(" 文件夹下.")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("li",[s("p",[this._v("将域名称添加到 "),s("code",[this._v("OALParser.g4")]),this._v(" 解析器定义文件中作为关键字, 该文件与 "),s("code",[this._v("OALLexer.g4")]),this._v(" 位于同一级文件夹.")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("li",[s("p",[this._v("在文件夹 "),s("code",[this._v("generated-analysis/src/main/resources")]),this._v(" 下的 "),s("code",[this._v("generator-scope-meta.yml")]),this._v(" 文件中为新的域设置默认字段.\n如果你想知道为什么需要这些字段, 你必须先了解所有既有的查询. 还有一种简单的方法就是, 仿照已经存在的域.\n举个例子, 如果你想添加一个新的指标: 服务实例的连接数, 可以仿照已经现有的 "),s("code",[this._v("ServiceInstance")]),this._v(".")])])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ol",[n("li",[t._v("获取指标的原始数据")]),t._v(" "),n("li",[t._v("构建源, 发送到 "),n("code",[t._v("SourceReceiver")])]),t._v(" "),n("li",[t._v("编写完整的 OAL 脚本")]),t._v(" "),n("li",[t._v("重新打包项目")])])}],!1,null,null,null);s.default=e.exports}}]);