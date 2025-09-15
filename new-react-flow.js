"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [1235],
  {
    3320: (e, t, o) => {
      o.d(t, { ou: () => r });
      let r = {
        PRIMARY: "#3954cf",
        SECONDARY: "#5a7cff",
        TERTIARY: "#8da4ff",
        BLUE_50: "#f0f4ff",
        BLUE_100: "#e0e9ff",
        BLUE_200: "#c7d6fe",
        BLUE_300: "#a5b8fc",
        BLUE_400: "#8da4ff",
        BLUE_500: "#5a7cff",
        BLUE_600: "#3954cf",
        BLUE_700: "#2d42a6",
        BLUE_800: "#243684",
        BLUE_900: "#1e2d6a",
        GRAY_50: "#f9fafb",
        GRAY_100: "#f3f4f6",
        GRAY_200: "#e5e7eb",
        GRAY_300: "#d1d5db",
        GRAY_400: "#9ca3af",
        GRAY_500: "#6b7280",
        GRAY_600: "#4b5563",
        GRAY_700: "#374151",
        GRAY_800: "#1f2937",
        GRAY_900: "#111827",
      };
      (r.PRIMARY,
        r.SECONDARY,
        r.TERTIARY,
        r.BLUE_50,
        r.BLUE_100,
        r.BLUE_200,
        r.BLUE_300,
        r.BLUE_400,
        r.BLUE_500,
        r.BLUE_600,
        r.BLUE_700,
        r.BLUE_800,
        r.BLUE_900);
    },
    23427: (e, t, o) => {
      o.d(t, { LandingPageReactFlow: () => w, l: () => v });
      var r = o(79505),
        a = o(36885),
        i = o(36083),
        s = o(62152);
      o(33246);
      var n = o(13128),
        l = o(45795),
        d = o(71573),
        c = o(10851),
        m = o(75202),
        h = o(32934),
        u = o(14540),
        x = o(71541),
        g = o(8371),
        b = o(98006);
      let p = (e) => {
          let { data: t, color: o } = e,
            a = t.layout || "desktop",
            n = t.handleConfig || "middle";
          return "first" === n
            ? "desktop" === a
              ? (0, r.jsx)(i.h7, {
                  type: "source",
                  position: s.yX.Right,
                  id: "right",
                  className: "w-3 h-3 !bg-"
                    .concat(o, "-400 !border-")
                    .concat(o, "-600 !border-2"),
                })
              : (0, r.jsx)(i.h7, {
                  type: "source",
                  position: s.yX.Bottom,
                  id: "bottom",
                  className: "w-3 h-3 !bg-"
                    .concat(o, "-400 !border-")
                    .concat(o, "-600 !border-2"),
                })
            : "last" === n
              ? "desktop" === a
                ? (0, r.jsx)(i.h7, {
                    type: "target",
                    position: s.yX.Left,
                    id: "left",
                    className: "w-3 h-3 !bg-"
                      .concat(o, "-400 !border-")
                      .concat(o, "-600 !border-2"),
                  })
                : (0, r.jsx)(i.h7, {
                    type: "target",
                    position: s.yX.Top,
                    id: "top",
                    className: "w-3 h-3 !bg-"
                      .concat(o, "-400 !border-")
                      .concat(o, "-600 !border-2"),
                  })
              : (0, r.jsxs)(r.Fragment, {
                  children: [
                    (0, r.jsx)(i.h7, {
                      type: "target",
                      position: s.yX.Top,
                      id: "top",
                      className: "w-3 h-3 !bg-"
                        .concat(o, "-400 !border-")
                        .concat(o, "-600 !border-2"),
                    }),
                    (0, r.jsx)(i.h7, {
                      type: "source",
                      position: s.yX.Bottom,
                      id: "bottom",
                      className: "w-3 h-3 !bg-"
                        .concat(o, "-400 !border-")
                        .concat(o, "-600 !border-2"),
                    }),
                    (0, r.jsx)(i.h7, {
                      type: "target",
                      position: s.yX.Left,
                      id: "left",
                      className: "w-3 h-3 !bg-"
                        .concat(o, "-400 !border-")
                        .concat(o, "-600 !border-2"),
                    }),
                    (0, r.jsx)(i.h7, {
                      type: "source",
                      position: s.yX.Right,
                      id: "right",
                      className: "w-3 h-3 !bg-"
                        .concat(o, "-400 !border-")
                        .concat(o, "-600 !border-2"),
                    }),
                  ],
                });
        },
        f = {
          eventNode: (e) => {
            let { data: t, selected: o } = e;
            return (0, r.jsxs)("div", {
              className:
                "\n        relative px-6 py-4 shadow-2xl rounded-xl border-2 transition-all duration-300\n        bg-gradient-to-br from-emerald-900/90 to-emerald-800/90 \n        border-emerald-500/30 backdrop-blur-sm\n        ".concat(
                  o
                    ? "border-emerald-400 shadow-emerald-400/50"
                    : "hover:border-emerald-400/60",
                  "\n        hover:shadow-emerald-500/30 hover:scale-105\n    ",
                ),
              children: [
                (0, r.jsx)(p, { data: t, color: "emerald" }),
                (0, r.jsxs)("div", {
                  className: "flex items-center gap-3",
                  children: [
                    t.icon &&
                      (0, r.jsx)("div", {
                        className:
                          "w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center",
                        children: (0, r.jsx)(t.icon, {
                          className: "w-5 h-5 text-emerald-300",
                        }),
                      }),
                    (0, r.jsxs)("div", {
                      children: [
                        (0, r.jsx)("div", {
                          className: "font-semibold text-emerald-100 text-sm",
                          children: t.label,
                        }),
                        t.description &&
                          (0, r.jsx)("div", {
                            className: "text-xs text-emerald-300/80 mt-1",
                            children: t.description,
                          }),
                      ],
                    }),
                  ],
                }),
              ],
            });
          },
          agentNode: (e) => {
            let { data: t, selected: o } = e;
            return (0, r.jsxs)("div", {
              className:
                "\n        relative px-6 py-4 shadow-2xl rounded-xl border-2 transition-all duration-300\n        bg-gradient-to-br from-purple-900/90 to-indigo-900/90 \n        border-purple-500/30 backdrop-blur-sm\n        ".concat(
                  o
                    ? "border-purple-400 shadow-purple-400/50"
                    : "hover:border-purple-400/60",
                  "\n        hover:shadow-purple-500/30 hover:scale-105\n    ",
                ),
              children: [
                (0, r.jsx)(p, { data: t, color: "purple" }),
                (0, r.jsxs)("div", {
                  className: "flex items-center gap-3",
                  children: [
                    t.icon &&
                      (0, r.jsx)("div", {
                        className:
                          "w-8 h-8 rounded-lg bg-purple-500/20 flex items-center justify-center",
                        children: (0, r.jsx)(t.icon, {
                          className: "w-5 h-5 text-purple-300",
                        }),
                      }),
                    (0, r.jsxs)("div", {
                      children: [
                        (0, r.jsx)("div", {
                          className: "font-semibold text-purple-100 text-sm",
                          children: t.label,
                        }),
                        t.description &&
                          (0, r.jsx)("div", {
                            className: "text-xs text-purple-300/80 mt-1",
                            children: t.description,
                          }),
                      ],
                    }),
                  ],
                }),
                (0, r.jsx)("div", {
                  className:
                    "absolute inset-0 rounded-xl bg-purple-500/10 blur-sm opacity-50",
                }),
              ],
            });
          },
          connectorNode: (e) => {
            let { data: t, selected: o } = e;
            return (0, r.jsxs)("div", {
              className:
                "\n        relative px-6 py-4 shadow-2xl rounded-xl border-2 transition-all duration-300\n        bg-gradient-to-br from-blue-900/90 to-sky-900/90 \n        border-blue-500/30 backdrop-blur-sm\n        ".concat(
                  o
                    ? "border-blue-400 shadow-blue-400/50"
                    : "hover:border-blue-400/60",
                  "\n        hover:shadow-blue-500/30 hover:scale-105\n    ",
                ),
              children: [
                (0, r.jsx)(p, { data: t, color: "blue" }),
                (0, r.jsxs)("div", {
                  className: "flex items-center gap-3",
                  children: [
                    t.icon &&
                      (0, r.jsx)("div", {
                        className:
                          "w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center",
                        children: (0, r.jsx)(t.icon, {
                          className: "w-5 h-5 text-blue-300",
                        }),
                      }),
                    (0, r.jsxs)("div", {
                      children: [
                        (0, r.jsx)("div", {
                          className: "font-semibold text-blue-100 text-sm",
                          children: t.label,
                        }),
                        t.description &&
                          (0, r.jsx)("div", {
                            className: "text-xs text-blue-300/80 mt-1",
                            children: t.description,
                          }),
                      ],
                    }),
                  ],
                }),
              ],
            });
          },
          actionNode: (e) => {
            let { data: t, selected: o } = e;
            return (0, r.jsxs)("div", {
              className:
                "\n        relative px-6 py-4 shadow-2xl rounded-xl border-2 transition-all duration-300\n        bg-gradient-to-br from-pink-900/90 to-rose-900/90 \n        border-pink-500/30 backdrop-blur-sm\n        ".concat(
                  o
                    ? "border-pink-400 shadow-pink-400/50"
                    : "hover:border-pink-400/60",
                  "\n        hover:shadow-pink-500/30 hover:scale-105\n    ",
                ),
              children: [
                (0, r.jsx)(p, { data: t, color: "pink" }),
                (0, r.jsxs)("div", {
                  className: "flex items-center gap-3",
                  children: [
                    t.icon &&
                      (0, r.jsx)("div", {
                        className:
                          "w-8 h-8 rounded-lg bg-pink-500/20 flex items-center justify-center",
                        children: (0, r.jsx)(t.icon, {
                          className: "w-5 h-5 text-pink-300",
                        }),
                      }),
                    (0, r.jsxs)("div", {
                      children: [
                        (0, r.jsx)("div", {
                          className: "font-semibold text-pink-100 text-sm",
                          children: t.label,
                        }),
                        t.description &&
                          (0, r.jsx)("div", {
                            className: "text-xs text-pink-300/80 mt-1",
                            children: t.description,
                          }),
                      ],
                    }),
                  ],
                }),
              ],
            });
          },
          logicNode: (e) => {
            let { data: t, selected: o } = e;
            return (0, r.jsxs)("div", {
              className:
                "\n        relative px-6 py-4 shadow-2xl rounded-xl border-2 transition-all duration-300\n        bg-gradient-to-br from-orange-900/90 to-amber-900/90 \n        border-orange-500/30 backdrop-blur-sm\n        ".concat(
                  o
                    ? "border-orange-400 shadow-orange-400/50"
                    : "hover:border-orange-400/60",
                  "\n        hover:shadow-orange-500/30 hover:scale-105\n    ",
                ),
              children: [
                (0, r.jsx)(p, { data: t, color: "orange" }),
                (0, r.jsxs)("div", {
                  className: "flex items-center gap-3",
                  children: [
                    t.icon &&
                      (0, r.jsx)("div", {
                        className:
                          "w-8 h-8 rounded-lg bg-orange-500/20 flex items-center justify-center",
                        children: (0, r.jsx)(t.icon, {
                          className: "w-5 h-5 text-orange-300",
                        }),
                      }),
                    (0, r.jsxs)("div", {
                      children: [
                        (0, r.jsx)("div", {
                          className: "font-semibold text-orange-100 text-sm",
                          children: t.label,
                        }),
                        t.description &&
                          (0, r.jsx)("div", {
                            className: "text-xs text-orange-300/80 mt-1",
                            children: t.description,
                          }),
                      ],
                    }),
                  ],
                }),
              ],
            });
          },
        },
        y = (e, t) =>
          e.map((e) => {
            let o = t.some((t) => t.target === e.id),
              r = t.some((t) => t.source === e.id),
              a = "middle";
            return (
              !o && r ? (a = "first") : o && !r && (a = "last"),
              { ...e, data: { ...e.data, handleConfig: a } }
            );
          });
      function v(e) {
        let { pageData: t, className: o = "" } = e,
          p = () => (window.innerWidth < 768 ? "mobile" : "desktop"),
          [v, w] = a.useState("desktop");
        a.useEffect(() => {
          let e = () => w(p());
          return (
            w(p()),
            window.addEventListener("resize", e),
            () => window.removeEventListener("resize", e)
          );
        }, []);
        let N = [
            { x: 140, y: 20 },
            { x: 20, y: 160 },
            { x: 260, y: 160 },
            { x: 140, y: 300 },
            { x: 20, y: 440 },
            { x: 260, y: 440 },
            { x: 140, y: 580 },
          ],
          j = (e) =>
            ({
              Mic: n.A,
              Brain: l.A,
              Link: d.A,
              Play: c.A,
              GitBranch: m.A,
              Sparkles: h.A,
              Zap: u.A,
              FileText: x.A,
              Users: g.A,
              Globe: b.A,
            })[e] || u.A,
          k = () => {
            var e;
            if (
              null == t
                ? void 0
                : null === (e = t.video) || void 0 === e
                  ? void 0
                  : e.reactFlow
            ) {
              let e = t.video.reactFlow.nodes.map((e) => ({
                ...e,
                data: { ...e.data, icon: j(e.data.icon), layout: v },
              }));
              ("mobile" === v &&
                e.length <= N.length &&
                (e = e.map((e, t) => ({ ...e, position: N[t] }))),
                (e = y(e, t.video.reactFlow.edges)));
              let o = t.video.reactFlow.edges.map((e) => ({
                ...e,
                ...("mobile" === v
                  ? { sourceHandle: "bottom", targetHandle: "top" }
                  : { sourceHandle: "right", targetHandle: "left" }),
                style: { stroke: "#3b82f6", strokeWidth: 3 },
                animated: !0,
              }));
              return { title: t.video.reactFlow.title, nodes: e, edges: o };
            }
            return {
              title: "AgentDock Pro Workflow",
              nodes: [
                {
                  id: "1",
                  type: "eventNode",
                  position: { x: 100, y: 200 },
                  data: {
                    label: "Trigger",
                    icon: u.A,
                    category: "trigger",
                    layout: v,
                    handleConfig: "first",
                  },
                },
                {
                  id: "2",
                  type: "agentNode",
                  position: { x: 400, y: 200 },
                  data: {
                    label: "AI Agent",
                    icon: l.A,
                    category: "agent",
                    layout: v,
                    handleConfig: "middle",
                  },
                },
                {
                  id: "3",
                  type: "actionNode",
                  position: { x: 700, y: 200 },
                  data: {
                    label: "Execute",
                    icon: c.A,
                    category: "action",
                    layout: v,
                    handleConfig: "last",
                  },
                },
              ],
              edges: [
                {
                  id: "e1-2",
                  source: "1",
                  target: "2",
                  sourceHandle: "right",
                  targetHandle: "left",
                  style: { stroke: "#3b82f6", strokeWidth: 3 },
                  animated: !0,
                },
                {
                  id: "e2-3",
                  source: "2",
                  target: "3",
                  sourceHandle: "right",
                  targetHandle: "left",
                  style: { stroke: "#3b82f6", strokeWidth: 3 },
                  animated: !0,
                },
              ],
            };
          },
          A = k(),
          [C, H, z] = (0, i.ck)(A.nodes),
          [L, E, _] = (0, i.fM)(A.edges);
        a.useEffect(() => {
          let e = k();
          (H(e.nodes), E(e.edges));
        }, [v]);
        let B = (0, a.useCallback)(
          (e) =>
            E((t) =>
              (0, s.rN)(
                {
                  ...e,
                  style: { stroke: "#3b82f6", strokeWidth: 3 },
                  animated: !0,
                },
                t,
              ),
            ),
          [E],
        );
        return (0, r.jsxs)("div", {
          className:
            "w-full h-[550px] rounded-2xl overflow-hidden shadow-2xl border border-slate-700/50 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 ".concat(
              o,
            ),
          children: [
            (0, r.jsxs)("div", {
              className:
                "p-4 border-b border-slate-700/50 bg-slate-900/80 backdrop-blur-sm",
              children: [
                (0, r.jsx)("h3", {
                  className: "text-lg font-semibold text-slate-100",
                  children: A.title,
                }),
                (0, r.jsx)("p", {
                  className: "text-sm text-slate-400",
                  children: "Interactive AgentDock Pro workflow demonstration",
                }),
              ],
            }),
            (0, r.jsx)("div", {
              className: "h-[486px] relative",
              children: (0, r.jsxs)(i.Gc, {
                nodes: C,
                edges: L,
                onNodesChange: z,
                onEdgesChange: _,
                onConnect: B,
                nodeTypes: f,
                connectionMode: s.WZ.Loose,
                fitView: !0,
                fitViewOptions: {
                  padding: "mobile" === v ? 0.2 : 0.1,
                  includeHiddenNodes: !1,
                  minZoom: "mobile" === v ? 0.25 : 0.5,
                  maxZoom: "mobile" === v ? 0.9 : 1.5,
                },
                className: "bg-transparent",
                proOptions: { hideAttribution: !0 },
                children: [
                  (0, r.jsx)(i.H2, {
                    className:
                      "bg-slate-800/90 border-slate-600/50 backdrop-blur-sm [&>button]:!bg-slate-700 [&>button]:!border-slate-600 [&>button]:!text-slate-200 [&>button:hover]:!bg-slate-600 [&>button]:!shadow-lg [&>button]:!transition-all",
                    showInteractive: !1,
                    position: "top-left",
                  }),
                  (0, r.jsx)(i.VS, {
                    color: "rgba(148, 163, 184, 0.1)",
                    gap: 20,
                    size: 1,
                    variant: i._5.Dots,
                  }),
                ],
              }),
            }),
          ],
        });
      }
      function w(e) {
        let { className: t = "" } = e,
          o = () => (window.innerWidth < 768 ? "mobile" : "desktop"),
          [n, x] = a.useState("desktop");
        a.useEffect(() => {
          let e = () => x(o());
          return (
            x(o()),
            window.addEventListener("resize", e),
            () => window.removeEventListener("resize", e)
          );
        }, []);
        let g = () =>
            "mobile" === n
              ? {
                  nodes: [
                    {
                      id: "1",
                      type: "eventNode",
                      position: { x: 140, y: 20 },
                      data: {
                        label: "Any Trigger",
                        description: "API, Webhook, Schedule",
                        icon: u.A,
                        category: "trigger",
                        layout: n,
                        handleConfig: "first",
                      },
                    },
                    {
                      id: "2",
                      type: "agentNode",
                      position: { x: 17, y: 160 },
                      data: {
                        label: "AI Agent",
                        description: "By Frontier AI Models",
                        icon: l.A,
                        category: "agent",
                        layout: n,
                        handleConfig: "middle",
                      },
                    },
                    {
                      id: "3",
                      type: "connectorNode",
                      position: { x: 276, y: 200 },
                      data: {
                        label: "Integrations",
                        description: "1000+ Apps & APIs",
                        icon: d.A,
                        category: "connector",
                        layout: n,
                        handleConfig: "middle",
                      },
                    },
                    {
                      id: "4",
                      type: "logicNode",
                      position: { x: 260, y: 350 },
                      data: {
                        label: "Business Logic",
                        description: "Rules & Conditions",
                        icon: m.A,
                        category: "logic",
                        layout: n,
                        handleConfig: "middle",
                      },
                    },
                    {
                      id: "5",
                      type: "actionNode",
                      position: { x: 150, y: 510 },
                      data: {
                        label: "Execute Action",
                        description: "Automated Results",
                        icon: c.A,
                        category: "action",
                        layout: n,
                        handleConfig: "last",
                      },
                    },
                    {
                      id: "6",
                      type: "agentNode",
                      position: { x: 20, y: 400 },
                      data: {
                        label: "Multi-Agent",
                        description: "Orchestrated AI",
                        icon: h.A,
                        category: "agent",
                        layout: n,
                        handleConfig: "middle",
                      },
                    },
                  ],
                  edges: [
                    {
                      id: "e1-2",
                      source: "1",
                      target: "2",
                      sourceHandle: "bottom",
                      targetHandle: "top",
                      style: { stroke: "#3b82f6", strokeWidth: 3 },
                      animated: !0,
                    },
                    {
                      id: "e1-3",
                      source: "1",
                      target: "3",
                      sourceHandle: "bottom",
                      targetHandle: "top",
                      style: { stroke: "#3b82f6", strokeWidth: 3 },
                      animated: !0,
                    },
                    {
                      id: "e2-4",
                      source: "2",
                      target: "4",
                      sourceHandle: "bottom",
                      targetHandle: "top",
                      style: { stroke: "#3b82f6", strokeWidth: 3 },
                      animated: !0,
                    },
                    {
                      id: "e3-4",
                      source: "3",
                      target: "4",
                      sourceHandle: "bottom",
                      targetHandle: "top",
                      style: { stroke: "#3b82f6", strokeWidth: 3 },
                      animated: !0,
                    },
                    {
                      id: "e4-5",
                      source: "4",
                      target: "5",
                      sourceHandle: "bottom",
                      targetHandle: "top",
                      style: { stroke: "#3b82f6", strokeWidth: 3 },
                      animated: !0,
                    },
                    {
                      id: "e2-6",
                      source: "2",
                      target: "6",
                      sourceHandle: "bottom",
                      targetHandle: "top",
                      style: { stroke: "#3b82f6", strokeWidth: 3 },
                      animated: !0,
                    },
                    {
                      id: "e6-5",
                      source: "6",
                      target: "5",
                      sourceHandle: "bottom",
                      targetHandle: "top",
                      style: { stroke: "#3b82f6", strokeWidth: 3 },
                      animated: !0,
                    },
                  ],
                }
              : {
                  nodes: [
                    {
                      id: "1",
                      type: "eventNode",
                      position: { x: 100, y: 200 },
                      data: {
                        label: "Any Trigger",
                        description: "API, Webhook, Schedule",
                        icon: u.A,
                        category: "trigger",
                        layout: n,
                        handleConfig: "first",
                      },
                    },
                    {
                      id: "2",
                      type: "agentNode",
                      position: { x: 400, y: 110 },
                      data: {
                        label: "AI Agent",
                        description: "By Frontier AI Models",
                        icon: l.A,
                        category: "agent",
                        layout: n,
                        handleConfig: "middle",
                      },
                    },
                    {
                      id: "3",
                      type: "connectorNode",
                      position: { x: 400, y: 350 },
                      data: {
                        label: "Integrations",
                        description: "1000+ Apps & APIs",
                        icon: d.A,
                        category: "connector",
                        layout: n,
                        handleConfig: "middle",
                      },
                    },
                    {
                      id: "4",
                      type: "logicNode",
                      position: { x: 700, y: 330 },
                      data: {
                        label: "Business Logic",
                        description: "Rules & Conditions",
                        icon: m.A,
                        category: "logic",
                        layout: n,
                        handleConfig: "middle",
                      },
                    },
                    {
                      id: "5",
                      type: "actionNode",
                      position: { x: 1e3, y: 200 },
                      data: {
                        label: "Execute Action",
                        description: "Automated Results",
                        icon: c.A,
                        category: "action",
                        layout: n,
                        handleConfig: "last",
                      },
                    },
                    {
                      id: "6",
                      type: "agentNode",
                      position: { x: 700, y: 80 },
                      data: {
                        label: "Multi-Agent",
                        description: "Orchestrated AI",
                        icon: h.A,
                        category: "agent",
                        layout: n,
                        handleConfig: "middle",
                      },
                    },
                  ],
                  edges: [
                    {
                      id: "e1-2",
                      source: "1",
                      target: "2",
                      sourceHandle: "right",
                      targetHandle: "left",
                      style: { stroke: "#3b82f6", strokeWidth: 3 },
                      animated: !0,
                    },
                    {
                      id: "e1-3",
                      source: "1",
                      target: "3",
                      sourceHandle: "right",
                      targetHandle: "left",
                      style: { stroke: "#3b82f6", strokeWidth: 3 },
                      animated: !0,
                    },
                    {
                      id: "e2-4",
                      source: "2",
                      target: "4",
                      sourceHandle: "right",
                      targetHandle: "left",
                      style: { stroke: "#3b82f6", strokeWidth: 3 },
                      animated: !0,
                    },
                    {
                      id: "e3-4",
                      source: "3",
                      target: "4",
                      sourceHandle: "right",
                      targetHandle: "left",
                      style: { stroke: "#3b82f6", strokeWidth: 3 },
                      animated: !0,
                    },
                    {
                      id: "e4-5",
                      source: "4",
                      target: "5",
                      sourceHandle: "right",
                      targetHandle: "left",
                      style: { stroke: "#3b82f6", strokeWidth: 3 },
                      animated: !0,
                    },
                    {
                      id: "e2-6",
                      source: "2",
                      target: "6",
                      sourceHandle: "right",
                      targetHandle: "left",
                      style: { stroke: "#3b82f6", strokeWidth: 3 },
                      animated: !0,
                    },
                    {
                      id: "e6-5",
                      source: "6",
                      target: "5",
                      sourceHandle: "right",
                      targetHandle: "left",
                      style: { stroke: "#3b82f6", strokeWidth: 3 },
                      animated: !0,
                    },
                  ],
                },
          b = g(),
          [p, y, v] = (0, i.ck)(b.nodes),
          [w, N, j] = (0, i.fM)(b.edges);
        a.useEffect(() => {
          let e = g();
          (y(e.nodes), N(e.edges));
        }, [n]);
        let k = (0, a.useCallback)(
          (e) =>
            N((t) =>
              (0, s.rN)(
                {
                  ...e,
                  style: { stroke: "#3b82f6", strokeWidth: 3 },
                  animated: !0,
                },
                t,
              ),
            ),
          [N],
        );
        return (0, r.jsxs)("div", {
          className:
            "w-full h-[550px] rounded-2xl overflow-hidden shadow-2xl border border-slate-700/50 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 ".concat(
              t,
            ),
          children: [
            (0, r.jsx)("div", {
              className:
                "p-4 border-b border-slate-700/50 bg-slate-900/80 backdrop-blur-sm text-center",
              children: (0, r.jsx)("p", {
                className: "text-slate-300 text-lg font-semibold",
                children: "Build, Deploy & Scale AI Agents Visually",
              }),
            }),
            (0, r.jsxs)("div", {
              className: "h-[486px] relative",
              children: [
                (0, r.jsxs)(i.Gc, {
                  nodes: p,
                  edges: w,
                  onNodesChange: v,
                  onEdgesChange: j,
                  onConnect: k,
                  nodeTypes: f,
                  connectionMode: s.WZ.Loose,
                  fitView: !0,
                  fitViewOptions: {
                    padding: 0.2,
                    includeHiddenNodes: !1,
                    minZoom: "mobile" === n ? 0.25 : 0.4,
                    maxZoom: "mobile" === n ? 0.9 : 1.2,
                  },
                  className: "bg-transparent",
                  proOptions: { hideAttribution: !0 },
                  children: [
                    (0, r.jsx)(i.H2, {
                      className:
                        "bg-slate-800/90 border-slate-600/50 backdrop-blur-sm [&>button]:!bg-slate-700 [&>button]:!border-slate-600 [&>button]:!text-slate-200 [&>button:hover]:!bg-slate-600 [&>button]:!shadow-lg [&>button]:!transition-all",
                      showInteractive: !1,
                      position: "top-left",
                    }),
                    (0, r.jsx)(i.VS, {
                      color: "rgba(148, 163, 184, 0.1)",
                      gap: 24,
                      size: 1,
                      variant: i._5.Dots,
                    }),
                  ],
                }),
                (0, r.jsx)("div", {
                  className:
                    "absolute inset-0 pointer-events-none bg-gradient-to-t from-slate-900/20 via-transparent to-transparent",
                }),
              ],
            }),
          ],
        });
      }
    },
    29533: (e, t, o) => {
      o.d(t, { S: () => i });
      var r = o(79505),
        a = o(85912);
      function i(e) {
        let { children: t, shadowColor: o = "black", className: i, ...s } = e,
          n = "string" == typeof t ? t : null;
        if (!n) throw Error("LineShadowText only accepts string content");
        return (0, r.jsx)("span", {
          style: { "--shadow-color": o },
          className: (0, a.cn)(
            "relative z-0 inline-flex",
            "after:absolute after:left-[0.04em] after:top-[0.04em] after:content-[attr(data-text)]",
            "after:bg-[linear-gradient(45deg,transparent_45%,var(--shadow-color)_45%,var(--shadow-color)_55%,transparent_0)]",
            "after:-z-10 after:bg-[length:0.08em_0.08em] after:bg-clip-text after:text-transparent",
            "after:animate-line-shadow",
            i,
          ),
          "data-text": n,
          ...s,
          children: n,
        });
      }
    },
    29952: (e, t, o) => {
      (o.r(t), o.d(t, { HeroVideoSection: () => h }));
      var r = o(79505),
        a = o(36885),
        i = o(85912),
        s = o(10851),
        n = o(61899),
        l = o(21725),
        d = o(38212);
      let c = {
        "from-bottom": {
          initial: { y: "100%", opacity: 0 },
          animate: { y: 0, opacity: 1 },
          exit: { y: "100%", opacity: 0 },
        },
        "from-center": {
          initial: { scale: 0.5, opacity: 0 },
          animate: { scale: 1, opacity: 1 },
          exit: { scale: 0.5, opacity: 0 },
        },
        "from-top": {
          initial: { y: "-100%", opacity: 0 },
          animate: { y: 0, opacity: 1 },
          exit: { y: "-100%", opacity: 0 },
        },
        "from-left": {
          initial: { x: "-100%", opacity: 0 },
          animate: { x: 0, opacity: 1 },
          exit: { x: "-100%", opacity: 0 },
        },
        "from-right": {
          initial: { x: "100%", opacity: 0 },
          animate: { x: 0, opacity: 1 },
          exit: { x: "100%", opacity: 0 },
        },
        fade: {
          initial: { opacity: 0 },
          animate: { opacity: 1 },
          exit: { opacity: 0 },
        },
        "top-in-bottom-out": {
          initial: { y: "-100%", opacity: 0 },
          animate: { y: 0, opacity: 1 },
          exit: { y: "100%", opacity: 0 },
        },
        "left-in-right-out": {
          initial: { x: "-100%", opacity: 0 },
          animate: { x: 0, opacity: 1 },
          exit: { x: "100%", opacity: 0 },
        },
      };
      function m(e) {
        let {
            animationStyle: t = "from-center",
            videoSrc: o,
            thumbnailSrc: m,
            thumbnailAlt: h = "Video thumbnail",
            className: u,
          } = e,
          [x, g] = (0, a.useState)(!1),
          b = c[t];
        return (0, r.jsxs)("div", {
          className: (0, i.cn)("relative", u),
          children: [
            (0, r.jsxs)("div", {
              className: "group relative cursor-pointer",
              onClick: () => g(!0),
              children: [
                m
                  ? (0, r.jsx)("img", {
                      src: m,
                      alt: h,
                      width: 1920,
                      height: 1080,
                      className:
                        "w-full transition-all duration-200 ease-out group-hover:brightness-[0.8] isolate",
                    })
                  : (0, r.jsx)("div", {
                      className:
                        "w-full aspect-video bg-background rounded-2xl",
                    }),
                (0, r.jsx)("div", {
                  className:
                    "absolute isolate inset-0 flex scale-[0.9] items-center justify-center rounded-2xl transition-all duration-200 ease-out group-hover:scale-100",
                  children: (0, r.jsx)("div", {
                    className:
                      "flex size-28 items-center justify-center rounded-full bg-gradient-to-t from-secondary/20 to-[#ACC3F7/15] backdrop-blur-md",
                    children: (0, r.jsx)("div", {
                      className:
                        "relative flex size-20 scale-100 items-center justify-center rounded-full bg-gradient-to-t from-secondary to-white/10 shadow-md transition-all duration-200 ease-out group-hover:scale-[1.2]",
                      children: (0, r.jsx)(s.A, {
                        className:
                          "size-8 scale-100 fill-white text-white transition-transform duration-200 ease-out group-hover:scale-105",
                        style: {
                          filter:
                            "drop-shadow(0 4px 3px rgb(0 0 0 / 0.07)) drop-shadow(0 2px 2px rgb(0 0 0 / 0.06))",
                        },
                      }),
                    }),
                  }),
                }),
              ],
            }),
            (0, r.jsx)(l.N, {
              children:
                x &&
                (0, r.jsx)(d.P.div, {
                  initial: { opacity: 0 },
                  animate: { opacity: 1 },
                  onClick: () => g(!1),
                  exit: { opacity: 0 },
                  className:
                    "fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-md",
                  children: (0, r.jsxs)(d.P.div, {
                    ...b,
                    transition: { type: "spring", damping: 30, stiffness: 300 },
                    className:
                      "relative mx-4 aspect-video w-full max-w-4xl md:mx-0",
                    children: [
                      (0, r.jsx)(d.P.button, {
                        className:
                          "absolute cursor-pointer hover:scale-[98%] transition-all duration-200 ease-out -top-16 right-0 rounded-full bg-neutral-900/50 p-2 text-xl text-white ring-1 backdrop-blur-md dark:bg-neutral-100/50 dark:text-black",
                        onClick: () => g(!1),
                        children: (0, r.jsx)(n.A, { className: "size-5" }),
                      }),
                      (0, r.jsx)("div", {
                        className:
                          "relative isolate z-[1] size-full overflow-hidden rounded-2xl border-2 border-white",
                        children: (0, r.jsx)("iframe", {
                          src: o,
                          className: "size-full",
                          allowFullScreen: !0,
                          allow:
                            "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
                        }),
                      }),
                    ],
                  }),
                }),
            }),
          ],
        });
      }
      function h(e) {
        let {
          videoSrcLight:
            t = "https://www.youtube.com/embed/qh3NGpYRG3I?si=4rb-zSdDkVK9qxxb",
          thumbnailSrcLight: o,
          videoSrcDark:
            a = "https://www.youtube.com/embed/qh3NGpYRG3I?si=4rb-zSdDkVK9qxxb",
          thumbnailSrcDark: i,
          thumbnailAlt: s = "Hero Video",
          customContent: n,
          title: l,
          description: d,
        } = e;
        return (0, r.jsxs)("div", {
          className: "relative px-6 mt-16",
          children: [
            (l || d) &&
              (0, r.jsxs)("div", {
                className: "text-center mb-8",
                children: [
                  l &&
                    (0, r.jsx)("h2", {
                      className:
                        "text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl mb-6",
                      children: l,
                    }),
                  d &&
                    (0, r.jsx)("p", {
                      className:
                        "text-xl text-muted-foreground max-w-3xl mx-auto md:text-2xl font-medium",
                      children: d,
                    }),
                ],
              }),
            n
              ? (0, r.jsx)("div", {
                  className:
                    "relative size-full md:container md:mx-auto md:max-w-12xl",
                  children: n,
                })
              : (0, r.jsxs)("div", {
                  className:
                    "relative size-full shadow-xl rounded-2xl overflow-hidden",
                  children: [
                    (0, r.jsx)(m, {
                      className: "block dark:hidden",
                      animationStyle: "from-center",
                      videoSrc: t,
                      thumbnailSrc: o,
                      thumbnailAlt: s,
                    }),
                    (0, r.jsx)(m, {
                      className: "hidden dark:block",
                      animationStyle: "from-center",
                      videoSrc: a,
                      thumbnailSrc: i,
                      thumbnailAlt: s,
                    }),
                  ],
                }),
          ],
        });
      }
    },
    36125: (e, t, o) => {
      o.d(t, { E: () => s });
      var r = o(79505);
      o(36885);
      var a = o(85912);
      let i = (0, o(96639).F)(
        "inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
        {
          variants: {
            variant: {
              default:
                "border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80",
              secondary:
                "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
              destructive:
                "border-transparent bg-destructive text-destructive-foreground shadow hover:bg-destructive/80",
              outline: "text-foreground",
            },
          },
          defaultVariants: { variant: "default" },
        },
      );
      function s(e) {
        let { className: t, variant: o, ...s } = e;
        return (0, r.jsx)("div", {
          className: (0, a.cn)(i({ variant: o }), t),
          ...s,
        });
      }
      s.displayName = "Badge";
    },
    53371: (e, t, o) => {
      (o.r(t), o.d(t, { CompanyShowcaseSection: () => c }));
      var r = o(79505);
      o(36885);
      var a = o(46188),
        i = o.n(a),
        s = o(3320),
        n = o(85912),
        l = o(29537);
      let d = {
        title: "Built by engineers from",
        companyLogos: [
          {
            id: 1,
            name: "Coinbase",
            logo: (0, r.jsx)(
              function (e) {
                let { className: t = "", height: o = 32, width: a = 178 } = e;
                return (0, r.jsx)("svg", {
                  viewBox: "0 0 1101.64 196.79",
                  xmlns: "http://www.w3.org/2000/svg",
                  className: t,
                  height: o,
                  width: a,
                  children: (0, r.jsx)("path", {
                    d: "M222.34,54.94c-40.02,0-71.29,30.38-71.29,71.05s30.48,70.79,71.29,70.79c40.81,0,71.82-30.64,71.82-71.05 C294.16,85.58,263.68,54.94,222.34,54.94z M222.61,167.47c-22.79,0-39.49-17.7-39.49-41.47c0-24.04,16.43-41.73,39.22-41.73 c23.06,0,39.75,17.96,39.75,41.73S245.4,167.47,222.61,167.47z M302.9,85.85h19.88v108.3h31.8V57.58H302.9V85.85z M71.02,84.26 c16.7,0,29.95,10.3,34.98,25.62h33.66c-6.1-32.75-33.13-54.94-68.37-54.94C31.27,54.94,0,85.32,0,126s30.48,70.79,71.29,70.79 c34.45,0,62.01-22.19,68.11-55.21H106c-4.77,15.32-18.02,25.89-34.72,25.89c-23.06,0-39.22-17.7-39.22-41.47 C32.07,101.96,47.97,84.26,71.02,84.26z M907.12,112.79l-23.32-3.43c-11.13-1.58-19.08-5.28-19.08-14 c0-9.51,10.34-14.26,24.38-14.26c15.37,0,25.18,6.6,27.3,17.43h30.74c-3.45-27.47-24.65-43.58-57.24-43.58 c-33.66,0-55.92,17.17-55.92,41.47c0,23.24,14.58,36.72,43.99,40.94l23.32,3.43c11.4,1.58,17.76,6.08,17.76,14.53 c0,10.83-11.13,15.32-26.5,15.32c-18.82,0-29.42-7.66-31.01-19.28h-31.27c2.92,26.68,23.85,45.43,62.01,45.43 c34.72,0,57.77-15.85,57.77-43.06C950.05,129.43,933.36,116.75,907.12,112.79z M338.68,1.32c-11.66,0-20.41,8.45-20.41,20.07 s8.74,20.07,20.41,20.07c11.66,0,20.41-8.45,20.41-20.07S350.34,1.32,338.68,1.32z M805.36,104.34c0-29.58-18.02-49.39-56.18-49.39 c-36.04,0-56.18,18.23-60.16,46.23h31.54c1.59-10.83,10.07-19.81,28.09-19.81c16.17,0,24.12,7.13,24.12,15.85 c0,11.36-14.58,14.26-32.6,16.11c-24.38,2.64-54.59,11.09-54.59,42.79c0,24.57,18.29,40.41,47.44,40.41 c22.79,0,37.1-9.51,44.26-24.57c1.06,13.47,11.13,22.19,25.18,22.19h18.55v-28.26h-15.64V104.34z M774.09,138.68 c0,18.23-15.9,31.7-35.25,31.7c-11.93,0-22-5.02-22-15.58c0-13.47,16.17-17.17,31.01-18.75c14.31-1.32,22.26-4.49,26.24-10.57 V138.68z M605.28,54.94c-17.76,0-32.6,7.4-43.2,19.81V0h-31.8v194.15h31.27v-17.96c10.6,12.94,25.71,20.6,43.73,20.6 c38.16,0,67.05-30.11,67.05-70.79S642.91,54.94,605.28,54.94z M600.51,167.47c-22.79,0-39.49-17.7-39.49-41.47 s16.96-41.73,39.75-41.73c23.06,0,39.22,17.7,39.22,41.73C639.99,149.77,623.3,167.47,600.51,167.47z M454.22,54.94 c-20.67,0-34.19,8.45-42.14,20.34v-17.7h-31.54v136.56h31.8v-74.22c0-20.87,13.25-35.66,32.86-35.66c18.29,0,29.68,12.94,29.68,31.7 v78.19h31.8v-80.56C506.69,79.24,488.94,54.94,454.22,54.94z M1101.64,121.51c0-39.09-28.62-66.56-67.05-66.56 c-40.81,0-70.76,30.64-70.76,71.05c0,42.53,32.07,70.79,71.29,70.79c33.13,0,59.1-19.55,65.72-47.28h-33.13 c-4.77,12.15-16.43,19.02-32.07,19.02c-20.41,0-35.78-12.68-39.22-34.87h105.21V121.51z M998.28,110.94 c5.04-19.02,19.35-28.26,35.78-28.26c18.02,0,31.8,10.3,34.98,28.26H998.28z",
                    fill: "#0052FF",
                  }),
                });
              },
              {
                className:
                  "text-foreground hover:text-muted-foreground transition-colors duration-200",
                height: 24,
                width: 134,
              },
            ),
          },
          {
            id: 2,
            name: "Udemy",
            logo: (0, r.jsx)(
              function (e) {
                let { className: t = "", height: o = 34, width: a = 91 } = e;
                return (0, r.jsxs)("svg", {
                  viewBox: "0 0 91 34",
                  fill: "none",
                  xmlns: "http://www.w3.org/2000/svg",
                  className: t,
                  height: o,
                  width: a,
                  children: [
                    (0, r.jsx)("path", {
                      d: "M14.05 8.112L7.024 4.056 0 8.112V4.056L7.025 0l7.026 4.056v4.056h-.001z",
                      fill: "#A435F0",
                    }),
                    (0, r.jsx)("path", {
                      d: "M0 11.518h3.68v8.941c0 2.31 1.725 3.436 3.345 3.436 1.634 0 3.346-1.156 3.346-3.467v-8.91h3.68v9.154c0 2.128-.669 3.77-2.007 4.896-1.339 1.125-3.011 1.673-5.05 1.673-2.037 0-3.71-.547-5.017-1.673C.669 24.443 0 22.862 0 20.763v-9.245zM45.866 22.63c-1.114.992-2.383 1.478-3.83 1.478-2.64 0-4.41-1.504-4.61-3.833h11.89s.08-.752.08-1.458c0-2.19-.7-4.015-2.13-5.505-1.398-1.49-3.222-2.22-5.443-2.22-2.341 0-4.258.73-5.779 2.22-1.49 1.49-2.25 3.436-2.25 5.87v.12c0 2.403.76 4.319 2.25 5.749 1.49 1.429 3.467 2.159 5.87 2.159 2.794 0 5.017-1.102 6.685-3.002l-2.733-1.578zm-6.994-7.463c.82-.639 1.825-.973 2.95-.973 1.064 0 1.946.334 2.707 1.004.726.61 1.118 1.359 1.152 2.22H37.52c.118-.89.568-1.64 1.353-2.25zM82.91 29.276C81.417 32.801 79.855 34 77.46 34H75.8v-3.262h1.342c.824 0 1.59-.31 2.32-1.994l.73-1.686-6.296-15.54h3.741l4.471 11.192 4.593-11.192h3.74l-7.53 17.758zM28.377 5.649v7.257c-1.206-1.08-3.082-1.723-4.896-1.723-2.16 0-3.984.76-5.474 2.31-1.46 1.521-2.19 3.406-2.19 5.687 0 2.282.73 4.167 2.19 5.718 1.49 1.521 3.315 2.282 5.474 2.282 2.49 0 4.064-.979 4.896-1.746v1.411h3.65V5.65h-3.65zm-1.095 16.878c-.882.882-2.007 1.339-3.315 1.339-1.308 0-2.372-.457-3.254-1.339-.85-.882-1.277-2.007-1.277-3.345 0-1.339.426-2.464 1.277-3.346.882-.882 1.946-1.338 3.254-1.338s2.433.456 3.315 1.338c.912.882 1.37 2.007 1.37 3.346 0 1.338-.458 2.463-1.37 3.345zM68.222 11.214c-2.772 0-4.213 1.15-5.2 2.258-.395-.753-1.507-2.258-4.105-2.258-2.196 0-3.49 1.11-4.136 1.9V11.52h-3.618v15.327h3.618v-8.82c0-2.068 1.278-3.558 2.98-3.558 1.735 0 2.738 1.308 2.738 3.406v8.971h3.619v-8.82c0-2.098 1.246-3.558 3.04-3.558 1.734 0 2.737 1.308 2.737 3.405v8.972h3.65v-9.488c0-3.996-2.148-6.142-5.323-6.142z",
                      fill: "currentColor",
                    }),
                  ],
                });
              },
              {
                className:
                  "text-foreground hover:text-muted-foreground transition-colors duration-200",
                height: 28,
                width: 75,
              },
            ),
          },
          {
            id: 3,
            name: "500 Global",
            logo: (0, r.jsx)(
              function (e) {
                let { className: t = "", height: o = 32, width: a = 93 } = e;
                return (0, r.jsx)("svg", {
                  viewBox: "0 0 140 48",
                  fill: "none",
                  xmlns: "http://www.w3.org/2000/svg",
                  className: t,
                  height: o,
                  width: a,
                  children: (0, r.jsx)("path", {
                    d: "M72.4125 2.24733C66.6938 0.82043 61.2049 9.79533 58.2116 21.8089C55.2184 33.8227 55.8541 44.3258 61.5733 45.7527C67.2924 47.1796 72.7811 38.2047 75.7743 26.1909C78.7676 14.1773 78.1316 3.67401 72.4125 2.24733ZM90.3811 23.9999C89.7129 37.2548 79.3829 48 65.7827 48C52.1827 48 42.9366 37.2548 43.605 23.9999C44.2733 10.7449 54.6031 0 68.203 0C81.803 0 91.0494 10.7449 90.3811 23.9999ZM121.998 2.24733C116.279 0.82043 110.79 9.79533 107.797 21.8089C104.804 33.8227 105.439 44.3258 111.158 45.7527C116.877 47.1796 122.366 38.2047 125.359 26.1909C128.352 14.1773 127.716 3.67401 121.998 2.24733ZM139.966 23.9999C139.298 37.2548 128.968 48 115.368 48C101.768 48 92.5217 37.2548 93.1899 23.9999C93.8581 10.7449 104.188 0 117.788 0C131.388 0 140.634 10.7449 139.966 23.9999ZM41.2748 31.448C40.9035 42.0931 30.9234 47.8668 20.649 47.8668C11.9436 47.8668 3.81538 43.2084 0 40.3753L4.29233 28.44L4.54827 28.532C11.6068 39.0902 17.6048 46.3621 23.875 45.7962C28.022 45.4219 30.4856 42.8919 30.6605 37.8787C30.9038 30.9051 25.5841 22.2596 5.57021 25.827L5.27079 25.719L14.2799 0.665994H44.4767L40.423 11.9394H12.1322L9.46466 19.358C25.451 11.1408 41.681 19.8091 41.2748 31.448Z",
                    fill: "currentColor",
                  }),
                });
              },
              {
                className:
                  "text-foreground hover:text-muted-foreground transition-colors duration-200",
                height: 28,
                width: 80,
              },
            ),
          },
        ],
        cta: {
          title: "Join our early access program",
          description:
            "Be among the first to experience the future of AI automation.",
          button: {
            text: "Get Early Access",
            href: "/#home",
            style: {
              backgroundColor: s.ou.PRIMARY,
              color: "#ffffff",
              borderColor: s.ou.PRIMARY,
            },
            hoverStyle: {
              backgroundColor: s.ou.BLUE_700,
              borderColor: s.ou.BLUE_700,
            },
          },
        },
      };
      function c(e) {
        let {
          title: t = d.title,
          companyLogos: o = d.companyLogos,
          className: a,
        } = e;
        return (0, r.jsxs)("section", {
          id: "company-showcase",
          className: (0, n.cn)(
            "flex flex-col items-center justify-center gap-10 py-10 pt-10 w-full relative px-6",
            a,
          ),
          children: [
            t &&
              (0, r.jsx)("p", {
                className: "text-muted-foreground font-medium",
                children: t,
              }),
            (0, r.jsx)("div", {
              className:
                "grid w-full max-w-7xl grid-cols-3 overflow-hidden border-y border-border items-center justify-center z-20",
              children: o.map((e) => {
                let t =
                    "group w-full h-28 flex items-center justify-center relative p-4 before:absolute before:-left-1 before:top-0 before:z-10 before:h-screen before:w-px before:bg-border before:content-[''] after:absolute after:-top-1 after:left-0 after:z-10 after:h-px after:w-screen after:bg-border after:content-['']",
                  o = (0, r.jsxs)(r.Fragment, {
                    children: [
                      (0, r.jsx)("div", {
                        className:
                          "transition-all duration-200 [cubic-bezier(0.165,0.84,0.44,1)] translate-y-0 group-hover:-translate-y-4 flex items-center justify-center w-full h-full",
                        children: e.logo,
                      }),
                      e.href &&
                        (0, r.jsx)("div", {
                          className:
                            "absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 translate-y-8 group-hover:translate-y-4 transition-all duration-300 ease-[cubic-bezier(0.165,0.84,0.44,1)]",
                          children: (0, r.jsxs)("span", {
                            className:
                              "flex items-center gap-2 text-sm font-medium",
                            children: [
                              "Learn More ",
                              (0, r.jsx)(l.A, { className: "w-4 h-4" }),
                            ],
                          }),
                        }),
                    ],
                  });
                return e.href
                  ? (0, r.jsx)(
                      i(),
                      { href: e.href, className: t, children: o },
                      e.id,
                    )
                  : (0, r.jsx)("div", { className: t, children: o }, e.id);
              }),
            }),
          ],
        });
      }
    },
    99612: (e, t, o) => {
      o.d(t, { AuroraText: () => a });
      var r = o(79505);
      let a = (0, o(36885).memo)((e) => {
        let {
            children: t,
            className: o = "",
            colors: a = ["#FF0080", "#7928CA", "#0070F3", "#38bdf8"],
            speed: i = 1,
          } = e,
          s = {
            backgroundImage: "linear-gradient(135deg, "
              .concat(a.join(", "), ", ")
              .concat(a[0], ")"),
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            animationDuration: "".concat(10 / i, "s"),
          };
        return (0, r.jsxs)("span", {
          className: "relative inline-block ".concat(o),
          children: [
            (0, r.jsx)("span", { className: "sr-only", children: t }),
            (0, r.jsx)("span", {
              className:
                "relative animate-aurora bg-[length:200%_auto] bg-clip-text text-transparent",
              style: s,
              "aria-hidden": "true",
              children: t,
            }),
          ],
        });
      });
      a.displayName = "AuroraText";
    },
  },
]);
