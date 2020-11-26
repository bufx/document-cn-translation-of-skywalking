(window.webpackJsonp=window.webpackJsonp||[]).push([[346],{223:function(t,e,s){"use strict";s.r(e);var a=s(0),n=Object(a.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content"},[t._m(0),t._v(" "),s("p",[t._v("接收器是 SkyWalking 后台中的一个概念。 全模块所有负责从其它监控系统接收遥测或追踪数据的模块都被称为 "),s("strong",[t._v("Receiver")]),t._v(" 。如果你正在寻找拉模式，可以参考 "),s("router-link",{attrs:{to:"./backend-fetcher.html"}},[t._v("fetcher 文档")])],1),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._m(5),t._v(" "),t._m(6),t._v(" "),t._m(7),s("p",[t._v("注意，如果添加这些设置，请确保它们与核心模块不同，因为核心的 GRPC/HTTP 服务器仍用于 UI 和 OAP 内部通信。")]),t._v(" "),t._m(8),t._v(" "),s("p",[t._v("Zipkin receiver 可以在两种不同的模式下工作。")]),t._v(" "),t._m(9),t._v(" "),s("p",[t._v("追踪模式就是，skywalking 的 OAP 表现得像个 zipkin 收集器，通过 HTTP 服务完全支持 Zipkin 的 v1/v2 格式， 还在 Skywalking 用户界面提供了持久化和查询。但它不会从中分析度量标准。在大多数情况下，当度量来自 service mesh 时，我建议你可以使用这个特性。")]),t._v(" "),s("p",[t._v("注意，在这种模式下，Zipkinr receiver 需要激活 "),s("code",[t._v("zipkin-elasticsearch")]),t._v(" 的存储实现。阅读"),s("router-link",{attrs:{to:"./backend-storage.html#elasticsearch-6-with-zipkin-trace-extension"}},[t._v("这里")]),t._v("了解如何激活。")],1),t._v(" "),s("p",[t._v("使用以下配置来激活")]),t._v(" "),t._m(10),t._m(11),t._v(" "),s("p",[t._v("通过 HTTP 服务接收 Zipkin 的 v1/v2 格式。将 trace 转换为 skywalking 原生的格式，并像 skywalking trace 那样进行分析。这个特性尚不能在生产环境使用，这是因为 zipkin tag/endpoint 不可预测，我们无法确保它符合生产环境要求。")]),t._v(" "),t._m(12),t._v(" "),t._m(13),t._m(14),t._v(" "),t._m(15),t._v(" "),t._m(16),t._v(" "),s("p",[t._v("Receiver 需要激活 "),s("code",[t._v("jaeger-elasticsearch")]),t._v(" 的存储实。阅读 "),s("router-link",{attrs:{to:"./backend-storage.html#elasticsearch-6-with-jaeger-trace-extension"}},[t._v("此处")]),t._v(" 了解如何激活.")],1),t._v(" "),s("p",[t._v("同时，你需要 "),s("a",{attrs:{href:"https://www.jaegertracing.io/docs/1.11/architecture/#agent",target:"_blank",rel:"noopener noreferrer"}},[t._v("jaeger agent"),s("OutboundLink")],1),t._v(" 批量发送 span 至 SkyWalking oap server。 详细参考 "),s("a",{attrs:{href:"https://www.jaegertracing.io/docs/1.11/architecture/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Jaeger Architecture"),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("激活 Jaeger receiver")]),t._v(" "),t._m(17),t._m(18)])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"选择接收器"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#选择接收器"}},[this._v("#")]),this._v(" 选择接收器")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("我们有以下 receiver，Apache distribution 中提供了 "),e("code",[this._v("default")]),this._v(" 实现者。")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ol",[s("li",[s("strong",[t._v("receiver-trace")]),t._v(". gRPC 和 HTTPRestful 服务，接收 SkyWalking 格式的追踪数据。")]),t._v(" "),s("li",[s("strong",[t._v("receiver-register")]),t._v(". gRPC 和 HTTPRestful 服务，提供服务、服务实例、端点的注册。")]),t._v(" "),s("li",[s("strong",[t._v("service-mesh")]),t._v(". gRPC 服务，接收来自网格探针的数据。")]),t._v(" "),s("li",[s("strong",[t._v("receiver-jvm")]),t._v(". gRPC 服务，接收 JVM 度量数据。")]),t._v(" "),s("li",[s("strong",[t._v("istio-telemetry")]),t._v(". Istio 遥测数据来自 Istio 官方旁路适配器, 这个接收器匹配自身的 gRPC 服务.")]),t._v(" "),s("li",[s("strong",[t._v("envoy-metric")]),t._v(". Envoy "),s("code",[t._v("metrics_service")]),t._v(" 和 "),s("code",[t._v("ALS(access log service)")]),t._v(" 由它提供支持。 OAL 脚本支持所有仪表类型度量。")]),t._v(" "),s("li",[s("strong",[t._v("receiver-profile")]),t._v(". gRPC 服务，接收分析任务状态和快照报告。")]),t._v(" "),s("li",[s("strong",[t._v("receiver_zipkin")]),t._v(". 参考 "),s("a",{attrs:{href:"#zipkin-receiver"}},[t._v("详细")]),t._v(".")]),t._v(" "),s("li",[s("strong",[t._v("receiver_jaeger")]),t._v(". 参考 "),s("a",{attrs:{href:"#jaeger-receiver"}},[t._v("详细")]),t._v(".")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("这些 receiver 的示例已默认设置在 "),e("code",[this._v("application.yml")]),this._v(" 文件中，在此也列一下：")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-yaml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("receiver-register")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("default")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("receiver-trace")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("default")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("sampleRate")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" $"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("SW_TRACE_SAMPLE_RATE"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1000")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 采样率精度是 1/10000. 10000 代表 100% 采样.")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("slowDBAccessThreshold")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" $"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("SW_SLOW_DB_THRESHOLD"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("default"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("200")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("mongodb"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 慢数据库访问临界值，单位毫秒.")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("receiver-jvm")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("default")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("service-mesh")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("default")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("istio-telemetry")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("default")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("envoy-metric")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("default")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("receiver_zipkin")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("default")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("host")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 0.0.0.0\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("port")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("9411")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("contextPath")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" /\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("receiver-profile")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("default")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"提供给-receiver-的-grpc-http-服务"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#提供给-receiver-的-grpc-http-服务"}},[this._v("#")]),this._v(" 提供给 receiver 的 gRPC/HTTP 服务")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("默认情况下，所有 GRPC/HTTP 服务都应在 "),e("code",[this._v("core/gRPC")]),this._v(" 和 "),e("code",[this._v("core/rest")]),this._v(" 处提供。\n但是 "),e("code",[this._v("receiver-sharing-server")]),this._v(" 模块提供了一种方式可使所有的 receiver 提供不同的 ip:port ，当然这需要你明确地设置。")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-yaml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("receiver-sharing-server")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("default")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("restHost")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" $"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("SW_SHARING_SERVER_REST_HOST"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("0.0.0.0"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("restPort")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" $"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("SW_SHARING_SERVER_REST_PORT"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("12800")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("restContextPath")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" $"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("SW_SHARING_SERVER_REST_CONTEXT_PATH"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("/"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("gRPCHost")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" $"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("SW_SHARING_SERVER_GRPC_HOST"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("0.0.0.0"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("gRPCPort")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" $"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("SW_SHARING_SERVER_GRPC_PORT"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("11800")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"zipkin-receiver"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#zipkin-receiver"}},[this._v("#")]),this._v(" Zipkin receiver")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"_1-tracing-mode-default"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-tracing-mode-default"}},[this._v("#")]),this._v(" 1. Tracing mode(default)")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-yaml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("receiver_zipkin")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("default")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("host")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" $"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("SW_RECEIVER_ZIPKIN_HOST"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("0.0.0.0"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("port")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" $"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("SW_RECEIVER_ZIPKIN_PORT"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("9411")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("contextPath")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" $"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("SW_RECEIVER_ZIPKIN_CONTEXT_PATH"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("/"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"_2-analysis-mode-非生产环境准备"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-analysis-mode-非生产环境准备"}},[this._v("#")]),this._v(" 2. Analysis mode(非生产环境准备)")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("激活 "),e("code",[this._v("analysis mode")]),this._v(", 你需要设置 "),e("code",[this._v("needAnalysis")]),this._v(" 配置。")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-yaml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("receiver_zipkin")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("default")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("host")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" $"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("SW_RECEIVER_ZIPKIN_HOST"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("0.0.0.0"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("port")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" $"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("SW_RECEIVER_ZIPKIN_PORT"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("9411")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("contextPath")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" $"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("SW_RECEIVER_ZIPKIN_CONTEXT_PATH"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("/"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("needAnalysis")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("true")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("注意，Zipkin receiver 只提供在 "),e("code",[this._v("apache-skywalking-apm-x.y.z.tar.gz")]),this._v(" tar 中。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"jaeger-receiver"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#jaeger-receiver"}},[this._v("#")]),this._v(" Jaeger receiver")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Jaeger receiver 目前只在 "),e("code",[this._v("Tracing Mode(跟踪模式)")]),this._v(" 下工作，不支持分析。Jaeger receiver 提供额外的 gRPC host/port，如果没有就使用 sharing-server host/port， 还没有就使用 core gRPC host/port。")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-yaml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("receiver_jaeger")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("default")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("gRPCHost")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" $"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("SW_RECEIVER_JAEGER_HOST"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("0.0.0.0"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("gRPCPort")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" $"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("SW_RECEIVER_JAEGER_PORT"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("14250")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("注意，Jaeger receiver 只提供在 "),e("code",[this._v("apache-skywalking-apm-x.y.z.tar.gz")]),this._v(" tar 中。")])}],!1,null,null,null);e.default=n.exports}}]);