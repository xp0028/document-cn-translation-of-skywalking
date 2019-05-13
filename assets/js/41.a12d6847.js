(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{304:function(t,e,r){"use strict";r.r(e);var n=r(0),i=Object(n.a)({},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"content"},[t._m(0),t._v(" "),r("p",[t._v("追踪数据协议描述了数据在 SkyWalking 代理/sniffer 和后端之间进行传输的格式。")]),t._v(" "),t._m(1),t._v(" "),r("p",[t._v("追踪数据协议在 "),r("a",{attrs:{href:"https://github.com/apache/skywalking-data-collect-protocol",target:"_blank",rel:"noopener noreferrer"}},[t._v("gRPC 格式"),r("OutboundLink")],1),t._v(" 中定义和提供。")]),t._v(" "),r("p",[t._v("对于每个代理/SDK，在报告任何追踪/指标数据之前，它都需要注册服务 ID 和服务实例 ID。")]),t._v(" "),t._m(2),t._v(" "),r("p",[r("a",{attrs:{href:"https://github.com/apache/skywalking-data-collect-protocol/tree/master/register/Register.proto",target:"_blank",rel:"noopener noreferrer"}},[t._v("注册服务"),r("OutboundLink")],1),t._v("掌管了所有注册方法。\n第一步我们需要调用 "),r("code",[t._v("doServiceRegister")]),t._v("，然后调用"),r("code",[t._v("doServiceInstanceRegister")]),t._v(".")]),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),r("p",[t._v("一旦你有了追踪 ID 和追踪实例 ID，你就可以发送追踪数据和指标数据了。目前：")]),t._v(" "),t._m(7),t._v(" "),r("p",[t._v("对于追踪格式来说，有以下几点需要注意：")]),t._v(" "),t._m(8),t._v(" "),t._m(9),t._v(" "),r("ol",{attrs:{start:"3"}},[r("li",[r("p",[t._v("Span 父信息称为引用（Reference），其被包含在 Span 之中。Reference 运载了许多的字段，\n包括但不限于追踪 ID（trace id），父段 ID（parent segment id），span id。其他还包括"),r("strong",[t._v("入口服务实例 ID（entry service instance id）")]),t._v("，\n"),r("strong",[t._v("父服务实例 ID（parent service instance id）")]),t._v("，"),r("strong",[t._v("入口端点（entry endpoint）")]),t._v("，"),t._m(10),t._v("。\n参考"),r("router-link",{attrs:{to:"./Skywalking-Cross-Process-Propagation-Headers-Protocol-v2.html"}},[t._v("跨进程传播的头部协议 v2")]),t._v("可以了解到如何获取全部的这些字段。")],1)]),t._v(" "),t._m(11)]),t._v(" "),t._m(12),t._v(" "),t._m(13)])},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"追踪数据协议-v2-版本"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#追踪数据协议-v2-版本","aria-hidden":"true"}},[this._v("#")]),this._v(" 追踪数据协议 v2 版本")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"摘要"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#摘要","aria-hidden":"true"}},[this._v("#")]),this._v(" 摘要")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"第-1-步-注册"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#第-1-步-注册","aria-hidden":"true"}},[this._v("#")]),this._v(" 第 1 步. 注册")])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ol",[r("li",[t._v("首先，调用 "),r("code",[t._v("doServiceRegister")]),t._v("，输入是"),r("strong",[t._v("服务名称（serviceName）")]),t._v("，这可以定义为任何 UTF-8 编码的字符串。\n返回的结果是一个键值对（KeyValue），"),r("strong",[t._v("服务名称（serviceName）")]),t._v(" 作为键，"),r("strong",[t._v("服务 ID（service id）")]),t._v(" 作为值。支持批量注册。")]),t._v(" "),r("li",[t._v("拥有了"),r("strong",[t._v("服务 ID")]),t._v("之后，使用 "),r("code",[t._v("doServiceInstanceRegister")]),t._v(" 来进行实例注册。输入是"),r("strong",[t._v("服务 ID（service id）")]),t._v("，"),r("strong",[t._v("全剧唯一标识（UUID）")]),t._v("，\n和"),r("strong",[t._v("注册时间（register time）")]),t._v(". 在整个分布式环境下，UUID 都应该保持唯一。返回的值仍然是一个键值对，键为"),r("strong",[t._v("UUID")]),t._v("，值为"),r("strong",[t._v("服务实例 ID（service instance id）")]),t._v("。\n同样支持批量操作。")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("对于注册来说，最重要的是要注意这个过程应该是在后台异步进行的，所以返回的值可能是 "),e("strong",[this._v("null")]),this._v("。在大多数情况下，\n你需要设置一个定时器来循环地调用这些服务，直到你得到一个非空的返回值。建议循环周期为 10 秒。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("该操作还支持批量进行，尽管对于大多数语言的代理/SDK 来说，没有什么批量注册的使用场景。\n我们建议在返回结果中提取服务名 "),e("code",[this._v("serviceName")]),this._v(" 和唯一键 "),e("code",[this._v("UUID")]),this._v("，对比你所期望获得的服务和 UUID，避免混淆同一个批次中的不同注册结果。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"第-2-步-发送追踪数据和指标"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#第-2-步-发送追踪数据和指标","aria-hidden":"true"}},[this._v("#")]),this._v(" 第 2 步. 发送追踪数据和指标")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ol",[e("li",[this._v("对于 SkyWalking 原生追踪数据格式，我们有 "),e("code",[this._v("TraceSegmentReportService#collect")]),this._v(" 方法")]),this._v(" "),e("li",[this._v("对于 SkyWalking 原生 JVM 格式，我们有 "),e("code",[this._v("JVMMetricReportService#collect")]),this._v(" 方法")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ol",[e("li",[this._v("段（Segment）是 SkyWalking 中的概念，它需要包括在某个操作系统进程（根据语言不同，通常也是编程语言中的一个线程）中的每个请求的所有 span。")]),this._v(" "),e("li",[this._v("Span 有 3 中不同的组。")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[e("p",[this._v("EntrySpan\nEntrySpan 代表一个服务提供者，也是服务端的一个端点。对于一个 APM 系统来说，我们更关注应用服务。所以几乎所有服务和消息队列消费者都是 EntrySpan。")])]),this._v(" "),e("li",[e("p",[this._v("LocalSpan\nLocalSpan 代表一个普通的 Java 方法，与远程服务无关，也不是一个消息队列的生产者/消费者，也不是一个服务（如 HTTP 服务）提供者和消费者。")])]),this._v(" "),e("li",[e("p",[this._v("ExitSpan\nExitSpan 代表服务的一个客户端或一个消息队列的生产者，与 SkyWalking 早期的 "),e("code",[this._v("LeafSpan")]),this._v(" 类似。\n如：通过 JDBC 访问数据库时，从 Redis/Memcached 读取数据都被归类到 ExitSpan 中。")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("strong",[this._v("父端点（parent endpoint）"),e("strong",[this._v("和")]),this._v("网络地址（network address）")])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("p",[this._v("上行数据中的 "),e("code",[this._v("segment")]),this._v(" 是 TraceSegmentObject 的二进制字节流。")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"第-3-步-保活"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#第-3-步-保活","aria-hidden":"true"}},[this._v("#")]),this._v(" 第 3 步. 保活")])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("p",[r("code",[t._v("ServiceInstancePing#doPing")]),t._v(" 方法必须每隔几秒钟就被调用一次，使得后端知道这个服务实例还存活着。\n此方法需要 "),r("code",[t._v("doServiceInstanceRegister")]),t._v(" 中使用的"),r("strong",[t._v("服务实例 ID（service instance id）")]),t._v(" 和 "),r("strong",[t._v("UUID")]),t._v("。")])}],!1,null,null,null);e.default=i.exports}}]);